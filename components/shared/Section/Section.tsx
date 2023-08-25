import { LayoutProps } from "@/constants/interfaces";

interface SectionProps {
    styles?: string; 
}

export default function Section({children, styles}: LayoutProps & SectionProps) {
    return (
        <section className={styles}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}