import { useState } from "react";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function reschedule_shift() {
    const [date, setDate] = useState(null);

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
                <div className="flex flex-col gap-4 relative">
                    <span className="font-medium text-[18px] text-gray-900">New Date</span>
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="relative">
                                <Input
                                    placeholder="dd/mm/yyyy"
                                    value={date ? format(date, "dd/MM/yyyy") : ""}
                                    readOnly
                                />
                                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex flex-col gap-4 relative">
                    <span className="font-medium text-[18px] text-gray-900">New Time</span>
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="relative">
                                <Input
                                    placeholder="--:--"
                                    value={date ? format(date, "--:--") : ""}
                                    readOnly
                                />
                                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
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
