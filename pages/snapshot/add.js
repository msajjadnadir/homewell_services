import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function add() {
  return (
    <div className="flex flex-col mt-3 gap-6 font-satoshi">
      <div className="flex flex-col">
        <p className="text-4xl font-semibold">Add Snapshot</p>
        <p className="text-gray-400 mt-6">
          Enter a description and select a start date. The date is based on the work-week specified in the Agency details. The end date is determined by the Payroll Period.                    </p>
      </div>
      <div className="grid gap-6 w-[50%]">
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Decription
          </label>
          <Input placeholder="Enter Description" />
        </div>

        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Select Zone
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Hampton Roads" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hampton-roads">Hampton Roads</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Select Payor
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hampton-roads">Hampton Roads</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-row gap-6">
            <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pp" id="pp" checked />
                <label htmlFor="pp">Payroll Period</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cdr" id="cdr" />
                <label htmlFor="cdr">Custom Date Range</label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Select Start Date
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Mon 02/02/2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            End Date
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Mon 02/02/2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
            <div className="flex mt-16 w-full">
              <div className="flex flex-row items-center gap-3">
                <Button className="py-5 px-12 bg-sky-950 text-white shadow-xl"
                >
                  Cancel
                </Button>
                <Button className="py-5 px-12 bg-[#A37EE6] text-white shadow-xl"
                >
                  Submit
                </Button>
              </div>
            </div>
    </div>
  );
}
