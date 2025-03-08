import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export default function overview_review() {
    const router = useRouter();

    return (
        <div className="flex flex-col font-satoshi  w-full">
            <p className="font-semibold text-4xl">Shift Reassignment</p>
            <div className="flex flex-col mt-10 space-y-4 text-xl">
                <p className="font-semibold text-2xl">Overtime Shift Details</p>
                <p className="font-medium">Caregiver: <span className="font-light ms-4">John Doe</span></p>
                <p className="font-medium">Shift Date: <span className="font-light ms-4">2025-02-01</span></p>
                <p className="font-medium">Time: <span className="font-light ms-4">9:00 AM - 12:00 AM</span></p>
                <p className="font-medium">Overtimes : <span className="font-light text-red-500">+2 hours</span></p>
            </div>

            <p className="font-semibold text-2xl mt-12">Select a New Caregiver</p>
            <div className="grid grid-col-2 gap-2 mt-5 w-[50%]">
                <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                    Available Caregivers:
                </label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Mark Nielsen (Available)" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="hampton-roads">Hampton Roads</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <p className="font-semibold text-2xl mt-12">Shift Swap/Transfer</p>
            <div className="flex flex-row gap-6 mt-6">
                <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <label htmlFor="yes">Swap shift with another caregiver</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" checked />
                        <label htmlFor="No">Transfer shift to new caregiver</label>
                    </div>
                </RadioGroup>
            </div>

            <div className="flex mt-16 items-center gap-4">
                <Button className="py-5 px-10 bg-success-500 text-white">
                    Confirm Reassignment
                </Button>
                <Button className="py-5 px-10 bg-sky-950 text-white">
                    Export Reassignment Logs
                </Button>
                <Button
                    className="py-5 px-10 bg-red-500 text-white"
                    onClick={() => router.push(paths.dashboard.evv_compliance.audit_report)}
                >
                    Cancel
                </Button>
            </div>
        </div>
    )
}