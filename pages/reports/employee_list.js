import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function employee_list() {
    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="text-5xl font-bold">
            Employee List
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
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4 select-none">
                    <Button variant="default" className="bg-success-500 px-10">
                        Search
                    </Button>
                    <Button variant="default" className="bg-warning-500 px-10">
                        Clear
                    </Button>
                </div>
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="bg-sky-900 px-10">
                        Export Excel
                    </Button>
                </div>
            </div>
        </div>
    )
}
