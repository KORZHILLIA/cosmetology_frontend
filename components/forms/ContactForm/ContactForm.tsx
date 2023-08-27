import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendToTelegram } from '@/service/externalApi';

import type { ContactFormInputs } from '@/constants/interfaces';
import { emailRegexp } from '@/constants/regexp';

import Input from '@/components/shared/Input/Input';
import MaskedInput from '@/components/shared/MaskedInput/MaskedInput';
import TextArea from '@/components/shared/TextArea/TextArea';
import Button from '@/components/shared/Button/Button';
import Spinner from '@/components/shared/Spinner/Spinner';

export default function ContactForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const { handleSubmit, register, control, getValues, reset, resetField, setError, formState: { errors } } = useForm<ContactFormInputs>({ mode: 'onSubmit' });

    const formSubmit = async (formData: ContactFormInputs) => {
        const phoneValue = getValues('phone');
        if (!phoneValue) {
            setError('phone', { type: 'custom', message: 'Required' });
            return;
        } else if (phoneValue?.includes('_')) {
            setError('phone', { type: 'custom', message: 'Please fill completely' });
            return;
        }
        setLoading(true);
        const { status } = await sendToTelegram(formData);
        setLoading(false);
        reset();
        resetField('phone');
    };
    
    return (<>
        <form className='w-full md:max-w-[440px] mx-auto lg:m-0 pt-6 lg:p-10 lg:border lg:border-brand lg:rounded-lg flex flex-col lg:order-1 gap-y-1' onSubmit={handleSubmit(formSubmit)}>
            <Input label='Name' type='text' register={register('name', {
                required: 'Required',
                validate: {
                    testValue: (value: string) => {
                        return value.length <= 20 || 'Name too long';
                    }
                }
            })} error={errors.name?.message} />
            <Input label='Email' type='text' register={register('email', {
                validate: {
                    testValue: (value: string | undefined) => {
                        const regexp = emailRegexp;
                        if (value) {
                            return regexp.test(value) || 'Please follow format';
                        }
                        return true;
                    }
                }
            })} error={errors.email?.message} />
            <MaskedInput type='tel' label='Phone' control={control} mask='+380 (99) 999-99-99' />
            <TextArea label='Message' register={register('messageToSend', {
                    required: 'Required',
                validate: {
                    testValue: (value: string) => {
                        return (value.length >= 10 && value.length <= 200) || 'From 10 to 200 characters'
                        }
                    }
                })} error={errors.messageToSend?.message} />
            <Button type='submit' text='Send' centered styles='w-[270px] py-[14px] px-[12px] font-semibold text-white text-lg' />
        </form>
        {loading && <Spinner />}
        </>
    );
}