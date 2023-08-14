import { useRef, useEffect } from 'react';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';

import { getCurrentUser } from '@/redux/auth/auth-operations';
import { getAuth } from '@/redux/auth/auth-selectors';

import SigninPage from '@/pages/auth/signin';
import { CabinetPage } from '@/pages/cabinet';
import Spinner from '@/components/shared/Spinner/Spinner';

function withAdminAuth (Component: NextComponentType) {
    const WithAdminAuth = () => {
        const { accessToken, isSigned, role, loading } = useAppSelector(getAuth);
        
        const dispatch = useAppDispatch();
        const router = useRouter();
        const firstRenderRef = useRef(true);

        const isUser = role === 'user';
        const isAdmin = role === 'admin';
        
        useEffect(() => {
            if (isSigned && isAdmin) {
                return;
            }
            dispatch(getCurrentUser(accessToken));
            
            if (loading) {
                firstRenderRef.current = false;
                return;
            }
            
            if (isSigned && isUser) {
                router.replace('/cabinet');
                return;
            } 
            if (!isSigned && !loading && !firstRenderRef.current) {
                router.replace('/auth/signin');
                return;
            }
        }, [loading]);

        return (isSigned && isAdmin ? <Component /> : (isSigned && isUser ?  <CabinetPage /> : (!isSigned && loading ? <Spinner /> : <SigninPage />)));
    }
    return WithAdminAuth;
};

export default withAdminAuth;
