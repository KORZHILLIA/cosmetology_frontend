import Head from 'next/head';

import { withAdminAuth } from "@/hocs/withAdminAuth";

import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import AdminVisits from "@/components/admin/Visits/Visits";

export function VisitsPage() {
    return (
        <>
            <Head>
                <title>All visits</title>
            </Head>
            <AdminLayout>
                <AdminVisits />
            </AdminLayout>
            </>
            );
};

export default withAdminAuth(VisitsPage);