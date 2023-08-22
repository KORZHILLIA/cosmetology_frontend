import type { ClientInfo } from "@/constants/interfaces";

import ClientCard from "@/components/shared/ClientCard/ClientCard";

interface ClientsCardsProps {
    clients: ClientInfo[];
    refreshFunc: () => Promise<void>;
}

export default function ClientsCards({ clients, refreshFunc }: ClientsCardsProps) {
    const elements = clients?.map(client => <ClientCard key={client.id} name={client.name} email={client.email}
        pastVisitDates={client.pastVisitDates} refreshFunc={refreshFunc} />)
    return (<ul>{elements}</ul>);
 }