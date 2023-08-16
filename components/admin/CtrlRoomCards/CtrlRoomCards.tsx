import Card from "@/components/shared/Card/Card";

import Calendar from '@/public/assets/svg/calendar.svg';
import Visits from '@/public/assets/svg/visits.svg';

import ctrlRoomCards from '@/data/ctrlRoomCards.json';

export default function CtrlRoomCards() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'calendar':
                return Calendar;
            case 'visits':
                return Visits;
        }
    }
    const elements = ctrlRoomCards.cards.map(card => <Card key={card.headerText} Icon={getIcon(card.icon)} headerText={card.headerText} infoText={card.infoText} linkLabel={card.linkLabel} linkAddress={card.linkAddress} />);
    return (<ul className="flex md:grid flex-col md:grid-cols-2 gap-y-2 md:gap-x-3">{elements}</ul>);
}