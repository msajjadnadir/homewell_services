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
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-[16px]">
          <label className="">
            First Name
          </label>
          <Input placeholder="First Name" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Middle Name
          </label>
          <Input placeholder="Middle Name" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Last Name
          </label>
          <Input placeholder="Last Name" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Job Name
          </label>
          <Input placeholder="Enter Job Name" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Job Zone
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Enter Job Zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zone-1">Zone 1</SelectItem>
              <SelectItem value="zone-2">Zone 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Contact Name
          </label>
          <Input placeholder="Enter Contact Name" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="">
            Intake Date
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
            Discharge Date
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
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Mobile App Setting
        </span>
        <span className="text-gray-500">
          These will override the default mobile app settings set in Agency Detail.
        </span>
        <span className="">
          Show only Scheduled Visit?
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
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="default" />
            <label htmlFor="default">Agency Default (No)</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Allow Location Expections for Offsite Visits?
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
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="default" />
            <label htmlFor="default">Agency Default (No)</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Require Bluetooth Device for Visit?
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
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="default" />
            <label htmlFor="default">Agency Default (No)</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Allow Employee to Checkout from Job White Offsite?
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
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="default" />
            <label htmlFor="default">Agency Default (No)</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Employee Charting
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
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Status
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Active</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">InActive</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="default" />
            <label htmlFor="default">On Hold</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}