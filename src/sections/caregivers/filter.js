import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CaregiversFilter() {
  return (
    <div className="mt-11 flex flex-col">
      <div className="flex lg:flex-row flex-col gap-6 items-center">
      <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Zone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[
                "Zone 1",
                "Zone 2",
                "Zone 3",
              ].map((zone) => (
                <SelectItem key={zone} value={zone.toLowerCase()}>
                  {zone}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[
                "Option 1",
                "Option 2",
                "Option 3",
              ].map((option) => (
                <SelectItem key={option} value={option.toLowerCase()}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="First Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[
                "First Name",
                "Middle Name",
                "Last Name",
              ].map((name) => (
                <SelectItem key={name} value={name.toLowerCase()}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="LARA" />
      </div>
      <div className="flex lg:flex-row flex-col lg:items-center justify-between mt-[38px]">
        <div className="flex flex-row gap-4 select-none">
          <Button variant="default" className="bg-success-500 px-[42px]">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-[42px]">
            Clear
          </Button>
        </div>
        <div className="flex lg:flex-row flex-col lg:mt-0 mt-6 gap-4">
          <div className="px-[17px] py-[14px] rounded-[14px] shadow backdrop-blur-md">
            <span className="font-bold text-base leading-[21.6px] text-secondaryShades-base">
              ALL : 290
            </span>
          </div>
          <div className="px-[17px] py-[14px] rounded-[14px] shadow backdrop-blur-md">
            <span className="font-bold text-base leading-[21.6px] text-secondaryShades-base">
              ACTIVE : 228
            </span>
          </div>
          <div className="px-[17px] py-[14px] rounded-[14px] shadow backdrop-blur-md">
            <span className="font-bold text-base leading-[21.6px] text-secondaryShades-base">
              INACTIVE : 11
            </span>
          </div>
          <div className="px-[17px] py-[14px] rounded-[14px] shadow backdrop-blur-md">
            <span className="font-bold text-base leading-[21.6px] text-secondaryShades-base">
              TERMINATED : 51
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
