import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CaregiversFilter() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="mt-11 flex flex-col">
      <div className="grid grid-cols-4 gap-6 items-center">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by caregiver" />
          </SelectTrigger>
        </Select>
        <Input placeholder="Enter Caregiver Name" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
        </Select>
        <div className="flex flex-col">
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
