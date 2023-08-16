import { LayoutProps } from "@/constants/interfaces";

export default function AdminLayout({ children }: LayoutProps) {
    return <div className="container"><h1 className="mb-6 pt-3 text-6xl text-center font-bold">Hello, Admin</h1>{children}</div>
}