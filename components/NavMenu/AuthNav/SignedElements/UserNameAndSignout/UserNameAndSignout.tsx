import { useState } from 'react';
import { Popover } from '@mui/material';

import useAppDispatch from "@/hooks/useAppDispatch";

import { signoutUser } from '@/redux/auth/auth-operations';

import { literata } from '@/public/fonts/fonts';

import Selector from '@/public/assets/svg/selector.svg';
import Signout from '@/public/assets/svg/signout.svg';

interface UserNameAndSignoutProps {
    userName: string;
    userEmail: string;
}

export default function UserNameAndSignout({ userName, userEmail }: UserNameAndSignoutProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const onSelectorClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
  const id = open ? 'logout-popover' : undefined;

    const dispatch = useAppDispatch();

    const onSignoutClick = () => {
        dispatch(signoutUser({email: userEmail}));
    }

    return (<div className="relative pr-2 border-r border-r-zinc-800">
        <div className="flex items-center gap-x-3 cursor-pointer" onClick={onSelectorClick}>
            <p>{userName}</p>
            <Selector className="w-[20px] h-[20px] translate-y-[3px] fill-white" />
        </div>
        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
        transformOrigin={{vertical: 'top', horizontal: 'left'}} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
            <p className={`p-2 flex items-center gap-x-3  ${literata.className} bg-slate-400 rounded-lg cursor-pointer`} onClick={onSignoutClick}>
                <Signout className="w-[32px] h-[32px] fill-white" />
                <span className='text-xl text-white font-medium'>Signout</span>
            </p>
            </Popover>
    </div>);
}