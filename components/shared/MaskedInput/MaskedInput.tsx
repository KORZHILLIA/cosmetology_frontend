import InputMask from 'react-input-mask';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

import { wix } from '@/public/fonts/fonts';

interface MaskedInputProps {
name: string;
type: string;
label: string;
control: Control<any>;
mask: string;
formatChars?: Record<string, string>;
maskChar: string;
textPaleness: (value: string) => boolean;
};

export default function MaskedInput({ name, type, label, control, mask, formatChars, maskChar , textPaleness}: MaskedInputProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, value, ref },
                fieldState: { error },
            }) => {
                return <label className={`${wix.className} relative pb-6 flex flex-col justify-start items-start last-of-type:mb-4`}>
                    <span className={`${wix.className} mb-1 ${error? 'text-error' : 'text-semiPale dark:text-pale'} text-xl font-semibold`}>{label}</span>
                    <InputMask inputRef={ref} value={!value ? '' : value} mask={mask} formatChars={formatChars} maskChar={maskChar} alwaysShowMask={true} className={`${wix.className} w-full p-2 rounded-lg ${textPaleness(value) ? 'text-semiPale' : 'text-pale dark:text-zinc-400'} text-lg leading-none border focus:border-[1.5px] ${error ? 'border-error' : 'border-pale'} bg-white dark:bg-neutral-300 focus:bg-white dark:focus:bg-neutral-300 ${error ? 'shadow-[0_1px_5px_0_#f2513731]' : 'shadow-[0_2px_4px_#00000031]'} outline-0 focus:border-brand focus:shadow-[0_4px_6px_#ef820f31] md:text-2xl`} type={type} onChange={onChange} />
                    {error && <span className={`${wix.className} absolute bottom-0 left-0 text-error text-[14px] leading-none font-medium md:font-[30px]`}>{error.message}</span>}
                </label>
            }}
            />
    );
};