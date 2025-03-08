import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

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
        toCaregiver: "John Doe",
        fromCaregiver: "George R.R Martin",
        shiftDate: "25/02/2025",
        time: "3 Hours",
        status: "Completed",
    },
    {
        toCaregiver: "John Doe",
        fromCaregiver: "George R.R Martin",
        shiftDate: "25/02/2025",
        time: "3 Hours",
        status: "Completed",
    },
    {
        toCaregiver: "John Doe",
        fromCaregiver: "George R.R Martin",
        shiftDate: "25/02/2025",
        time: "3 Hours",
        status: "Completed",
    },
    {
        toCaregiver: "John Doe",
        fromCaregiver: "George R.R Martin",
        shiftDate: "25/02/2025",
        time: "3 Hours",
        status: "Completed",
    },
    {
        toCaregiver: "John Doe",
        fromCaregiver: "George R.R Martin",
        shiftDate: "25/02/2025",
        time: "3 Hours",
        status: "Completed",
    },
];
export default function shift_swap_request() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full">
            <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[1.6%] text-primaryText">
                Shift Swap Request
            </span>

            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                                From Caregiver
                            </TableHead>
                            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                                To Caregiver
                            </TableHead>
                            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                                Shift Date
                            </TableHead>
                            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                                Time
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
                        {data.map((invoice, index) => (
                            <TableRow key={"invoice" + index}>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                                    {invoice.fromCaregiver}
                                </TableCell>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                                    {invoice.toCaregiver}
                                </TableCell>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                                    {invoice.shiftDate}
                                </TableCell>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                                    {invoice.time}
                                </TableCell>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                                    {invoice.status}
                                </TableCell>
                                <TableCell className="flex flex-row gap-[10px]">
                                    <button 
                                        className="font-satoshi font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-success-100 px-3 py-1 rounded-[6px]"
                                        onClick={() => router.push(paths.dashboard.schedules.shift_details)}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="font-satoshi font-medium text-[16px] leading-[21.6px] tracking-[0px] text-gray-900 bg-red-300 px-3 py-1 rounded-[6px]"
                                    >
                                        Reject
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
        </div>
    );
}
