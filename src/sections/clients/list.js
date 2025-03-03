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
    jobCode: "123456",
    jobName: "Lorem Ipsum",
    zone: "New York",
    authorizedPhone: "VA",
    status: "Active",
  },
];

export default function CaregiversList() {
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
              Authorized Phonr
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
          {invoices.map((invoice, index) => (
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
                <button className="font-satoshi font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-primaryShades-100 px-3 py-1 rounded-[6px]">
                  View
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Pagination className="justify-start">
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
      </Pagination> */}
    </div>
  );
}
