'use client'

import {useQuery} from "@tanstack/react-query";

export default function UserInfo() {
    const {data} = useQuery({
            queryKey: ['userInfo'],
            queryFn: () => fetch("http://localhost/mock/user-info").then(res => res.json())
        })
    ;

    return (
        <>
            <table>
                <tr></tr>
            </table>
        </>
    );
}