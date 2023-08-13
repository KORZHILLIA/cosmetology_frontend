import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout"

import withAdminAuth from "@/hocs/withAdminAuth"

export function AdminPage() {
    return <AdminLayout><p>Admin Ctrl Room</p></AdminLayout>
};

export default withAdminAuth(AdminPage);