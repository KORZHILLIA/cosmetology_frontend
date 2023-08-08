import { useState } from 'react';

import NavMenu from '@/components/NavMenu/NavMenu';

import Logo from '@/public/assets/svg/logo.svg';
import MobileMenu from '@/public/assets/svg/mobile-menu.svg';

export default function Header() {

    const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

    const toggleNav = (): void => {
        setIsNavVisible(state => !state);
    }
    return <header className='w-screen md:w-[90%] md:mx-auto p-6 flex justify-between font-literata md:rounded-md md:bg-orange-100'>
        <Logo className="w-10 md:w-14 h-10 md:h-14" />
        <div onClick={toggleNav} className='w-10 h-10 p-2 flex items-center justify-center rounded-md bg-brand md:hidden'>
            <MobileMenu className='w-6 h-6' />
        </div>
        <NavMenu isVisible={isNavVisible} toggleFunc={toggleNav} />
    </header>
}