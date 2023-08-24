import { useState } from 'react';
import Link from 'next/link';
import { Popover } from '@mui/material';

import useAppDispatch from "@/hooks/useAppDispatch";

import { signoutUser } from '@/redux/auth/auth-operations';

import { literata } from '@/public/fonts/fonts';

import Selector from '@/public/assets/svg/selector.svg';
import Signout from '@/public/assets/svg/signout.svg';

interface UserNameAndSignoutProps {
    userName: string;
    userEmail: string;
    linkAddress: string;
    linkLabel: string;
}

export default function UserNameAndSignout({ userName, userEmail, linkAddress, linkLabel}: UserNameAndSignoutProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const onSelectorClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 768) {
            return;
        }
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
  const id = open ? 'logout-popover' : undefined;

    const dispatch = useAppDispatch();

    const onSignoutClick = () => {
        dispatch(signoutUser({ email: userEmail }));
    };

        return (<div className="flex items-center md:gap-x-3 mb-3 md:mb-0 p-2 md:p-3 translate-x-[8px] md:translate-x-0 bg-orange-50">
        <div className="flex items-center gap-x-2 text-semiPale md:cursor-pointer" onClick={onSelectorClick}>
            <p className='pr-2 md:pr-0 border-r border-r-zinc-800 md:border-0'>{userName}</p>
                <span className='md:hidden block text-brand' onClick={onSignoutClick}>Signout</span>
            <Selector className="hidden md:block md:w-[20px] md:h-[20px] md:translate-y-[3px] fill-semiPale" />
        </div>
            <Link href={linkAddress} className='hidden md:block md:pl-3 md:border-l border-l-zinc-800 text-semiPale'>{linkLabel}</Link>
        <Popover className='hidden md:block' id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
        transformOrigin={{vertical: 'top', horizontal: 'left'}} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
            <p className={`p-2 flex items-center gap-x-3  ${literata.className} bg-orange-50 rounded-lg cursor-pointer`} onClick={onSignoutClick}>
                <Signout className="w-[32px] h-[32px] fill-semiPale" />
                <span className='text-xl text-semiPale font-medium'>Signout</span>
            </p>
            </Popover>
    </div>);

}