import Head from 'next/head';

import { withAdminAuth } from "@/hocs/withAdminAuth";

import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import AdminCalendar from "@/components/admin/AdminCalendar/AdminCalendar";


export function CalendarPage() { 
    return (
        <>
            <Head>
                <title>Calendar</title>
            </Head>
            <AdminLayout><AdminCalendar /></AdminLayout>
        </>
            );
};

export default withAdminAuth(CalendarPage);