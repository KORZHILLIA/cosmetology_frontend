import { useForm } from 'react-hook-form';

import Input from '@/components/shared/Input/Input';
import Button from '@/components/shared/Button/Button';

interface SignupFormInputs {
    name: string;
    email: string;
    password: string;
}

export default function SignupForm() {

    const {handleSubmit, register, formState: {errors}} = useForm<SignupFormInputs>({mode: 'onSubmit'});
    return (<form className='max-w-[414px] mx-auto pt-6 flex flex-col gap-y-1'>
        <Input label='Name' type='text' register={register('name', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    const regexp = /[a-fA-Fа-яА-Я0-9]{5,20}/;
                    return regexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.name?.message} />
        <Input label='Email' type='text' register={register('email', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                    return regexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.email?.message} />
        <Input label='Password' type='text' register={register('password', {
            required: 'Required',
            validate: {
                testValue: (value: string) => {
                    const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
                    return regexp.test(value) || 'Please follow format';
                }
            }
        })} error={errors.password?.message} />
        <Button type='submit' text='Sign up' />
    </form>);
}