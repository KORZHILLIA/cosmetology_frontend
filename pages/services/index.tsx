import ServicesInfo from "@/sections/ServicesInfo/ServicesInfo";
import ServicesFAQ from "@/sections/ServicesFAQ/ServicesFAQ";
import ServicesAttraction from "@/sections/ServicesAttraction/ServicesAttraction";

export default function ServicesPage() {
    return (
        <>
            <ServicesInfo />
            <ServicesFAQ /> 
            <ServicesAttraction />
        </>
    );
}