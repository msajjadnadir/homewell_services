import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddSchedule() {
    const [selectedShift, setSelectedShift] = useState("add-shift");

    return (
        <div className="flex flex-col w-full mt-10 gap-6 font-satoshi">
            {/* Shift Selection */}
            <RadioGroup
                value={selectedShift}
                onValueChange={setSelectedShift}
                className="flex gap-6 text-3xl font-semibold"
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="add-shift" id="add-shift" />
                    <label htmlFor="add-shift">Add Shift</label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="open-shift" id="open-shift" />
                    <label htmlFor="open-shift">Open Shift</label>
                </div>
            </RadioGroup>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label>Start Date</label>
                    <div className="relative">
                        <Input placeholder="dd/mm/yyyy" />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label>End Date</label>
                    <div className="relative">
                        <Input placeholder="dd/mm/yyyy" />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Duration</label>
                    <Input placeholder="Duration Hours" />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Job Zone</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Job Zone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Employee Selection (Only in "Add Shift") */}
            {selectedShift === "add-shift" && (
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label>Employee Zone</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Zone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="basic">Basic</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Employee</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="basic">Select</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            )}

            {/* Notes Section */}
            <div className="flex flex-col gap-4">
                <label>Notes</label>
                <textarea className="border border-gray-300 rounded p-3" rows={5} placeholder="Add Notes...." />
            </div>

            {/* ✅ Recurrence Section (Always visible) */}
            <div className="flex flex-col gap-4 bg-purple-100 p-6 rounded">
                <div className="flex flex-row justify-between">
                    <span className="font-semibold">Recurrence</span>
                    <RadioGroup defaultValue="yes" className="flex flex-row gap-6">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" checked />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <label htmlFor="no">No</label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-row gap-6 mt-4 font-medium">
                    <RadioGroup className="flex flex-row gap-6">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="daily" id="daily" checked />
                            <label htmlFor="daily">Daily</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="every-days" id="every-days" />
                            <label htmlFor="every-days">Every <Input className="w-12 inline-block mx-2" placeholder="1" /> Days</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="weekly" id="weekly" />
                            <label htmlFor="weekly">Weekly</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="weekday" id="weekday" />
                            <label htmlFor="weekday">Every Weekday</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="monthly" id="monthly" />
                            <label htmlFor="monthly">Monthly</label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="flex flex-row gap-6 mt-4 font-medium">
                    <RadioGroup className="flex flex-row gap-6">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="end-after" id="end-after" />
                            <label htmlFor="end-after">End After <Input className="w-36 inline-block mx-2" placeholder=" " /> occurrences</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="end-on" id="end-on" checked />
                            <label htmlFor="end-on">End on <Input className="w-42 inline-block mx-2" placeholder=" " /></label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            {/* ✅ Employees Section (Visible only for "Open Shift") */}
            {selectedShift === "open-shift" && (
                <div>
                    <div className="flex flex-col gap-4 bg-purple-100 p-6 rounded">
                        <span className="font-semibold">Employees</span>
                    </div>
                    <div className="flex flex-col gap-4 ">

                        <div className="flex flex-wrap gap-6 mt-8 items-center">
                            <Checkbox className="mr-2" /> Meet Client Requirement
                            <Checkbox className="mr-2" /> Match Availability
                            <Checkbox className="mr-2" /> Match Preferences
                            <Checkbox className="mr-2" /> Distance From Job
                            <Checkbox className="mr-2" /> Not Go Into Overtime
                        </div>
                        <Button variant="default" className="mt-4 px-8 bg-gray-800 text-white w-36">
                            Search
                        </Button>
                    </div>
                </div>
            )}

            <div className="flex justify-end gap-4">
                <Button variant="destructive" className="px-8">Cancel</Button>
                {selectedShift === "open-shift" ? (
                    <Button variant="default" className="px-8 bg-purple-500 text-white">Schedule Shift</Button>
                ) : (
                    <Button variant="default" className="px-8 bg-purple-500 text-white">Add Shift</Button>
                )}
            </div>
        </div>
    );
}