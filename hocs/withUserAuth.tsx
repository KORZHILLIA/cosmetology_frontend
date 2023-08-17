import { useRef, useEffect } from 'react';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';

import useAppSelector from '@/hooks/useAppSelector';
import useAppDispatch from '@/hooks/useAppDispatch';

import { getCurrentUser } from '@/redux/auth/auth-operations';
import { getAuth } from '@/redux/auth/auth-selectors';
import { getDates } from '@/redux/dates/dates-selectors';

import SigninPage from '@/pages/auth/signin';
import { AdminPage } from '@/pages/ctrlroom';
import Spinner from '@/components/shared/Spinner/Spinner';

export function withUserAuth (Component: NextComponentType) {
    const WithUserAuth = () => {
        const { accessToken, isSigned, role, loading: userLoading, error: userError } = useAppSelector(getAuth);
        const { loading: datesLoading, error: datesError } = useAppSelector(getDates);
        
        const dispatch = useAppDispatch();
        const router = useRouter();
        const firstRenderRef = useRef(true);

        const isUser = role === 'user';
        const isAdmin = role === 'admin';

        useEffect(() => {
            if (isSigned && isUser) {
                return;
            }
            if (userError?.status === 401 || datesError?.status === 401 || !accessToken) {
                router.replace('/auth/signin');
                return;
            }
            dispatch(getCurrentUser(accessToken));

            if (userLoading || datesLoading) {
                firstRenderRef.current = false;
                return;
            }
            
            if (isSigned && isAdmin) {
                router.replace('/ctrlroom');
                return;
            } 
            if (!isSigned && !userLoading && !firstRenderRef.current) {
                router.replace('/auth/signin');
                return;
            }
        }, [userLoading, datesLoading]);

        return (isSigned && isUser ? <Component /> : (isSigned && isAdmin ?  <AdminPage /> : (!isSigned && userLoading ? <Spinner /> : <SigninPage />)));
    }
    return WithUserAuth;
};
