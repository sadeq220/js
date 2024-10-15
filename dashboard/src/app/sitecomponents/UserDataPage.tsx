'use client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import UserTable from "@/app/sitecomponents/UserTable";

export default function UserDataPage() {

    return (
        <>
            <div className="basis-1/4 border-2 rounded-md p-4">
                <h2>User Data page!</h2>
                <UserTable />
            </div>
        </>
    );
}
