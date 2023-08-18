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

export function withUserAuth (Component: NextComponentType) {
    const WithUserAuth = () => {
        const { accessToken, isSigned, role, loading, error } = useAppSelector(getAuth);
        
        const dispatch = useAppDispatch();
        const router = useRouter();
        const firstRenderRef = useRef(true);

        const isUser = role === 'user';
        const isAdmin = role === 'admin';

        useEffect(() => {
            if (isSigned && isUser) {
                return;
            }
            if (error?.status === 401 || !accessToken) {
                console.log('withUser works');
                router.replace('/auth/signin');
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
        
        // useEffect(() => {
        //     console.log('start');
        //     if (isSigned && isUser) {
        //         console.log('user, ok');
        //         return;
        //     }
        //     if (userError?.status === 401 || datesError?.status === 401 || !accessToken) {
        //         console.log('no autorized');
        //         router.replace('/auth/signin');
        //         return;
        //     }

        //     dispatch(getCurrentUser(accessToken));

        //     if (isSigned && isAdmin) {
        //         console.log('admin');
        //         router.replace('/ctrlroom');
        //         return;
        //     }
        //     console.log(isSigned);
        //     router.replace('/auth/signin');
        // }, []);

        return (isSigned && isUser ? <Component /> : (isSigned && isAdmin ?  <AdminPage /> : (!isSigned && loading ? <Spinner /> : <SigninPage />)));
        // return (isSigned && isUser ? <Component /> : (isSigned && isAdmin ?  <AdminPage /> : <SigninPage />));
    }
    return WithUserAuth;
};
