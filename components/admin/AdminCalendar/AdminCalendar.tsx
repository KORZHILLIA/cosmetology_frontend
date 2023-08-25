import { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import {uk} from 'date-fns/locale';

import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";

import { getAllAvailableVisitDates } from "@/redux/dates/dates-operations";
// import {getDates } from '@/redux/dates/dates-selectors';
import { getAuth } from "@/redux/auth/auth-selectors";
import getMonthsForAdmin from "@/helpers/getMonthsForAdmin";
import defineMatchingDates from "@/helpers/defineMatchingDates";

import VisitDatesToAdd from "./VisitDatesToAdd/VisitDatesToAdd";

import bookedStyles from "@/constants/calendarBookedStyles";
import 'react-day-picker/dist/style.css';

export default function AdminCalendar() {
    const [selected, setSelected] = useState<Date | undefined>();
    const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);
    const {availableVisitDates: bookedDaysInRedux} = useAppSelector(getAuth);
    
    const dispatch = useAppDispatch();

    const matchingDates = defineMatchingDates(bookedDaysInRedux);

    useEffect(() => {
        dispatch(getAllAvailableVisitDates());
    }, []);

    const onDayClick = (day: Date | undefined) => {
        setSelected(day);
        setIsPopoverVisible(true);
    };

    const closePopover = () => {
        setIsPopoverVisible(false);
        setSelected(undefined);
    };

    const { now, toMonth } = getMonthsForAdmin();
    
    const footer = <p className="mt-3 text-xl">{selected ? `You selected ${format(selected, 'PP')}` : 'Please select the day'}</p>
    
    return <div className="relative w-full md:max-w-[600px] xl:max-w-[800px] mx-auto">
        <DayPicker mode="single" selected={selected} footer={footer} onSelect={onDayClick} fromDate={now}
            toMonth={toMonth} locale={uk} modifiers={{booked: matchingDates}} modifiersStyles={{booked: bookedStyles}} />
        <div className={`absolute ${isPopoverVisible && selected ? 'scale-y-100 scale-x-100' : 'scale-y-0 scale-x-0'} top-0 left-0 w-[70%] md:w-[80%] h-[90%] p-2 border rounded-lg backdrop-blur-sm origin-top-left transition-all duration-[200ms]`}>
            <VisitDatesToAdd date={selected} closeFunc={closePopover} />
        </div>
        </div>
}