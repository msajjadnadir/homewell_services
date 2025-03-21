import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InvoiceForm() {
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col gap-8 w-full font-satoshi">
            <span className="text-5xl font-bold mb-6">Create Single Invoice</span>

            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Client Name</label>
                    <Input placeholder="Enter client name" />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Client Address</label>
                    <Input placeholder="Enter client address" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Date of Service</label>
                    <div className="relative w-full">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} 
                            dateFormat="dd-MMM-yyyy"
                            className="w-full border border-gray-300 rounded-md p-2 pl-10"
                            placeholderText="Select date"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Service Description</label>
                    <Input placeholder="Enter service description" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Invoice Type</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select invoice type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="hourly">Hourly Billing</SelectItem>
                            <SelectItem value="fixed">Fixed Billing</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Hourly Billing Rate ($)</label>
                    <Input placeholder="Enter billing rate" type="number" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Hours Worked</label>
                    <Input placeholder="Enter hours worked" type="number" />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Total Hourly Charge ($)</label>
                    <Input placeholder="$0" disabled />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Additional Charge Description</label>
                    <Input placeholder="Enter description" />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Additional Charge Amount ($)</label>
                    <Input placeholder="$0" type="number" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Total Charge ($)</label>
                    <Input placeholder="0" disabled />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="font-medium">Email</label>
                    <Input placeholder="Enter email" type="email" />
                    <span className="text-gray-500">Invoice will be sent to the above email address</span>
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
