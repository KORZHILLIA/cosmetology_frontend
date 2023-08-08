interface ButtonProps {
  type: 'button' | 'submit';
  text: string;
    centered?: boolean;
    bgColor?: string;
  onClick?: () => void;
};

export default function Button({type, text, centered, bgColor, onClick}: ButtonProps) {
    return (
    <button
      type={type}
      onClick={onClick}
      className={`${centered ? 'mx-auto' : ''} min-w-[178px] border-0 flex justify-center items-center py-[14px] px-[12px] bg-${bgColor ? bgColor : 'brand'} transition-all rounded-lg font-semibold text-white text-xl leading-none}`}
    >
      {text}
    </button>
  );
}