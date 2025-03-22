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

// Generate 50 records dynamically
const invoices = Array.from({ length: 50 }, (_, index) => ({
  jobCode: `123456${index + 1}`,
  jobName: `Job Name ${index + 1}`,
  zone: `Zone ${index + 1}`,
  authorizedPhone: `Phone ${index + 1}`,
  status: index % 2 === 0 ? "Active" : "Inactive", // Alternate status
}));

export default function List() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Display 20 records per page

  // Calculate total pages
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = invoices.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Job Code
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Job Name
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Zone
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Authorized Phone
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Status
            </TableHead>
            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((invoice, index) => (
            <TableRow key={"invoice" + index}>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.jobCode}
              </TableCell>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.jobName}
              </TableCell>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.zone}
              </TableCell>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.authorizedPhone}
              </TableCell>
              <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.status}
              </TableCell>
              <TableCell className="flex flex-row gap-[10px]">
                <button className="font-satoshi font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]">
                  Edit
                </button>
                <button
                  className="font-satoshi font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-primaryShades-100 px-3 py-1 rounded-[6px]"
                  onClick={() => router.push(paths.dashboard.clients.view)}
                >
                  View
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-start">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(i + 1)}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}