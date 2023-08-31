import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';

import commonNav from '@/data/commonNav.json';

export default function CommonNav() {
    const router = useRouter();
    const pathName = router.pathname;

    const isNotMobile = useMediaQuery('(min-width: 768px)');

    const mobileElements = commonNav.links.map(link => {
        const isPathEqualToAdress = link.linkAddress === pathName;
        return (
            <li key={link.linkAddress} className={`w-full py-3 px-2 ${isPathEqualToAdress ? 'text-brand bg-orange-50 border-l-2 border-l-brand' : 'bg-transparent'} cursor-pointer`} onClick={() => router.push(link.linkAddress)}>
                <span>{link.linkLabel}</span>
            </li>
        );
    });

    return (
            <ul className='pt-6 md:pt-0 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-y-1 md:gap-y-0 md:gap-x-8 text-base md:text-2xl'>
              {mobileElements}
            </ul>
    );
}