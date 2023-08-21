import { useRouter } from "next/router";

import useAppSelector from "@/hooks/useAppSelector";
import { getAuth } from "@/redux/auth/auth-selectors";

import Button from "@/components/shared/Button/Button";
import SignedElements from "./SignedElements/SignedElements";

interface AuthButton {
    id: string;
    text: string;
    address: string;
}

interface AuthNavProps {
    onClick: () => void;
    btnArr: AuthButton[];
}

export default function AuthNav({ onClick, btnArr }: AuthNavProps) {

    const {isSigned,  loading} = useAppSelector(getAuth);
    const router = useRouter();

    const notSignedBtns = btnArr.map((btn) => <li key={btn.id}><Button type='button' text={btn.text} onClick={() => { onClick(); router.push(`/auth/${btn.address}`) }} styles="py-3 px-2 text-sm text-white font-semibold" /></li>);
    
    return (!isSigned && loading ? null :
        <ul className='pb-6 md:pb-0 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-y-6 md:gap-y-0 md:gap-x-8 border-b md:border-b-0 border-b-zinc-400 text-base md:text-2xl'>
            {!isSigned ? notSignedBtns : <SignedElements onClick={onClick}/>}
        </ul>);
}