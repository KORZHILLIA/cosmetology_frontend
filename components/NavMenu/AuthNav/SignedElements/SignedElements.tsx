import { useRouter } from "next/router";

import useAppSelector from "@/hooks/useAppSelector";

import { getAuth } from "@/redux/auth/auth-selectors";

import UserNameAndSignout from "./UserNameAndSignout/UserNameAndSignout";

interface NavInstance {
    id: string;
    text: string;
    address: string;
}

interface SignedElementsProps {
    onClick: () => void;
    adminArr: NavInstance[];
    userArr: NavInstance[];
}


export default function SignedElements({ onClick, adminArr, userArr }: SignedElementsProps) { 
    const router = useRouter();
    const pathName = router.pathname;

    const { name, email, role } = useAppSelector(getAuth);

    const requiredArr = role === 'admin' ? adminArr : userArr;

    const linkAddress = requiredArr[0].address;
    const linkLabel = requiredArr[0].text;

    const elements = requiredArr.map(instance => {
        const isPathEqualToAdress = pathName === instance.address;
        return (
            <li key={instance.id} className={`md:hidden w-full py-3 px-2 ${isPathEqualToAdress ? 'text-brand bg-orange-50 border-l-2 border-l-brand' : 'bg-transparent'} cursor-pointer`}
                onClick={() => { onClick();  router.push(instance.address)}}>
                <p>{instance.text}</p>
            </li>
        );
    });

    return <ul className='md:order-1 pb-6 md:pb-0 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-y-1 md:gap-y-0 md:gap-x-8 border-b md:border-b-0 border-b-zinc-400 text-base md:text-2xl'>
        <li>
            <UserNameAndSignout userName={name} userEmail={email} linkAddress={linkAddress} linkLabel={linkLabel} onClick={onClick} />
        </li>
        {elements}
        </ul>;
}