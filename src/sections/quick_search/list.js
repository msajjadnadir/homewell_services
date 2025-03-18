import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
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
    <div className="flex flex-col gap-5 items-start justify-start">
      <h2 className="text-lg font-bold">
        Showing {selectedType === "job" ? "Jobs" : "Employees"}
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            {selectedType === "job" ? (
              <>
                <TableHead className="text-gray-950 text-lg font-medium">Job Code</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">Job Name</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">
                  Authorized Phone
                </TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">Zone</TableHead>
              </>
            ) : (
              <>
                <TableHead className="text-gray-950 text-lg font-medium">Employee Code</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">First Name</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">Last Name</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">Email</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">Mobile</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">Zone</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataToShow.map((item, index) => (
            <TableRow key={index}>
              {selectedType === "job" ? (
                <>
                  <TableCell className="text-gray-950 text-lg font-medium">
                    {item.jobCode}
                  </TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">
                    {item.jobName}
                  </TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">
                    {item.authorizedPhone}
                  </TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.zone}</TableCell>
                </>
              ) : (
                <>
                  <TableCell className="text-gray-950 text-lg font-medium">
                    {item.employeeCode}
                  </TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">
                    {item.firstName}
                  </TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">
                    {item.lastName}
                  </TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.email}</TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.mobile}</TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.zone}</TableCell>
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
