import { useState } from 'react';

import NavMenu from '@/components/NavMenu/NavMenu';

import Logo from '@/public/assets/svg/logo.svg';
import MobileMenu from '@/public/assets/svg/mobile-menu.svg';

import { literata } from '@/public/fonts/fonts';

export default function Header() {

    const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

    const toggleNav = (): void => {
        setIsNavVisible(state => !state);
    }
    return <header className={`${literata.className} w-screen md:w-[90%] md:mx-auto p-6 flex justify-between md:rounded-md md:bg-orange-100`}>
        <Logo className="w-10 md:w-14 h-10 md:h-14" />
        <div onClick={toggleNav} className='w-10 h-10 p-2 flex items-center justify-center rounded-md bg-brand cursor-pointer md:hidden'>
            <MobileMenu className='w-6 h-6' />
        </div>
        <NavMenu isVisible={isNavVisible} toggleFunc={toggleNav} />
    </header>
}