import Section from "@/components/shared/Section/Section";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";
import ContactForm from "@/components/forms/ContactForm/ContactForm";

export default function GetInTouch() {
    return (
        <Section styles="md:text-center">
            <SectionHeader text="Get in touch" isUnderline />
            <Paragraph text='Book an Appointment to treat your teeth right now.' />
            <ContactForm />
        </Section>
    );
}