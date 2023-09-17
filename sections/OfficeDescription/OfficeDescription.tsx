import OfficeDescriptionCard from "@/components/shared/OfficeDescriptionCard/OfficeDescriptionCard";

import officeDescription from '@/data/officeDescriptionCard.json';

import Location from '@/public/assets/svg/location.svg';
import Telephone from '@/public/assets/svg/telephone.svg';
import Email from '@/public/assets/svg/mail.svg';
import Telegram from '@/public/assets/svg/telegram.svg';
import Instagram from '@/public/assets/svg/instagram.svg';

export default function OfficeDescription() {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'location':
                return Location;
            case 'telephone':
                return Telephone;
            case 'email':
                return Email;
            case 'telegram':
                return Telegram;
            case 'instagram':
                return Instagram;
        }
    };
        
        const elements = officeDescription.cards.map(card => {
            const Icon = getIcon(card.icon);
            return <OfficeDescriptionCard key={card.id} Icon={Icon} headerText={card.headerText} infoText={card.infoText} isLink={card.isLink} href={card.href} />
        });
    
        return (<ul className="w-full md:max-w-[440px] lg:min-w-[440px] mx-auto lg:m-0 flex flex-col gap-y-5">{elements}</ul>);
}