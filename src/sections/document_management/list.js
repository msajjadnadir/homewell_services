import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

const generateRecords = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    documentName: `document-${index + 1}.pdf`,
    category: index % 3 === 0 ? "Billing and Insurance" : index % 3 === 1 ? "Caregiver Document" : "Compliance Form",
    uploadedBy: "Admin",
    uploadedDate: `02/${(index % 12) + 1}/2025`,
  }));
};

const records = generateRecords();
const pageSize = 10;

export default function CaregiversList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(records.length / pageSize);
  const currentRecords = records.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="flex flex-col mt-[60px] gap-5 items-start justify-start font-satoshi">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            <TableHead className="text-gray-900 font-medium">Document Name</TableHead>
            <TableHead className="text-gray-900 font-medium">Category</TableHead>
            <TableHead className="text-gray-900 font-medium">Uploaded By</TableHead>
            <TableHead className="text-gray-900 font-medium">Uploaded Date</TableHead>
            <TableHead className="text-gray-900 font-medium">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRecords.map((record, index) => (
            <TableRow key={index}>
              <TableCell className="text-gray-900 font-medium">{record.documentName}</TableCell>
              <TableCell className="text-gray-900 font-medium">{record.category}</TableCell>
              <TableCell className="text-gray-900 font-medium">{record.uploadedBy}</TableCell>
              <TableCell className="text-gray-900 font-medium">{record.uploadedDate}</TableCell>
              <TableCell className="flex flex-row gap-[10px]">
                <button className="bg-success-100 px-3 py-1 rounded-[6px]">Download</button>
                <button
                  className="bg-red-100 px-3 py-1 rounded-[6px]"
                  onClick={() => router.push(paths.dashboard.caregivers.view)}
                >
                  Delete
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
              <PaginationLink href="#" onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
