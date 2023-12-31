import Link from 'next/link';

import ArrowRight from '@/public/assets/svg/link-arrow-right.svg';

interface CardProps {
    headerText: string;
    infoText: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    linkLabel: string;
    linkAddress: string;
    styles?: string;
}

export default function Card({headerText, infoText, Icon, linkLabel, linkAddress, styles}: CardProps) {
    return <li className={`py-4 px-8 flex flex-col items-center border bg-orange-50 dark:bg-neutral-800 rounded-lg ${styles}`}>
        <div className='mb-5 p-4 flex justify-center items-center bg-slate-100 dark:bg-slate-600 rounded-full'>
            <Icon className='w-[48px] h-[48px] fill-brand' />
        </div>
        <h2 className='mb-[14px] text-2xl text-center dark:text-white font-medium'>{headerText}</h2>
        <p className='mb-4 text-lg text-center text-semiPale dark:text-pale'>{infoText}</p>
        <div className='flex items-center gap-x-[10px]'>
            <Link className='flex items-center gap-x-2' href={linkAddress}>
            <span className='text-base font-medium dark:text-white underline underline-offset-2 decoration-[0.5px]'>{linkLabel}</span>
                <ArrowRight className='w-[24px] h-[24px] dark:fill-pale' />
                </Link>
        </div>
    </li>
}