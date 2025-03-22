import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";
import { useState } from "react";

const generateData = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    client: `Client ${index + 1}`,
    email: `client${index + 1}@example.com`,
  }));
};

const itemsPerPage = 10;

export default function Index() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 50;
  const data = generateData(totalItems);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col space-y-10 w-full font-satoshi">
      <div className="flex flex-row items-center justify-between">
        <span className="text-4xl font-bold">
          Manual Invoicing Clients List
        </span>
        <div className="flex flex-row gap-4 select-none">
          <Button
            onClick={() =>
              router.push(paths.dashboard.invoices.invoicing_module_guide)
            }
            variant="default"
          >
            Invoicing Module Guide
          </Button>
          <Button
            onClick={() =>
              router.push(paths.dashboard.invoices.manual_invoice_add)
            }
            className="bg-sky-900"
            variant="default"
          >
            Create Single Invoice
          </Button>
        </div>
      </div>
      <div className="grid grid-col gap-6">
        <Input placeholder="Search Name or Email" />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 select-none">
          <Button variant="default" className="bg-success-500 px-10">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-10">
            Clear
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-bold text-gray-900">
                Client Name
              </TableHead>
              <TableHead className="font-bold text-gray-900">Email</TableHead>
              <TableHead className="font-bold text-gray-900">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium text-gray-900">
                  {invoice.client}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {invoice.email}
                </TableCell>
                <TableCell className="flex flex-row gap-[10px]">
                  <button className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]">
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      router.push(paths.dashboard.invoices.invoice_list)
                    }
                    className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-yellow-100 px-3 py-1 rounded-[6px]"
                  >
                    View List
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
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
