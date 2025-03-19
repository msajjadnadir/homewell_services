import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
import { Checkbox } from "@/components/ui/checkbox";

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

const data = [
    {
        jobFirstName: "Markus",
        jobLastName: "Suzak",
        payerName: "Medicaid",
        medicalRecordId: "A123654",
        modifierCode: "22",
        status: "Pending",
        cptCode: "E1101",
        receivedAmount: "$0.00",
        claimAmount: "$300",
        dateOfService: "02/02/2025 11:00 AM",
        claimCreatedOn: "03/02/2025 12:00 AM",
    },
];

export default function paid() {
    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-col gap-6">
                <span className="text-5xl font-bold">
                    Claim Biling List
                </span>
                <span className="text-purple-500">
                    Claim Biling Guide <span className="text-purple-900">VA 837P Export Guide</span>
                </span>
            </div>
            <div className="flex flex-row gap-3">
                <Button onClick={() => router.push(paths.dashboard.claims.pending)} variant="light" className="border px-16 py-5">
                    Pending
                </Button>
                <Button onClick={() => router.push(paths.dashboard.claims.paid)} variant="default" className="px-16 py-5">
                    Paid
                </Button>
                <Button onClick={() => router.push(paths.dashboard.claims.sent)} variant="light" className="border px-16 py-5">
                    Sent
                </Button>
                <Button onClick={() => router.push(paths.dashboard.claims.rejected)} variant="light" className="border px-16 py-5">
                    Rejected
                </Button>
                <Button onClick={() => router.push(paths.dashboard.claims.partial)} variant="light" className="border px-16 py-5">
                    Partial
                </Button>
            </div>
            <div className="grid grid-cols-5 gap-6">
                <Input placeholder="Search" />
                <Input placeholder="Payer" />
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
                <div className="flex flex-col">
                    <Button variant="default" className="px-10 py-5">
                        Search
                    </Button>
                    <div className="flex items-center space-x-2 mt-3">
                        <Checkbox id="terms" className="w-4 h-4" />
                        <label htmlFor="terms">
                            Co Payment
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <Button variant="default" className="px-10 py-5 bg-sky-950">
                    Export Excel
                </Button>
                <Button variant="default" className="px-10 py-5 bg-sky-950">
                    Export PDF
                </Button>
                <Button variant="default" className="px-10 py-5 bg-sky-950">
                    Status
                </Button>
            </div>
            <div className="grid grid-cols-5 gap-6">
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Select Facility
                    </label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Medicaid" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-row gap-6 mt-10">
                    <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <RadioGroupItem value="male" id="male" />
                            <label htmlFor="male" className="cursor-pointer flex-shrink-0">Consolidate Same DOS</label>
                        </div>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <RadioGroupItem value="female" id="female" checked />
                            <label htmlFor="female" className="cursor-pointer flex-shrink-0">Bill All Visit Separately</label>
                        </div>
                    </RadioGroup>
                </div>

            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="text-gray-900">
                                Medical Record ID
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Job First Name
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Job Last Name
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Payer Name
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Modifier Code
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Status
                            </TableHead>
                            <TableHead className="text-gray-900">
                                CPT Code
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Recieved Amount
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Claim Amount
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Date of Service
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Claim Created On
                            </TableHead>
                            <TableHead className="text-gray-900">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data, index) => (
                            <TableRow key={"data" + index}>
                                <TableCell className="text-gray-900">
                                    {data.medicalRecordId}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.jobFirstName}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.jobLastName}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.payerName}
                                </TableCell>

                                <TableCell className="text-gray-900">
                                    {data.modifierCode}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.status}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.cptCode}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.receivedAmount}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.claimAmount}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.dateOfService}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    {data.claimCreatedOn}
                                </TableCell>
                                <TableCell className="text-gray-900">
                                    Update
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
