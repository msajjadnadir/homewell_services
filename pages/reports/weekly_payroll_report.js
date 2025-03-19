import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";

export default function weekly_payroll_report() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const options = [
    "Use Rounded Hours",
    "Show Hours, Min"
  ];

  const options2 = [
    "Employee Code",
    "Agency EmpId",
    "External Code1",
    "External Code2",
    "Pay Class",
    "Pay Rate",
    "Regular Pay",
    "Overtime Pay",
    "Gross Pay"
  ];

  return (
    <div className="flex flex-col space-y-8 w-full font-satoshi">
      <span className="text-5xl font-bold">Weekly Payroll Report</span>
      <span className="text-gray-500">
        The table displays the hours worked per week. You can filter by the
        Zone, Employee, and a date range.
      </span>
      <div className="grid grid-cols-4 gap-6 justify-between">
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
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)} 
            dateFormat="MM/dd/yyyy"
            className="w-full border border-gray-300 rounded-md p-2 pl-10"
            placeholderText="Select date"
          />
          <Calendar
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <div className="relative">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)} 
            dateFormat="MM/dd/yyyy"
            className="w-full border border-gray-300 rounded-md p-2 pl-10"
            placeholderText="Select date"
          />
          <Calendar
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4">
          <Button variant="default" className="bg-success-500 px-10">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-10">
            Clear
          </Button>
        </div>
        <div className="flex flex-row gap-4 select-none">
          <div className="grid grid-cols-4 gap-6">
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={option} className="w-5 h-5" />
                <label htmlFor={option} className="text-sm">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Button variant="default" className="bg-sky-900 px-10">
            Export Excel
          </Button>
          <Button variant="default" className="bg-sky-900 px-10">
            Export PDF
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <label className="col-span-4 font-medium">Select Fileds to Display in Reports</label>
        {options2.map((option2, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox id={option2} className="w-5 h-5" />
            <label htmlFor={option2} className="text-sm">
              {option2}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
