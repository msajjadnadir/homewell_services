import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";

export default function Notify() {
  return (
    <div className="flex flex-col mt-[46px] gap-6">
      <span className="text-gray-500">
        Add one or more people that needed to be alerted on missed clock-ins
      </span>
      <div className="flex flex-col gap-6">
        <label>Add Employee</label>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[500px]">
              <SelectValue placeholder="Select Employee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option-1">Option 1</SelectItem>
              <SelectItem value="option-2">Option 2</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gray-100 text-green-500 py-6 rounded-full"><Plus /></Button>
          <Button className="bg-gray-100 text-red-500 py-6 rounded-full"><Trash /></Button>
        </div>
      </div>
    </div>
  );
}
