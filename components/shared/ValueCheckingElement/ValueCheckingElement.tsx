import Cross from '@/public/assets/svg/cross-circle.svg';
import Checkmark from '@/public/assets/svg/checkmark-circle.svg';

interface ValueCheckingElementProps {
    checkFunction: () => boolean;
    label: string;
}

export default function ValueCheckingElement({ checkFunction, label }: ValueCheckingElementProps) {
    return (
        <div className='flex justify-start gap-x-2'>
                {checkFunction() ? <Checkmark className='w-6 h-6 fill-green-400' /> : <Cross className='w-6 h-6 stroke-[#f25137] stroke-2' />}
                <span>{label}</span>
            </div>
    );
}