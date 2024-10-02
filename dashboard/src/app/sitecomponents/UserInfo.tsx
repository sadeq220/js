'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
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
            </table>
        </>
    );
}