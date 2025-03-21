import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "react-datepicker/dist/react-datepicker.css";
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
import { Checkbox } from "@/components/ui/checkbox";

const data = [
    {
        firstName: "Markus",
        lastName: "Suzak",
        role: "Caregiver",
        email: "markus@suzak.com",
        status: "Male",
        dateJoined: "02/10/2025",
    },
    {
        firstName: "Markus",
        lastName: "Suzak",
        role: "Caregiver",
        email: "markus@suzak.com",
        status: "Male",
        dateJoined: "02/10/2025",
    },
    {
        firstName: "Markus",
        lastName: "Suzak",
        role: "Caregiver",
        email: "markus@suzak.com",
        status: "Male",
        dateJoined: "02/10/2025",
    },
    {
        firstName: "Markus",
        lastName: "Suzak",
        role: "Caregiver",
        email: "markus@suzak.com",
        status: "Male",
        dateJoined: "02/10/2025",
    },
];

export default function index() {
    const router = useRouter();

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-row gap-6 justify-between">
                <span className="xl:text-5xl text-3xl font-bold">
                    Select Users
                </span>
            </div>
            <div className="flex flex-cols justify-between gap-6">
                <Input placeholder="Search Users" className="w-96" />
                <div className="flex flex-row gap-3">
                    <Button variant="default" className="bg-success-500 px-10 py-5">
                        Search
                    </Button>
                    <Button variant="default" className="bg-warning-500 px-10 py-5">
                        Clear
                    </Button>
                </div>
            </div>
            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="text-gray-900 font-medium">
                                First Name
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Last Name
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Role
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Email
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Gender
                            </TableHead>
                            <TableHead className="text-gray-900 font-medium">
                                Date Joined
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data, index) => (
                            <TableRow key={"data" + index}>
                                <TableCell className="flex flex-cols gap-2 items-center text-gray-900 font-medium">
                                    <Checkbox /> {data.firstName}
                                </TableCell>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.lastName}
                                </TableCell>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.role}
                                </TableCell>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.email}
                                </TableCell>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.status}
                                </TableCell>
                                <TableCell className="text-gray-900 font-medium">
                                    {data.dateJoined}
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
            <div className="flex flex-row gap-4">
                <Button className="text-lg px-16 py-5 mt-8" onClick={() => router.push(paths.dashboard.forms.sending)}>Next</Button>
                <Button className="bg-red-500 text-lg px-16 py-5 mt-8">Cancel</Button>
            </div>
        </div>
    )
}