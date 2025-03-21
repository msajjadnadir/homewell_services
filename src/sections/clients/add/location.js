import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddCaregiverLocation() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-col gap-6 mt-[46px]">
      {/* Address Fields */}
      <div className="flex flex-col gap-4">
        <span className="font-medium text-[18px] text-gray-900">Address Line</span>
        <Input placeholder="Enter your Address" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-medium text-[18px] text-gray-900">Address Line 2</span>
        <Input placeholder="Enter your Address 2 (optional)" />
      </div>

      {/* Zip, County, City, State */}
      <div className="flex flex-col gap-4">
        <span className="font-medium text-[18px] text-gray-900">
          Zip/County/City/State
        </span>
        <div className="grid grid-cols-4 gap-4">
          <Input placeholder="Zip" />
          <Input placeholder="County" />
          <Input placeholder="City" />
          <Input placeholder="State" />
        </div>
      </div>

      {/* Country & Timezone */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-medium text-[18px] text-gray-900">Country</span>
          <Input placeholder="Country" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-medium text-[18px] text-gray-900">Timezone</span>
          <Input placeholder="Timezone" />
        </div>
      </div>

      <span className="font-medium text-base underline text-blue-600 cursor-pointer">
        Click here to View Map in Google
      </span>

      {/* Authorized Phone & Birthday */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-medium text-[18px] text-gray-900">Authorized Phone</span>
          <Input placeholder="Phone" />
        </div>
        <div className="flex flex-col gap-4 relative">
          <span className="font-medium text-[18px] text-gray-900">Birthday</span>
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

      {/* SSN */}
      <div className="flex flex-col gap-4">
        <span className="font-medium text-[18px] text-gray-900">SSN</span>
        <Input placeholder="Enter SSN i.e: XXX-XX-XXXX" />
      </div>

      {/* Email, Cell Phone, Work Phone */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-medium text-[18px] text-gray-900">Email</span>
          <Input placeholder="Enter Email" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-medium text-[18px] text-gray-900">Cell Phone</span>
          <Input placeholder="Phone" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-medium text-[18px] text-gray-900">Work Phone</span>
        <Input placeholder="Phone" />
      </div>
    </div>
  );
}
