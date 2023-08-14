import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout"
import AdminCalendar from "@/components/admin/AdminCalendar/AdminCalendar";

import withAdminAuth from "@/hocs/withAdminAuth"

export function AdminPage() {
    return <AdminLayout>
        <p>Admin Ctrl Room</p>
    <AdminCalendar />
    </AdminLayout>
};

export default withAdminAuth(AdminPage);