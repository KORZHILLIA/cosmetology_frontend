import Underline from '@/public/assets/svg/underline.svg';

interface SectionHeaderProps {
    text: string;
    // isCentered?: boolean;
    isUnderline?: boolean;
    styles?: string;
}

export default function SectionHeader({text, isUnderline, styles}: SectionHeaderProps) {
    return (
        <div className={styles}>
            <h2 className={`relative inline-block mb-4 md:mb-5 text-header text-[42px] md:text-[62px] leading-[1.5] md:leading-[1.2] font-semibold`}>{text}
                {isUnderline && <Underline className='absolute bottom-0 left-0' />}
            </h2>
        </div>);
}