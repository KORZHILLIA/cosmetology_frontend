import defineVisitCardBg from "@/helpers/defineVisitCardBg";
import prepareDateForVisitCard from "@/helpers/prepareDateForVisitCard";
import defineBtnPropsForVisitCard from "@/helpers/defineBtnPropsForVisitCard";

import type { AvailableVisitDate, FutureVisitDate, VisitCardType, Role } from "@/constants/interfaces";

import Button from "../Button/Button";
import Checkmark from '@/public/assets/svg/checkmark.svg';

interface VisitCardProps {
    visit: AvailableVisitDate;
    cardType: VisitCardType;
    role: Role;
    btnFunc: (visitID: string, role: Role) => void;
}

export default function VisitCard({ visit, cardType, role, btnFunc }: VisitCardProps) {
    const isClient = Boolean(visit.client);
    const isConfirmed = visit.isConfirmed;
    const cardBg = defineVisitCardBg(cardType, isClient, isConfirmed);
    const { date, time } = prepareDateForVisitCard(visit.visitDate);
    const { btnText, btnBgColor } = defineBtnPropsForVisitCard(cardType, isClient);
    return (<li key={visit._id} className={`p-3 flex justify-between items-center gap-x-6
    ${cardBg}
    rounded-lg`}>
            <div className='flex flex-col align-start text-lg text-white font-semibold'>
            <span>{date}</span>
            <span>{time}</span>
            {cardType === 'admin' && isClient && <span>{visit.client?.name}</span>}
            </div>
            {cardType === 'admin' && !isClient && <Button type='button' text={btnText} styles='p-2 md:p-3 text-lg md:text-xl lg:text-2xl text-white' bgColor={btnBgColor} onClick={() => btnFunc(visit._id, role)} />}
        {cardType === 'admin' && isClient ? (!isConfirmed ? <Button type='button' text={btnText} styles='p-2 md:p-3 text-lg md:text-xl lg:text-2xl text-white' bgColor={btnBgColor} onClick={() => btnFunc(visit._id, role)} /> : <Checkmark className='w-[50px] h-[50px] fill-emerald-600' />) : null}
        {cardType !== 'admin' && <Button type='button' text={btnText} styles='p-2 md:p-3 text-lg md:text-xl lg:text-2xl text-white' bgColor={btnBgColor} onClick={() => btnFunc(visit._id, role)} />}
        
    </li>);
}

// ${cardType === 'admin' ? (isClient ? (isConfirmed ? 'bg-emerald-300' : 'bg-slate-400') : 'bg-slate-300') : (cardType === 'clientPersonal' ? (isConfirmed ? 'bg-emerald-300' : 'bg-yellow-300') : 'bg-emerald-300')}