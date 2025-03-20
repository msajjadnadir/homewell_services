import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationLink,
    PaginationEllipsis,
    PaginationNext,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";


const data = [
    {
        name: "Jane Smith",
        taskName: "Bathing Assistance",
        status: "Active",
    },
    {
        name: "Jane Smith",
        taskName: "Bathing Assistance",
        status: "Active",
    },
    {
        name: "Jane Smith",
        taskName: "Bathing Assistance",
        status: "Active",
    },
];

export default function tasks_group() {
    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-row justify-between">
                <span className="text-3xl font-bold">Tasks Group List</span>
                <Button variant="default" className="px-10">
                    Add New Tasks Group
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-6 justify-between">
                <Input placeholder="Search Tasks Group" />
            </div>
            <div className="flex flex-col">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-gray-900">
                                Name
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Tasks Name
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Status
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data, index) => (
                            <TableRow key={"data" + index}>
                                <TableCell className="font-medium text-gray-900">
                                    {data.name}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.taskName}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.status}
                                </TableCell>
                                <TableCell className="flex flex-row gap-2">
                                    <button className="font-medium text-[16px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]">
                                        Edit
                                    </button>
                                    <button className="font-medium text-[16px] text-gray-900 bg-red-100 px-3 py-1 rounded-[6px]">
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex flex-col gap-5">

                <Pagination className="justify-start">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
