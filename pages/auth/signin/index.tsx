import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useAppSelector from '@/hooks/useAppSelector';
import { getAuth } from '@/redux/auth/auth-selectors';

import AuthLayout from '@/components/layouts/AuthLayout/AuthLayout';
import SigninForm from '@/components/forms/SigninForm/SigninForm';


export default function SigninPage() {
    const { isSigned, role} = useAppSelector(getAuth);
    const router = useRouter();

    useEffect(() => {
        if (isSigned) {
            router.replace(role === 'user' ? '/cabinet' : '/ctrlroom');}
    }, [isSigned]);

    return <AuthLayout>
        <SigninForm />
    </AuthLayout>;
}
