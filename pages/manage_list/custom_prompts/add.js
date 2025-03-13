import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function add() {
    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <span className="text-3xl font-bold">Add New Custom Prompt</span>
            <span className="text-gray-500">
                Prompt Text is the question stated in the IVR dialog. Next select if the answer will be a numeric value (e.g. 150) or a selection from a set of answer choices (e.g. Yes, No, Maybe). For Multiple Answers enter the values separated by a comma. To have the IVR say "Enter 1 for Yes 2 for No or 3 for Maybe," you will enter YES,NO,MAYBE as the value in the input field.
            </span>
            <div className="flex flex-col gap-2">
                <label className="font-medium">Prompt Name</label>
                <Input placeholder="Enter Prompt Name" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-medium">Prompt Text</label>
                <Input placeholder="The question stated in the IVR" />
                <span className="text-gray-500">Example: Did you feed the patient? (Avoid characters, such as,'&', '/', '-' for prompt text)</span>
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-medium">Text Code</label>
                <Input placeholder="Use for integrations only not a requird filed otherwise" />
            </div>
            <div className="grid grid-row gap-4">
                <label className="font-medium">Numerical Answer</label>
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
                <label className="font-medium">Status</label>
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
