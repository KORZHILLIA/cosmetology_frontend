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
                field: { onChange, value },
            }) => {
                console.log(value);
                return <label className='relative pb-6 flex flex-col justify-start items-start last-of-type:mb-4'>
                    <span className='mb-1 text-semiPale text-xl font-semibold'>{label}</span>
                    <InputMask value={!value ? '' : value} mask={mask} maskChar='_' alwaysShowMask={true} className={`w-full p-2 rounded-lg text-brand text-xl leading-none border border-semiPale bg-transparent shadow-[0_2px_4px_#00000031] outline-0 focus:border-brand focus:shadow-[0_2px_4px_#ef820f] md:text-2xl`} type={type} onChange={onChange} />
                </label>
            }}
            />
    );
};