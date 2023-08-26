interface ParagraphProps {
    text: string;
    styles?: string;
}

export default function Paragraph({text, styles}: ParagraphProps) {
    return (<p className={`mb-4 text-lg md:text-xl text-semiPale ${styles ? styles : ''}`}>{text}</p>);
}