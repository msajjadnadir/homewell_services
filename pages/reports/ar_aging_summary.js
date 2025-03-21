import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@/components/ui/checkbox";

export default function ar_aging_summary() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const options = ["Show $0 Payables"];

  return (
    <div className="flex flex-col space-y-8 w-full font-satoshi">
      <span className="lg:text-5xl text-3xl font-bold">A/R Aging Summary</span>
      <div className="flex lg:flex-row flex-col gap-6 justify-between">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Payer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option">Option</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative w-full">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            className="w-full border border-gray-300 rounded-md p-2 pl-10"
            placeholderText="Select date"
          />
          <Calendar
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Clients" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option">Option</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-row gap-4 select-none justify-end">
          <Button variant="default" className="bg-success-500 px-10">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-10">
            Clear
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex lg:flex-row flex-col gap-4 select-none">
          <div className="flex gap-6">
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={option} className="w-5 h-5" />
                <label htmlFor={option} className="text-sm">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <Button variant="default" className="bg-sky-900 px-10">
            Export Excel
          </Button>
          <Button variant="default" className="bg-sky-900 px-10">
            Export PDF
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-[60px] gap-5 items-start justify-start w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-bold text-xl text-gray-800">
                Payer
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Sum of 0-30
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Sum of 31-60
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Sum of 61-90
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Sum of 91-120
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Sum of 121+
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center text-red-500 bg-red-100 font-semibold p-5"
              >
                No Records Found
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
