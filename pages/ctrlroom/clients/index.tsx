import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import { withAdminAuth } from "@/hocs/withAdminAuth";

import useAppSelector from '@/hooks/useAppSelector';

import { getAuth } from '@/redux/auth/auth-selectors';
import { getClients } from '@/service/externalApi';
import extractAxiosError from '@/helpers/extractAxiosError';
import notificate from '@/helpers/notificate';

import type { ClientInfo } from '@/constants/interfaces';

import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import ClientsCards from '@/components/admin/ClientsCards/ClientsCards';
import Spinner from '@/components/shared/Spinner/Spinner';


export function ClientsPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [clients, setClients] = useState<null | ClientInfo[]>(null);
    const [error, setError] = useState<null | string>(null);

    const router = useRouter();
    
    const session = useSession();

    const { role } = useAppSelector(getAuth);

            const fetchClients = async () => {
            setLoading(true);
            try {
                const clients = await getClients(role);
                const preparedClients = clients.map((client: any) => (
                    { id: client._id, name: client.name, email: client.email, pastVisitDates: client.pastVisitDates })
                ) || [];
                setClients(preparedClients);
                setLoading(false);
                setError(null);
            } catch (error: any) {
                setLoading(false);
                setClients(null);
                const axiosError = extractAxiosError(error);
                const { status, message } = axiosError;
                setError(message);
                if (status === 401) {
                    if (session) {
                        signOut({ callbackUrl: '/auth/signin' });
                    } else {
                        router.replace('/auth/signin');
                    }
                }
            }
        };

    
    useEffect(() => {
        fetchClients();
    }, []);

    return (
        <AdminLayout>
            <p>Clients</p>
            <ClientsCards refreshFunc={ fetchClients} clients={clients as ClientInfo[]} />
            {loading && <Spinner />}
            {error && notificate('error', error)}
        </AdminLayout>);
};

export default withAdminAuth(ClientsPage);