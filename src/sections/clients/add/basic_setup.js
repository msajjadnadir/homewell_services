import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AddCaregiverGeneral() {
  return (
    <div className="flex flex-col mt-[46px] gap-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Caregiver First Name
          </label>
          <Input placeholder="First Name" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Caregiver Last Name
          </label>
          <Input placeholder="Last Name" />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Employee Zone
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Employee Zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hampton-roads">Hampton Roads</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Language
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">Eglish</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Employee Level
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Employee Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[16px]">
          <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Employee Skills
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="font-satoshi text-[18px] font-medium leading-7 tracking-[-0.48%] text-gray-900">
          Gender
        </span>
        <div className="flex flex-row gap-6">
          <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="font-satoshi text-[18px] font-medium leading-7 tracking-[-0.48%] text-gray-900">
          Current Status
        </span>
        <div className="flex flex-row gap-6">
          <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="active" id="active" />
              <label htmlFor="active">Active</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inactive" id="inactive" />
              <label htmlFor="inactive">Inactive</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="terminated" id="terminated" />
              <label htmlFor="terminated">Terminated</label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          Clock OUT Safeguard
        </span>
        <Input className="w-[400px]" />
        <span className="font-satoshi font-medium text-[16px] leading-[39px] tracking-[-0.63px] text-gray-150">
          Number of hours before the system will CLOCK-OUT the Employee
        </span>
      </div>
    </div>
  );
}
