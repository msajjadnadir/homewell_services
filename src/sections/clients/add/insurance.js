import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

export default function AddClientForm() {
  return (
    <div className="flex flex-col mt-[46px] gap-6">
      <span className="text-sm text-gray-500">
        Use this tab to set up Insurance. Select a default Insurance Type if this Job is associated with a particular activity.
      </span>
      <span className="text-sm text-red-500">
        Group Number, Group Name and Insurance Type may cause rejections, do not use these unless instructed.      </span>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Payers
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Payers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zone-1">Zone 1</SelectItem>
              <SelectItem value="zone-2">Zone 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <label className="">
          Policy Number
        </label>
        <Input />
      </div>
      <div className="flex flex-col gap-[16px]">
        <label className="">
          Group Number
        </label>
        <Input />
      </div>
      <div className="flex flex-col gap-[16px]">
        <label className="">
          Group Name
        </label>
        <Input />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Effective Date
          </label>
          <div className="relative w-full">
            <DatePicker
              dateFormat="MM/dd/yyyy"
              className="w-full border border-gray-300 rounded-md p-2 pl-10"
              placeholderText="Select date"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Effective End Date
          </label>
          <div className="relative w-full">
            <DatePicker
              dateFormat="MM/dd/yyyy"
              className="w-full border border-gray-300 rounded-md p-2 pl-10"
              placeholderText="Select date"
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Insurance Type
          </label>
          <Input />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Deductable
          </label>
          <Input />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Copayment
          </label>
          <Input />
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Active
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">No</label>
          </div>
        </RadioGroup>
      </div>
    </div >
  );
}