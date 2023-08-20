import { VisitCardType } from '@/constants/interfaces';

const defineBtnPropsForVisitCard = (cardType: VisitCardType, isClient?: boolean) => {
  switch (cardType) {
    case 'admin':
      return !isClient
        ? { btnText: 'Remove', btnBgColor: 'bg-slate-400' }
        : { btnText: 'Confirm', btnBgColor: 'bg-yellow-300' };
    case 'clientGeneral':
      return { btnText: 'Reserve', btnBgColor: 'bg-yellow-300' };
    case 'clientPersonal':
      return { btnText: 'Refuse', btnBgColor: '' };
  }
};

export default defineBtnPropsForVisitCard;
