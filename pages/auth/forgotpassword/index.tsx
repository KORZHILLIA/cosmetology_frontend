import { useState } from "react";
import Image from "next/image";

import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm/ForgotPasswordForm";

import authImg from '@/public/assets/img/authImg.jpg'

export default function ForgotPasswordPage() {
    const [isPermissionReceived, setIsPermissionReceived] = useState<boolean>(false);

    const refreshFunc = () => setIsPermissionReceived(true);

    return (
        <div className="container pt-[10vh] pb-6 md:flex items-center gap-x-14 lg:gap-x-20 xl:gap-x-32">
        <div className="hidden md:block relative w-1/2 md:h-[500px] rounded-lg overflow-hidden">
            <Image className="object-cover" src={authImg} fill sizes='100vw' priority alt='' />
        </div>
        <div>
                <h1 className="mb-2.5 text-4xl font-semibold text-center">{isPermissionReceived ? 'Type your new password' : 'Enter your email'}</h1>
                <ForgotPasswordForm refreshFunc={refreshFunc} />
        </div>
    </div>
    );
}