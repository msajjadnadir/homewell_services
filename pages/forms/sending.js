import { Button } from '@/components/ui/button'
import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function sending() {
    const router = useRouter();

    return (
        <div className='flex flex-col justify-center gap-12 w-full p-24 font-satoshi'>
            <div className="flex flex-row gap-6">
                <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <label htmlFor="male">Publish Now</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" checked/>
                        <label htmlFor="female">Schedule for Later</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex items-center space-x-6">
                    <Checkbox id="terms" className="w-6 h-6" checked />
                    <label
                        htmlFor="terms"
                    >
                        Allow user to download the form.
                    </label>
                </div>
                <div className="flex items-center space-x-6">
                    <Checkbox id="terms" className="w-6 h-6" checked />
                    <label
                        htmlFor="terms"
                    >
                        Notify the user.
                    </label>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <Button className="text-lg px-16 py-5 mt-8" onClick={() => router.push(paths.dashboard.forms.successful)}>Next</Button>
                <Button className="bg-red-500 text-lg px-16 py-5 mt-8">Cancel</Button>
            </div>
        </div>
    )
}
