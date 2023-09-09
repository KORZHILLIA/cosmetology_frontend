import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import servicesInfo from '@/data/servicesInfo.json';

import Section from '../shared/Section/Section';

import Selector from '@/public/assets/svg/selector.svg';
import Tooth from '@/public/assets/svg/tooth.svg';
import Smile from '@/public/assets/svg/smile.svg';
import Implant from '@/public/assets/svg/implant.svg';

import { wix } from '@/public/fonts/fonts';

export default function ServicesAccordion() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

    const isBigMobile = useMediaQuery('(min-width: 480px)');
    const accordionDetailsStyles = isBigMobile ? {padding: '2px 16px 16px'} : {padding: '2px 3px 4px 6px'};

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

    const elements = servicesInfo.services.map(service => {
        const isRequiredPanel = expanded === `panel${service.id}`;
        const Icon = getIcon(service.icon);
        return (
            <Accordion key={service.id} id={`${isRequiredPanel ? 'service-accordion-selected' : 'service-accordion'}`} sx={{backgroundColor: isRequiredPanel ? 'rgb(255, 247, 237)' : '', borderRadius: '8px', marginBottom: '10px', overflow: 'hidden'}} expanded={isRequiredPanel} onChange={handleChange(`panel${service.id}`)}>
                    <AccordionSummary expandIcon={<Selector className='w-[16px] h-[16px] fill-brand' />} aria-controls={`panel${service.id}bh-content`} id={`panel${service.id}bh-header`}>
                        <div className='w-full flex flex-col md:flex-row md:gap-x-6 items-center'>
                            <div className={`mb-2 md:mb-0 p-2 flex justify-center items-center ${isRequiredPanel ? 'bg-slate-200 dark:bg-slate-400' : 'bg-slate-100 dark:bg-slate-300'} rounded-full`}>
                                <Icon className='w-[48px] h-[48px] fill-brand' />
                            </div>
                        <p className='text-center md:text-xl xl:text-2xl dark:text-pale'>{service.headerText}</p>
                        </div>
                    </AccordionSummary>
                <AccordionDetails sx={accordionDetailsStyles}>
                    <p className={`${wix.className} dark:text-pale`}>{service.summaryText}</p>
                    </AccordionDetails>
                </Accordion>
        );
    });

    return (
        <div className='lg:max-w-[800px] lg:mx-auto'>
            {elements}
        </div>
    );
}