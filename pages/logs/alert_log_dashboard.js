import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import "react-datepicker/dist/react-datepicker.css";

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
      staffEmployee: "--",
      caregiverEmployee: "Jane Smith",
      jobCode: "Jane Smith",
      alertType: "Auto Clock Out",
      date: "02/02/2025",
      employeeZoneCode: "(7911)",
      jobZoneCode: "Jane Smith",
      addNotes: "--",
    },
  ];

export default function alert_log_dashboard() {
    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="text-5xl font-bold">
                Alert Log Dashboard
            </span>
            <div className="grid grid-cols-2 gap-6">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Zone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-4">
                        <Button variant="default" className="bg-sky-900 px-10">
                            Refresh
                        </Button>
                        <Button variant="default" className="bg-sky-900 px-10">
                            -1 Day
                        </Button>
                        <Button variant="default" className="bg-sky-900 px-10">
                            -2 Days
                        </Button>
                        <Button variant="default" className="bg-sky-900 px-10">
                            -3 Days
                        </Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="border border-gray-100 shadow-lg flex flex-col items-center justify-center p-8 rounded-lg space-y-2">
                    <span className="font-bold text-3xl">All Zones</span>
                    <span className="text-gray-500">Zone Names</span>
                </div>
                <div className="border border-gray-100 shadow-lg flex flex-col items-center justify-center p-8 rounded-lg space-y-2">
                    <span className="font-bold text-3xl">02</span>
                    <span className="text-gray-500">Auto Clock Out</span>
                </div>
                <div className="border border-gray-100 shadow-lg flex flex-col items-center justify-center p-8 rounded-lg space-y-2">
                    <span className="font-bold text-3xl">00</span>
                    <span className="text-gray-500">Not Clock In time</span>
                </div>
                <div className="border border-gray-100 shadow-lg flex flex-col items-center justify-center p-8 rounded-lg space-y-2">
                    <span className="font-bold text-3xl">00</span>
                    <span className="text-gray-500 text-center">Not Clocked Out in Time</span>
                </div>
            </div>
             <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                        <TableHead className="font-bold text-gray-900">
                          Staff Employee
                        </TableHead>
                        <TableHead className="font-bold text-gray-900">
                          Caregiver Employee
                        </TableHead>
                        <TableHead className="font-bold text-gray-900">
                          Job code
                        </TableHead>
                        <TableHead className="font-bold text-gray-900">
                          Alert Type
                        </TableHead>
                        <TableHead className="font-bold text-gray-900">
                          Date
                        </TableHead>
                        <TableHead className="font-bold text-gray-900">
                          Employee Zone Code
                        </TableHead>
                        <TableHead className="font-bold text-gray-900">
                          Job Zone Code
                        </TableHead>
                        <TableHead className="font-bold text-gray-900">
                          Add Notes
                        </TableHead>
                        <TableHead className="font-bold text-gray-900">
                          Action
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.map((invoice, index) => (
                        <TableRow key={"invoice" + index}>
                          <TableCell className="font-medium text-gray-900">
                            {invoice.staffEmployee}
                          </TableCell>
                          <TableCell className="font-medium text-gray-900">
                            {invoice.caregiverEmployee}
                          </TableCell>
                          <TableCell className="font-medium text-gray-900">
                            {invoice.jobCode}
                          </TableCell>
                          <TableCell className="font-medium text-gray-900">
                            {invoice.alertType}
                          </TableCell>
                          <TableCell className="font-medium text-gray-900">
                            {invoice.date}
                          </TableCell>
                          <TableCell className="font-medium text-gray-900">
                            {invoice.employeeZoneCode}
                          </TableCell>
                          <TableCell className="font-medium text-gray-900">
                            {invoice.jobZoneCode}
                          </TableCell>
                          <TableCell className="font-medium text-gray-900">
                            {invoice.addNotes}
                          </TableCell>
                          <TableCell className="flex flex-row gap-[10px]">
                            <button className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]">
                              Edit
                            </button>
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
    )
}
