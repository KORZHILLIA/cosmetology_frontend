import Head from 'next/head';

import ServicesInfo from "@/sections/ServicesInfo/ServicesInfo";
import ServicesFAQ from "@/sections/ServicesFAQ/ServicesFAQ";
import ServicesAttraction from "@/sections/ServicesAttraction/ServicesAttraction";

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <ServicesInfo />
            <ServicesFAQ /> 
            <ServicesAttraction />
        </>
    );
}