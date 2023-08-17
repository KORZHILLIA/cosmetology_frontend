import {withAdminAuth} from "@/hocs/withAdminAuth";

import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import AdminCalendar from "@/components/admin/AdminCalendar/AdminCalendar";


export function CalendarPage() { 
    return (<AdminLayout><AdminCalendar /></AdminLayout>);
};

export default withAdminAuth(CalendarPage);