import { useState } from "react";

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";

import { addNewDatesByAdmin } from "@/redux/dates/dates-operations";
import { getAuth } from "@/redux/auth/auth-selectors";
import prepareVisitDatesToAdd from "@/helpers/prepareVisitDatesToAdd";

import Button from "@/components/shared/Button/Button";

interface VisitDatesToAddProps {
    date: Date | undefined;
    closeFunc: () => void;
}

export default function VisitDatesToAdd({ date, closeFunc }: VisitDatesToAddProps) {
    const [times, setTimes] = useState<string[]>([]);

    const { role } = useAppSelector(getAuth);
    const dispatch = useAppDispatch();

    const initialHour = date?.getHours();

    const finalVisitDatesArr = [];

    for (let i = 10; i <= 19; i += 1) {
        const id = i;
        const time = initialHour as number + i;
        const el = { id, time: time.toString() + ':00'};
        finalVisitDatesArr.push(el);
    };

    const onTimeBtnClick = (time: string) => {
        const isIdxInState = times.includes(time);
        if (isIdxInState) {
            const requiredIdx = times.findIndex(el => el === time);
            setTimes(prevState => {
                const newState = [...prevState];
                newState.splice(requiredIdx, 1);
                return newState;
            })
        } else {
            setTimes(prevState => {
                return [...prevState, time];
            })
        }
    }

    const onOKBtnClick = () => {
        if (times.length) {
            const dates = prepareVisitDatesToAdd(date as Date, times);
            dispatch(addNewDatesByAdmin({role, dates}));
        }
        setTimes([]);
        closeFunc();
    }
    const elements = finalVisitDatesArr.map(visit => <li key={visit.id} className={`w-[80px] p-2 flex justify-center items-center rounded-lg ${times.includes(visit.time) ? 'bg-zinc-600' : 'bg-neutral-400'} text-white cursor-pointer`} onClick={() => onTimeBtnClick(visit.time)}><span className="text-sm leading-none">{visit.time}</span></li>)
    return (<div>
        <h2 className="text-center text-lg font-semibold">Choose the time</h2>
        <ul className="w-full pt-2 mb-2 flex justify-center flex-wrap gap-2">{elements}</ul>
        <Button type='button' text='OK' centered styles="p-2" onClick={onOKBtnClick} />
    </div>);
 }