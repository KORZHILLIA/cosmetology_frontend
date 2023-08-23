import useAppSelector from "@/hooks/useAppSelector";
import { getAuth } from "@/redux/auth/auth-selectors";

import NotSignedBtns from "./NotSignedBtns/NotSignedBtns";
import SignedElements from "./SignedElements/SignedElements";

interface NavInstance {
    id: string;
    text: string;
    address: string;
}

interface AuthNavProps {
    onClick: () => void;
    notSignedArr: NavInstance[];
    adminArr: NavInstance[];
    userArr: NavInstance[];
}

export default function AuthNav({ onClick, notSignedArr, adminArr, userArr }: AuthNavProps) {

    const {isSigned,  loading} = useAppSelector(getAuth);
    
    return (!isSigned && loading ? null : (!isSigned ? <NotSignedBtns onClick={onClick} btnArr={notSignedArr} /> : <SignedElements onClick={onClick} adminArr={adminArr} userArr={userArr} />));
        // <ul className='pb-6 md:pb-0 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-y-6 md:gap-y-0 md:gap-x-8 border-b md:border-b-0 border-b-zinc-400 text-base md:text-2xl'>
            // {!isSigned ? <NotSignedBtns onClick={onClick} btnArr={notSignedArr} /> : <SignedElements onClick={onClick} adminArr={adminArr} userArr={userArr}/>}
        // </ul>);
}