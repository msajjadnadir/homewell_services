import React from "react";
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

const generateData = () => {
    return Array.from({ length: 50 }, (_, i) => ({
        clientName: `Client ${i + 1}`,
    }));
};

const data = generateData();

export default function Index() {
    const router = useRouter();
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = React.useState(1);

    const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="xl:text-5xl text-3xl font-bold">
                Manual Claim (Claim Billing Client List)
            </span>
            <span className="text-gray-500">
                Creating claims out of visits should only be done from Compile Visits. If required to have EVV data on claims, manual claims will cause rejections.
            </span>

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row w-96">
                    <Input placeholder="Search Clients" />
                </div>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">
                        Search
                    </Button>
                    <Button variant="default" className="bg-sky-900 px-10">
                        Export Excel
                    </Button>
                    <Button variant="default" className="bg-sky-900 px-10">
                        Export PDF
                    </Button>
                </div>
            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table className="text-lg">
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-gray-900">
                                Client Name
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((invoice, index) => (
                            <TableRow key={"invoice" + index}>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.clientName}
                                </TableCell>
                                <TableCell className="flex flex-row gap-[10px]">
                                    <button onClick={() => router.push(paths.dashboard.claims.manual_claim_edit)} className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]">
                                        Edit Claim
                                    </button>
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
                                <PaginationLink href="#" onClick={() => setCurrentPage(i + 1)}>
                                    {i + 1}
                                </PaginationLink>
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
