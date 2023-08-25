
import type { LayoutProps } from '@/constants/interfaces';

import Header from "@/sections/Header/Header";
import Footer from '@/sections/Footer/Footer';

import { literata } from "@/public/fonts/fonts";

export default function RootLayout({ children }: LayoutProps) {
    return <>
        <Header />
        <main className={`${literata.className}`}>
            {children}
        </main>
        <Footer />
    </>
}