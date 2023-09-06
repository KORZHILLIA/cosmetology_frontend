import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import Section from "@/components/shared/Section/Section";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import SectionSubheader from "@/components/shared/SectionSubheader/SectionSubheader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";
import Slider from "@/components/shared/Slider/Slider";
import TechnologyCards from "@/components/TechnologyCards/TechnologyCards";

import technologyImg from '@/public/assets/img/technologyImg.jpg';

export default function Technologies() {
    const isTablet = useMediaQuery('(min-width: 768px)');
    
    return (
        <Section styles="py-3 bg-white dark:bg-[#3a3c3c]">
                <SectionHeader text="Latest Technology" styles='md:text-center' />
                <Paragraph styles="md:text-center lg:mx-auto lg:mb-[60px] lg:max-w-[700px]" text="Thanks to major technological advancements, dentistry allows treating the most complex cases with less time and more efficiency." />
                <div className="lg:flex lg:justify-between">
                    <div className="relative w-full lg:w-[340px] xl:w-[400px] h-[362px] lg:h-[396px] mb-[40px] lg:mb-0 ">
                        <Image className="object-cover" src={technologyImg} fill sizes='(max-width: 480px) 100vw, (max-width: 767px) 57vw, (max-width: 1000px) 71vw, (max-width: 1280px) 37vw, 40vw' priority alt='' />
                    </div>
                    <div className="pb-[60px] lg:w-[60%]">
                        <SectionSubheader text="The Future of Dentistry is Digital:" />
                        <Paragraph text="Dentists today already utilize software to capture insights in clinical decision-making. These practices will continue to develop to integrate AI algorithms that enable clinicians to find the best modalities for their patients." />
                        <Paragraph text="In the 21st century, digital radiographs and 3D imaging have become the standard of dental care. Using an intraoral scanner with digitized data for 3D dental impressions (vs. polyvinyl siloxane and rubber base impressions) for a dental crown is now commonplace." />
                        <Paragraph text="Artificial intelligence is laying the groundwork for the future of the dental industry. Dental robots can now perform functions such as filling cavities and cleaning or extracting teeth." />
                    </div>
                </div>                
                <div className="p-[30px] bg-header dark:bg-neutral-800 rounded-lg">
                    {isTablet ? (<div className="grid md:gap-2 lg:gap-3 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 md:max-w-[600px] xl:max-w-full md:mx-auto">
                        <TechnologyCards />
                    </div>) :
                    <Slider><TechnologyCards /></Slider>}
                </div>
        </Section>
    );
}