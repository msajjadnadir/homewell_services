import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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

const employee = [
    {
        code: "Jane",
        employee: "Name",
        duration: "10:00",
        alarms: "--",
    },
];

const timecard = [
    {
        date: "02/02/2025",
        jobName: "--",
        in: "2:00 PM",
        out: "10:00 PM",
        duration: "Enabled",
    },
];

export default function Employee() {

    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-12 w-full font-satoshi">
            <div className="flex flex-row gap-6 items-center justify-between">
                <span className="text-5xl font-bold">
                    Edit Card List
                </span>
                <div className="flex flex-row gap-3">
                    <Button variant="default" className="px-16 py-5">
                        Add Time Card
                    </Button>
                    <Button variant="default" className="px-10 py-5 bg-sky-950">
                        Export Excel
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-6">
                <Input placeholder="Select Zone" />
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
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Employee" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex flex-col">
                    <Button variant="default" className="px-10 py-5">
                        Search
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <span className="">
                    Live In
                </span>
                <RadioGroup className="flex flex-row gap-6">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" checked />
                        <label htmlFor="yes">View by Employee</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <label htmlFor="no">View by Job</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex flex-row items-center justify-end">
                <div className="flex items-center space-x-3">
                    <Checkbox id="terms" className="w-6 h-6" />
                    <label
                        htmlFor="terms"
                    >
                        Hide Inactive Timecards
                    </label>
                </div>
            </div>

            <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col gap-5 items-start justify-start">
                    <div className="flex justify-between items-center w-full">
                        <span className="text-xl font-medium">Employee List</span>
                        <span className="text-xl">Total hours: 250</span>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                                <TableHead className="text-gray-900">
                                    Code
                                </TableHead>
                                <TableHead className="text-gray-900">
                                    Employee
                                </TableHead>
                                <TableHead className="text-gray-900">
                                    Duration
                                </TableHead>
                                <TableHead className="text-gray-900">
                                    Alarms
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {employee.map((employee, index) => (
                                <TableRow key={"employee" + index}>
                                    <TableCell className="text-gray-900">
                                        {employee.code}
                                    </TableCell>
                                    <TableCell className="text-gray-900">
                                        {employee.employee}
                                    </TableCell>
                                    <TableCell className="text-gray-900">
                                        {employee.duration}
                                    </TableCell>
                                    <TableCell className="text-gray-900">
                                        {employee.alarms}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex flex-col -mx-1 gap-5 items-start justify-start">
                    <div className="flex justify-between items-center w-full">
                        <span className="text-xl font-medium">Time Cards</span>
                        <span className="text-xl">Total hours: 250</span>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                                <TableHead className="text-gray-900">
                                    Date
                                </TableHead>
                                <TableHead className="text-gray-900">
                                    Job Name
                                </TableHead>
                                <TableHead className="text-gray-900">
                                    In
                                </TableHead>
                                <TableHead className="text-gray-900">
                                    Out
                                </TableHead>
                                <TableHead className="text-gray-900">
                                    Duration
                                </TableHead>
                                <TableHead className="text-gray-900">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {timecard.map((timecard, index) => (
                                <TableRow key={"timecard" + index}>
                                    <TableCell className="text-gray-900">
                                        {timecard.date}
                                    </TableCell>
                                    <TableCell className="text-gray-900">
                                        {timecard.jobName}
                                    </TableCell>
                                    <TableCell className="text-gray-900">
                                        {timecard.in}
                                    </TableCell>
                                    <TableCell className="text-gray-900">
                                        {timecard.out}
                                    </TableCell>
                                    <TableCell className="text-gray-900">
                                        {timecard.duration}
                                    </TableCell>
                                    <TableCell className="text-gray-900">
                                        Edit
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
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
