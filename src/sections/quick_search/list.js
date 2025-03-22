import React, { useState } from 'react';
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; // Import Button component

const generateJobs = () => {
  const jobs = [];
  for (let i = 0; i < 50; i++) {
    jobs.push({
      jobCode: `1000${i}`,
      jobName: `Job ${i}`,
      authorizedPhone: `0300${100000 + i}`,
      zone: `Zone ${i}`
    });
  }
  return jobs;
};

const generateEmployees = () => {
  const employees = [];
  for (let i = 0; i < 50; i++) {
    employees.push({
      employeeCode: `2000${i}`,
      firstName: `FirstName${i}`,
      lastName: `LastName${i}`,
      email: `employee${i}@example.com`,
      mobile: `0300${200000 + i}`,
      zone: `Zone ${i}`
    });
  }
  return employees;
};

export default function DataList({ selectedType }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  const jobs = generateJobs();
  const employees = generateEmployees();

  const dataToShow = selectedType === "job" ? jobs : employees;

  const filteredData = dataToShow.filter(item => 
    Object.values(item).some(val => 
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="flex flex-col gap-5 items-start justify-start">
      <h2 className="text-lg font-bold">
        Showing {selectedType === "job" ? "Jobs" : "Employees"}
      </h2>
      <div className="flex lg:flex-row flex-col lg:w-[30%] w-full gap-2">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="default" className="bg-warning-500 px-10" onClick={handleClear}>Clear</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
            {selectedType === "job" ? (
              <>
                <TableHead className="text-gray-950 text-lg font-medium">Job Code</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">Job Name</TableHead>
                <TableHead className="text-gray-950 text-lg font-medium">Authorized Phone</TableHead>
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
          {currentRecords.map((item, index) => (
            <TableRow key={index}>
              {selectedType === "job" ? (
                <>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.jobCode}</TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.jobName}</TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.authorizedPhone}</TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.zone}</TableCell>
                </>
              ) : (
                <>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.employeeCode}</TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.firstName}</TableCell>
                  <TableCell className="text-gray-950 text-lg font-medium">{item.lastName}</TableCell>
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
            <PaginationPrevious 
              href="#" 
              onClick={() => setCurrentPage(prev => prev > 1 ? prev - 1 : prev)} 
            />
          </PaginationItem>
          {[...Array(Math.ceil(filteredData.length / recordsPerPage)).keys()].map(number => (
            <PaginationItem key={number + 1}>
              <PaginationLink 
                href="#" 
                onClick={() => paginate(number + 1)}
                isActive={currentPage === number + 1}
              >
                {number + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={() => setCurrentPage(prev => prev < Math.ceil(filteredData.length / recordsPerPage) ? prev + 1 : prev)} 
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}