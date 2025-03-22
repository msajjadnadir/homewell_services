import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
    return Array.from({ length: 50 }, (_, index) => ({
        jobName: `Job ${index + 1}`,
        firstName: `First ${index + 1}`,
        lastName: `Last ${index + 1}`,
        payer: `Payer ${index + 1}`,
        medicalRecordId: `MRID ${index + 1}`,
        cptCode: `CPT ${index + 1}`,
        unit: `Unit ${index + 1}`,
        estCharge: `$${(index + 1) * 10}`,
        dateOfService: `2025-03-22`,
    }));
};

export default function Index() {
    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const data = generateData();

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(data.length / recordsPerPage);

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-row items-center justify-between">
                <span className="xl:text-5xl text-3xl font-bold">Compile Visits</span>
                <div className="flex flex-row gap-4">
                    <Button onClick={() => router.push(paths.dashboard.claims.compile_visits_add)} variant="default" className="px-10">
                        Create Claim
                    </Button>
                    <Button variant="default" className="bg-sky-900 px-10">Export Excel</Button>
                    <Button variant="default" className="bg-sky-900 px-10">Export PDF</Button>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6">
                <Input placeholder="Select Payer" />
                <Input placeholder="Search Name, ID etc.." />
                <div className="relative w-full">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/dd/yyyy" className="w-full border border-gray-300 rounded-md p-2 pl-10" placeholderText="Select date" />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
                <div className="relative w-full">
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="MM/dd/yyyy" className="w-full border border-gray-300 rounded-md p-2 pl-10" placeholderText="Select date" />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
                <Button variant="default" className="px-10 py-5">Search</Button>
            </div>

            <div className="flex flex-col mt-[60px] gap-5 items-end justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            {Object.keys(data[0]).map((key) => (
                                <TableHead key={key} className="font-bold text-gray-900 capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentRecords.map((record, index) => (
                            <TableRow key={index}>
                                {Object.values(record).map((value, i) => (
                                    <TableCell key={i} className="font-medium text-gray-900">{value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Pagination className="justify-start">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink href="#" onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext href="#" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}