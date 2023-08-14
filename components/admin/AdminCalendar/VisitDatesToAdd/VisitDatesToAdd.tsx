import { useState } from "react";

import Button from "@/components/shared/Button/Button";

type VisitDateToAdd = { id: number, text: string };

interface VisitDatesToAddProps {
    dates: VisitDateToAdd[];
}

export default function VisitDatesToAdd({ dates }: VisitDatesToAddProps) {
    const [times, setTimes] = useState<number[]>([]);

    const finalVisitDatesArr = [];
    for (let i = 0; i <= 9; i += 1) {
        const id = dates[0].id + i;
        const time = parseInt(dates[0].text.split(':')[0]) + i;
        const el = { id, time};
        finalVisitDatesArr.push(el);
    };

    const onTimeBtnClick = (time: number) => {
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
    const elements = finalVisitDatesArr.map(visit => <li key={visit.id}><Button type='button' text={String(visit.time) + ':00'} styles="p-[6px] text-sm" onClick={() => onTimeBtnClick(visit.time)} /></li>)
    return (<div>
        <h2 className="text-center text-md">Choose the time</h2>
        <ul className="w-full pt-2 mb-2 flex justify-center flex-wrap gap-2">{elements}</ul>
        <Button type='button' text='OK' centered styles="py-1 px-2" />
    </div>);
 }