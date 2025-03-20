import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
  
  export default function add() {
    return (
      <div className="flex flex-col space-y-8 w-[50%] font-satoshi">
        <span className="text-3xl font-bold">Add New Tasks Group</span>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Group Name</label>
          <Input placeholder="Skill Name" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">Add Task</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Task" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option">Option</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-row gap-4">
          <label className="font-medium">Billable</label>
          <RadioGroup defaultValue="option-one" className="flex flex-row gap-12">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" checked />
              <label htmlFor="male">Yes</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="female">No</label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid grid-row gap-4">
          <label className="font-medium">Overtime Exempt</label>
          <RadioGroup defaultValue="option-one" className="flex flex-row gap-12">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" checked />
              <label htmlFor="male">Active</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="female">Inactive</label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4 select-none">
            <Button variant="default" className="px-10">
              Save Changes
            </Button>
            <Button variant="default" className="bg-red-500 px-10">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
  