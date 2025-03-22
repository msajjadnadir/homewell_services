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
import { useState } from "react";

const generateData = () => {
    return Array.from({ length: 50 }, (_, i) => ({
        employeeAgreement: `Employee Agreement ${i + 1}`,
        createdOn: "02/02/2025",
        createdBy: "Dan Brown",
        updatedOn: "02/02/2025",
        status: "Active",
    }));
};

const data = generateData();
const itemsPerPage = 10;

export default function Index() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <span className="xl:text-5xl text-3xl font-bold">
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
                            <TableHead className="text-gray-900 font-medium">Form Name</TableHead>
                            <TableHead className="text-gray-900 font-medium">Created on</TableHead>
                            <TableHead className="text-gray-900 font-medium">Created by</TableHead>
                            <TableHead className="text-gray-900 font-medium">Updated on</TableHead>
                            <TableHead className="text-gray-900 font-medium">Status</TableHead>
                            <TableHead className="text-gray-900 font-medium">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentItems.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="text-gray-900 font-medium">{item.employeeAgreement}</TableCell>
                                <TableCell className="text-gray-900 font-medium">{item.createdOn}</TableCell>
                                <TableCell className="text-gray-900 font-medium">{item.createdBy}</TableCell>
                                <TableCell className="text-gray-900 font-medium">{item.updatedOn}</TableCell>
                                <TableCell className="text-green-500 font-medium">{item.status}</TableCell>
                                <TableCell className="flex flex-row gap-2 text-gray-900">
                                    <button onClick={() => router.push(paths.dashboard.forms.edit)} className="font-medium text-[16px] leading-5 px-4 py-1 rounded bg-yellow-100">Edit</button>
                                    <button className="font-medium text-[16px] leading-6 px-4 py-1 rounded bg-green-100" onClick={() => router.push(paths.dashboard.forms.esign)}>E-Sign</button>
                                    <button className="font-medium text-[16px] leading-5 px-4 py-1 rounded bg-red-300">Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination className="justify-start">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink href="#" onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext href="#" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
