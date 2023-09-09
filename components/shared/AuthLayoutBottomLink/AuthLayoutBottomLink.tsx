import Link from "next/link";
import { useRouter } from "next/router";

import { wix } from "@/public/fonts/fonts";

export default function AuthLayoutBottomLink() {
    const router = useRouter();
    const pathName = router.pathname;

    const text = pathName.includes('signup') ? 'Have account?' : 'Not member yet?';
    const linkAddress = pathName.includes('signup') ? '/auth/signin' : '/auth/signup';
    const linkText = pathName.includes('signup') ? 'Sign In' : 'Create an account';
    return (
        <div className='flex justify-center items-center gap-x-2 mt-4'>
            <span className={`${wix.className} text-sm md:text-lg leading-none font-medium dark:text-pale`}>{text}</span>
            <Link href={linkAddress} className={`${wix.className} text-sm md:text-lg leading-none font-medium dark:text-pale underline underline-offset-2 decoration-[0.5px]`}>{linkText}</Link>
        </div>
    );
}