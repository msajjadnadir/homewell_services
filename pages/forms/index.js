import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

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

const data = [
    {
        employeeAgreement: "Employee Agreement",
        createdOn: "02/02/2025",
        createdBy: "Dan Brown",
        updatedOn: "02/02/2025",
        status: "Active ",
    },
    {
        employeeAgreement: "Employee Agreement",
        createdOn: "02/02/2025",
        createdBy: "Dan Brown",
        updatedOn: "02/02/2025",
        status: "Active ",
    },
    {
        employeeAgreement: "Employee Agreement",
        createdOn: "02/02/2025",
        createdBy: "Dan Brown",
        updatedOn: "02/02/2025",
        status: "Active ",
    },
    {
        employeeAgreement: "Employee Agreement",
        createdOn: "02/02/2025",
        createdBy: "Dan Brown",
        updatedOn: "02/02/2025",
        status: "Active ",
    },
    {
        employeeAgreement: "Employee Agreement",
        createdOn: "02/02/2025",
        createdBy: "Dan Brown",
        updatedOn: "02/02/2025",
        status: "Active ",
    },
];

export default function index() {
    const router = useRouter();

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <span className="text-5xl font-bold">
                    Forms Management
                </span>
                <div className="flex flex-row gap-3">
                    <Button variant="default" className="px-10 py-5" onClick={() => router.push(paths.dashboard.forms.add)}>
                        Add New Form
                    </Button>
                    <Button variant="default" className="bg-sky-950 px-10 py-5" onClick={() => router.push(paths.dashboard.forms.merge_pdf)}>
                        Merge PDF
                    </Button>
                </div>
            </div>
            <div className="grid grid-col md:grid-cols-3 gap-6">
                <Input placeholder="Search Forms" />
            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="text-gray-900 font-medium">
                                Form Name
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Created on
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Created by
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Updated on
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Status
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data, index) => (
                            <TableRow key={"data" + index}>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.employeeAgreement}
                                </TableCell>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.createdOn}
                                </TableCell>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.createdBy}
                                </TableCell>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.updatedOn}
                                </TableCell>
                                <TableCell className="text-green-500 font-medium">
                                    {data.status}
                                </TableCell>
                                <TableCell className="flex flex-row gap-2 text-gray-900">
                                    <button className="font-medium text-[16px] leading-5 px-4 py-1 rounded bg-yellow-100">
                                        Edit
                                    </button>
                                    <button
                                        className="font-medium text-[16px] leading-6 px-4 py-1 rounded bg-green-100"
                                        onClick={() => router.push(paths.dashboard.caregivers.view)}
                                    >
                                        E-Sign
                                    </button>
                                    <button className="font-medium text-[16px] leading-5 px-4 py-1 rounded bg-red-300">
                                        Delete
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
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
    )
}
