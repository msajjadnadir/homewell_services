import { useState } from "react";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function reschedule_shift() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex flex-col w-full gap-6 mt-2 font-satoshi">
            <p className="text-4xl font-bold mb-6">Reschedule Shift</p>

            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <span className="font-medium text-[18px] text-gray-900">Caregiver</span>
                    <Input placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-medium text-[18px] text-gray-900">Client</span>
                    <Input placeholder="Mike Brown" />
                </div>
                <div className="flex flex-col gap-4">
                    <label>New Date</label>
                    <div className="relative">
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
                <div className="flex flex-col gap-4">
                    <label>New Time</label>
                    <div className="relative">
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
                <div className="flex flex-col gap-4">
                    <span className="font-medium text-[18px] text-gray-900">New Duration</span>
                    <Input placeholder="eg: 3 hours" />
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <Button variant="destructive" className="px-10">Cancel</Button>
                <Button
                    variant="default"
                    className="px-10 bg-purple-400 text-white"
                    onClick={() => router.push(paths.dashboard.schedules.reschedule_shift)}
                >
                    Reschedule Shift
                </Button>

            </div>
        </div>
    );
}
