import { useState, useEffect } from 'react';

import { withAdminAuth } from "@/hocs/withAdminAuth";

import useAppSelector from '@/hooks/useAppSelector';

import { getAuth } from '@/redux/auth/auth-selectors';
import { getClients } from '@/service/externalApi';

import type { ClientInfo } from '@/constants/interfaces';

import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import ClientsCards from '@/components/admin/ClientsCards/ClientsCards';
import Spinner from '@/components/shared/Spinner/Spinner';


export function ClientsPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [clients, setClients] = useState<null | ClientInfo[]>(null);
    const [error, setError] = useState<null>(null);

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
                setError(error);
            }
        };

    
    useEffect(() => {
        // const fetchClients = async () => {
        //     setLoading(true);
        //     try {
        //         const clients = await getClients(role);
        //         const preparedClients = clients.map((client: any) => (
        //             { id: client._id, name: client.name, email: client.email, pastVisitDates: client.pastVisitDates })
        //         ) || [];
        //         setClients(preparedClients);
        //         setLoading(false);
        //         setError(null);
        //     } catch (error: any) {
        //         setLoading(false);
        //         setClients(null);
        //         setError(error);
        //     }
        // };
        fetchClients();
    }, []);

    return (
        <AdminLayout>
            <p>Clients</p>
            <ClientsCards refreshFunc={ fetchClients} clients={clients as ClientInfo[]} />
            {loading && <Spinner />}
        </AdminLayout>);
};

export default withAdminAuth(ClientsPage);