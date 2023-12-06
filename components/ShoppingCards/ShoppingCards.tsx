import {ReactNode} from 'react';

import ShoppingCard from "../ShoppingCard/ShoppingCard";

import Priorin from '@/public/assets/img/shop/priorin-1.jpg';
import Priorin_1 from '@/public/assets/img/shop/priorin-2.jpg';
import IronMax from '@/public/assets/img/shop/ironmax-1.jpg';
import IronMax_1 from '@/public/assets/img/shop/ironmax-2.jpg';

import shoppingCards from '@/data/shoppingCards.json';

interface ShoppingCardsProps {
    modalWindowToggler: (text: string, images: ReactNode[]) => void;
}

export default function ShoppingCards({modalWindowToggler}: ShoppingCardsProps) {
    const getImageLink = (link: string) => {
        switch (link) {
            case 'priorin':
                return [Priorin, Priorin_1];
            case 'ironmax':
                return [IronMax, IronMax_1];
        }
    }

    const elements = shoppingCards.cards.map(card => {
        return (
            <ShoppingCard
            key={card.id}
            headerText={card.headerText}
            shortText={card.shortText}
            fullText={card.fullText}
            course={card.course}
            price={card.price}
            imageLinks={getImageLink(card.imageLink)!}
            cardClickHandler={modalWindowToggler}
            />
        );
    });
    return (
        <ul className="flex flex-col gap-y-3">
            {elements}
        </ul>
    );
}