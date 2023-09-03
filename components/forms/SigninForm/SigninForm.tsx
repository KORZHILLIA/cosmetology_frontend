import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import decodeString from '@/helpers/decodeSring';

import { emailRegexp } from '@/constants/regexp';
import { signinUser } from '@/redux/auth/auth-operations';
import { getAuth } from '@/redux/auth/auth-selectors';

import Input from '@/components/shared/Input/Input';
import Checkbox from '@/components/shared/Checkbox/Checkbox';
import Button from '@/components/shared/Button/Button';
import Spinner from '@/components/shared/Spinner/Spinner';

import Envelope from '@/public/assets/svg/envelope.svg';
import Lock from '@/public/assets/svg/lock.svg';

import { wix } from '@/public/fonts/fonts';

export interface SigninFormInputs {
    email: string;
    password: string;
    isRemember: boolean;
}

export default function SigninForm() {

    const dispatch = useAppDispatch();

    const {loading} = useAppSelector(getAuth);

    const { handleSubmit, register, reset, watch, setValue, formState: { errors } } = useForm<SigninFormInputs>({ mode: 'onSubmit' });    

    const STORAGE_KEY = 'signinForm';

    const isBrowser = typeof window != 'undefined';

    useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
  });
    
    const formSubmit = async (formData: SigninFormInputs) => {
        dispatch(signinUser(formData));
        reset();
        sessionStorage.removeItem(STORAGE_KEY);
    };

    const router = useRouter();

    useEffect(() => {
        if (router.query.userEmail) {
            const emailValue = decodeString(router.query.userEmail as string);
            setValue('email', emailValue);
           router.replace('/auth/signin', undefined, {shallow: true} );
        }
    }, [router]);

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
        <Input label='Password' type='password' Icon={Lock} isEye register={register('password', {
            required: 'Required',
        })} error={errors.password?.message} />
        <Checkbox label='Remember me' register={register('isRemember')} styles='mb-2' />
        <Button type='submit' text='Sign in' styles={`${wix.className} py-[14px] px-[12px] font-semibold text-white text-lg lg:text-xl`} />
        {loading && <Spinner />}
    </form>);
}