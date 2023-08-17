import { withUserAuth } from '@/hocs/withUserAuth';

import UserLayout from "@/components/layouts/UserLayout/UserLayout";
import ClientVisits from "@/components/client/Visits/Visits";

export function AllVisitsPage() {
    return (<UserLayout>
        <h2 className='mb-4 text-center text-2xl md:text-4xl'>Choose your future visit</h2>
        <ClientVisits />
    </UserLayout>);
};

export default withUserAuth(AllVisitsPage);