import Link from "next/link";
import { useRouter } from "next/router";

import useAppSelector from "@/hooks/useAppSelector";

import { getAuth } from "@/redux/auth/auth-selectors";

import Button from "@/components/shared/Button/Button";
import UserNameAndSignout from "./UserNameAndSignout/UserNameAndSignout";

interface SignedElementsProps {
    onClick: () => void;
}


export default function SignedElements({ onClick }: SignedElementsProps) { 
    const router = useRouter();

    const { name, email, role } = useAppSelector(getAuth);
    
    const linkAddress = role === 'user' ? '/cabinet' : '/ctrlroom';
    const linkText = role === 'user' ? 'My cabinet' : 'Control room';

    return (<li>
        <Button type='button' text={linkText} onClick={() => { onClick(); router.push(linkAddress) }} styles="md:hidden py-3 px-2 text-base text-semiPale font-semibold" />
        <div className="hidden md:block md:p-3 md:flex md:gap-x-2 md:bg-slate-400 rounded-lg text-white">
            <UserNameAndSignout userName={name} userEmail={email} />
            <Link href={linkAddress}>{linkText}</Link>
        </div>
    </li>);
}