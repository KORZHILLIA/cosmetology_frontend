import { wix } from "@/public/fonts/fonts";

interface OfficeDescriptionCardProps {
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    headerText: string;
    infoText: string;
    isLink: boolean;
    href?: string;
}

export default function OfficeDescriptionCard({Icon, headerText, infoText, isLink, href}: OfficeDescriptionCardProps) {
    return (
        <li className={`${wix.className} flex justify-start items-center gap-x-4 p-6 rounded-lg border border-blue bg-transparent`}>
            <div className="flex justify-center items-center p-[13px] bg-blue rounded-full">
                <Icon className="w-[26px] h-[26px] fill-white" />
            </div>
            <div className="flex flex-col items-start">
                <span className="text-lg font-semibold">{headerText}</span>
                {isLink ? <a className="underline underline-offset-4 decoration-[0.5px]" href={href} target="_blank" rel="noreferrer noopener nofollow">{infoText}</a> : <span className="text-sm">{infoText}</span>}
            </div>
        </li>
    );
}