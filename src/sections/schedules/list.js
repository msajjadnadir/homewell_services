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
    caregiver: "John Doe",
    client: "George R.R Martin",
    shiftDate: "25/02/2025",
    duration: "3 Hours",
    evvStatus: "Verified",
  },
  {
    caregiver: "John Doe",
    client: "Markus Suzak",
    shiftDate: "25/02/2025",
    duration: "3 Hours",
    evvStatus: "Verified",
  },
  {
    caregiver: "John Doe",
    client: "Updated SOS UHS",
    shiftDate: "25/02/2025",
    duration: "3 Hours",
    evvStatus: "Verified",
  },
  {
    caregiver: "John Doe",
    client: "Updated SOS UHS",
    shiftDate: "25/02/2025",
    duration: "3 Hours",
    evvStatus: "Verified",
  },
  {
    caregiver: "John Doe",
    client: "Updated SOS UHS",
    shiftDate: "25/02/2025",
    duration: "3 Hours",
    evvStatus: "Verified",
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
              Caregiver 
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Client
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Shift Date
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Duration
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Evv Status
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
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
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.duration}
              </TableCell>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-green-500">
                {invoice.evvStatus}
              </TableCell>
              <TableCell className="flex flex-row gap-[10px]">
                <button className="font-satoshi font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-yellow-100 px-3 py-1 rounded-[6px]">
                  Reschedule
                </button>
                <button className="font-satoshi font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]">
                  Approve
                </button>
                <button 
                  className="font-satoshi font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-red-300 px-3 py-1 rounded-[6px]"
                  onClick={() => router.push(paths.dashboard.caregivers.view)}
                >
                  Cancel
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
  );
}
