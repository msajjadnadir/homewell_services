import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function call_logs() {
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="xl:text-5xl text-3xl font-bold">
                Call Logs
            </span>
            <span className="text-gray-500">
                View or export a list of calls received for the selected time period. If Job was performed in a different time-zone, then check the option to view the job in the time-zone it was completed in. Click here to review Call Status definitions
            </span>
            <div className="flex flex-row gap-16">
                <div className="flex items-center space-x-6">
                    <Checkbox id="terms" className="w-6 h-6" />
                    <label htmlFor="terms">Include Inactive Employee</label>
                </div>
                <div className="flex items-center space-x-6">
                    <Checkbox id="terms" className="w-6 h-6" />
                    <label htmlFor="terms">Include Terminated Employee</label>
                </div>
                <div className="flex items-center space-x-6">
                    <Checkbox id="terms" className="w-6 h-6" />
                    <label htmlFor="terms">Include Inactive Job</label>
                </div>
                <div className="flex items-center space-x-6">
                    <Checkbox id="terms" className="w-6 h-6" />
                    <label htmlFor="terms">Include Hold Job</label>
                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-6">
                
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
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} 
                            dateFormat="MM/dd/yyyy"
                            className="w-full border border-gray-300 rounded-md p-2 pl-10"
                            placeholderText="Select date"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
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
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex items-center space-x-6">
                    <Checkbox id="terms" className="w-6 h-6" />
                    <label htmlFor="terms">Check this box to see time in jobs and time zone</label>
                </div>
            </div>
        </div>
    )
}
