import type { PastVisitDate } from '@/constants/interfaces';

import PastVisitDates from '../PastVisitDates/PastVisitDates';

interface ClientCardProps {
    name: string;
    email: string,
    pastVisitDates: PastVisitDate[];
    refreshFunc: () => Promise<void>;
}

export default function ClientCard({name, email, pastVisitDates, refreshFunc}: ClientCardProps) {
    return (
        <li className='flex flex-col p-3 rounded-lg bg-brand'>
            <h2 className='mb-3 text-xl text-center font-semibold'>{name}</h2>
            <a className='mb-4 text-lg text-center' href={`mailto:${email}`}>Email: {email}</a>
            <PastVisitDates clientEmail={email} dates={pastVisitDates} refreshFunc={refreshFunc} />
        </li>
    );
}