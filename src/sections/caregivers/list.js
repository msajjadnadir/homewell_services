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

const invoices = [
  // Add 50 records here
  ...Array.from({ length: 50 }, (_, i) => ({
    employeeCode: `12345${i}`,
    employeeName: `Employee ${i + 1}`,
    city: `City ${i + 1}`,
    state: `State ${i + 1}`,
    zone: `Zone ${i + 1}`,
    status: "Active",
  })),
];

export default function CaregiversList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  // Calculate the total number of pages
  const totalPages = Math.ceil(invoices.length / recordsPerPage);

  // Get the records for the current page
  const currentRecords = invoices.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            <TableHead className="font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Employee Code
            </TableHead>
            <TableHead className="font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Employee Name
            </TableHead>
            <TableHead className="font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              City
            </TableHead>
            <TableHead className="font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              State
            </TableHead>
            <TableHead className="font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Zone
            </TableHead>
            <TableHead className="font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Status
            </TableHead>
            <TableHead className="font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRecords.map((invoice, index) => (
            <TableRow key={"invoice" + index}>
              <TableCell className="font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.employeeCode}
              </TableCell>
              <TableCell className="font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.employeeName}
              </TableCell>
              <TableCell className="font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.city}
              </TableCell>
              <TableCell className="font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.state}
              </TableCell>
              <TableCell className="font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.zone}
              </TableCell>
              <TableCell className="font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                {invoice.status}
              </TableCell>
              <TableCell className="flex flex-row gap-[10px]">
                <button className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]">
                  Edit
                </button>
                <button 
                  className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-primaryShades-100 px-3 py-1 rounded-[6px]"
                  onClick={() => router.push(paths.dashboard.caregivers.view)}
                >
                  View
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="justify-start">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
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
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}