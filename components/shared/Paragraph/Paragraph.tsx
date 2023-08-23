interface ParagraphProps {
    text: string;
}

export default function Paragraph({text}: ParagraphProps) {
    return (<p className="mb-4 text-lg md:text-xl text-semiPale">{text}</p>);
}