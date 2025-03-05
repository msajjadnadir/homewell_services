import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function AddCaregiverLocation() {
  const [date, setDate] = useState(new Date());

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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal h-10",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                <Calendar className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Birthday
          </span>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal h-10",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                <Calendar className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
