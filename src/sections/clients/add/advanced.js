import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export default function advanced() {
  return (
    <div className="flex flex-col gap-6 mt-12">
      <div className="flex flex-col gap-4">
        <span>
          Medical Record Id
        </span>
        <Input />
      </div>
      <div className="flex flex-col gap-4">
        <span>
          Medicaid ID
        </span>
        <Input />
      </div>
      <div className="flex flex-col gap-4">
        <span>
          External Code 2
        </span>
        <Input />
      </div>
      <div className="flex flex-col gap-4">
        <span>
          Agency Job Id
        </span>
        <Input />
      </div>
      <div className="flex flex-col gap-4">
        <span>
          Budgeted Hours
        </span>
        <Input />
      </div>
      <div className="flex flex-col gap-4">
        <span>
          Notes for Budgeted Hours
        </span>
        <Input />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <span>
            Service Item
          </span>
          <Input />
        </div>
        <div className="flex flex-col gap-4">
          <span>
            Pay Type
          </span>
          <Input />
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Caregiver Hourly Pay Override
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">No</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <span>
            Alerts
          </span>
          <div className="flex flex-row gap-12">
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" checked />
              <label
                htmlFor="terms"
              >
                2 Hours Warning
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" checked />
              <label
                htmlFor="terms"
              >
                Late Clock In
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" checked />
              <label
                htmlFor="terms"
              >
                Late Clock Out
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Send Alerts to
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Employee Zone</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">Job's Zone</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Allow Simultaneous Clock-in
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">No</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Live In
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">No</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px]">
        <span className="">
          Contigency Plan Available
        </span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">No</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-4">
        <span>
          Job Group
        </span>
        <Input />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <span>
            Client Prefrences
          </span>
          <div className="flex flex-row gap-12">
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
              >
                Spanish Speaking
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
              >
                Male Caregiver
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
              >
                Female Caregiver
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
              >
                Dementia
              </label>
            </div>
          </div>
          <div className="flex flex-row gap-12">
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
              >
                Incontinence
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
              >
                Meal Prep
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
              >
                Smoking
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
              >
                Has Dogs
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <span>
            Client Requirements Skill/License
          </span>
          <Input />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4 mt-4">
            <span>
              Full Weight Transfer
            </span>
            <div className="flex flex-row gap-12">
              <div className="flex items-center space-x-6">
                <Checkbox id="terms" className="w-6 h-6" />
                <label
                  htmlFor="terms"

                >
                  Full Weight Transfer
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <span>
            Do Not Schedule With Employee
          </span>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col gap-4">
              <Input />
            </div>
            <div className="flex flex-col gap-4">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
