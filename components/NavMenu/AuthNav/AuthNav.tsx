import { useRouter } from "next/router";
import Link from "next/link";

import useAppSelector from "@/hooks/useAppSelector";
import { getAuth } from "@/redux/auth/auth-selectors";

import Button from "@/components/shared/Button/Button";

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

    const {isSigned} = useAppSelector(getAuth);
    const router = useRouter();
    const btns = btnArr.map((btn) => <li key={btn.id}><Button type='button' text={btn.text} onClick={() => { onClick(); router.push(`/auth/${btn.address}`) }} styles="py-3 px-2 text-sm text-white font-semibold" /></li>);
    const elements = <Link href='/cabinet'>Cabinet</Link>
    return (
        <ul className='flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-y-6 md:gap-y-0 md:gap-x-8 text-base md:text-2xl'>
            {!isSigned ? btns : elements}
        </ul>);
}