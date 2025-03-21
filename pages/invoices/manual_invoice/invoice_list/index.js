import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

const data = [
    { id: "001", clientName: "Jane Smith", email: "test@test.com", type: "Hourly Billing", amount: "$300", dateOfService: "02/10/2025", status: "Pending" },
    { id: "002", clientName: "Jane Smith", email: "test@test.com", type: "Hourly Billing", amount: "$300", dateOfService: "02/10/2025", status: "Pending" },
    { id: "003", clientName: "Jane Smith", email: "test@test.com", type: "Hourly Billing", amount: "$300", dateOfService: "02/10/2025", status: "Pending" },
    { id: "004", clientName: "Jane Smith", email: "test@test.com", type: "Hourly Billing", amount: "$300", dateOfService: "02/10/2025", status: "Pending" },
];

export default function Index() {
    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedStatus, setSelectedStatus] = useState("Pending");
    const statuses = ["Pending", "Paid", "Sent", "Refunded", "Uncollectable"];

    return (
        <div className="flex flex-col space-y-10 w-full font-satoshi">
            <div className="flex flex-row items-center justify-between">
                <span className="xl:text-5xl text-3xl font-bold">Invoice List</span>
                <div className="flex flex-row gap-4 select-none">
                    <Button onClick={() => router.push(paths.dashboard.invoices.auto_invoicing)} variant="default">Auto Invoicing</Button>
                    <Button variant="default" className="bg-sky-950 px-10" onClick={() => router.push(paths.dashboard.invoices.invoice_list_add)}>Create Manaul Invoice</Button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <Input placeholder="Search Name or Email" />
                <div className="flex flex-col gap-4">
                    <div className="relative w-full">
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
                                    <div className="relative w-full">
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
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4 select-none">
                    <Button variant="default" className="bg-success-500 px-10">Search</Button>
                    <Button variant="default" className="bg-warning-500 px-10">Clear</Button>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-10">
                {statuses.map((status) => (
                    <Button
                        key={status}
                        variant="default"
                        className={`border px-10 ${selectedStatus === status ? "" : "bg-white text-gray-500"
                            }`}
                        onClick={() => setSelectedStatus(status)}
                    >
                        {status}
                    </Button>
                ))}
            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-gray-900">ID</TableHead>
                            <TableHead className="font-bold text-gray-900">Client Name</TableHead>
                            <TableHead className="font-bold text-gray-900">Email</TableHead>
                            <TableHead className="font-bold text-gray-900">Type</TableHead>
                            <TableHead className="font-bold text-gray-900">Amount</TableHead>
                            <TableHead className="font-bold text-gray-900">Date of Service</TableHead>
                            <TableHead className="font-bold text-gray-900">Status</TableHead>
                            <TableHead className="font-bold text-gray-900">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((invoice, index) => (
                            <TableRow key={invoice.id + index}>
                                <TableCell className="font-medium text-gray-900">{invoice.id}</TableCell>
                                <TableCell className="font-medium text-gray-900">{invoice.clientName}</TableCell>
                                <TableCell className="font-medium text-gray-900">{invoice.email}</TableCell>
                                <TableCell className="font-medium text-gray-900">{invoice.type}</TableCell>
                                <TableCell className="font-medium text-gray-900">{invoice.amount}</TableCell>
                                <TableCell className="font-medium text-gray-900">{invoice.dateOfService}</TableCell>
                                <TableCell className="font-medium text-red-500">{invoice.status}</TableCell>
                                <TableCell className="font-medium text-gray-900">--</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination className="justify-start">
                    <PaginationContent>
                        <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                        <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                        <PaginationItem><PaginationEllipsis /></PaginationItem>
                        <PaginationItem><PaginationNext href="#" /></PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
