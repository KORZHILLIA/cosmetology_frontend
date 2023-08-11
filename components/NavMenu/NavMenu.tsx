import Link from 'next/link';
import { useRouter } from 'next/router';

import Cross from '@/public/assets/svg/cross.svg';

interface NavMenuProps {
    isVisible: boolean;
    toggleFunc: () => void;
};

export default function NavMenu({ isVisible, toggleFunc }: NavMenuProps) {

    const router = useRouter();
    return (
        <nav className={`${isVisible ? 'right-0' : '-right-[100%]'} fixed md:static top-0 w-screen md:w-auto h-screen md:h-auto flex justify-end md:justify-center z-10 md:z-0 transition-all duration-200 md:transition-none`}>
            <div onClick={toggleFunc} className='w-1/2 h-screen backdrop-blur-sm md:hidden'></div>
            <ul className='w-1/2 md:w-full h-full px-3 py-12 md:p-0 flex flex-col md:flex-row justify-start md:justify-center items-center gap-y-6 md:gap-y-0 md:gap-x-8 text-base md:text-2xl bg-orange-100'>
                <li>
                    <span onClick={() => { toggleFunc(); router.push('/auth/signup')}}>Signup</span>
                </li>
                <li>
                    <Link href='/auth/signin'>Signin</Link>
                </li>
            </ul>
            <div onClick={toggleFunc} className='absolute md:hidden top-3 right-3 w-10 h-10 p-2 flex items-center justify-center'>
                <Cross className='w-10 h-10 fill-brand cursor-pointer' />
            </div>
        </nav>
    );
}