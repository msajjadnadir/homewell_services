import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

export default function Edit() {
    return (
        <div className="flex flex-col w-full space-y-6 font-satoshi">
            <div className="flex flex-row items-center justify-between">
                <span className="text-3xl font-bold">Edit Time Card</span>
            </div>

            <span className="text-gray-500">
                You can change date and time of your employee's clock in and/or clock out entries. Please remember that edited date, time and duration will appear in the Original column in reports for audit trail.
            </span>

            <div className="flex flex-row justify-between w-[60%]">
                <label className="font-medium">Employee Name</label>
                <span>----------</span>
            </div>

            <div className="flex flex-row justify-between w-[60%]">
                <label className="font-medium">Job</label>
                <span>----------</span>
            </div>

            <div className="flex flex-row justify-between w-[60%]">
                <label className="font-medium">Duration</label>
                <span>----------</span>
            </div>

            <div className="flex flex-row justify-between w-[60%]">
                <label className="font-medium">Visit</label>
                <span>----------</span>
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">New Clock-in Date/Time</label>
                <Input placeholder="Enter Clock-in Time" />
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">New Clock-out Date/Time</label>
                <Input placeholder="Enter Clock-out Time" />
            </div>

            <div className="flex flex-col gap-2 w-[60%]">
                <label className="font-medium">Work Duration</label>
                <Input placeholder="Enter Work Duration" />
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

