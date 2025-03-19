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

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar, PlusIcon } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@/components/ui/checkbox";

const data1 = [
  {
    payerName: "Gearge Martin",
    claimAmount: "$8,526.90",
    receivedAmount: "$0.00",
    receivableAmount: "$8,526.90",
  },
];

const data2 = [
  {
    medicalRecordId: "HWS1234567",
    firstName: "CYNTHIA",
    lastName: "PAUL",
    claimAmount: "$158.64",
    receivedAmount: "$0.00",
    receivableAmount: "$158.64",
    dateOfService: "2025-01-15 09:01 AM",
  },
  {
    medicalRecordId: "HWS1234567",
    firstName: "CYNTHIA",
    lastName: "PAUL",
    claimAmount: "$158.64",
    receivedAmount: "$0.00",
    receivableAmount: "$158.64",
    dateOfService: "2025-01-15 09:01 AM",
  },
  {
    medicalRecordId: "HWS1234567",
    firstName: "CYNTHIA",
    lastName: "PAUL",
    claimAmount: "$158.64",
    receivedAmount: "$0.00",
    receivableAmount: "$158.64",
    dateOfService: "2025-01-15 09:01 AM",
  },
];

export default function historical_ar_report() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex flex-col space-y-8 w-full font-satoshi">
      <span className="text-5xl font-bold">Historical A/R Report</span>
      <div className="grid grid-cols-5 gap-6 justify-between">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Payer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option">Option</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-row gap-4 select-none">
          <Button className="bg-green-200 px-10 text-green-950">0-30</Button>
          <Button className="bg-gray-400 px-10">31-60</Button>
          <Button className="bg-gray-400 px-10">61-90</Button>
          <Button className="bg-gray-400 px-10">90+</Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-medium">As of</label>
          <div className="relative">
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
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 select-none">
          <Button variant="default" className="bg-success-500 px-10">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-10">
            Clear
          </Button>
        </div>
        <div className="flex flex-row gap-4">
          <Button variant="default" className="bg-sky-900 px-10">
            Export Excel
          </Button>
          <Button variant="default" className="bg-sky-900 px-10">
            Export PDF
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-bold text-gray-900">
                <Checkbox />
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Payer Name
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Claim Amount
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Received Amount
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Receivable Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data1.map((invoice, index) => (
              <TableRow key={"invoice" + index}>
                <TableCell className="font-medium text-gray-900">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  <span className="flex items-center gap-2">
                    <PlusIcon className="w-5 h-5 bg-green-500 text-white rounded" />
                    {invoice.payerName}
                  </span>
                </TableCell>

                <TableCell className="font-medium text-gray-900">
                  {invoice.claimAmount}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.receivedAmount}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.receivableAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-bold text-gray-900">
                Medical Record Id
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                First Name
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Last Name
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Claim Amount
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Received Amount
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Receivable Amount
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Date of Service
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data2.map((invoice, index) => (
              <TableRow key={"invoice" + index}>
                <TableCell className="font-medium text-gray-900">
                  {invoice.medicalRecordId}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.firstName}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.lastName}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.claimAmount}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.receivedAmount}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.receivableAmount}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.dateOfService}
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
