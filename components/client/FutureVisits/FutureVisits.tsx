import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";

import { getAuth } from '@/redux/auth/auth-selectors';
import { refuseDateByUser } from "@/redux/auth/auth-operations";

import extractDateParameters from "@/helpers/extractDateParameters";
import prepareDateForVisitCard from "@/helpers/prepareDateForVisitCard";

import type { Role } from "@/constants/interfaces";

import Button from "@/components/shared/Button/Button";
import Spinner from "@/components/shared/Spinner/Spinner";

export default function FutureVisits() {
    const { role, futureVisitDates, loading } = useAppSelector(getAuth);

    const dispatch = useAppDispatch();

    const onRefuseBtnClick = async (dateID: string, role: Role) => {
        await dispatch(refuseDateByUser({ dateID, role }));
    }

    const elements = futureVisitDates.map(visit => {
        const { date, time } = prepareDateForVisitCard(visit.visitDate);
        const { month: visitMonth, day: visitDay, hour: visitHour } = extractDateParameters(visit.visitDate);
        const { month: nowMonth, day: nowDay, hour: nowHour } = extractDateParameters(new Date());
        const isRefusionAllowed = visitMonth !== nowMonth ? true : (visitDay !== nowDay ? true : (visitHour - nowHour > 2 ? true : false));
        
        return <li key={visit._id} className={`p-3 flex justify-between items-center gap-x-2 ${visit.isConfirmed ? 'bg-emerald-300' : 'bg-yellow-300'} rounded-lg`}>
            <div className="flex flex-col align-start text-lg text-white font-semibold">
                <span>{date}</span>
                <span>{time}</span>
                <span>{!visit.isConfirmed ? 'Waits for confirmation' : 'Confirmed'}</span>
            </div>
            { isRefusionAllowed && <Button type='button' text='Refuse' styles="p-2 md:p-3 text-lg md:text-xl lg:text-2xl text-white" onClick={() => onRefuseBtnClick(visit._id, role)} />}
        </li>
    });

    return (<>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3">{elements}</ul>
    {loading && <Spinner />}
    </>);
}