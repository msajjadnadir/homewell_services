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

export default function AddSchedule() {
    return (
        <div className="flex flex-col w-full mt-[46px] gap-6">
            <div className="flex flex-row gap-6">
                <RadioGroup defaultValue="option-one" className="flex flex-row gap-6 font-semibold font-satoshi text-3xl">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" checked />
                        <label htmlFor="add">Add Shift</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <label htmlFor="open">Open Shift</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Start Date
                    </label>
                    <div className="relative">
                        <Input placeholder="dd/mm/yyyy" />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        End Date
                    </label>
                    <div className="relative">
                        <Input placeholder="dd/mm/yyyy" />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Duration
                    </label>
                    <Input placeholder="Duration Hours" />
                </div>
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Jon Zone
                    </label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Job Zone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Employee Zone
                    </label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Zone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Employee
                    </label>
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
            <div className="flex flex-col gap-4">
                <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                    Notes
                </span>
                <textarea className="border border-gray-300 rounded p-3" rows={5} placeholder="Add Notes...." />
            </div>
            <div className="flex flex-col gap-[16px] bg-purple-100 p-4 rounded">
                <div className="flex flex-row gap-6 justify-between">
                    <span className="font-satoshi text-[18px] font-medium leading-7 tracking-[-0.48%] text-gray-900">
                        Recurrence
                    </span>
                    <div className="flex items-center me-36">
                        <RadioGroup defaultValue="option-one" className="flex flex-row gap-6 ">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" checked />
                                <label htmlFor="yes">Yes</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <label htmlFor="No">No</label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}
