import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head"

import useAppSelector from '@/hooks/useAppSelector';
import { getAuth } from '@/redux/auth/auth-selectors';

import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import SignupForm from "@/components/forms/SignupForm/SignupForm";

export default function SignupPage() {
    const { isSigned, role} = useAppSelector(getAuth);
    const router = useRouter();

    useEffect(() => {
        if (isSigned) {
            router.replace(role === 'user' ? '/cabinet' : '/ctrlroom');}
    }, [isSigned]);

    return (
        <>
            <Head>
                <title>Signup page</title>
            </Head>
            <AuthLayout>                
                <SignupForm />
            </AuthLayout>
    </>);
}