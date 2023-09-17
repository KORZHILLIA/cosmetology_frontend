import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { sendToTelegram } from '@/service/externalApi';
import notificate from '@/helpers/notificate';
import defineTelephoneInputTextPaleness from '@/helpers/defineTelephoneInputTextPaleness';

import type { ContactFormInputs } from '@/constants/interfaces';
import { emailRegexp, formatChars } from '@/constants/regexp';

import Input from '@/components/shared/Input/Input';
import MaskedInput from '@/components/shared/MaskedInput/MaskedInput';
import TextArea from '@/components/shared/TextArea/TextArea';
import Button from '@/components/shared/Button/Button';
import Spinner from '@/components/shared/Spinner/Spinner';

import User from '@/public/assets/svg/user.svg';
import Envelope from '@/public/assets/svg/envelope.svg';

import contactForm from '@/data/contactsForm.json';

import { wix } from '@/public/fonts/fonts';

export default function ContactForm() {
    const [loading, setLoading] = useState<boolean>(false);
    
    const { handleSubmit, register, control, getValues, watch, setValue, reset, resetField, setError, formState: { errors } } = useForm<ContactFormInputs>({ mode: 'onSubmit' });

    const STORAGE_KEY = 'contactForm';

    const isBrowser = typeof window != 'undefined';

  useFormPersist(STORAGE_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : undefined,
  });

    const formSubmit = async (formData: ContactFormInputs) => {
        const phoneValue = getValues('phone');
        const telegramValue = getValues('telegram');
        const noPhoneValue = !phoneValue;
        const isPhoneValueNotComplete = phoneValue?.includes('_');
        const isTelegramValueShort = telegramValue && telegramValue?.length < 6;
        if (noPhoneValue || isPhoneValueNotComplete || isTelegramValueShort) {
            if (noPhoneValue) {
            setError('phone', { type: 'custom', message: contactForm.requiredLabel });
        }
            if (isPhoneValueNotComplete) {
            setError('phone', { type: 'custom', message: contactForm.phoneErrorLabel });
        }
            if (isTelegramValueShort) {
            setError('telegram', { type: 'custom', message: contactForm.telegramErrorLabel });
        }
            return;
        }
        setLoading(true);
        const { status } = await sendToTelegram(formData);
        setLoading(false);
        if (status === 200) {
            notificate('success', contactForm.successSendLabel);
            reset();
            resetField('phone');
            sessionStorage.removeItem(STORAGE_KEY);
        } else {
            notificate('error', contactForm.errorSendLabel);
        }
    };
    
    return (<>
        <form className='w-full md:max-w-[440px] lg:min-w-[440px] mx-auto lg:m-0 pt-6 lg:p-6 lg:border lg:border-brand lg:rounded-lg flex flex-col lg:order-1 gap-y-1' onSubmit={handleSubmit(formSubmit)}>
            <Input label={contactForm.nameLabel} type='text' Icon={User} register={register('name', {
                required: contactForm.requiredLabel,
                validate: {
                    testValue: (value: string) => {
                        return value.trim().length <= 20 || contactForm.nameTooLongLabel;
                    },
                    isOnlySpaces: (value: string) => {
                        return value.trim().length !== 0 || contactForm.onlySpacesLabel;
                    }
                },
                setValueAs: (value: string) => value.trim(),
            })} error={errors.name?.message} />
            <Input label={contactForm.emailLabel} type='text' Icon={Envelope} register={register('email', {
                validate: {
                    testValue: (value: string | undefined) => {
                        const regexp = emailRegexp;
                        if (value) {
                            return regexp.test(value.trim()) || contactForm.emailErrorLabel;
                        }
                        return true;
                    }
                },
                setValueAs: (value: string) => value.trim(),
            })} error={errors.email?.message} />
            <MaskedInput name='telegram' type='text' label={contactForm.telegramLabel} control={control} mask='@CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC' formatChars={formatChars} maskChar='' textPaleness={(value: string) => value?.length > 1} />
            <MaskedInput name='phone' type='tel' label={contactForm.phoneLabel} control={control} mask='+380 (99) 999-99-99' maskChar='_' textPaleness={defineTelephoneInputTextPaleness} />
            <TextArea label={contactForm.messageLabel} register={register('messageToSend', {
                    required: contactForm.requiredLabel,
                validate: {
                    testValue: (value: string) => {
                        return (value.length >= 10 && value.length <= 200) || 'From 10 to 200 characters'
                        }
                },
                setValueAs: (value: string) => value.trim(),
                })} error={errors.messageToSend?.message} />
            <Button type='submit' text={contactForm.buttonLabel} centered styles={`${wix.className} w-[270px] py-[14px] px-[12px] font-semibold text-white text-lg lg:text-xl`} />
        </form>
        {loading && <Spinner />}
        </>
    );
}