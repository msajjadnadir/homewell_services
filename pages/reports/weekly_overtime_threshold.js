import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import "react-datepicker/dist/react-datepicker.css";

export default function weekly_overtime_threshold() {
    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="xl:text-5xl text-3xl font-bold">
                Weekly Overtime Threshold
            </span>
            <span className="text-gray-500">
                This report lists the employees that have exceeded the threshold for the current workweek. The threshold hours is set in the Agency Detail (configuration tab).
            </span>
            <div className="grid grid-cols-3 gap-6">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Zone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex lg:flex-row flex-col gap-4 justify-between">
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
            <div className="flex flex-row">
                <div className="flex items-center space-x-6">
                    <Checkbox id="terms" className="w-6 h-6" />
                    <label htmlFor="terms">Use Rounded Hours</label>
                </div>
            </div>
        </div>
    )
}
