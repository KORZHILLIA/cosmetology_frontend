import { useState } from 'react';

import useAppDispatch from "@/hooks/useAppDispatch";

import { signoutUser } from '@/redux/auth/auth-operations';

import Selector from '@/public/assets/svg/selector.svg';
import Signout from '@/public/assets/svg/signout.svg';

interface UserNameAndSignoutProps {
    userName: string;
    userEmail: string;
}

export default function UserNameAndSignout({ userName, userEmail }: UserNameAndSignoutProps) {
    const [isSignoutVisible, setIsSignoutVisible] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const toggleSignout = () => setIsSignoutVisible(state => !state);

    const onSignoutClick = () => {
        dispatch(signoutUser({email: userEmail}));
    }

    return (<div className="relative pr-2 border-r border-r-zinc-800">
        <div className="flex gap-x-2 cursor-pointer" onClick={toggleSignout}>
            <p>{userName}</p>
            <Selector className="w-[32px] h-[32px] fill-white rotate-180" />
        </div>
        <div className={`${isSignoutVisible ? 'block' : 'hidden'} absolute -bottom-[70px] -left-[12px] p-3 flex items-center gap-x-3 bg-slate-400 rounded-lg cursor-pointer`} onClick={onSignoutClick}>
            <Signout className="w-[32px] h-[32px] fill-white" />
            <p>Signout</p>
        </div>
    </div>);
}