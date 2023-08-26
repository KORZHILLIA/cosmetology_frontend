import { LayoutProps } from "@/constants/interfaces";

interface SectionProps {
    styles?: string;
    containerStyles?: string;
}

export default function Section({children, styles, containerStyles}: LayoutProps & SectionProps) {
    return (
        <section className={styles ? styles : ''}>
            <div className={`container ${containerStyles ? containerStyles : ''}`}>
                {children}
            </div>
        </section>
    );
}