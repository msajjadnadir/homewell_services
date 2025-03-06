import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CaregiversFilter() {
  return (
    <div className="mt-11 flex flex-col">
      <div className="flex flex-row gap-6 items-center w-[90%]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Zone" />
          </SelectTrigger>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Job" />
          </SelectTrigger>
        </Select>
        <div className="flex flex-row gap-4 select-none">
          <Button variant="default" className="bg-success-500 px-[42px]">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-[42px]">
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
