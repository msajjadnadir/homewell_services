import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function UpdateClaimBilling() {
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-6 w-full font-satoshi">
            <span className="text-3xl font-bold">Update Claim Billing</span>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Agency Job Name</label>
                <Input placeholder="Enter Agency Job Name" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Job First Name</label>
                <Input placeholder="Enter First Name" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Job Last Name</label>
                <Input placeholder="Enter Last Name" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Payer Name</label>
                <Input placeholder="Enter Payer Name" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Medical Record ID *</label>
                <Input placeholder="Enter Medical Record ID" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Claim Billing Number *</label>
                <Input placeholder="Enter Claim Billing Number" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Claim Reference Number (TCN)</label>
                <Input placeholder="Enter Claim Reference Number" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Claim Batch ID</label>
                <Input placeholder="Enter Claim Reference Number" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Date of Service *</label>
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

            <div className="flex flex-col gap-2">
                <label className="font-medium">CPT Codes *</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select CPT Codes" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-4">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="text-gray-900 font-medium">CPT Codes</TableHead>
                            <TableHead className="text-gray-900 font-medium">Modifier 01</TableHead>
                            <TableHead className="text-gray-900 font-medium">Modifier 02</TableHead>
                            <TableHead className="text-gray-900 font-medium">Modifier 03</TableHead>
                            <TableHead className="text-gray-900 font-medium">Unit(s)</TableHead>
                            <TableHead className="text-gray-900 font-medium">Amount/Unit</TableHead>
                            <TableHead className="text-gray-900 font-medium">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-gray-900 font-medium">T1005 - Virginia Respite Care - Hour</TableCell>
                            <TableCell className="text-gray-900 font-medium">Enter</TableCell>
                            <TableCell className="text-gray-900 font-medium">Enter</TableCell>
                            <TableCell className="text-gray-900 font-medium">Enter</TableCell>
                            <TableCell className="text-gray-900 font-medium">6</TableCell>
                            <TableCell className="text-gray-900 font-medium">19.38</TableCell>
                            <TableCell className="text-gray-900 font-medium">11.80</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">ICD-10 Codes</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select ICD-10 Codes" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="icd1">ICD-10 Code 1</SelectItem>
                        <SelectItem value="icd2">ICD-10 Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-row items-center gap-2">
                <Checkbox />
                <label>Write off receivable</label>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Charged Amount *</label>
                <Input placeholder="$150" />
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="font-medium">Receivable</label>
                    <Input placeholder="Receivable" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-medium">Write-off Amount</label>
                    <Input placeholder="Write-off Amount" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-medium">Username</label>
                    <Input placeholder="Username" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-medium">Write-off Reason</label>
                    <Input placeholder="Write-off Reason" />
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">Save Changes</Button>
                    <Button variant="default" className="bg-red-500 px-10">Cancel</Button>
                </div>
            </div>
        </div>
    );
}

