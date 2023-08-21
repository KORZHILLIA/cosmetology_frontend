import { useState } from 'react';
import { Popover } from '@mui/material';

import useAppSelector from '@/hooks/useAppSelector';

import { getAuth } from '@/redux/auth/auth-selectors';
import { postConfirm } from '@/service/externalApi';

import type { PastVisitDate, Role } from "@/constants/interfaces";

import Selector from '@/public/assets/svg/selector.svg';

import Button from '../Button/Button';

interface PastVisitDateProps {
    clientEmail: string;
    dates: PastVisitDate[];
}

export default function PastVisitDates({ clientEmail, dates }: PastVisitDateProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const { role } = useAppSelector(getAuth);

    const onSelectorClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onConfirmBtnClick = async (role: Role, email: string, date: string) => {
        await postConfirm(role, email, date);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'pastvisitdates-popover' : undefined;
    
    const elements = dates?.map((date, idx) => <li key={idx} className={`p-2 ${date.postConfirmed ? 'bg-green-400' : 'bg-green-200'}`}>
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
                <ul className='flex flex-col gap-y-2'>{elements}</ul>
                </Popover>
        </div>
    );
 }