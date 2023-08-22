import { withUserAuth } from '@/hocs/withUserAuth';

import UserLayout from "@/components/layouts/UserLayout/UserLayout";
import PastVisits from '@/components/client/PastVisits/PastVisits';

export function PastVisitsPage() {
    return (<UserLayout>
        <h2>These are your previous visits</h2>
        <PastVisits />
    </UserLayout>);
};

export default withUserAuth(PastVisitsPage);