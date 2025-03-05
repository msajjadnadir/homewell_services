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

export default function CaregiversFilter() {
  return (
    <div className="mt-11 flex flex-col">
      <div className="flex flex-row gap-6 items-center">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by caregiver" />
          </SelectTrigger>
        </Select>
        <Input placeholder="Enter Caregiver Name" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
        </Select>
        <div className="flex flex-col gap-[16px]">
          <div className="relative w-48">
            <Input placeholder="dd/mm/yyyy" />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
