import { useRef, useEffect } from 'react';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';

import { getCurrentUser } from '@/redux/auth/auth-operations';
import { getAuth } from '@/redux/auth/auth-selectors';

import SigninPage from '@/pages/auth/signin';
import { AdminPage } from '@/pages/ctrlroom';
import Spinner from '@/components/shared/Spinner/Spinner';

function withUserAuth (Component: NextComponentType) {
    const WithUserAuth = () => {
        const { accessToken, isSigned, role, loading } = useAppSelector(getAuth);
        
        const dispatch = useAppDispatch();
        const router = useRouter();
        const firstRenderRef = useRef(true);

        const isUser = role === 'user';
        const isAdmin = role === 'admin';

        useEffect(() => {
            if (isSigned && isUser) {
                return;
            }
            dispatch(getCurrentUser(accessToken));

            if (loading) {
                firstRenderRef.current = false;
                return;
            }
            
            if (isSigned && isAdmin) {
                router.replace('/ctrlroom');
                return;
            } 
            if (!isSigned && !loading && !firstRenderRef.current) {
                router.replace('/auth/signin');
                return;
            }
        }, [loading]);

        return (isSigned && isUser ? <Component /> : (isSigned && isAdmin ?  <AdminPage /> : (!isSigned && loading ? <Spinner /> : <SigninPage />)));
    }
    return WithUserAuth;
};

export default withUserAuth;
