import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        date: "02/02/2025",
        job: "Jane Smith",
        scheduleEmployee: "Jane Smith",
        actualEmployee: "Jane Smith",
        scheduleStart: "02/02/2025",
        scheduleEnd: "02/02/2025",
        scheduleDuration: "10",
        actualStart: "02/02/2025",
        actualEnd: "02/02/2025",
        actualDuration: "9.53",
        variance: "-0.47",
    },
];

export default function actual_vs_scheduled_report() {

    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="text-5xl font-bold">
                Actual vs Scheduled Report
            </span>
            <div className="grid grid-cols-4 gap-6">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Job" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Zone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} 
                            dateFormat="MM/dd/yyyy"
                            className="w-full border border-gray-300 rounded-md p-2 pl-10"
                            placeholderText="Select date"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}  
                            dateFormat="MM/dd/yyyy"
                            className="w-full border border-gray-300 rounded-md p-2 pl-10"
                            placeholderText="Select date"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4 select-none">
                    <Button variant="default" className="bg-success-500 px-10">
                        Search
                    </Button>
                    <Button variant="default" className="bg-warning-500 px-10">
                        Clear
                    </Button>
                </div>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="bg-sky-900 px-10">
                        Export Excel
                    </Button>
                </div>
            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-gray-900">
                                Date
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Job
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Schedule Employees
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Actual Employees
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Schedule Start
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Schedule End
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Schedule Duration
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Actual Start
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Actual End
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Actual Duration
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Variance
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((invoice, index) => (
                            <TableRow key={"invoice" + index}>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.date}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.job}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.scheduleEmployee}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.actualEmployee}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.scheduleStart}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.scheduleEnd}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.scheduleDuration}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.actualStart}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.actualEnd}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.actualDuration}
                                </TableCell>
                                <TableCell className="font-medium text-red-500">
                                    {invoice.variance}
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
