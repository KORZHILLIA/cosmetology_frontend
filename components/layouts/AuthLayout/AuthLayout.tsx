import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession, signOut } from 'next-auth/react';

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";

import { getAuth } from "@/redux/auth/auth-selectors";
import { signupOuterUser } from '@/redux/auth/auth-operations';

import type { LayoutProps } from "@/constants/interfaces";

import GoogleBtn from "@/components/shared/GoogleBtn/GoogleBtn";
import AuthLayoutBottomLink from "@/components/shared/AuthLayoutBottomLink/AuthLayoutBottomLink";

import authImg from '@/public/assets/img/authImg.jpg';

import { wix } from "@/public/fonts/fonts";

export default function AuthLayout({ children }: LayoutProps) {
    const { data: session } = useSession();

    const router = useRouter();

    const dispatch = useAppDispatch();

    const { error, loading } = useAppSelector(getAuth);

    const isSignup = router.pathname.includes('signup');

    useEffect(() => {
        if (session) {
            if (error?.status === 401 || error?.status === 409) {
            signOut({redirect: false});
            return;
            }
            const { user } = session;
            dispatch(signupOuterUser({ name: user?.name as string, email: user?.email as string }));
        }
    }, [session, loading]);

    return <div className="container pt-[10vh] pb-6 md:flex items-center gap-x-14 lg:gap-x-20 xl:gap-x-32">
        <div className="hidden md:block relative w-1/2 md:h-[500px] rounded-lg overflow-hidden">
            <Image className="object-cover" src={authImg} fill sizes='(max-width: 767px) 0vw, (max-width: 1000px) 29vw, (max-width: 1280px) 34vw, 40vw' priority alt='' />
        </div>
        <div>
            <h1 className="mb-2.5 text-4xl font-semibold text-center">{isSignup ? 'Create An Account' : 'Welcome Back'}</h1>
            <p className="mb-7 text-lg text-center text-semiPale dark:text-slate-200">Discover a better way of spandings with KorzhBeauty.</p>
            {!session && <GoogleBtn />}
            <span className={`${wix.className} relative block p-2 text-center text-lg bg-transparent
            before:content-[''] before:absolute before:top-[24px] before:left-0 before:w-[calc(50%-20px)] before:h-[0.5px] before:bg-semiPale before:dark:bg-pale
            after:content-[''] after:absolute after:top-[24px] after:right-0 after:w-[calc(50%-20px)] after:h-[0.5px] after:bg-semiPale after:dark:bg-pale`}
            >Or</span>
            {children}
            <AuthLayoutBottomLink />
        </div>
    </div>
}