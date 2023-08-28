import { UseFormRegisterReturn } from 'react-hook-form';

interface TextAreaProps {
label: string;
register: UseFormRegisterReturn;
error?: string;
};

export default function TextArea({ label, register, error }: TextAreaProps) {
    return <label className='relative pb-6 flex flex-col justify-start items-start last-of-type:mb-4'>
        <span className='mb-1 text-semiPale text-xl font-semibold'>{label}</span>
        <textarea className={`w-full h-[200px] lg:h-[360px] p-3 rounded-lg text-brand text-xl leading-none border-[5px] border-transparent bg-transparent ${error ? 'shadow-[0_1px_5px_0_#f25137]' : 'shadow-[0_0_0_1px_#3c4959]'} focus:shadow-[0_0_0_1px_#ef820f] outline-0 md:text-2xl resize-none`} {...register}></textarea>
        {error && <span className='absolute bottom-0 left-0 text-error text-[14px] leading-none font-medium md:font-[30px]'>{error}</span>}
    </label>
};