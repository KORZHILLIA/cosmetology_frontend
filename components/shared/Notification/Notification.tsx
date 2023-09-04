import type { ToastKind } from '@/constants/interfaces';

import Checkmark from '@/public/assets/svg/checkmark-circle.svg';
import ExclamationMarkTriangle from '@/public/assets/svg/exclamation-mark-triangle.svg';
import ExclamationMarkCircle from '@/public/assets/svg/exclamation-mark-circle.svg';

import { wix } from '@/public/fonts/fonts';

interface NotificationProps {
    kind: ToastKind;
    label: string;
}

export default function Notification({ kind, label }: NotificationProps) {
    const getIcon = () => {
        switch (kind) {
            case 'success':
                return {Icon: Checkmark, color: 'fill-white', bgColor: 'bg-green-400'};
            case 'warning':
                return {Icon: ExclamationMarkTriangle, color: 'fill-white', bgColor: 'bg-yellow-400'};
            case 'error':
                return {Icon: ExclamationMarkCircle, color: 'fill-white', bgColor: 'bg-[#f25137]'};
        }
    }

    const {Icon, color, bgColor} = getIcon();
    return (
        <div className={`${bgColor} flex justify-start items-center gap-x-4`}>
            <Icon className={`w-12 h-12 ${color}`} />
            <span className={`${wix.className} text-base font-semibold text-white`}>{label}</span>
        </div>
    );
}