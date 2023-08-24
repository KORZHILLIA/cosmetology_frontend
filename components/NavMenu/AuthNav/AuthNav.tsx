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
}