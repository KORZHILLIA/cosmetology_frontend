import type { ClientInfo } from "@/constants/interfaces";

import ClientCard from "@/components/shared/ClientCard/ClientCard";

interface ClientsCardsProps {
    clients: ClientInfo[];
}

export default function ClientsCards({ clients }: ClientsCardsProps) {
    const elements = clients?.map(client => <ClientCard key={client.id} name={client.name} email={client.email} pastVisitDates={client.pastVisitDates} />)
    return (<ul>{elements}</ul>);
 }