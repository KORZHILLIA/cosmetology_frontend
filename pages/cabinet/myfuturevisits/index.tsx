import Head from 'next/head';

import { withUserAuth } from '@/hocs/withUserAuth';

import UserLayout from "@/components/layouts/UserLayout/UserLayout";
import FutureVisits from '@/components/client/FutureVisits/FutureVisits';

export function FutureVisitsPage() {
    return (
        <>
            <Head>
                <title>My future visits</title>
            </Head>
        <UserLayout>
        <h2 className='mb-4 text-center text-2xl md:text-4xl'>These are your future visits</h2>
        <FutureVisits />
            </UserLayout>
        </>
    );
};

export default withUserAuth(FutureVisitsPage);