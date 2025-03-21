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
  return (
    <div className="mt-11 flex flex-col">
      <div className="flex xl:flex-row flex-col gap-6 items-center">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
        </Select>
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
        <Input placeholder="Search Document" />
      </div>
    </div>
  );
}
