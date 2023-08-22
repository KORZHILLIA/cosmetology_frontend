import useAppSelector from "@/hooks/useAppSelector";

import { getAuth } from "@/redux/auth/auth-selectors";

import prepareDateForVisitCard from "@/helpers/prepareDateForVisitCard";

export default function PastVisits() {
    const { pastVisitDates } = useAppSelector(getAuth);
    
    const elements = pastVisitDates.filter(date => date.postConfirmed).map(visitDate => {
        const { date, time } = prepareDateForVisitCard(visitDate.date);
        return (
            <li key={visitDate.date.toString()} className="p-3 flex flex-col bg-lime-400 rounded-lg text-lg text-white text-center font-semibold">
                <span>{date}</span>
                <span>{time}</span>
            </li>);
    });

    return (elements.length ? <ul className="grid grid-cols-2 gap-x-3 gap-y-3">{elements}</ul> : <h2>No past visits yet</h2>);
}