import Section from "@/components/shared/Section/Section";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";
import QuestionsAccordion from "@/components/QuestionsAccordion/QuestionsAccordion";

export default function ServicesFAQ() {
    return (
        <Section styles="py-3 bg-white">
            <SectionHeader styles="md:text-center" text="Frequently Ask Question" />
            <Paragraph styles="md:text-center" text="We use only the best quality materials on the market in order to provide the best products to our patients." />
            <QuestionsAccordion />
        </Section>
    );
}