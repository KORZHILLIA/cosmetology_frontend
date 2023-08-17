import { useRouter } from "next/router";
import Link from "next/link";

type CabinetNavLink = {
    linkText: string,
    linkAddress: string,
}

interface CabinetNavProps {
    links: CabinetNavLink[];
}

export default function CabinetNav({ links }: CabinetNavProps) {
    const router = useRouter();

    const elements = links.map(link => <li key={link.linkText} className={`${router.pathname === link.linkAddress ? 'bg-brand' : 'bg-slate-300'}`}>
        <Link className="block p-2 text-lg text-semiPale font-semibold  rounded-lg" href={link.linkAddress}>{link.linkText}</Link>
    </li>);
    return <ul className="hidden md:max-w-[80%] xl:max-w-[60%] md:mb-4 md:flex md:justify-center lg:justify-evenly mx-auto p-2 gap-x-3 bg-transparent border rounded-xl">{elements}</ul>
}