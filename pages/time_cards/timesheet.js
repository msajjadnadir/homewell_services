import { Button } from "@/components/ui/button";
import { Calendar, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
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

import { Checkbox } from "@/components/ui/checkbox";

export default function AddTimeSheet() {
    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date()); 
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col space-y-6 w-full font-satoshi">
            <div className="flex flex-row items-center justify-between">
                <span className="text-3xl font-bold">Time Sheet</span>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">Add Clients</Button>
                    <Button onClick={() => router.push(paths.dashboard.time_cards.job_list.root)} variant="default" className="bg-sky-950 px-10">Job List</Button>
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <Button variant="default" className="bg-white border border-gray-300 text-gray-600 px-10" onClick={() => router.push(paths.dashboard.time_cards.add)}>Add Time Card</Button>
                <Button className="px-10" onClick={() => router.push(paths.dashboard.time_cards.timesheet)}>Time Sheet</Button>
                <Button variant="default" className="bg-white border border-gray-300 text-gray-600 px-10" onClick={() => router.push(paths.dashboard.time_cards.timesheet_plus)}>Time Sheet +</Button>
            </div>

            <span className="text-gray-500">
                You can enter up to 10 timecards at each time. Type Job name in drop down, then select Job. Check Activity Code or Authorization box if applicable and entry box will appear to right.IfJob is associated with a default Activity Code or Authorization, message will appear in the blue box indicating as such, and you will not need to check the boxes. Click Save after entering timecards.
            </span>

            <span className="text-gray-500">
                System will flag if there is a timecard conflict for a specific employee at which point you can continue to Save or Cancel.
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

            <div className="flex flex-row items-center gap-2">
                <Checkbox />
                <label>Activity Code</label>
            </div>

            <span className="text-gray-500">
                Enter one or more visit. Enter the plus button to add a new row. There is no limit to the number of rowa you can add.
            </span>

            <div className="flex flex-col-2 gap-6 w-[60%]">
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">YYYY-MM-DD HH:MM</label>
                    <div className="relative w-full">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)} 
                            dateFormat="MM/dd/yyyy"
                            className="w-full border border-gray-300 rounded-md p-2 pl-10"
                            placeholderText="Select date"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">YYYY-MM-DD HH:MM</label>
                    <div className="relative w-full">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)} 
                            dateFormat="MM/dd/yyyy"
                            className="w-full border border-gray-300 rounded-md p-2 pl-10"
                            placeholderText="Select date"
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col-2 gap-6 w-[60%]">
                <div className="flex flex-col gap-2 w-full">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Employee" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="code1">Code 1</SelectItem>
                            <SelectItem value="code2">Code 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Reason Code" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="code1">Code 1</SelectItem>
                            <SelectItem value="code2">Code 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-row gap-2">
                    <span className="bg-gray-200 p-2 rounded-full text-green-500">
                        <Plus />
                    </span>
                    <span className="bg-gray-200 p-2 rounded-full text-red-500">
                        <Trash2 />
                    </span>
                </div>
            </div>

            <div className="flex flex-col font-medium text-xl">
                Total: 0.00
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

