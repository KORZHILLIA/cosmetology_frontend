import type { LayoutProps } from "@/constants/interfaces";

export default function UserLayout({ children }: LayoutProps) {
    return <div className="container"><p>User layout</p>{children}</div>
 }