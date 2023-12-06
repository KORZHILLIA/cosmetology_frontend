import {ReactNode} from 'react';

import Section from "@/components/shared/Section/Section";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import ShoppingCards from "@/components/ShoppingCards/ShoppingCards";

interface ShoppingProps {
    modalWindowToggler: (text: string, images: ReactNode[]) => void;
}

export function Shopping({modalWindowToggler}: ShoppingProps) {
    return (
        <Section styles="py-3">
            <SectionHeader styles="text-center" text='Крамничка' isUnderline />
            <ShoppingCards modalWindowToggler={modalWindowToggler} />
        </Section>
    );
}