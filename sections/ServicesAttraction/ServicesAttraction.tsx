import Image from "next/image";
import Link from "next/link";

import Section from "@/components/shared/Section/Section";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";

import attractImg from '@/public/assets/img/attractImg.jpg';
import Arrow from '@/public/assets/svg/link-arrow-right.svg';

import { wix } from "@/public/fonts/fonts";

export default function ServicesAttraction() {
    return (
        <Section styles="py-10 bg-header" containerStyles="md:flex md:gap-x-8">
            <div className="md:w-full">
                <SectionHeader textStyles="text-white" text='Leave your worries at the door and enjoy a healthier, more precise smile' />
                <Paragraph styles="text-white" text='We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.' />
                <Link className="w-[200px] mt-6 flex items-center gap-x-[10px] px-6 py-4 bg-blue rounded-lg" href='/contacts'>
                    <span className={`${wix.className} text-white text-lg`}>Appoint me</span>
                    <Arrow className='w-[24px] md:h-[32px] h-[24px] md:h-[32px] fill-white' />
                </Link>
            </div>
            <div className="hidden md:block relative md:w-full h-auto lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden">
                <Image className="object-cover" src={attractImg} fill sizes='(max-width: 767px) 0vw, (max-width: 1000px) 34vw, 35vw' priority alt='' />
            </div>
        </Section>
    );
}