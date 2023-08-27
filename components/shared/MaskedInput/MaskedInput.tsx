import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

interface MaskedInputProps {
type: string;
label: string;
control: Control<any>;
mask: string;
};

export default function MaskedInput({ type, label, control, mask }: MaskedInputProps) {
    return (
        <Controller
            control={control}
            name='phone'
            render={({
                field: { onChange, value, ref },
                fieldState: { error },
            }) => {
                return <label className='relative pb-6 flex flex-col justify-start items-start last-of-type:mb-4'>
                    <span className='mb-1 text-semiPale text-xl font-semibold'>{label}</span>
                    <InputMask inputRef={ref} value={!value ? '' : value} mask={mask} maskChar='_' alwaysShowMask={true} className={`w-full p-2 rounded-lg text-brand text-xl leading-none border ${error ? 'border-error' : 'border-semiPale'} bg-transparent ${error ? 'shadow-[0_1px_5px_0_#f25137]' : 'shadow-[0_2px_4px_#00000031]'} outline-0 focus:border-brand focus:shadow-[0_2px_4px_#ef820f] md:text-2xl`} type={type} onChange={onChange} />
                    {error && <span className='absolute bottom-0 left-0 text-error text-[14px] leading-none font-medium md:font-[30px]'>{error.message}</span>}
                </label>
            }}
            />
    );
};