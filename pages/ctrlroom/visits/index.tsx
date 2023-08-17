import { withAdminAuth } from "@/hocs/withAdminAuth";

import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import Visits from "@/components/admin/Visits/Visits";

export function VisitsPage() {
    return <AdminLayout><Visits /></AdminLayout>
};

export default withAdminAuth(VisitsPage);