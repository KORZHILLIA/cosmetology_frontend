import { useState } from 'react';
import Link from 'next/link';

import NavMenu from '@/components/NavMenu/NavMenu';

import Logo from '@/public/assets/svg/logo.svg';
import MobileMenu from '@/public/assets/svg/mobile-menu.svg';

import { literata } from '@/public/fonts/fonts';

export default function Header() {

    const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

    const toggleNav = (): void => {
        setIsNavVisible(state => !state);
    }
    // return <header className={`${literata.className} fixed top-0 left-0 w-screen md:p-5 md:pb-0 flex justify-between items-center backdrop-blur-sm z-10`}>
    //     <div className='container p-6 md:p-3 flex justify-between items-center md:rounded-md md:bg-orange-100 dark:md:bg-neutral-800'>
    //         <Link href='/'>
    //         <Logo className="w-10 md:w-14 h-10 md:h-14" />
    //         </Link>
    //         <span className='block max-w-[140px] md:ml-1 text-sm text-center uppercase font-semibold dark:text-white'>Естет-кабінет Тетяни Корж</span>
    //     <div onClick={toggleNav} className='w-10 h-10 p-2 flex items-center justify-center rounded-md bg-brand cursor-pointer md:hidden'>
    //         <MobileMenu className='w-6 h-6 fill-white' />
    //     </div>
    //     <NavMenu isVisible={isNavVisible} toggleFunc={toggleNav} />
    //     </div>
    // </header>
    return <header className={`${literata.className} fixed top-0 left-0 w-screen md:p-5 md:pb-0 flex justify-between items-center backdrop-blur-sm z-10`}>
        <div className='container p-6 md:p-3 flex justify-between items-center md:rounded-md md:bg-orange-100 dark:md:bg-neutral-800'>
            <Link href='/'>
            <Logo className="w-10 md:w-14 h-10 md:h-14" />
            </Link>
            <span className='block max-w-[140px] md:max-lg:max-w-[200px] md:ml-1 text-sm md:max-lg:text-lg text-center uppercase font-semibold dark:text-white'>Естет-кабінет Тетяни Корж</span>
        <div onClick={toggleNav} className='w-10 h-10 p-2 flex items-center justify-center rounded-md bg-brand cursor-pointer lg:hidden'>
            <MobileMenu className='w-6 h-6 fill-white' />
        </div>
        <NavMenu isVisible={isNavVisible} toggleFunc={toggleNav} />
        </div>
    </header>
}