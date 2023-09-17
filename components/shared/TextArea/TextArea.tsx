import { UseFormRegisterReturn } from 'react-hook-form';

import { wix } from '@/public/fonts/fonts';

interface TextAreaProps {
label: string;
register: UseFormRegisterReturn;
error?: string;
};

export default function TextArea({ label, register, error }: TextAreaProps) {
    return <label className={`${wix.className} relative pb-6 flex flex-col justify-start items-start last-of-type:mb-12`}>
        <span className={`${wix.className} mb-1 ${error? 'text-error' : 'text-semiPale'} text-xl font-semibold`}>{label}</span>
        <textarea className={`${wix.className} w-full h-[200px] lg:h-[360px] p-3 rounded-lg text-semiPale text-lg leading-none border focus:border-[1.5px] ${error ? 'border-[1.5px] border-error' : 'border-pale'} bg-white dark:bg-neutral-300 focus:bg-white dark:focus:bg-neutral-200 ${error ? 'shadow-[0_1px_5px_0_#f2513731]' : 'shadow-[0_2px_4px_#00000031]'} outline-0 focus:border-brand focus:shadow-[0_4px_6px_#ef820f31] md:text-2xl resize-none`} {...register}></textarea>
        {error && <span className='absolute bottom-0 left-0 text-error text-[14px] leading-none font-medium md:font-[30px]'>{error}</span>}
    </label>
};