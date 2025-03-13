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

const data = [
  {
    zoneName: "HAMPTON ROADS",
    zoneCode: "123456",
    supervisor: "Lorem ipsum",
    totalEmployees: "123",
    totalJobs: "2343",
  },
  {
    zoneName: "HAMPTON ROADS",
    zoneCode: "123456",
    supervisor: "Lorem ipsum",
    totalEmployees: "123",
    totalJobs: "2343",
  },
  {
    zoneName: "HAMPTON ROADS",
    zoneCode: "123456",
    supervisor: "Lorem ipsum",
    totalEmployees: "123",
    totalJobs: "2343",
  },
  {
    zoneName: "HAMPTON ROADS",
    zoneCode: "123456",
    supervisor: "Lorem ipsum",
    totalEmployees: "123",
    totalJobs: "2343",
  },
];

export default function list() {

  return (
    <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            <TableHead className="font-bold text-gray-900">
              Zone Name
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              Zone Code
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              Supervisor
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              Total Employees
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              Total Jobs
            </TableHead>
            <TableHead className="font-bold text-gray-900">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice, index) => (
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
                <button className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]">
                  Edit
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
