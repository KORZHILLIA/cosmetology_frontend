import { useEffect } from 'react';

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";

import { getAuth } from '@/redux/auth/auth-selectors';
import { deleteVisitDateByAdmin, getAllAvailableVisitDates, confirmVisitDateByAdmin } from '@/redux/dates/dates-operations';

import { Role } from "@/constants/interfaces";

import Spinner from '@/components/shared/Spinner/Spinner';
import VisitCard from '@/components/shared/VisitCard/VisitCard';

export default function AdminVisits() {
    const {role, availableVisitDates: allVisits, loading} = useAppSelector(getAuth);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllAvailableVisitDates());
    }, []);

    const onRemoveBtnClick = (dateID: string, role: Role) => {
        dispatch(deleteVisitDateByAdmin({ role, dateID }));
    };

    const onConfirmBtnClick = (dateID: string, role: Role) => {
        dispatch(confirmVisitDateByAdmin({ dateID, role }));
    }

    const elements = [...allVisits].sort((a, b) => a.visitDate.toString().localeCompare(b.visitDate.toString())).map(visit => {
        return <VisitCard key={visit._id} visit={visit} cardType='admin' role={role} btnFunc={visit.client ? onConfirmBtnClick : onRemoveBtnClick} />
    });

    return <>
        {allVisits.length ? <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3">{elements}</ul> : (loading ? null : <h2 className="pt-6 text-center text-2xl md:text-4xl lg:text-6xl font-semibold">No available visit dates yet. Please add them in calendar.</h2>)}
        {loading && <Spinner />}
    </>
}