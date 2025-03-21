import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function care_plan_docs_expiration_report() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="lg:text-5xl text-3xl font-bold">
                Care Plan/Docs Expiration Report
            </span>
            <div className="flex lg:flex-row flex-col gap-6">
                <Input placeholder="Search Text" />
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
            <div className="flex lg:flex-row flex-col gap-4 justify-between">
                <div className="flex flex-row gap-4 select-none">
                    <Button variant="default" className="w-full bg-success-500 px-10">
                        Search
                    </Button>
                    <Button variant="default" className="w-full bg-warning-500 px-10">
                        Clear
                    </Button>
                </div>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="w-full bg-sky-900 px-10">
                        Export Excel
                    </Button>
                </div>
            </div>
        </div>
    )
}
