import { useState } from "react";
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
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

const generateInvoices = () => {
  return Array.from({ length: 50 }, (_, i) => ({
    caregiver: `Caregiver ${i + 1}`,
    client: `Client ${i + 1}`,
    shiftDate: "25/02/2025",
    duration: "3 Hours",
    evvStatus: "Verified",
  }));
};

const itemsPerPage = 10;

export default function List() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const invoices = generateInvoices();
  const totalPages = Math.ceil(invoices.length / itemsPerPage);
  const paginatedData = invoices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            <TableHead>Caregiver</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Shift Date</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Evv Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell>{invoice.caregiver}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell>{invoice.shiftDate}</TableCell>
              <TableCell>{invoice.duration}</TableCell>
              <TableCell className="text-green-500">{invoice.evvStatus}</TableCell>
              <TableCell className="flex gap-[10px]">
                <button className="bg-yellow-100 px-3 py-1 rounded-[6px]">Reschedule</button>
                <button className="bg-success-100 px-3 py-1 rounded-[6px]">Approve</button>
                <button 
                  className="bg-red-300 px-3 py-1 rounded-[6px]"
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
            <PaginationPrevious href="#" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink href="#" onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
