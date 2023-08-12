import { LayoutProps } from "@/constants/interfaces";

export default function AdminLayout({ children }: LayoutProps) {
    return <div className="container"><p>Admin Layout</p>{children}</div>
}