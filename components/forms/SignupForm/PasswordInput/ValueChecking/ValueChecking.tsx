import ValueCheckingElement from '@/components/shared/ValueCheckingElement/ValueCheckingElement';

interface ValueCheckingProps {
    value: string;
}

export default function ValueChecking({ value }: ValueCheckingProps) {
    return (
        <div className='pt-4 flex flex-col gap-y-1'>
            <ValueCheckingElement checkFunction={() => value?.length >= 6 && value?.length <= 10} label='6 to 10 characters' />
            <ValueCheckingElement checkFunction={() => /(?=.*\d)/.test(value)} label='At least 1 digit' />
            <ValueCheckingElement checkFunction={() => /(?=.*[a-z])/.test(value) && value !== undefined} label='At least 1 lowcase letter' />
            <ValueCheckingElement checkFunction={() => /(?=.*[A-Z])/.test(value)} label='At least 1 uppercase letter' />
        </div>
    );
}