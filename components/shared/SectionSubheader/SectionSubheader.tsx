import Underline from '@/public/assets/svg/underline.svg';

interface SectionSubheaderProps {
    text: string;
    isCentered?: boolean;
}

export default function SectionSubheader({text, isCentered}: SectionSubheaderProps) {
    return (<h3 className={`mb-4 ${isCentered && 'mx-auto'} text-header text-2xl`}>{text}</h3>);
}