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
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useState} from "react";

interface UserInfo{
    id:string;
    name:string;
    age: number;
    level:string;
}
export default function UserTable() {
    const queryClient = useQueryClient()
    console.log("UserTable re-render!")
    const {data}:{data:UserInfo[]} = useQuery({
            queryKey: ['userInfo'],
            queryFn: () => fetch("http://localhost/mock/user-info.json").then(res => res.json())
        });
    const tempData = data ? data : [] ;
    const [selectedUsers, setSelectedUsers] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(3)

    const totalPages =  Math.ceil(tempData.length / itemsPerPage) ;
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentUsers =  tempData.slice(startIndex, endIndex);

    const toggleSelectAll = () => {
        if (selectedUsers.length === currentUsers.length) {
            setSelectedUsers([])
        } else {
            setSelectedUsers(currentUsers.map(user => user.id))
        }
    }
    const toggleSelectUser = (userId: string) => {
        setSelectedUsers(prevSelected =>
            prevSelected.includes(userId)
                ? prevSelected.filter(id => id !== userId)
                : [...prevSelected, userId]
        )
    }

    return (
        <>
            <div className="w-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">
                                <Checkbox
                                    checked={selectedUsers.length === currentUsers.length}
                                    onCheckedChange={toggleSelectAll}
                                />
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Level</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <Checkbox
                                        checked={selectedUsers.includes(user.id)}
                                        onCheckedChange={() => toggleSelectUser(user.id)}
                                    />
                                </TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.age}</TableCell>
                                <TableCell>{user.level}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-500">
                            Showing {startIndex + 1}-{Math.min(endIndex, tempData.length)} of {tempData.length}
                        </p>
                        <Select
                            value={itemsPerPage.toString()}
                            onValueChange={(value) => setItemsPerPage(Number(value))}
                        >
                            <SelectTrigger className="w-[70px]">
                                <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeftIcon className="h-4 w-4"/>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRightIcon className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}