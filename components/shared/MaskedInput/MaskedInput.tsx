import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

import { wix } from '@/public/fonts/fonts';

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
                return <label className={`${wix.className} relative pb-6 flex flex-col justify-start items-start last-of-type:mb-4`}>
                    <span className={`${wix.className} mb-1 ${error? 'text-error' : 'text-semiPale'} text-xl font-semibold`}>{label}</span>
                    <InputMask inputRef={ref} value={!value ? '' : value} mask={mask} maskChar='_' alwaysShowMask={true} className={`${wix.className} w-full p-2 rounded-lg text-semiPale text-lg leading-none border focus:border-[1.5px] ${error ? 'border-error' : 'border-pale'} bg-white focus:bg-white autofill:shadow-[inset_0_0_0_1000px_rgb(255,255,255)] focus:autofill:shadow-[inset_0_0_0_1000px_rgb(255,255,255)] ${error ? 'shadow-[0_1px_5px_0_#f2513731]' : 'shadow-[0_2px_4px_#00000031]'} outline-0 focus:border-brand focus:shadow-[0_4px_6px_#ef820f31] md:text-2xl`} type={type} onChange={onChange} />
                    {error && <span className={`${wix.className} absolute bottom-0 left-0 text-error text-[14px] leading-none font-medium md:font-[30px]`}>{error.message}</span>}
                </label>
            }}
            />
    );
};