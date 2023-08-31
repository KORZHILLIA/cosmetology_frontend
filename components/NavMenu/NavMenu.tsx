import { useMediaQuery } from '@mui/material';

import AuthNav from './AuthNav/AuthNav';
import CommonNav from './CommonNav/CommonNav';
import CommonNavTabs from './CommonNav/CommonNavTabs/CommonNavTabs';

import authNav from '@/data/authNav.json';

import Cross from '@/public/assets/svg/cross.svg';

interface NavMenuProps {
    isVisible: boolean;
    toggleFunc: () => void;
};

export default function NavMenu({ isVisible, toggleFunc }: NavMenuProps) {
    const isNotMobile = useMediaQuery('(min-width: 768px)');

    return (
        <nav className={`${isVisible ? 'right-0' : '-right-[100%]'} fixed md:static top-0 w-screen md:w-full h-screen md:h-auto flex justify-end md:justify-center md:items-center z-20 md:z-0 transition-all duration-200 md:transition-none`}>
            <div onClick={toggleFunc} className='w-1/2 h-screen bg-slate-100/90 md:hidden'></div>
            <div className='w-1/2 md:w-full h-full md:flex md:justify-around py-14 md:p-0 bg-orange-100'>
                <AuthNav onClick={toggleFunc} notSignedArr={authNav.authBtns} adminArr={authNav.adminNav} userArr={authNav.userNav} />
                {isNotMobile ? <CommonNavTabs /> : <CommonNav />}
            </div>
            <div onClick={toggleFunc} className='absolute md:hidden top-3 right-3 w-10 h-10 p-2 flex items-center justify-center'>
                <Cross className='w-10 h-10 fill-brand cursor-pointer' />
            </div>
        </nav>
    );
}