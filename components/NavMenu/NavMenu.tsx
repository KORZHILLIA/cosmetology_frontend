import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';

import useAppSelector from '@/hooks/useAppSelector';

import { getAuth } from '@/redux/auth/auth-selectors';

import AuthNav from './AuthNav/AuthNav';
import CommonNav from './CommonNav/CommonNav';
import CommonNavTabs from './CommonNav/CommonNavTabs/CommonNavTabs';

import authNav from '@/data/authNav.json';
import commonNav from '@/data/commonNav.json';

import { wix } from '@/public/fonts/fonts';

import Cross from '@/public/assets/svg/cross.svg';

interface NavMenuProps {
    isVisible: boolean;
    toggleFunc: () => void;
};

export default function NavMenu({ isVisible, toggleFunc }: NavMenuProps) {
    const router = useRouter();
    const pathName = router.pathname;
    const isNotMobile = useMediaQuery('(min-width: 768px)');

    const { role } = useAppSelector(getAuth);

    const commonLinksArr = commonNav.links.filter(link => link.id !== 'user' && link.id !== 'admin');
    const signedLinksArr = !role ? commonLinksArr : commonNav.links.filter(link => link.id !== role);

    return (
        <nav className={`${wix.className} ${isVisible ? 'right-0' : '-right-[100%]'} fixed md:static top-0 w-screen md:w-full h-screen md:h-auto flex justify-end md:justify-center md:items-center z-20 md:z-0 transition-all duration-100 md:transition-none`}>
            <div onClick={toggleFunc} className='w-1/2 h-screen bg-slate-100/90 dark:bg-neutral-800/90 md:hidden'></div>
            <div className='w-1/2 md:w-full h-full md:flex md:justify-around md:items-center py-14 md:p-0 bg-orange-100 dark:bg-neutral-700 md:dark:bg-neutral-800'>
                <AuthNav onClick={toggleFunc} notSignedArr={authNav.authBtns} adminArr={authNav.adminNav} userArr={authNav.userNav} />
                {isNotMobile ? <CommonNavTabs linksArr={signedLinksArr} router={router} pathName={pathName} /> : <CommonNav linksArr={commonLinksArr} router={router} pathName={pathName} onClick={toggleFunc} />}
            </div>
            <div onClick={toggleFunc} className='absolute md:hidden top-3 right-3 w-10 h-10 p-2 flex items-center justify-center'>
                <Cross className='w-10 h-10 fill-brand cursor-pointer' />
            </div>
        </nav>
    );
}