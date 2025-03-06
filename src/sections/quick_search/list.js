import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

export default function DataList({ selectedType }) {
  const jobs = [
    {
      jobCode: "12345",
      jobName: "Lorem Ipsum",
      authorizedPhone: "03001234566",
      zone: "Hampton Roads (7911)",
    },
    {
      jobCode: "67890",
      jobName: "Dolor Sit",
      authorizedPhone: "03001112233",
      zone: "Norfolk (1234)",
    },
  ];

  const employees = [
    {
      employeeCode: "12345",
      firstName: "Lorem",
      lastName: "Ipsum",
      email: "test@gmail.com",
      mobile: "03001234566",
      zone: "Hampton Roads (7911)",
    },
    {
      employeeCode: "67890",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      mobile: "03001239999",
      zone: "Norfolk (1234)",
    },
  ];

  const dataToShow = selectedType === "job" ? jobs : employees;

  return (
    <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
      <h2 className="text-lg font-bold">Showing {selectedType === "job" ? "Jobs" : "Employees"}</h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            {selectedType === "job" ? (
              <>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Job Code</TableHead>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Job Name</TableHead>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Authorized Phone</TableHead>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Zone</TableHead>
              </>
            ) : (
              <>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Employee Code</TableHead>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  First Name</TableHead>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Last Name</TableHead>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Email</TableHead>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Mobile</TableHead>
                <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                  Zone</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataToShow.map((item, index) => (
            <TableRow key={index}>
              {selectedType === "job" ? (
                <>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.jobCode}</TableCell>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.jobName}</TableCell>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.authorizedPhone}</TableCell>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.zone}</TableCell>
                </>
              ) : (
                <>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.employeeCode}</TableCell>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.firstName}</TableCell>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.lastName}</TableCell>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.email}</TableCell>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.mobile}</TableCell>
                  <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                    {item.zone}</TableCell>
                </>
              )}
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