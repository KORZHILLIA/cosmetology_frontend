import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import EyeClosed from '@/public/assets/svg/eye-close.svg';
import EyeOpened from '@/public/assets/svg/eye-open.svg';

import { wix } from '@/public/fonts/fonts';

interface InputProps {
type: string;
label: string;
Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
isEye?: boolean;
register: UseFormRegisterReturn;
error?: string;
};

export default function Input({ type, label, Icon, isEye, register, error }: InputProps) {
    const [isTextType, setIsTextType] = useState<boolean>(false);
    const onEyeClick = () => setIsTextType(state => !state);

    return <label className={`${wix.className} group relative pb-6 flex flex-col justify-start items-start last-of-type:mb-4`}>
        <span className={`${wix.className} mb-1 ${error? 'text-error' : 'text-semiPale'} text-xl font-semibold`}>{label}</span>
        <input className={`${wix.className} w-full p-2 pl-8 ${isEye && 'pr-[34px]'} md:pl-10 rounded-lg text-semiPale text-lg leading-none border focus:border-[1.5px] ${error ? 'border-[1.5px] border-error' : 'border-pale'} bg-white focus:bg-white autofill:shadow-[inset_0_0_0_1000px_rgb(255,255,255)] focus:autofill:shadow-[inset_0_0_0_1000px_rgb(255,255,255)] ${error ? 'shadow-[0_1px_5px_0_#f2513731]' : 'shadow-[0_2px_4px_#00000031]'} outline-0 focus:border-brand focus:shadow-[0_4px_6px_#ef820f31] md:text-2xl`} type={isTextType ? 'text' : type} {...register} />
        {Icon && <Icon className='absolute bottom-[36px] md:bottom-[37px] left-[8px] w-[16px] md:w-[20px] h-[16px] md:h-[20px] fill-pale group-focus-within:fill-brand' />}
        {isEye ? (isTextType ? <EyeOpened onClick={onEyeClick} className='absolute bottom-[34px] right-[8px] w-[20px] md:w-[24px] h-[20px] md:h-[24px] fill-brand cursor-pointer' /> : <EyeClosed onClick={onEyeClick} className='absolute bottom-[34px] right-[8px] w-[20px] md:w-[24px] h-[20px] md:h-[24px] stroke-pale cursor-pointer' />) : null}
        {error && <span className={`${wix.className} absolute bottom-0 left-0 text-error text-[14px] leading-none font-medium md:font-[30px]`}>{error}</span>}
    </label>
};