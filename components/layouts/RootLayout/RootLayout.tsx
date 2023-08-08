import { ReactNode } from "react";

import Header from "@/sections/Header/Header";

import { literata } from "@/public/fonts/fonts";

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return <>
        <Header />
        <main className={literata.className}>
            {children}
            </main>
    </>
}