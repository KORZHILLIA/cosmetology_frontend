import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from 'date-fns';

import getMonthsForAdmin from "@/helpers/getMonthsForAdmin";

import VisitDatesToAdd from "./VisitDatesToAdd/VisitDatesToAdd";

import visitDatesToAdd from '@/data/visitDatesToAdd.json';
import 'react-day-picker/dist/style.css';

export default function AdminCalendar() {
    const [selected, setSelected] = useState<Date | undefined>(new Date());
    const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);

    const onDayClick = (day: Date | undefined) => {
        setSelected(day);
        setIsPopoverVisible(true);
    };

    const closePopover = () => setIsPopoverVisible(false);

    const { fromMonth, toMonth } = getMonthsForAdmin();
    const footer = <p>{ selected ? `You selected ${format(selected, 'PP')}` : 'Please select the day'}</p>
    return <div className="relative">
        <DayPicker mode="single" selected={selected} footer={footer} onSelect={onDayClick}
            fromMonth={fromMonth} toMonth={toMonth} />
        <div className={`absolute ${isPopoverVisible && selected ? 'scale-y-100 scale-x-100' : 'scale-y-0 scale-x-0'} top-0 left-0 w-[70%] h-[90%] p-2 border rounded-lg backdrop-blur-sm origin-top-left transition-all duration-[800ms] z-10`}><VisitDatesToAdd dates={visitDatesToAdd.visitDates} /></div>
        </div>
}