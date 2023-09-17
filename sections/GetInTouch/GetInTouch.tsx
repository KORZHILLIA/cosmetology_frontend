import Section from "@/components/shared/Section/Section";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";
import ContactForm from "@/components/forms/ContactForm/ContactForm";
import OfficeDescription from "../OfficeDescription/OfficeDescription";
import Map from "@/components/shared/Map/Map";

import getInTouch from '@/data/getInTouch.json';

export default function GetInTouch() {
    return (
        <Section styles="md:text-center">
            <SectionHeader text={getInTouch.headerText} isUnderline />
            <Paragraph text={getInTouch.subtext} styles="max-md:max-w-[340px]" />
            <div className="flex flex-col lg:flex-row lg:justify-center gap-y-12 lg:gap-x-12">
                <ContactForm />
                <div className="flex flex-col gap-y-5">
                    <Map />
                    <OfficeDescription />
                </div>
            </div>
        </Section>
    );
}