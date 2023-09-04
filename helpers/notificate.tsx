import { toast, Id } from 'react-toastify';

import type { ToastKind } from '@/constants/interfaces';

import Notification from '@/components/shared/Notification/Notification';



const notificate = (toastKind: ToastKind, text: string): Id => {
  const toastSetup = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: true,
    icon: false,
  };

  return toast[toastKind](<Notification kind={toastKind} label={text} />, toastSetup);
};

export default notificate;
