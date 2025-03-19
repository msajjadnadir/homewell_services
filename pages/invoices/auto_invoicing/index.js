import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";

const data = [
    { id: "001", job: "Jane Smith", dateOfService: "02/10/2025", estCharge: "$300" },
    { id: "002", job: "Jane Smith", dateOfService: "02/10/2025", estCharge: "$300" },
    { id: "003", job: "Jane Smith", dateOfService: "02/10/2025", estCharge: "$300" },
    { id: "004", job: "Jane Smith", dateOfService: "02/10/2025", estCharge: "$300" },
];

export default function Index() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [mode, setMode] = useState("pre-bill");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col space-y-10 w-full font-satoshi">
            <span className="text-5xl font-bold">Auto Invoice</span>
            <div className="grid grid-cols-4 gap-6">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Zone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Job" />
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
                    <Button variant="default" className="bg-success-500 px-10">Run Pre-Bill</Button>
                    <Button variant="default" className="bg-warning-500 px-10">Clear</Button>
                </div>
            </div>
            <div className="flex flex-row gap-12">
                <span>Mode Selection:</span>
                <RadioGroup className="flex flex-row gap-10" value={mode} onValueChange={setMode}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="visited" id="visited" />
                        <label htmlFor="visited">Visited Based</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pre-bill" id="pre-bill" />
                        <label htmlFor="pre-bill">Pre-Bill</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4">
                    {mode === "pre-bill" ? (
                        <Button onClick={() => setIsModalOpen(true)} variant="default" className="bg-white text-gray-500 border px-10">Create Invoice</Button>
                    ) : (
                        <>
                            <Button onClick={() => setIsModalOpen(true)} variant="default" className="bg-white text-gray-500 border px-10">Batch All Invoice</Button>
                            <Button onClick={() => setIsModalOpen(true)} variant="default" className="bg-white text-gray-500 border px-10">Batch Selected Visit</Button>
                            <Button onClick={() => setIsModalOpen(true)} variant="default" className="bg-white text-gray-500 border px-10">Create Individual Visit Invoice</Button>
                        </>
                    )}
                </div>
            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-gray-900">ID</TableHead>
                            <TableHead className="font-bold text-gray-900">Job</TableHead>
                            <TableHead className="font-bold text-gray-900">Date of Service</TableHead>
                            <TableHead className="font-bold text-gray-900">Est. Charge</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((invoice, index) => (
                            <TableRow key={invoice.id + index}>
                                <TableCell className="font-medium text-gray-900">{invoice.id}</TableCell>
                                <TableCell className="font-medium text-gray-900">{invoice.job}</TableCell>
                                <TableCell className="font-medium text-gray-900">{invoice.dateOfService}</TableCell>
                                <TableCell className="font-medium text-gray-900">{invoice.estCharge}</TableCell>
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

                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                        <div className="flex flex-col gap-4 bg-white p-6 rounded-lg w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Invoice List</h2>
                            <div className="flex flex-col-2 items-center justify-between">
                                <p>Email: john.doe@gmail.com</p>
                                <p>Job Name: KIMBERLY HENRY (310143)</p>
                            </div>
                            <div className="flex flex-col-2 items-center justify-between">
                                <p>Date of Service: 02/10/2025</p>
                                <p>Est. Charge: $300</p>
                            </div>
                            <div className="flex flex-col-2 items-center gap-16 justify-between mt-10">
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="font-medium">Additional Charge Description</label>
                                    <Input type="text" placeholder="Enter Description" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="font-medium">Additional Charges Amount($)</label>
                                    <Input type="number" placeholder="0" />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4 mt-4">
                                <Button onClick={() => setIsModalOpen(false)} className="bg-sky-950">Close</Button>
                                <Button>Create 1 Invoice</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
