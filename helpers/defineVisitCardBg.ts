import { VisitCardType } from '@/constants/interfaces';

const defineVisitCardBg = (cardType: VisitCardType, isClient: boolean, isConfirmed: boolean) => {
  switch (cardType) {
    case 'admin':
      return isClient ? (isConfirmed ? 'bg-emerald-300' : 'bg-slate-400') : 'bg-slate-300';
    // return isClient && !isConfirmed
    //   ? 'bg-emerald-300'
    //   : isClient && isConfirmed
    //   ? 'bg-sky-800'
    //   : 'bg-slate-300';
    case 'clientGeneral':
      return 'bg-emerald-300';
    case 'clientPersonal':
      return isConfirmed ? 'bg-emerald-300' : 'bg-yellow-300';
  }
};

export default defineVisitCardBg;
