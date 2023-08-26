
import type { LayoutProps } from '@/constants/interfaces';

import Header from "@/sections/Header/Header";
import Footer from '@/sections/Footer/Footer';

import { literata } from "@/public/fonts/fonts";

export default function RootLayout({ children }: LayoutProps) {
    return <>
        <Header />
        <main className={`${literata.className} min-h-[calc(100vh-100px)]`}>
            {children}
        </main>
        <Footer />
    </>
}