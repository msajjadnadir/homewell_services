import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  PaginationNext,
} from "@/components/ui/pagination";

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";
import { Input } from "@/components/ui/input";

const ticketsData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  title: `Ticket ${index + 1}`,
  description: `Description for Ticket ${index + 1}`,
  category: ["Technical Issue", "Billing", "General Inquiry"][index % 3],
  priority: ["Low", "Medium", "High"][index % 3],
  status: ["Open", "In Progress", "Closed"][index % 3],
  assignedTo: `User ${index + 1}`,
  dueDate: new Date(
    Date.now() + index * 24 * 60 * 60 * 1000
  ).toLocaleDateString(),
}));

export default function TicketList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // Calculate total pages
  const totalPages = Math.ceil(ticketsData.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTickets = ticketsData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-6 font-satoshi w-full">
      <div className="flex xl:flex-row flex-col gap-6 justify-between">
        <span className="lg:text-5xl text-3xl font-bold">Ticket List</span>
        <Button onClick={() => router.push(paths.dashboard.tickets.add)} variant="default" size="lg" className="px-6">
          Create Ticket
        </Button>
      </div>
      <div className="flex lg:flex-row flex-col gap-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option">Option</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option">Option</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative w-full">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            className="w-full border border-gray-300 rounded-md p-2 pl-10"
            placeholderText="Select date"
          />
          <Calendar
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <Input placeholder="Search User" />
      </div>
      <div className="flex lg:flex-row flex-col gap-4 justify-between">
        <div className="flex flex-row gap-4 select-none">
          <Button variant="default" className="w-full bg-success-500 px-10">
            Search
          </Button>
          <Button variant="default" className="w-full bg-warning-500 px-10">
            Clear
          </Button>
        </div>
        <div className="flex flex-row gap-4">
          <Button variant="default" className="w-full bg-sky-900 px-10">
            Export Excel
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start justify-start">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-bold text-gray-900">Title</TableHead>
              <TableHead className="font-bold text-gray-900">
                Category
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Priority
              </TableHead>
              <TableHead className="font-bold text-gray-900">Status</TableHead>
              <TableHead className="font-bold text-gray-900">
                Assigned To
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                Due Date
              </TableHead>
              <TableHead className="font-bold text-gray-900">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTickets.map((ticket, index) => (
              <TableRow key={"ticket" + index}>
                <TableCell className="font-medium text-gray-900">
                  {ticket.title}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {ticket.category}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {ticket.priority}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {ticket.status}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {ticket.assignedTo}
                </TableCell>
                <TableCell className="font-medium text-gray-900">
                  {ticket.dueDate}
                </TableCell>
                <TableCell className="flex flex-row gap-[10px]">
                  <button
                    onClick={() => router.push(paths.dashboard.tickets.edit)}
                    className="font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]"
                  >
                    Edit
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <Pagination className="justify-start">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
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
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
