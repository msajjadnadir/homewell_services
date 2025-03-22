import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

const data = [
  {
    employee: "Jane",
    job: "--",
    logType: "Clock-in",
    medicalRecordId: "A123654",
    workDuration: "8:00",
    timeStamp: "02/02/2025",
    callStatus: "Success-Mobile",
    originalTime: "8:00 AM",
    originalWork: "8.8",
    activityCode: "Personal Care",
    enteredBy: "--",
    updatedBy: "--",
  },
  {
    employee: "Jane",
    job: "--",
    logType: "Clock-in",
    medicalRecordId: "A123654",
    workDuration: "8:00",
    timeStamp: "02/02/2025",
    callStatus: "Success-Mobile",
    originalTime: "8:00 AM",
    originalWork: "8.8",
    activityCode: "Personal Care",
    enteredBy: "--",
    updatedBy: "--",
  },
  {
    employee: "Jane",
    job: "--",
    logType: "Clock-in",
    medicalRecordId: "A123654",
    workDuration: "8:00",
    timeStamp: "02/02/2025",
    callStatus: "Success-Mobile",
    originalTime: "8:00 AM",
    originalWork: "8.8",
    activityCode: "Personal Care",
    enteredBy: "--",
    updatedBy: "--",
  },
  {
    employee: "Jane",
    job: "--",
    logType: "Clock-in",
    medicalRecordId: "A123654",
    workDuration: "8:00",
    timeStamp: "02/02/2025",
    callStatus: "Success-Mobile",
    originalTime: "8:00 AM",
    originalWork: "8.8",
    activityCode: "Personal Care",
    enteredBy: "--",
    updatedBy: "--",
  },
];

export default function paid() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex flex-col space-y-12 w-full font-satoshi">
      <div className="flex flex-row gap-6 items-center justify-between">
        <span className="xl:text-5xl text-3xl font-bold">Time Card List</span>
        <div className="flex flex-row gap-3">
          <Button variant="default" className="px-16 py-5">
            Add Clients
          </Button>
          <Button variant="default" className="px-10 py-5 bg-sky-950">
            Export Excel
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Job, Date or Employee" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {["Job", "Date", "Employee"].map((month) => (
                <SelectItem key={month} value={month.toLowerCase()}>
                  {month}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="Select Zone" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Value 1</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-col gap-4">
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
        </div>
        <div className="relative w-full">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MM/dd/yyyy"
            className="w-full border border-gray-300 rounded-md p-2 pl-10"
            placeholderText="Select date"
          />
          <Calendar
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>

        <div className="flex flex-col">
          <Button variant="default" className="px-10 py-5">
            Search
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="text-gray-900">Employee</TableHead>
              <TableHead className="text-gray-900">Job</TableHead>
              <TableHead className="text-gray-900">Log Type</TableHead>
              <TableHead className="text-gray-900">Work Duration</TableHead>
              <TableHead className="text-gray-900">Time Stamp</TableHead>
              <TableHead className="text-gray-900">Call timeStamp</TableHead>
              <TableHead className="text-gray-900">Original Time</TableHead>
              <TableHead className="text-gray-900">Original Work</TableHead>
              <TableHead className="text-gray-900">Activity Code</TableHead>
              <TableHead className="text-gray-900">Entered by</TableHead>
              <TableHead className="text-gray-900">Updated by</TableHead>
              <TableHead className="text-gray-900">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, index) => (
              <TableRow key={"data" + index}>
                <TableCell className="text-gray-900">{data.employee}</TableCell>
                <TableCell className="text-gray-900">{data.job}</TableCell>
                <TableCell className="text-gray-900">{data.logType}</TableCell>

                <TableCell className="text-gray-900">
                  {data.workDuration}
                </TableCell>
                <TableCell className="text-gray-900">
                  {data.timeStamp}
                </TableCell>
                <TableCell className="text-gray-900">
                  {data.callStatus}
                </TableCell>
                <TableCell className="text-gray-900">
                  {data.originalTime}
                </TableCell>
                <TableCell className="text-gray-900">
                  {data.originalWork}
                </TableCell>
                <TableCell className="text-gray-900">
                  {data.activityCode}
                </TableCell>
                <TableCell className="text-gray-900">
                  {data.enteredBy}
                </TableCell>
                <TableCell className="text-gray-900">
                  {data.updatedBy}
                </TableCell>
                <TableCell className="text-gray-900">
                  <Button
                    className="bg-green-100 text-gray-800"
                    onClick={() =>
                      router.push(paths.dashboard.time_cards.job_list.edit)
                    }
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="justify-start">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
