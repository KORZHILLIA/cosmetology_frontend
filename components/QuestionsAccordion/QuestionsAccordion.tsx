import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import questionsInfo from '@/data/questionsInfo.json';

import Minus from '@/public/assets/svg/minus.svg';
import Plus from '@/public/assets/svg/plus.svg';

import { wix } from '@/public/fonts/fonts';

export default function QuestionsAccordion() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => setExpanded(isExpanded ? panel : false);

    const isBigMobile = useMediaQuery('(min-width: 480px)');
    const accordionDetailsStyles = isBigMobile ? {padding: '2px 16px 16px'} : {padding: '2px 3px 10px 12px'};

    const elements = questionsInfo.questions.map(service => {
        const isRequiredPanel = expanded === `panel${service.id}`;
        const Icon = isRequiredPanel ? Minus : Plus;
        return (
            <Accordion key={service.id} id={`${isRequiredPanel ? 'faq-accordion-selected' : 'faq-accordion'}`} sx={{backgroundColor: isRequiredPanel ? '#1376F8' : 'transparent', border: 'none', boxShadow: 'none', borderRadius: '8px', marginBottom: '10px', overflow: 'hidden'}} expanded={isRequiredPanel} onChange={handleChange(`panel${service.id}`)}>
                <AccordionSummary sx={{width: '95%', margin: '0 auto', padding: '8px', borderBottom: '1px solid #cfcfcf'}} expandIcon={<Icon className={`w-[16px] h-[16px] ${isRequiredPanel ? 'stroke-white dark:stroke-pale' : 'fill-header dark:fill-pale'}`} />} aria-controls={`panel${service.id}bh-content`} id={`panel${service.id}bh-header`}>
                    <p className={`${isRequiredPanel ? 'text-white dark:text-pale' : 'text-header dark:text-pale'} md:text-xl xl:text-2xl`}>{service.headerText}</p>
                </AccordionSummary>
                <AccordionDetails sx={accordionDetailsStyles}>
                    <p className={`${wix.className} text-white dark:text-pale`}>{service.summaryText}</p>
                    </AccordionDetails>
                </Accordion>
        );
    });

    return (
        <div className='lg:max-w-[630px] lg:mx-auto bg-white dark:bg-transparent'>
            {elements}
        </div>
    );
}