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
      <div className="flex flex-row gap-6 items-center">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
        </Select>
        <Input placeholder="dd/mm/yyy" />
        <Input placeholder="Search Document" />
      </div>
      {/* <div className="flex flex-row items-center justify-between mt-[38px]">
        <div className="flex flex-row gap-4 select-none">
          <Button variant="default" className="bg-success-500 px-[42px]">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-[42px]">
            Clear
          </Button>
        </div>
        <div className="flex flex-row gap-4">
          <div className="px-[17px] py-[14px] rounded-[14px] shadow backdrop-blur-md">
            <span className="font-satoshi font-bold text-base leading-[21.6px] text-secondaryShades-base">
              ALL : 290
            </span>
          </div>
          <div className="px-[17px] py-[14px] rounded-[14px] shadow backdrop-blur-md">
            <span className="font-satoshi font-bold text-base leading-[21.6px] text-secondaryShades-base">
              ACTIVE : 228
            </span>
          </div>
          <div className="px-[17px] py-[14px] rounded-[14px] shadow backdrop-blur-md">
            <span className="font-satoshi font-bold text-base leading-[21.6px] text-secondaryShades-base">
              INACTIVE : 11
            </span>
          </div>
          <div className="px-[17px] py-[14px] rounded-[14px] shadow backdrop-blur-md">
            <span className="font-satoshi font-bold text-base leading-[21.6px] text-secondaryShades-base">
              TERMINATED : 51
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
