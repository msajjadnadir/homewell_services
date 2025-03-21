import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function timecard_report() {
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="xl:text-5xl text-3xl font-bold">
                Timecard Report
            </span>
            <span className="text-gray-500">
                This report can be used for both payroll and billing exports for a selected date range. If the job is performed in a different timezone select "Show in Job timezone" before clicking the Search button. The Output Options lets you group by the Job, show/hide Job code, and show/hide additional fields. Click here to refer to the help guide
            </span>
            <div className="grid grid-cols-5 gap-6">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Employee" />
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
                        <SelectValue placeholder="Select Value" />
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
            <div className="flex flex-row gap-20">
                <div className="flex items-center space-x-6">
                    <Checkbox id="inactive-employee" className="w-6 h-6" />
                    <label htmlFor="inactive-employee">Show in Job Timezone</label>
                </div>
                <div className="flex items-center space-x-6">
                    <Checkbox id="terminated-employee" className="w-6 h-6" />
                    <label htmlFor="terminated-employee">Include Inactive Employee</label>
                </div>
                <div className="flex items-center space-x-6">
                    <Checkbox id="inactive-job" className="w-6 h-6" />
                    <label htmlFor="inactive-job">Include Inactive Job</label>
                </div>
            </div>
            <div className="flex flex-row gap-20">
                <RadioGroup defaultValue="option-one" className="flex flex-row gap-36">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" checked/>
                        <label htmlFor="male">Group by Employee</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <label htmlFor="female">Group by Job</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <label htmlFor="female">List View</label>
                    </div>
                </RadioGroup>
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
                        Export CSV
                    </Button>
                    <Button variant="default" className="bg-sky-900 px-10">
                        Export PDF
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <span className="font-semibold">Output Options</span>
                <div className="flex flex-row gap-5">
                    <div className="flex items-center space-x-6">
                        <Checkbox id="inactive-employee" className="w-6 h-6" />
                        <label htmlFor="inactive-employee">Group by Activity Code</label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terminated-employee" className="w-6 h-6" />
                        <label htmlFor="terminated-employee">Show Job Code</label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="inactive-job" className="w-6 h-6" />
                        <label htmlFor="inactive-job">Show Details</label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="hold-job" className="w-6 h-6" />
                        <label htmlFor="hold-job">Show Summary View</label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="hold-job" className="w-6 h-6" />
                        <label htmlFor="hold-job">Show Signature in PDF</label>
                    </div>
                </div>
            </div>

        </div>
    )
}
