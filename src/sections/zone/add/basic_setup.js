import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function basic_setup() {
  return (
    <div className="flex flex-col mt-[46px] gap-6">
      <span className="text-gray-500">Enter the basic details about the Job. Required fields are in Red</span>
      <div className="grid xl:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="">
            Zone Name *
          </label>
          <Input placeholder="Enter Zone Name" />

          <label className="">
            Supervisor
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Supervisor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option-1">option 1</SelectItem>
              <SelectItem value="option-2">option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}