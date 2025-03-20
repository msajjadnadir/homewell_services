import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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
        mon: "0",
        tue: "0",
        wed: "0",
        thu: "0",
        fri: "0",
        sat: "0",
        sun: "0",
    },
];

export default function AddTimeSheet() {
    const router = useRouter();
    
    return (
        <div className="flex flex-col space-y-6 w-full font-satoshi">
            <div className="flex flex-row items-center justify-between">
                <span className="text-3xl font-bold">Add New Visit</span>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">Add Clients</Button>
                    <Button onClick={() => router.push(paths.dashboard.time_cards.job_list.root)} variant="default" className="bg-sky-950 px-10">Job List</Button>
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <Button variant="default" className="bg-white border border-gray-300 text-gray-600 px-10" onClick={() => router.push(paths.dashboard.time_cards.add)}>Add Time Card</Button>
                <Button className="bg-white border border-gray-300 text-gray-600 px-10" onClick={() => router.push(paths.dashboard.time_cards.timesheet)}>Time Sheet</Button>
                <Button variant="default" className="px-10" onClick={() => router.push(paths.dashboard.time_cards.timesheet_plus)}>Time Sheet +</Button>
            </div>

            <span className="text-gray-500">
                Instructions: Enter multiple visits via this time-sheet entry form. Select the Job. Then enter one are more visits. Click the ADD SHEET button to save the data.
            </span>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Job</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Job" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Week Ending</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Select Employee</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col mt-[60px] gap-5 items-start justify-start">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                            <TableHead className="font-bold text-gray-900">
                                Mon 02/03
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Tue 02/04
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Wed 02/05
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Thu 02/06
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Fri 02/07
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Sat 02/08
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">
                                Sun 02/09
                            </TableHead>
                            <TableHead className="font-bold text-gray-900">

                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((invoice, index) => (
                            <TableRow key={"invoice" + index}>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.mon}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.tue}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.wed}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.thu}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.fri}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.sat}
                                </TableCell>
                                <TableCell className="font-medium text-gray-900">
                                    {invoice.sun}
                                </TableCell>
                                <TableCell className="font-medium bg-gray-200 text-gray-900">
                                    0
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex flex-row gap-2">
                <span className="bg-gray-200 p-2 rounded-full text-green-500">
                    <Plus />
                </span>
                <span className="bg-gray-200 p-2 rounded-full text-red-500">
                    <Trash2 />
                </span>
            </div>

            <div className="flex flex-col font-medium text-xl">
                Total:
            </div>

            <Table>
                <TableBody>
                    {data.map((invoice, index) => (
                        <TableRow key={"invoice" + index}>
                            <TableCell className="font-medium text-gray-900">
                                {invoice.mon}
                            </TableCell>
                            <TableCell className="font-medium text-gray-900">
                                {invoice.tue}
                            </TableCell>
                            <TableCell className="font-medium text-gray-900">
                                {invoice.wed}
                            </TableCell>
                            <TableCell className="font-medium text-gray-900">
                                {invoice.thu}
                            </TableCell>
                            <TableCell className="font-medium text-gray-900">
                                {invoice.fri}
                            </TableCell>
                            <TableCell className="font-medium text-gray-900">
                                {invoice.sat}
                            </TableCell>
                            <TableCell className="font-medium text-gray-900">
                                {invoice.sun}
                            </TableCell>
                            <TableCell className="font-medium bg-gray-200 text-gray-900">
                                0
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">Save Changes</Button>
                    <Button variant="default" className="bg-red-500 px-10">Cancel</Button>
                </div>
            </div>
        </div>
    );
}

