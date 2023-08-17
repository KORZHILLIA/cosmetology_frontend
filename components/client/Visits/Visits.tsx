import { useEffect } from 'react';

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";

import { getDates } from "@/redux/dates/dates-selectors";
import { reserveVisitDateByUser } from '@/redux/dates/dates-operations';
import { getAuth } from '@/redux/auth/auth-selectors';
import {getAllAvailableVisitDates} from '@/redux/dates/dates-operations';

import { Role } from "@/constants/interfaces";

import Button from "@/components/shared/Button/Button";
import Spinner from '@/components/shared/Spinner/Spinner';

export default function ClientVisits() {
    const {availableVisitDates: allVisits, loading} = useAppSelector(getDates);

    const dispatch = useAppDispatch();

    const { role } = useAppSelector(getAuth);

    useEffect(() => {
        dispatch(getAllAvailableVisitDates());
    }, []);

    const onReserveBtnClick = (role: Role, dateID: string) => {
        dispatch(reserveVisitDateByUser({role, dateID}));
    }

    const elements = [...allVisits].filter(visit => !visit.client).sort((a, b) => a.visitDate.toString().localeCompare(b.visitDate.toString())).map(visit => {
        return (<li key={visit._id} className={`p-3 flex justify-center items-center gap-x-2 bg-emerald-300 rounded-lg`}>
        <span className="text-lg text-white font-semibold">{new Date(visit.visitDate).toLocaleString()}</span>
            <Button type='button' text='Reserve' styles='p-2 md:p-3 text-lg md:text-xl lg:text-2xl text-white' bgColor="bg-yellow-300" onClick={() => onReserveBtnClick(role, visit._id)} />
    </li>)});

    return <>
        {allVisits.length ? <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3">{elements}</ul> : <h2 className="pt-6 text-center text-2xl md:text-4xl lg:text-6xl font-semibold">No available visit dates yet.</h2>}
        {loading && <Spinner />}
    </>
}