import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Checkbox } from "@/components/ui/checkbox";
import "react-datepicker/dist/react-datepicker.css";


export default function job_task_report() {

    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    const options = [
        "Created At", "Updated At",
    ];

    return (
        <div className="flex flex-col space-y-12 w-full font-satoshi">
            <span className="text-5xl font-bold">
                Job Task Report
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
            <div className="grid grid-cols-4 gap-6">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={option} className="w-5 h-5" />
                        <label htmlFor={option} className="text-sm">{option}</label>
                    </div>
                ))}
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
        </div>
    )
}
