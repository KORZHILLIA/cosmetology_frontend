import Image from "next/image";

import Section from "@/components/shared/Section/Section";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import SectionSubheader from "@/components/shared/SectionSubheader/SectionSubheader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";

import aboutImg from '@/public/assets/img/aboutImg.jpg';
import about from '@/data/about.json';

export default function About() {
    return (
        <Section styles="py-3" >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-3">
                <div className="lg:w-[60%]">
                    <SectionHeader text={about.headerText} isUnderline styles="max-w-[222px] sm:max-w-none lg:max-xl:max-w-[357px]" />
                    <Paragraph text={about.mainText1} />
                    <h3 className="mb-4 text-header dark:text-slate-200 text-2xl">{about.mainText2_1}<span className="text-brand">* </span>{ about.mainText2_2}</h3>
                    <Paragraph text={about.mainText3} />
                    <Paragraph text={about.mainText4} />
                    <SectionSubheader text={about.mainText5} />
                    <p className="mb-4 lg:mb-0"><span className="text-brand">* </span>{ about.notaText}</p>
                </div>
                <div className="relative w-full lg:w-[35%] h-[517px] lg:h-[600px] rounded-lg overflow-hidden">
                  <Image className="object-cover object-[35%_2px] sm:max-lg:object-[27%_2px]" src={aboutImg} fill sizes='(max-width: 480px) 100vw, (max-width: 767px) 57vw, (max-width: 1000px) 71vw, 31vw' priority alt='' />
                </div>
            </div>
        </Section>
        );
}