import { useForm } from 'react-hook-form';

import useAppDispatch from '@/hooks/useAppDispatch';

import { emailRegexp, passwordRegexp } from '@/constants/regexp';
import { signupNewUser } from '@/redux/auth/auth-operations';

import Input from '@/components/shared/Input/Input';
import Button from '@/components/shared/Button/Button';

export interface SignupFormInputs {
    name: string;
    email: string;
    password: string;
}

export default function SignupForm() {

    const dispatch = useAppDispatch();

    const formSubmit = async (formData: SignupFormInputs) => {
        dispatch(signupNewUser(formData));
    };

    const {handleSubmit, register, formState: {errors}} = useForm<SignupFormInputs>({mode: 'onSubmit'});
    return (<form className='max-w-[414px] mx-auto pt-6 flex flex-col gap-y-1' onSubmit={handleSubmit(formSubmit)}>
        <Input label='Name' type='text' register={register('name', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    const regexp = /[a-zA-Zа-яА-Я0-9]{4,20}/;
                    return regexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.name?.message} />
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
            validate: {
                testValue: (value: string) => {
                    const regexp = passwordRegexp;
                    return regexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.password?.message} />
        <Button type='submit' text='Sign up' />
    </form>);
}