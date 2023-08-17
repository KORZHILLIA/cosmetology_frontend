import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";

import { getAvailableDates } from "@/redux/dates/dates-selectors";
import { getAuth } from '@/redux/auth/auth-selectors';
import { deleteVisitDateByAdmin } from '@/redux/dates/dates-operations';

import { Role } from "@/constants/interfaces";

import Button from "@/components/shared/Button/Button";

export default function Visits() {
    const allVisits = useAppSelector(getAvailableDates);

    const dispatch = useAppDispatch();

    const { role } = useAppSelector(getAuth)

    const onRemoveBtnClick = (dateID: string, role: Role) => {
        dispatch(deleteVisitDateByAdmin({role, dateID}));
    }

    const elements = [...allVisits].sort((a, b) => a.visitDate.toString().localeCompare(b.visitDate.toString())).map(visit => <li key={visit._id} className="p-3 flex justify-center items-center gap-x-2 bg-slate-300 rounded-lg">
        <span className="text-lg text-white font-semibold">{new Date(visit.visitDate).toLocaleString()}</span>
        <Button type='button' text='Remove'  styles='p-2 text-lg text-white' bgColor="bg-slate-400" onClick={() => onRemoveBtnClick(visit._id, role)} />
    </li>);

    return allVisits.length ? <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3">{elements}</ul> : <h2 className="pt-6 text-center text-2xl md:text-4xl lg:text-6xl font-semibold">No available visit dates yet. Please add them in calendar.</h2>
}