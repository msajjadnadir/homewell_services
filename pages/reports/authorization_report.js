import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import "react-datepicker/dist/react-datepicker.css";

export default function authorization_report() {

    const options = [
        "Show Inactive Jobs", "Show On Hold Jobs",
    ];

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="lg:text-5xl text-3xl font-bold">
                Authorization Report
            </span>
            <div className="flex lg:flex-row lg:w-[50%] flex-col gap-6">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Job" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Zone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex lg:flex-row flex-col gap-6">
                {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={option} className="w-5 h-5" />
                        <label htmlFor={option} className="text-sm">{option}</label>
                    </div>
                ))}
            </div>
            <div className="flex lg:flex-row flex-col gap-4 lg:justify-between">
                <div className="flex flex-row gap-4 select-none">
                    <Button variant="default" className="w-full bg-success-500 px-10">
                        Search
                    </Button>
                    <Button variant="default" className="w-full bg-warning-500 px-10">
                        Clear
                    </Button>
                </div>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="w-full bg-sky-900 px-10">
                        Export Excel
                    </Button>
                </div>
            </div>
        </div>
    )
}
