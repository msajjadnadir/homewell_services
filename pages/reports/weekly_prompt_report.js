import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Checkbox } from "@/components/ui/checkbox";
import "react-datepicker/dist/react-datepicker.css";


export default function weekly_prompt_report() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const options = [
        "Show Medicaid ID", "Show Client D.O.B", "Show Signature in PDF",
    ];

    return (
        <div className="flex flex-col space-y-12 w-full font-satoshi">
            <span className="xl:text-5xl text-3xl font-bold">
                Weekly Prompt Report
            </span>
            <div className="flex xl:flex-row flex-col gap-6">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Option" />
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
            <div className="flex xl:flex-row flex-col gap-4 justify-between">
                <div className="flex flex-row gap-4 select-none">
                    <Button variant="default" className="w-full bg-success-500 px-10">
                        Search
                    </Button>
                    <Button variant="default" className="w-full bg-warning-500 px-10">
                        Clear
                    </Button>
                </div>
                <div className="flex xl:flex-row flex-col gap-4">
                    <Button variant="default" className="w-full bg-sky-900 px-10">
                        Export Excel
                    </Button>
                    <Button variant="default" className="w-full bg-sky-900 px-10">
                        Download PDF
                    </Button>
                    <Button variant="default" className="w-full bg-sky-950 px-10">
                        Download DMAS-90 PDF
                    </Button>
                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-6">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={option} className="w-5 h-5" />
                        <label htmlFor={option} className="text-sm">{option}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
