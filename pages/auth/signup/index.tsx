import Head from "next/head"

import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import SignupForm from "@/components/forms/SignupForm/SignupForm";

export default function SignupPage() {
    return <><Head><title>Signup page</title></Head>
    <AuthLayout><SignupForm /></AuthLayout>
    </>
}