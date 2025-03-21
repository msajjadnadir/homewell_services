import { useState } from "react";

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddCaregiverCertification() {
  const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex flex-col mt-[46px] gap-6">
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          Certificate Date
        </span>
        <Input placeholder="Enter your Address" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Certificate Date
          </label>
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
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Renewal Date
          </label>
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
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          Notes
        </span>
        <Input placeholder="Enter your Address" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          Upload Certificate
        </span>
        <div className="flex items-center gap-3 border p-2">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Choose File
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                console.log("Selected file:", file.name);
              }
            }}
          />
          <span className="text-gray-500">Pick a file to add</span>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="font-satoshi text-[18px] font-medium leading-7 tracking-[-0.48%] text-gray-900">
          Make Inactive if Expired
        </span>
        <div className="flex flex-row gap-6">
          <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="No">No</label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[16px] leading-[39px] tracking-[-0.63px] text-red-500">
            Please uncheck after you've added a new certificate, or leave checked if editing current certificate
          </span>
        </div>
      </div>
    </div>
  );
}
