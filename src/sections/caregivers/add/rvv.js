import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function AddCaregiverRvv() {
    return (
        <div className="flex flex-col mt-[46px] gap-6">
            <div className="flex flex-col gap-[16px]">
                <span className="font-satoshi text-[18px] font-medium leading-7 tracking-[-0.48%] text-gray-900">
                    Enable RVV for this employee
                </span>
                <div className="flex flex-row gap-6">
                    <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <label htmlFor="no">Yes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <label htmlFor="yes">No</label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Reset Initial Recording
                    </label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="100%" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="100">100%</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-[16px]">
                    <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Frequency
                    </label>
                    <Button className="bg-warning-500 font-satoshi font-medium text-[12.71px] leading-[15.25px] tracking-[0px] text-center w-24 h-9">
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
}
