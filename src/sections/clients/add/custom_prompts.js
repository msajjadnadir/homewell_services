import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";

export default function CustomPrompts() {
  return (
    <div className="flex flex-col mt-[46px] gap-6">
      <div className="flex flex-col gap-[16px]">
        <span className="">
          When?
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">During Clock-in</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">During Clock-out</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Custom Group
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Use Custom Groups</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">Use Prompt</label>
          </div>
        </RadioGroup>
      </div>
      <div className="grid grid-cols-2 gap-6 items-center">
        <div className="flex flex-col">
          <label className="">
            Add Prompts
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Prompts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zone-1">Zone 1</SelectItem>
              <SelectItem value="zone-2">Zone 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full mt-5">
          <div className="flex flex-row items-center gap-3">
            <Button
              variant="outline"
              className="py-5 px-10 bg-success-500 text-white shadow-xl"
            >
              Add
            </Button>
            <Button
              variant="outline"
              className="py-5 px-10 bg-red-500 text-white shadow-xl"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}