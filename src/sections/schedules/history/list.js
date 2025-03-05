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
    clientName: "John Doe",
    shiftDate: "Great Service",
    duration: "3 Hours",
    feedback: "Great Service",
  },
  {
    clientName: "John Doe",
    shiftDate: "Great Service",
    duration: "3 Hours",
    feedback: "Great Service",
  },
  {
    clientName: "John Doe",
    shiftDate: "Great Service",
    duration: "3 Hours",
    feedback: "Great Service",
  },
  {
    clientName: "John Doe",
    shiftDate: "Great Service",
    duration: "3 Hours",
    feedback: "Great Service",
  },
  {
    clientName: "John Doe",
    shiftDate: "Great Service",
    duration: "3 Hours",
    feedback: "Great Service",
  },
];

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function CaregiversList() {
  const router = useRouter();

  return (
    <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Client's Name  
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Shift Date
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Duration
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Feedback
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={"invoice" + index}>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.clientName}
              </TableCell>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.shiftDate}
              </TableCell>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.duration}
              </TableCell>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.feedback}
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
  );
}
