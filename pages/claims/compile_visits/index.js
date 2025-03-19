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

const data = [
    {
        jobName: "Markus Suzak",
        firstName: "Markus Suzak",
        lastName: "Markus Suzak",
        payer: "Markus Suzak",
        medicalRecordId: "Markus Suzak",
        cptCode: "Markus Suzak",
        unit: "Markus Suzak",
        estCharge: "Markus Suzak",
        dateOfService: "Markus Suzak",
    },
];

export default function index() {
    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row">
                    <span className="text-5xl font-bold">
                        Compile Visits
                    </span>
                </div>
                <div className="flex flex-row gap-4">
                    <Button onClick={() => router.push(paths.dashboard.claims.compile_visits_add)} variant="default" className="px-10">
                        Create Claim
                    </Button>
                    <Button variant="default" className="bg-sky-900 px-10">
                        Export Excel
                    </Button>
                    <Button variant="default" className="bg-sky-900 px-10">
                        Export PDF
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6">
                <Input placeholder="Select Payer" />
                <Input placeholder="Search Name, ID etc.." />
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
                <Button variant="default" className="px-10 py-5">
                    Search
                </Button>
            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-End justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-gray-900">
                                Job Name
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                First Name
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Last Name
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Payer
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Medical Record ID
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                CPT Code
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Unit
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Est. Charge
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Date of Service
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data, index) => (
                            <TableRow key={"data" + index}>
                                <TableCell className="font-medium text-gray-900">
                                    {data.jobName}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.firstName}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.lastName}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.payer}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.medicalRecordId}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.cptCode}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.unit}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.estCharge}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {data.dateOfService}
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
