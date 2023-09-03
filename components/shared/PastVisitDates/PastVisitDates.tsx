import { useState } from 'react';
import { useRouter } from 'next/router';
import { Popover } from '@mui/material';
import { AxiosError } from 'axios';
import {useSession, signOut} from 'next-auth/react'

import useAppSelector from '@/hooks/useAppSelector';

import { getAuth } from '@/redux/auth/auth-selectors';
import { postConfirm } from '@/service/externalApi';
import extractAxiosError from '@/helpers/extractAxiosError';
import notificate from '@/helpers/notificate';

import type { PastVisitDate, Role } from "@/constants/interfaces";

import Selector from '@/public/assets/svg/selector.svg';

import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';

interface PastVisitDateProps {
    clientEmail: string;
    dates: PastVisitDate[];
    refreshFunc: () => Promise<void>;
}

export default function PastVisitDates({ clientEmail, dates, refreshFunc }: PastVisitDateProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const session = useSession();

    const router = useRouter();

    const { role } = useAppSelector(getAuth);

    const onSelectorClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onConfirmBtnClick = async (role: Role, email: string, date: Date) => {
        setLoading(true);
        try {
            const status = await postConfirm(role, email, date);
            setLoading(false);
            if (status === 201) {
                refreshFunc();
            }
        } catch (error) {
            const { status, message } = extractAxiosError(error as AxiosError);
            setError(message);
            if (status === 401) {
                if (session) {
                    signOut({ callbackUrl: '/auth/signin' });
                } else {
                    router.replace('/auth/signin');
                }
            }
        }
    }

    const open = Boolean(anchorEl);
    const id = open ? 'pastvisitdates-popover' : undefined;
    
    const elements = dates?.filter(date => new Date().toISOString() > new Date(date.date).toISOString() ).map((date, idx) => <li key={idx} className={`p-2 ${date.postConfirmed ? 'bg-green-400' : 'bg-green-200'}`}>
        <div className='flex items-center gap-x-4'>
            <span>{new Date(date.date).toLocaleString()}</span>
            {!date.postConfirmed && <Button type='button' text='Confirm' styles='p-3' bgColor='bg-slate-100' onClick={() => onConfirmBtnClick(role, clientEmail, date.date)} />}
        </div>
    </li>);

    return (
        <div className="mx-auto p-2 rounded-full border bg-transparent">
            <div className="flex items-center gap-x-4 cursor-pointer" onClick={onSelectorClick}>
                <span>Past dates</span>
                <Selector className='w-[20px] h-[20px] fill-white' />
            </div>
            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} transformOrigin={{vertical: 'top', horizontal: 'left'}} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                {elements.length ? <ul className='flex flex-col gap-y-2'>{elements}</ul> : <p className='text-lg text-white'>No past dates yet</p>}
            </Popover>
            {loading && <Spinner />}
            {error && notificate('error', error)}
        </div>
    );
 }