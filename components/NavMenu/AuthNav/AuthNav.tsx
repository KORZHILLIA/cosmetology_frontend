import { Skeleton } from "@mui/material";

import useAppSelector from "@/hooks/useAppSelector";
import { getAuth } from "@/redux/auth/auth-selectors";

import type { NavInstance } from '@/constants/interfaces';

import NotSignedBtns from "./NotSignedBtns/NotSignedBtns";
import SignedElements from "./SignedElements/SignedElements";


interface AuthNavProps {
    onClick: () => void;
    notSignedArr: NavInstance[];
    adminArr: NavInstance[];
    userArr: NavInstance[];
}

export default function AuthNav({ onClick, notSignedArr, adminArr, userArr }: AuthNavProps) {

    const {isSigned,  loading} = useAppSelector(getAuth);
    
    return (!isSigned && loading ? <Skeleton sx={{backgroundColor: '#cfcfcf'}} variant="rounded" width={172} height={38} animation='wave' /> : (!isSigned ? <NotSignedBtns onClick={onClick} btnArr={notSignedArr} /> : <SignedElements onClick={onClick} adminArr={adminArr} userArr={userArr} />));
}