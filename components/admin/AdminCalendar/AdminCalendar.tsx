import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';

import useAppDispatch from "@/hooks/useAppDispatch";

import { getAllAvailableVisitDates } from "@/redux/dates/dates-operations";
import getMonthsForAdmin from "@/helpers/getMonthsForAdmin";

import VisitDatesToAdd from "./VisitDatesToAdd/VisitDatesToAdd";

import 'react-day-picker/dist/style.css';

export default function AdminCalendar() {
    const [selected, setSelected] = useState<Date | undefined>();
    const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllAvailableVisitDates());
    }, []);

    const onDayClick = (day: Date | undefined) => {
        setSelected(day);
        setIsPopoverVisible(true);
    };

    const closePopover = () => setIsPopoverVisible(false);

    const { now, toMonth } = getMonthsForAdmin();
    const footer = <p>{ selected ? `You selected ${format(selected, 'PP')}` : 'Please select the day'}</p>
    return <div className="relative">
        <DayPicker mode="single" selected={selected} footer={footer} onSelect={onDayClick} fromDate={now}
            toMonth={toMonth} />
        <div className={`absolute ${isPopoverVisible && selected ? 'scale-y-100 scale-x-100' : 'scale-y-0 scale-x-0'} top-0 left-0 w-[70%] h-[90%] p-2 border rounded-lg backdrop-blur-sm origin-top-left transition-all duration-[200ms] z-10`}>
            <VisitDatesToAdd date={selected} closeFunc={closePopover} />
        </div>
        </div>
}