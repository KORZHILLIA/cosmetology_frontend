import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import SectionSubheader from "@/components/shared/SectionSubheader/SectionSubheader";
import Paragraph from "@/components/shared/Paragraph/Paragraph";

export default function About() {
    return (
        <div className="container">
            <SectionHeader text="Our Mission" isUnderline />
            <Paragraph text="At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being." />
            <SectionSubheader text="More than anything else we love creating happy, healthy smiles." />
            <Paragraph text='We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times.' />
        </div>);
}