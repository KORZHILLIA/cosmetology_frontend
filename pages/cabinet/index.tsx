import { useEffect } from "react";
import { useRouter } from "next/router";

import useAppSelector from "@/hooks/useAppSelector";
import { getAuth } from "@/redux/auth/auth-selectors";

import withAuth from "@/hocs/withAuth";
import UserLayout from "@/components/layouts/UserLayout/UserLayout"

function CabinetPage() {
    const router = useRouter();
    const { isSigned } = useAppSelector(getAuth);
    
    useEffect(() => {
        if (!isSigned) {
            router.push('/');
            return;
        }
    }, []);
    return <UserLayout><p>Cabinet Page</p></UserLayout>
}

export default withAuth(CabinetPage);