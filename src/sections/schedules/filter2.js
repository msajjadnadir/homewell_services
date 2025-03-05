import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function ScheduleFilter2() {
  return (
    <div className="mt-11 flex flex-col">
      <div className="flex flex-row gap-6 items-center">
        <Button variant="default" className="bg-purple-400 px-[42px]">
          Add
        </Button>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Employee" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Job" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Zone" />
          </SelectTrigger>
        </Select>
      </div>
    </div>
  );
}
