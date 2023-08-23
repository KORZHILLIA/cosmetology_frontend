import Card from "../shared/Card/Card";

import Tooth from '@/public/assets/svg/tooth.svg';
import Smile from '@/public/assets/svg/smile.svg';
import Implant from '@/public/assets/svg/implant.svg';

import technologyCards from '@/data/technologyCards.json';

export default function TechnologyCards() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'tooth':
                return Tooth;
            case 'smile':
                return Smile;
            case 'implant':
                return Implant;
        }
    };

    const elements = technologyCards.cards.map(card => <div key={card.headerText} className="keen-slider__slide flex"><Card key={card.headerText} Icon={getIcon(card.icon)} headerText={card.headerText} infoText={card.infoText} linkLabel={card.linkLabel} linkAddress={card.linkAddress} /></div>);

    return elements;
}