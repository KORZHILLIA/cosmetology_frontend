import CabinetNav from "@/components/client/CabinetNav/CabinetNav";

import type { LayoutProps } from "@/constants/interfaces";

import cabinetNavLinks from '@/data/cabinetNav.json';

export default function UserLayout({ children }: LayoutProps) {
    return <div className="container pt-6">
        <CabinetNav links={cabinetNavLinks.links} />
        {children}</div>
 }