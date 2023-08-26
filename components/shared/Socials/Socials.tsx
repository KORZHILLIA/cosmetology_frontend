import Facebook from '@/public/assets/svg/facebook.svg';
import Instagram from '@/public/assets/svg/instagram.svg';
import Telegram from '@/public/assets/svg/telegram.svg';

export default function Socials() {
    return (
        <ul className='inline-flex items-center gap-x-3 pt-3 border-t border-t-semiPale md:border-t-0'>
            <li>
                <a className='block p-2 bg-header rounded-full' href='https://www.facebook.com' target="_blank" rel="noopener noreferrer nofollow">
                    <Facebook className='w-[16px] md:w-[20px] h-[16px] md:h-[20px] fill-white' />
                </a>
            </li>
            <li>
                <a className='block p-2 bg-header rounded-full' href='https://www.instagram.com' target="_blank" rel="noopener noreferrer nofollow">
                    <Instagram className='w-[16px] md:w-[20px] h-[16px] md:h-[20px] fill-white' />
                </a>
            </li>
            <li>
                <a className='block p-2 bg-header rounded-full' href='https://www.t.me' target="_blank" rel="noopener noreferrer nofollow">
                    <Telegram className='w-[16px] md:w-[20px] h-[16px] md:h-[20px] fill-white' />
                </a>
            </li>
        </ul>
    );
}