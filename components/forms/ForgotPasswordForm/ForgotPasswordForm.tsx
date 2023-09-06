import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { askChangePassword, updatePassword } from '@/service/externalApi';
import extractAxiosError from '@/helpers/extractAxiosError';
import notificate from '@/helpers/notificate';

import { emailRegexp } from '@/constants/regexp';

import Input from '@/components/shared/Input/Input';
import PasswordInput from '@/components/shared/PasswordInput/PasswordInput';
import Button from '@/components/shared/Button/Button';
import Spinner from '@/components/shared/Spinner/Spinner';

import Envelope from '@/public/assets/svg/envelope.svg';

import { wix } from '@/public/fonts/fonts';

export interface ForgotPasswordFormInputs {
    email: string;
    password?: string;
}

interface ForgotPasswordFormProps {
    refreshFunc: () => void;
}

export default function ForgotPasswordForm({refreshFunc}: ForgotPasswordFormProps) {
    const [passChangePermission, setPassChangePermission] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const { handleSubmit, control, register, reset, watch, setValue, formState: { errors } } = useForm<ForgotPasswordFormInputs>({ mode: 'onSubmit' });    

    const STORAGE_KEY = 'forgotPasswordForm';

    const isBrowser = typeof window != 'undefined';

    useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
  });
    
  const formSubmit = async (formData: ForgotPasswordFormInputs) => {
      setLoading(true);
      reset();
      try {
          if (!passChangePermission) {
              const { data, status } = await askChangePassword(formData.email);
              if (status === 200) {
                  setPassChangePermission(true);
                  notificate('success', data.message);
                  refreshFunc();
                  setValue('email', data.email);
              }
          } else {
              const { data } = await updatePassword(formData);
              notificate('success', data.message);
              sessionStorage.removeItem(STORAGE_KEY);
              router.replace('/auth/signin');
          }
        } catch (error: any) {
            const axiosError = extractAxiosError(error);
            notificate('error', axiosError.message);
        } finally {
            setLoading(false);
        }
    };

    return (<form className='max-w-[414px] mx-auto flex flex-col gap-y-1' onSubmit={handleSubmit(formSubmit)}>
        <Input label='Email' type='text' Icon={Envelope} register={register('email', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    const regexp = emailRegexp;
                    return regexp.test(value) || 'Please follow format';
                }
            },
        })} error={errors.email?.message} />
        <PasswordInput control={control} styles={passChangePermission ? 'block' : 'hidden'} />
        <Button type='submit' text={`${passChangePermission ? 'Update password' : 'Ask permission'}`} styles={`${wix.className} py-[14px] px-[12px] font-semibold text-white text-lg lg:text-xl`} />
        {loading && <Spinner />}
    </form>);
}