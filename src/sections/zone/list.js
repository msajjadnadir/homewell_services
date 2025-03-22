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
const data = Array.from({ length: 50 }, (_, index) => ({
  zoneName: `HAMPTON ROADS ${index + 1}`,
  zoneCode: `123456${index + 1}`,
  supervisor: `Supervisor ${index + 1}`,
  totalEmployees: `${Math.floor(Math.random() * 100) + 1}`, // Random number between 1 and 100
  totalJobs: `${Math.floor(Math.random() * 1000) + 1}`, // Random number between 1 and 1000
}));

export default function List() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            <TableHead className="font-bold text-gray-900">Zone Name</TableHead>
            <TableHead className="font-bold text-gray-900">Zone Code</TableHead>
            <TableHead className="font-bold text-gray-900">Supervisor</TableHead>
            <TableHead className="font-bold text-gray-900">
              Total Employees
            </TableHead>
            <TableHead className="font-bold text-gray-900">Total Jobs</TableHead>
            <TableHead className="font-bold text-gray-900">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((invoice, index) => (
            <TableRow key={"invoice" + index}>
              <TableCell className="font-medium text-gray-900">
                {invoice.zoneName}
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {invoice.zoneCode}
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {invoice.supervisor}
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {invoice.totalEmployees}
              </TableCell>
              <TableCell className="font-medium text-gray-900">
                {invoice.totalJobs}
              </TableCell>
              <TableCell className="flex flex-row gap-[10px]">
                <button
                  onClick={() => router.push(paths.dashboard.zone.edit)}
                  className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]"
                >
                  Edit
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