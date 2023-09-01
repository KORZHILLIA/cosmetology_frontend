import type { NextRouter } from 'next/dist/client/router';

import type { NavInstance } from '@/constants/interfaces';


interface CommonNavProps {
    linksArr: NavInstance[];
    router: NextRouter;
    pathName: string;
    onClick: () => void;
}

export default function CommonNav({linksArr, router, pathName, onClick}: CommonNavProps) {
    const mobileElements = linksArr.map(link => {
        const isPathEqualToAdress = link.address === pathName;
        return (
            <li key={link.address} className={`w-full py-3 px-2 ${isPathEqualToAdress ? 'text-brand bg-orange-50 border-l-2 border-l-brand' : 'bg-transparent'} cursor-pointer`} onClick={() => { router.push(link.address); onClick(); }}>
                <span>{link.text}</span>
            </li>
        );
    });

    return (
            <ul className='pt-6 md:pt-0 flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-y-1 md:gap-y-0 md:gap-x-8 text-base md:text-2xl'>
              {mobileElements}
            </ul>
    );
}