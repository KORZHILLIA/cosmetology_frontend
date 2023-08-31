import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import useAppDispatch from '@/hooks/useAppDispatch';
import decodeString from '@/helpers/decodeSring';

import { emailRegexp } from '@/constants/regexp';
import { signinUser } from '@/redux/auth/auth-operations';

import Input from '@/components/shared/Input/Input';
import Checkbox from '@/components/shared/Checkbox/Checkbox';
import Button from '@/components/shared/Button/Button';

import { wix } from '@/public/fonts/fonts';

export interface SigninFormInputs {
    email: string;
    password: string;
    isRemember: boolean;
}

export default function SigninForm() {

    const dispatch = useAppDispatch();

    const { handleSubmit, register, reset, setValue, formState: { errors } } = useForm<SigninFormInputs>({ mode: 'onSubmit' });    
    
    const formSubmit = async (formData: SigninFormInputs) => {
        dispatch(signinUser(formData));
        reset();
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
        <Input label='Email' type='text' register={register('email', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    const regexp = emailRegexp;
                    return regexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.email?.message} />
        <Input label='Password' type='password' register={register('password', {
            required: 'Required',
        })} error={errors.password?.message} />
        <Checkbox label='Remember me' register={register('isRemember')} styles='mb-2' />
        <Button type='submit' text='Sign in' styles={`${wix.className} py-[14px] px-[12px] font-semibold text-white text-lg lg:text-xl`} />
    </form>);
}