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
const generateInvoices = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    verificationMethod: "GPS Check-in",
    successfull: Math.floor(Math.random() * 200) + 1,
    failed: Math.floor(Math.random() * 100),
  }));
};

const generateInvoices2 = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    caregiver: `Caregiver ${index + 1}`,
    client: `Client ${index + 1}`,
    shiftDate: `02/${(index % 12) + 1}/2025`,
    isue: "GPS Mismatch",
  }));
};

export default function CaregiversList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const invoices = generateInvoices();
  const invoices2 = generateInvoices2();

  const totalPages = Math.ceil(invoices.length / recordsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedInvoices = invoices.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const displayedInvoices2 = invoices2.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <>
      <div className="flex flex-col mt-24 gap-5 items-start justify-start">
        <span className="font-satoshi font-bold text-3xl">
          EVV Verification Breakdown
        </span>
        <Table className="text-lg">
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="text-gray-900 font-medium">Verification Method</TableHead>
              <TableHead className="text-gray-900 font-medium">Success</TableHead>
              <TableHead className="text-gray-900 font-medium">Failed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedInvoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="text-gray-900 font-medium">{invoice.verificationMethod}</TableCell>
                <TableCell className="text-green-500 font-medium">{invoice.successfull}</TableCell>
                <TableCell className="text-red-500 font-medium">{invoice.failed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col mt-16 gap-5 items-start justify-start">
        <span className="font-satoshi font-bold text-3xl">
          EVV Issues and Non-Compliance Check-ins
        </span>
        <Table className="text-lg">
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="text-gray-900 font-medium">Caregiver</TableHead>
              <TableHead className="text-gray-900 font-medium">Client</TableHead>
              <TableHead className="text-gray-900 font-medium">Shift Date</TableHead>
              <TableHead className="text-gray-900 font-medium">Issue</TableHead>
              <TableHead className="text-gray-900 font-medium">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedInvoices2.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="text-gray-900 font-medium">{invoice.caregiver}</TableCell>
                <TableCell className="text-gray-900 font-medium">{invoice.client}</TableCell>
                <TableCell className="text-gray-900 font-medium">{invoice.shiftDate}</TableCell>
                <TableCell className="text-red-500 font-medium">{invoice.isue}</TableCell>
                <TableCell>
                  <button
                    className="bg-yellow-100 px-4 py-1 rounded-lg"
                    onClick={() => router.push(paths.dashboard.evv_compliance.compliance_report)}
                  >
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
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
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
    </>
  );
}
