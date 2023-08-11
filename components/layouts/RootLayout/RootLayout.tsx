import { ReactNode } from "react";

import type { LayoutProps } from '@/constants/interfaces';

import Header from "@/sections/Header/Header";

import { literata } from "@/public/fonts/fonts";

export default function RootLayout({ children }: LayoutProps) {
    return <>
        <Header />
        <main className={`${literata.className} h-screen`}>
            {children}
            </main>
    </>
}