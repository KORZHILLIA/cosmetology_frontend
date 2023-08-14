interface ButtonProps {
  type: 'button' | 'submit';
  text: string;
    centered?: boolean;
  bgColor?: string;
  styles: string;
  onClick?: () => void;
};

export default function Button({type, text, centered, bgColor, styles, onClick}: ButtonProps) {
    return (
    <button
      type={type}
      onClick={onClick}
      className={`${centered ? 'mx-auto' : ''} min-w-[70px] border-0 flex justify-center items-center bg-brand transition-all rounded-lg leading-none ${styles}}`}
    >
      {text}
    </button>
  );
}