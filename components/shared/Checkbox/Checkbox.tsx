import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { wix } from '@/public/fonts/fonts';

import CheckboxUnchecked from '@/public/assets/svg/checkbox-unchecked.svg';
import CheckboxChecked from '@/public/assets/svg/checkbox-checked.svg';

interface CheckboxProps {
    label: string;
    register: UseFormRegisterReturn;
    styles?: string;
}

export default function Checkbox({ label, register, styles }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onLabelClick = () => setIsChecked(state => !state);

    const Icon = isChecked ? CheckboxChecked : CheckboxUnchecked;

    return (
        <label className={`${wix.className} flex items-center gap-x-1 text-sm md:text-lg leading-none cursor-pointer ${styles}`} onChange={onLabelClick} >
            <Icon className='w-[20px] md:w-[24px] h-[20px] md:h-[24px] fill-brand' />
            <span>{label}</span>
            <input className='invisible' type='checkbox' {...register} checked={isChecked} />
        </label>
    );
}