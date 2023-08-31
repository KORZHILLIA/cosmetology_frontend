import { useForm } from 'react-hook-form';

import useAppDispatch from '@/hooks/useAppDispatch';

import { nameRegexp, emailRegexp, passwordRegexp } from '@/constants/regexp';
import { signupNewUser } from '@/redux/auth/auth-operations';

import Input from '@/components/shared/Input/Input';
import Button from '@/components/shared/Button/Button';

import { wix } from '@/public/fonts/fonts';

export interface SignupFormInputs {
    name: string;
    email: string;
    password: string;
}

export default function SignupForm() {

    const dispatch = useAppDispatch();

    const { handleSubmit, register, reset, formState: { errors } } = useForm<SignupFormInputs>({ mode: 'onSubmit' });    
    
    const formSubmit = async (formData: SignupFormInputs) => {
        dispatch(signupNewUser(formData));
        reset();
    };

    return (<form className='max-w-[414px] mx-auto flex flex-col gap-y-1' onSubmit={handleSubmit(formSubmit)}>
        <Input label='Name' type='text' register={register('name', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    return nameRegexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.name?.message} />
        <Input label='Email' type='text' register={register('email', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    return emailRegexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.email?.message} />
        <Input label='Password' type='password' register={register('password', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    return passwordRegexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.password?.message} />
        <Button type='submit' text='Sign up' styles={`${wix.className} py-[14px] px-[12px] font-semibold text-white text-lg lg:text-xl`} />
    </form>);
}