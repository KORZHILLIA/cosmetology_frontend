import { UseFormRegisterReturn } from 'react-hook-form';


interface InputProps {
type: string;
label: string;
register: UseFormRegisterReturn;
error?: string;
};

const Input = ({type, label, register, error}: InputProps) => {
    return <label className='relative pb-6 flex flex-col justify-start items-start last-of-type:mb-4'>
        <span className='mb-1 text-brand text-xl font-semibold'>{label}</span>
        <input className={`w-full p-2 rounded-lg text-brand text-xl leading-none border ${error ? 'border-error' : 'border-semiPale'} bg-transparent ${error ? 'shadow-[0_1px_5px_0_#f25137]' : 'shadow-[0_2px_4px_#00000031]'} outline-0 focus:border-brand focus:shadow-[0_2px_4px_#ef820f] md:text-2xl`} type={type} {...register} />
        {error && <span className='absolute bottom-0 left-0 text-error text-[20px] leading-none font-medium md:font-[30px]'>{error}</span>}
    </label>
};

export default Input;