import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout"
import CtrlRoomCards from "@/components/admin/CtrlRoomCards/CtrlRoomCards";

import {withAdminAuth} from "@/hocs/withAdminAuth"

export function AdminPage() {
    return <AdminLayout>
        <h2 className="mb-8 text-4xl text-center font-semibold">Control Room</h2>
        <CtrlRoomCards />
    </AdminLayout>
};

export default withAdminAuth(AdminPage);