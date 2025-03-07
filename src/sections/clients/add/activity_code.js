import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Notes() {
  return (
    <div className="flex flex-col w-full font-satoshi">
      <div className="flex flex-col mt-12 text-sm text-gray-500">
        Use this tab to set up Activity Codes. Select a default activity code if this Job is associated with a particular activity (the employee will not be required to enter an activity code when clocking out). If more than one activity applies, selecting 'Prompt for Code' will allow the employee to enter an activity code when clocking out. Note: Use Manage Lists Activity Code to set up a library of activities
        If using activity codes for claims, please select either “Prompt for Code” or “Default Activity”, or claims may not be created.
      </div>
      <div className="flex flex-col gap-[16px] mt-12">
        <span>When?</span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">During Clock-in</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">During Clock-out</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px] mt-12">
        <span>Select Activity</span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">None</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">Default Activity</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <label htmlFor="no">Propmt for Code</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
