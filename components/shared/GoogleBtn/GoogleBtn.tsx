import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

import { wix } from '@/public/fonts/fonts';

import GoogleIcon from '@/public/assets/svg/google.svg';

export default function GoogleBtn() {
    const router = useRouter();
    const pathName = router.pathname;
    const btnLabel = pathName.includes('signup') ? 'Signup' : 'Signin';
    return (
        <button className='w-full flex justify-center items-center p-4 bg-transparent border border-brand rounded-lg' onClick={() => signIn('google')}>
            <GoogleIcon className='w-[28px] h-[28px] mr-4' />
            <span className={`${wix.className} text-sm lg:text-lg font-semibold lg:font-normal leading-none`}>{`${btnLabel} with Google`}</span>
        </button>);
}