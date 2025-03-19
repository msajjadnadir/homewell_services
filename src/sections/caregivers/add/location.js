import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function AddCaregiverLocation() {
  const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex flex-col gap-6 mt-[46px]">
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          Address Line
        </span>
        <Input placeholder="Enter your Address" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          Address Line 2
        </span>
        <Input placeholder="Enter your Address 2 (optionla)" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          Zip/County/City/State
        </span>
        <div className="grid grid-cols-3 gap-5">
          <Input placeholder="Zip" />
          <Input placeholder="County" />
          <Input placeholder="City" />
          <Input placeholder="State" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
              Country
            </span>
            <Input placeholder="Country" />
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
              Timezone
            </span>
            <Input placeholder="Timezone" />
          </div>
        </div>
        <span className="font-satoshi font-medium text-base leading-[39.2px] tracking-[-0.63px] underline text-secondaryShades-base cursor-pointer">
          Click here to View Map in Google
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          SSN
        </span>
        <Input placeholder="Enter SSN i;e: XXX-XX-XXXX" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Choose Pay Class
          </span>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Pay Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Pay Rate
          </span>
          <Input placeholder="Enter Pay Rate" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Hire Date
          </span>
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
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Birthday
          </span>
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
      </div>
    </div>
  );
}
