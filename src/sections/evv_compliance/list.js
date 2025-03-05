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

const invoices = [
  {
    verificationMethod: "GPS Check-in",
    successfull: "100",
    failed: "25",
  },
  {
    verificationMethod: "GPS Check-in",
    successfull: "100",
    failed: "25",
  },
  {
    verificationMethod: "GPS Check-in",
    successfull: "100",
    failed: "25",
  },
  {
    verificationMethod: "GPS Check-in",
    successfull: "100",
    failed: "25",
  },
  {
    verificationMethod: "GPS Check-in",
    successfull: "100",
    failed: "25",
  },
];

const invoices2 = [
  {
    caregiver: "Markus Suzak",
    client: "Jane Smith",
    shiftDate: "02/10/2025",
    isue: "GPS Mismatch",
  },
  {
    caregiver: "Markus Suzak",
    client: "Jane Smith",
    shiftDate: "02/10/2025",
    isue: "GPS Mismatch",
  },
  {
    caregiver: "Markus Suzak",
    client: "Jane Smith",
    shiftDate: "02/10/2025",
    isue: "GPS Mismatch",
  },
  {
    caregiver: "Markus Suzak",
    client: "Jane Smith",
    shiftDate: "02/10/2025",
    isue: "GPS Mismatch",
  },
  {
    caregiver: "Markus Suzak",
    client: "Jane Smith",
    shiftDate: "02/10/2025",
    isue: "GPS Mismatch",
  },
];

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function CaregiversList() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col mt-24 gap-5 items-start justify-start">
        <span className="font-satoshi font-bold text-3xl">
          EVV Verification Breakdown
        </span>
        <Table>
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                Verification Method
              </TableHead>
              <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                Success
              </TableHead>
              <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                Failed
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={"invoice" + index}>
                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                  {invoice.verificationMethod}
                </TableCell>
                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-green-500">
                  {invoice.successfull}
                </TableCell>
                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-red-500">
                  {invoice.failed}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col mt-16 gap-5 items-start justify-start">
        <span className="font-satoshi font-bold text-3xl">
          EVV Issues and Non-Compliance Check-ins
        </span>
        <Table>
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                Caregiver
              </TableHead>
              <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                Client
              </TableHead>
              <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                Shift Date
              </TableHead>
              <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                Issue
              </TableHead>
              <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices2.map((invoice, index) => (
              <TableRow key={"invoice" + index}>
                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                  {invoice.caregiver}
                </TableCell>
                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                  {invoice.client}
                </TableCell>
                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                  {invoice.shiftDate}
                </TableCell>
                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-red-500">
                  {invoice.isue}
                </TableCell>
                <TableCell className="flex flex-row gap-[10px]">
                  <button 
                    className="font-satoshi font-medium bg-yellow-100 px-4 py-1 rounded-lg" 
                    onClick={() => router.push(paths.dashboard.evv_compliance.compliance_report)}>
                    Review
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
    </>
  );
}
