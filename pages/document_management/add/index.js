import { useState } from "react";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Add() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-col w-full font-satoshi">
      <span className="font-bold lg:text-5xl text-3xl">
        Upload New Document
      </span>

      <div className="grid lg:grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col gap-4">
          <span className="font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Document Name
          </span>
          <Input placeholder="Enter Document Name" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Category
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Caregiver Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hampton-roads">Hampton Roads</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-4">
          <span className="font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Upload file
          </span>
          <div className="flex items-center gap-3 border p-1 rounded">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-gray-100 text-dark px-4 py-1 rounded-md hover:bg-blue-600 transition-colors"
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
          <label className="font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Expiration Date (if applicable)
          </label>
          <div className="flex flex-col gap-4">
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
      </div>

      <div className="flex flex-row items-center justify-end mt-36">
        <div className="flex flex-row items-center gap-3">
          <Button variant="default" className="py-5 px-10">
            Upload Document
          </Button>

          <Button variant="outline" className="py-5 px-10 bg-red-500 shadow text-white ">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}