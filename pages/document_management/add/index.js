"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddCaregiverPage() {
  return (
    <div className="flex flex-col w-full">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[0.016em] text-[#00261C]">
        Upload New Document
      </span>

      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Document Name
          </span>
          <Input placeholder="Enter Document Name" />
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
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
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Upload file
          </span>
          <div className="flex items-center gap-3 border p-1 rounded">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-gray-400 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition-colors"
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
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Expiration Date (if applicable)
          </label>
          <div className="relative">
            <Input placeholder="dd/mm/yyyy" />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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