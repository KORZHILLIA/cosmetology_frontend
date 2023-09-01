import { useRouter } from "next/router";

import Button from "@/components/shared/Button/Button";

interface AuthButton {
    id: string;
    text: string;
    address: string;
}

interface NotSignedBtnsProps {
    onClick: () => void;
    btnArr: AuthButton[];
}

export default function NotSignedBtns({ onClick, btnArr }: NotSignedBtnsProps) {
    const router = useRouter();
    const pathName = router.pathname;

    const elements = btnArr.map(btn => {
        const isPathNameEqualToBtnAddress = pathName === btn.address;
        return (<li className="translate-x-[8px] md:translate-x-0" key={btn.id}><Button type='button' text={btn.text} onClick={() => { onClick(); router.push(btn.address) }}
            styles={`py-3 md:py-1 px-2 text-sm md:text-lg ${isPathNameEqualToBtnAddress ? 'text-semiPale' : 'text-white'} font-medium`} bgColor={isPathNameEqualToBtnAddress ? 'bg-transparent' : ''} /></li>)
    });
    
    return <ul className='md:order-1 pb-6 md:pb-0 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-y-6 md:gap-y-0 md:gap-x-8 border-b md:border-b-0 border-b-zinc-400 text-base md:text-2xl'>{elements}</ul>;
}