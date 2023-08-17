import {withUserAuth} from "@/hocs/withUserAuth";
import UserLayout from "@/components/layouts/UserLayout/UserLayout"

export function CabinetPage() {
    return <UserLayout><p>Cabinet Page</p></UserLayout>
}

export default withUserAuth(CabinetPage);