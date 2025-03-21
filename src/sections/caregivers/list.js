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
    employeeCode: "123456",
    employeeName: "George R.R Martin",
    city: "New York",
    state: "VA",
    zone: "Lorem ipsum",
    status: "Active",
  },
  {
    employeeCode: "123456",
    employeeName: "Markus Suzak",
    city: "New York",
    state: "VA",
    zone: "Lorem ipsum",
    status: "Active",
  },
  {
    employeeCode: "123456",
    employeeName: "Updated SOS UHS",
    city: "Ankur Warikoo",
    state: "VA",
    zone: "Lorem ipsum",
    status: "Active",
  },
  {
    employeeCode: "123456",
    employeeName: "Updated SOS UHS",
    city: "Jodi Picoult",
    state: "VA",
    zone: "Lorem ipsum",
    status: "Active",
  },
  {
    employeeCode: "123456",
    employeeName: "Updated SOS UHS",
    city: "James Clear",
    state: "VA",
    zone: "Lorem ipsum",
    status: "Active",
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
          {invoices.map((invoice, index) => (
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
