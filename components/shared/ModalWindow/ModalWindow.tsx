import { ReactNode } from "react";

import Cross from '@/public/assets/svg/cross.svg';

interface ModalWindowProps {
    children: ReactNode;
    onClose: () => void;
}

export default function ModalWindow({children, onClose}: ModalWindowProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-screen pt-20 flex justify-center items-start bg-pale dark:bg-neutral-800 overflow-scroll z-20">
            {children}
            <div className="absolute top-6 right-6 w-[40px] h-[40px] flex justify-center items-center" onClick={onClose}>
              <Cross className='w-[32px] h-[32px] fill-brand' />
            </div>
        </div>
    );
}