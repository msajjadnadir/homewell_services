import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function Add() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full space-y-6 font-satoshi">
            <div className="flex flex-row items-center justify-between">
                <span className="text-3xl font-bold">Time Card</span>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">Add Clients</Button>
                    <Button variant="default" className="bg-sky-950 px-10">Job List</Button>
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <Button variant="default" className="px-10" onClick={() => router.push(paths.dashboard.time_cards.root)}>Add Time Card</Button>
                <Button className="bg-white border border-gray-300 text-gray-600 px-10" onClick={() => router.push(paths.dashboard.time_cards.timesheet)}>Time Sheet</Button>
                <Button variant="default" className="bg-white border border-gray-300 text-gray-600 px-10" onClick={() => router.push(paths.dashboard.time_cards.timesheet_plus)}>Time Sheet +</Button>
            </div>

            <span className="text-gray-500">Manually add a Time Card for an employee. A clock-in and a clock-out record will be created. The status will be recorded as manually entered.</span>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Employee Name *</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Employee Name" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Job Name *</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Job Name" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Clock-in Time</label>
                <Input placeholder="Enter Clock-in Time" />
            </div>

            <div className="flex flex-row items-center gap-2">
                <Checkbox />
                <label>No Clock-out</label>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Clock-out Time</label>
                <Input placeholder="Enter Clock-out Time" />
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Authorization *</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Authorization" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Activity *</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Activity" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Reason Code *</label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Reason Code" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="code1">Code 1</SelectItem>
                        <SelectItem value="code2">Code 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Notes</label>
                <Textarea placeholder="Enter additional detail" />
            </div>

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">Save Changes</Button>
                    <Button variant="default" className="bg-red-500 px-10">Cancel</Button>
                </div>
            </div>
        </div>
    );
}

