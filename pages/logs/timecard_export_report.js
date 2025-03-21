import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function timecard_export_report() {
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    const options = [
        "Agency ID", "Emp Zone", "Emp Name", "Emp Level", "Emp Skill",
        "Emp Status", "Emp Ext 1", "Emp Ext 2", "Emp Address", "Emp Address 2",
        "Emp City", "Emp State", "Emp Zip", "Agency Emp ID", "Rounded Hrs",
        "Job Zone", "Job Name", "Job First Name", "Job Last Name", "Job Contact",
        "Job Service", "Job Status", "Pay Type", "Job Group", "Job Ext 1",
        "Job Ext 2", "Agency Job ID", "Activity Name", "Activity Code", "Pay Class",
        "Notes", "Employee Signature", "Client Signature", "Client Voice Recording", "Location",
        "Location Exception", "Added By", "Add Date", "Edited By", "Edit Date",
        "Call Status IN", "Call Status OUT", "Payor Detail"
    ];

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="xl:text-5xl text-3xl font-bold">
                Timecard Export Report
            </span>
            <span className="text-gray-500">
                SELECT FIELDS TO DISPLAY IN REPORT
            </span>
            <div className="grid grid-cols-5 gap-12">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={option} className="w-5 h-5" />
                        <label htmlFor={option} className="text-sm">{option}</label>
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-20 border border-purple-200 rounded-lg p-10 my-10">
                <RadioGroup defaultValue="option-one" className="flex flex-row gap-10">
                    <div className="flex items-center space-x-2">
                        <label className="font-bold">Group by:</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <label htmlFor="female">Employee</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" checked/>
                        <label htmlFor="female">Job</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex flex-row gap-20 border border-purple-200 rounded-lg p-10 my-10">
                <RadioGroup defaultValue="option-one" className="flex flex-row gap-10">
                    <div className="flex items-center space-x-2">
                        <label className="font-bold">Filter Date by:</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female"/>
                        <label htmlFor="female">Specific Range</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" checked/>
                        <label htmlFor="female">Select Snapshot</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex flex-row gap-20 border border-purple-200 rounded-lg p-10 my-10">
                <RadioGroup defaultValue="option-one" className="flex flex-row gap-10">
                    <div className="flex items-center space-x-2">
                        <label className="font-bold">Filter Zone by:</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <label htmlFor="female">Employee Zone</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" checked/>
                        <label htmlFor="female">Job Zone</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female"/>
                        <label htmlFor="female">Payor</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex xl:flex-row flex-col gap-6">
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
                    <Button variant="default" className="bg-sky-900 px-10">
                        Export CSV
                    </Button>
                </div>
            </div>
        </div>
    )
}
