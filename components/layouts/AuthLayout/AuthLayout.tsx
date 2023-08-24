import { ReactNode } from "react";
import Image from "next/image";

import type { LayoutProps } from "@/constants/interfaces";

import authImg from '@/public/assets/img/authImg.jpg';

export default function AuthLayout({ children }: LayoutProps) {
    return <div className="container pt-[10vh] pb-6 md:flex items-center gap-x-14 lg:gap-x-20 xl:gap-x-32">
        <div className="hidden md:block relative w-1/2 md:h-[500px] rounded-lg overflow-hidden">
            <Image className="object-cover" src={authImg} fill sizes='100vw' priority alt='' />
        </div>
        <div>
            <h1 className="mb-2.5 text-4xl font-semibold text-center">Create An Account</h1>
            <p className="mb-7 text-lg text-center text-semiPale">Discover a better way of spandings with KorzhBeauty.</p>
            <span className="relative block p-2 text-center text-lg bg-transparent
            before:content-[''] before:absolute before:top-[24px] before:left-0 before:w-[calc(50%-20px)] before:h-[0.5px] before:bg-semiPale
            after:content-[''] after:absolute after:top-[24px] after:right-0 after:w-[calc(50%-20px)] after:h-[0.5px] after:bg-semiPale"
            >Or</span>

            {children}
        </div>
    </div>
}