import { ReactNode } from "react";
import Image from "next/image";

import authImg from '@/public/assets/img/authImg.jpg';

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return <div className="container py-6 md:flex items-center gap-x-14 lg:gap-x-20 xl:gap-x-32">
        <div className="hidden md:block relative w-1/2 h-[560px]">
            <Image className="object-cover" src={authImg} fill sizes='100vw' priority alt='' />
        </div>
        <div>
            <h1 className="mb-2.5 text-4xl font-semibold text-center">Create An Account</h1>
            <p className="mb-7 text-lg text-center text-semiPale">Discover a better way of spandings with KorzhBeauty.</p>
            <div className="relative w-full h-[0.1px] bg-[#011632] border-0">
                <span className="absolute -top-[24px] left-[calc(50%-19px)] block p-2 text-lg bg-white">Or</span>
            </div>
                {children}
        </div>
    </div>
}