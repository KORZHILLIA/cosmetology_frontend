import Underline from '@/public/assets/svg/underline.svg';

interface SectionSubheaderProps {
    text: string;
    isCentered?: boolean;
    styles?: string;
}

export default function SectionSubheader({text, isCentered, styles}: SectionSubheaderProps) {
    return (<h3 className={`mb-4 ${isCentered && 'mx-auto'} text-header text-2xl ${styles ? styles : ''}`}>{text}</h3>);
}