import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function budget_vs_actual_report() {
  const [date, setDate] = useState(new Date());

  const options = ["Show Address", "Show Summary View", "Show Job Code"];

  return (
    <div className="flex flex-col space-y-8 w-full font-satoshi">
      <span className="text-5xl font-bold">Budget vs Actual Report</span>
      <span className="text-gray-500">
        Compare actual hours worked versus budgeted hours a for Job. The
        budgeted hours is specified in the Job. Reporting option 1 is based on a
        date range you specify. Option 2 is based on the start day of the work
        week, which is specified in the Agency setting.
      </span>
      <div className="grid grid-row gap-6">
        <label className="font-medium">Input Options</label>
        <RadioGroup defaultValue="option-one" className="flex flex-row gap-36">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <label htmlFor="male">Specify Date Range</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <label htmlFor="female">Use Budget Alert Setting</label>
          </div>
        </RadioGroup>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option">Option</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <DatePicker
              selected={date}
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
        <div className="flex flex-col gap-4">
          <div className="relative">
            <DatePicker
              selected={date}
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
      </div>
      <div className="grid grid-cols-4 gap-6">
        <label className="col-span-4 font-medium">Output Options</label>
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox id={option} className="w-5 h-5" />
            <label htmlFor={option} className="text-sm">
              {option}
            </label>
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
        </div>
      </div>
    </div>
  );
}
