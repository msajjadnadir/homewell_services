import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Filter({ selectedType, setSelectedType }) {
  return (
    <div className="flex flex-col gap-6">
      <label className="font-medium text-gray-900">Search By</label>
      <div className="flex flex-row gap-4 items-center">
        <div className="flex items-center me-24">
          <RadioGroup
            value={selectedType}
            onValueChange={setSelectedType}
            className="flex flex-row gap-6"
          >
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
        <Input placeholder="Search Text" className="w-72 px-3 py-6" />
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4">
          <Button variant="default" className="bg-success-500 px-10 py-6">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-10 py-6">
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
