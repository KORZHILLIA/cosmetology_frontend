import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';

import { nameRegexp, emailRegexp, passwordRegexp } from '@/constants/regexp';
import { signupNewUser } from '@/redux/auth/auth-operations';
import { getAuth } from '@/redux/auth/auth-selectors';

import Input from '@/components/shared/Input/Input';
import PasswordInput from './PasswordInput/PasswordInput';
import Button from '@/components/shared/Button/Button';
import Spinner from '@/components/shared/Spinner/Spinner';

import User from '@/public/assets/svg/user.svg';
import Envelope from '@/public/assets/svg/envelope.svg';
import Lock from '@/public/assets/svg/lock.svg';

import { wix } from '@/public/fonts/fonts';

export interface SignupFormInputs {
    name: string;
    email: string;
    password: string;
}

export default function SignupForm() {

    const dispatch = useAppDispatch();

    const { loading } = useAppSelector(getAuth);

    const { handleSubmit, register, watch, setValue, reset, control, formState: { errors } } = useForm<SignupFormInputs>({ mode: 'onSubmit' });
    
    const STORAGE_KEY = 'signupForm';

    const isBrowser = typeof window != 'undefined';

    useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
  });
    
    const formSubmit = async (formData: SignupFormInputs) => {
        dispatch(signupNewUser(formData));
        reset();
        sessionStorage.removeItem(STORAGE_KEY);
    };

    return (<form className='max-w-[414px] mx-auto flex flex-col gap-y-1' onSubmit={handleSubmit(formSubmit)}>
        <Input label='Name' type='text' Icon={User} register={register('name', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    return nameRegexp.test(value) || 'Please follow format';
                },
            },
        })} error={errors.name?.message} />
        <Input label='Email' type='text' Icon={Envelope} register={register('email', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    return emailRegexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.email?.message} />
        <PasswordInput control={control} />
        {/* <Input label='Password' type='password' Icon={Lock} isEye register={register('password', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    return passwordRegexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.password?.message} /> */}
        <Button type='submit' text='Sign up' styles={`${wix.className} py-[14px] px-[12px] font-semibold text-white text-lg lg:text-xl`} />
        {loading && <Spinner />}
    </form>);
}