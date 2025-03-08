import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const data = [
    {
        shiftDate: "25/02/2025",
        time: "3 Hours",
        hours: "8 hours",
        overtime: "+2 hours",
    },
];

export default function overview_review() {
    const router = useRouter();

    return (
        <div className="flex flex-col font-satoshi  w-full">
            <p className="font-semibold text-4xl">Overview Review</p>
            <div className="flex flex-col mt-10 space-y-4 text-2xl">
                <p className="font-semibold text-2xl">Caregiver Work Hour Summary</p>
                <p className="font-medium">Name: <span className="font-light ms-4">John Doe</span></p>
                <p className="font-medium">Weekly Limit: <span className="font-light ms-4">40 hours</span></p>
                <p className="font-medium">Total Assigned Hours : <span className="font-light ms-4">48 hours</span> <span className="font-light text-red-500">(Overtime: 8 hours)</span></p>
            </div>

            <p className="font-semibold text-2xl mt-12">Shift Breakdowns</p>
            <div className="flex flex-col mt-6 gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                                Shift Date
                            </TableHead>
                            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                                Time
                            </TableHead>
                            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                                Hours
                            </TableHead>
                            <TableHead className="font-satoshi font-bold text-5 leading-[27px] tracking-[0px] text-secondaryShades-900">
                                Overtime
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((data, index) => (
                            <TableRow key={"data" + index}>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                                    {data.shiftDate}
                                </TableCell>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                                    {data.time}
                                </TableCell>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-gray-900">
                                    {data.hours}
                                </TableCell>
                                <TableCell className="font-satoshi font-medium text-[20px] leading-[27px] tracking-[0px] text-red-500">
                                    {data.overtime}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <p className="font-semibold text-2xl mt-12">Compliance & Payroll Impact</p>
            <div className="flex flex-col mt-6 space-y-4 text-2xl">
                <p className="font-medium">Legal Violation: <span className="font-light ms-4 text-gray-900">No (Within Maximum Allowance)</span></p>
                <p className="font-medium">Overtime Cost: <span className="font-light ms-4">$150 Extra Pay</span></p>
            </div>

            <div className="flex mt-24 items-center justify-center gap-6">
                <Button className="py-5 px-10 bg-success-500 text-white">
                    Approve Overtime
                </Button>
                <Button className="py-5 px-10 bg-warning-500 text-white" onClick={() => router.push(paths.dashboard.schedules.shift_reassignment)}>
                    Reassign Shift
                </Button>
                <Button
                    className="py-5 px-10 bg-red-500 text-white"
                >
                    Flag for Payroll Review
                </Button>
            </div>
        </div>
    )
}