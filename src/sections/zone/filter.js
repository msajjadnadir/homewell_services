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
      <div className="flex xl:flex-row flex-col gap-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter for Search" />
          </SelectTrigger>
        </Select>
        <Input placeholder="Search Text" />
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
