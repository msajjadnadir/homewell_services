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
import { PlusIcon } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@/components/ui/checkbox";

const data1 = [
  {
    payerName: "Aetna",
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

export default function accounts_receivable_report() {
  return (
    <div className="flex flex-col space-y-8 w-full font-satoshi">
      <span className="xl:text-5xl text-3xl font-bold">Accounts Receivable Report</span>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 select-none">
          <div className="flex flex-row gap-4 select-none">
            <Button className="bg-green-200 px-10 text-green-950">0-30</Button>
            <Button className="bg-green-200 px-10 text-green-950">31-60</Button>
            <Button className="bg-green-200 px-10 text-green-950">61-90</Button>
            <Button className="bg-green-200 px-10 text-green-950">90+</Button>
          </div>
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
