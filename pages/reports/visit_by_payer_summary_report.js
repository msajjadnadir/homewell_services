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

export default function visit_by_payer_summary_report() {

    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-12 w-full font-satoshi">
            <span className="text-5xl font-bold">
                Visit by Payer Summary Report
            </span>
            <div className="grid grid-cols-10 gap-2">
                <div className="col-span-10">
                    <label>Row Per Page</label>
                </div>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
            </div>
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
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Form" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Form" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col gap-4">
                    <label>Start Date</label>
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
                    <label>End Date</label>
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
                    <Button variant="default" className="bg-sky-900 px-10">
                        Download PDF
                    </Button>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-gray-800">
                                Jon Name
                            </TableHead>
                            <TableHead className="font-bold text-gray-800">
                                Zone
                            </TableHead>
                            <TableHead className="font-bold text-gray-800">
                                Payer
                            </TableHead>
                            <TableHead className="font-bold text-gray-800">
                                Country
                            </TableHead>
                            <TableHead className="font-bold text-gray-800">
                                CPT Code
                            </TableHead>
                            <TableHead className="font-bold text-gray-800">
                                Modifiers
                            </TableHead>
                            <TableHead className="font-bold text-gray-800">
                                Activity Code
                            </TableHead>
                            <TableHead className="font-bold text-gray-800">
                                Total Units
                            </TableHead>
                            <TableHead className="font-bold text-gray-800">
                                Total Hours
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={9} className="text-center text-red-500 bg-red-100 font-semibold p-5">
                                No Records Found
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
