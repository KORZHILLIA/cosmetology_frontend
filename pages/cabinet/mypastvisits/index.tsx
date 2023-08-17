import { withUserAuth } from '@/hocs/withUserAuth';

import UserLayout from "@/components/layouts/UserLayout/UserLayout";

export function PastVisitsPage() {
    return (<UserLayout>
        <h2>These are your previous visits</h2>
    </UserLayout>);
};

export default withUserAuth(PastVisitsPage);