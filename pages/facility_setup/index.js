import { useState } from "react";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

const data = Array.from({ length: 50 }, (_, i) => ({
    facilityName: `Facilty Name  ${i + 1}`,
}));

export default function ShiftSwapRequest() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col w-full space-y-10 font-satoshi">
            <span className="font-bold text-5xl leading-[54px] tracking-[1.6%] text-primaryText">
                Facility Setup
            </span>

            <div className="flex lg:flex-row flex-col justify-between lg:w-[75%] gap-6">
                <Input placeholder="Search Facility" />
                <Button onClick={() => router.push(paths.dashboard.facility_setup.add)}>
                    Add Facility Setup
                </Button>
            </div>

            <div className="flex flex-col gap-5">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-[16px] leading-[27px] text-secondaryShades-900">
                                Facility Name
                            </TableHead>
                            <TableHead className="font-bold text-[16px] leading-[27px] text-secondaryShades-900">
                                Action
                            </TableHead>
                            <TableHead className="font-bold text-[16px] leading-[27px] text-secondaryShades-900">
                                Default
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentData.map((item, index) => (
                            <TableRow key={index} className="border-b">
                                <TableCell className="font-medium text-[16px] text-gray-900">
                                    {item.facilityName}
                                </TableCell>
                                <TableCell>
                                    <button
                                        className="text-gray-950 bg-yellow-100 px-6 py-1 rounded-md"
                                        onClick={() => router.push(paths.dashboard.facility_setup.edit)}
                                    >
                                        Edit
                                    </button>
                                </TableCell>
                                <TableCell>
                                    <Checkbox id="terms" className="w-6 h-6" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination className="justify-start">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <PaginationItem key={i + 1}>
                                <PaginationLink
                                    href="#"
                                    onClick={() => handlePageChange(i + 1)}
                                    isActive={currentPage === i + 1}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}