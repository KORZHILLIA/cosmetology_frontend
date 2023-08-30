import { toast, Id } from 'react-toastify';

type toastKind = 'success' | 'error' | 'warning';

const notificate = (toastKind: toastKind, text: string): Id => {
  const toastSetup = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: true,
  };

  return toast[toastKind](text, toastSetup);
};

export default notificate;
