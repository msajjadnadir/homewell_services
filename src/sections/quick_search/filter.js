import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Filter({ selectedType, setSelectedType }) {
  return (
    <div className="mt-11 flex flex-col">
      <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
        Search By
      </label>
      <div className="flex flex-row gap-6 items-center">
        <div className="flex items-center me-36">
          <RadioGroup value={selectedType} onValueChange={setSelectedType} className="flex flex-row gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem name="type" value="job" id="job" />
              <label htmlFor="job">Job</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem name="type" value="employee" id="employee" />
              <label htmlFor="employee">Employee</label>
            </div>
          </RadioGroup>
        </div>
        <Input placeholder="Search Text" className="w-60 px-3 py-6" />
      </div>
      <div className="flex flex-row items-center justify-between mt-[38px]">
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
