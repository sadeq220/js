'use client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import UserInfo from "@/app/sitecomponents/UserInfo";

export default function UserDataPage() {

    return (
        <>
                <h2>User Data page!</h2>
                <UserInfo />
        </>
    );
}
