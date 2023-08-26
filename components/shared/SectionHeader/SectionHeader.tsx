import Underline from '@/public/assets/svg/underline.svg';

interface SectionHeaderProps {
    text: string;
    isUnderline?: boolean;
    styles?: string;
    textStyles?: string;
}

export default function SectionHeader({text, isUnderline, styles, textStyles}: SectionHeaderProps) {
    return (
        <div className={styles ? styles : ''}>
            <h2 className={`relative inline-block mb-4 md:mb-5 text-header text-[32px] md:text-[42px] lg:text-[52px] leading-[1.5] md:leading-[1.2] font-semibold ${textStyles ? textStyles : ''}`}>{text}
                {isUnderline && <Underline className='absolute bottom-0 left-0' />}
            </h2>
        </div>);
}