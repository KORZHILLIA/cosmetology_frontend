import { withUserAuth } from '@/hocs/withUserAuth';

import UserLayout from "@/components/layouts/UserLayout/UserLayout";

export function FutureVisitsPage() {
    return (<UserLayout>
        <h2>These are your future visits</h2>
    </UserLayout>);
};

export default withUserAuth(FutureVisitsPage);