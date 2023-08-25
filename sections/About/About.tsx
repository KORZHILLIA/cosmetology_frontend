import Image from "next/image";

import Section from "@/components/shared/Section/Section";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import SectionSubheader from "@/components/shared/SectionSubheader/SectionSubheader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";

import aboutImg from '@/public/assets/img/aboutImg.jpg';

export default function About() {
    return (
        <Section styles="py-3" >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-x-3">
                <div className="lg:w-[60%]">
                    <SectionHeader text="Our Mission" isUnderline />
                <Paragraph text="At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being." />
                <SectionSubheader text="More than anything else we love creating happy, healthy smiles." />
                <Paragraph text='We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times.' />
                </div>
                <div className="relative w-full lg:w-[35%] h-[517px] lg:h-[600px] rounded-lg overflow-hidden">
                <Image className="object-cover" src={aboutImg} fill sizes='100vw' priority alt='' />
                </div>
            </div>
        </Section>
        );
}