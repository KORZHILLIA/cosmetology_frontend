import { useState } from "react";

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";

import { addNewDatesByAdmin } from "@/redux/dates/dates-operations";
import { getAuth } from "@/redux/auth/auth-selectors";
import { getAvailableDates } from "@/redux/dates/dates-selectors";
import prepareVisitTimesToAdd from "@/helpers/prepareVisitTimesToAdd";
import prepareVisitDatesToAdd from "@/helpers/prepareVisitDatesToAdd";
import defineMatchingTimes from "@/helpers/defineMatchingTimes";

import Button from "@/components/shared/Button/Button";

interface VisitDatesToAddProps {
    date: Date | undefined;
    closeFunc: () => void;
}

export default function VisitDatesToAdd({ date, closeFunc }: VisitDatesToAddProps) {
    const [times, setTimes] = useState<string[]>([]);

    const { role } = useAppSelector(getAuth);
    const dates = useAppSelector(getAvailableDates);
    const dispatch = useAppDispatch();

    const initialHour = date?.getHours();

    const finalVisitDatesArr = prepareVisitTimesToAdd(initialHour as number);

    const matchingTimes = defineMatchingTimes(dates, date as Date);

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
    const elements = finalVisitDatesArr.map(visit => {
        const isVisitTimeAlreadyBooked = matchingTimes.includes(visit.time);
        const isVisitTimeAlreadyInState = times.includes(visit.time);
        return <li key={visit.id} className={`w-[80px] md:w-[100px] p-2 md:p-2 flex justify-center items-center rounded-lg ${isVisitTimeAlreadyInState ? 'bg-zinc-600' : 'bg-neutral-400'} ${isVisitTimeAlreadyBooked && 'cursor-default pointer-events-none bg-zinc-900'} text-white cursor-pointer`} onClick={() => onTimeBtnClick(visit.time)}><span className="text-sm md:text-xl leading-none">{visit.time}</span></li>
    });
    return (<div>
        <h2 className="text-center text-lg sm:text-2xl md:text-4xl font-semibold">Choose the time</h2>
        <ul className="w-full pt-2 md:pt-6 mb-2 md:mb-4 flex justify-center flex-wrap gap-2">{elements}</ul>
        <Button type='button' text='OK' centered styles="md:w-[100px] p-2 md:text-xl" onClick={onOKBtnClick} />
    </div>);
 }