import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AddCaregiverPreferences() {
    return (
        <div className="flex flex-col gap-6 mt-[46px]">
            <div className="flex flex-col gap-[6px]">
                <div className="flex flex-col gap-4">
                    <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Allow Employee to set Preferences and Availability
                    </span>
                    <div className="flex flex-row gap-12">
                        <div className="flex items-center space-x-6">
                            <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="male" id="male" />
                                    <label htmlFor="male">Yes</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="female" id="female" />
                                    <label htmlFor="female">No</label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[6px]">
                <div className="flex flex-col gap-4">
                    <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        How to Notify?
                    </span>
                    <div className="flex flex-row gap-12">
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Spanish
                            </label>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Male
                            </label>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Female
                            </label>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Dementia Experience
                            </label>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Cates Okay
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Incintinence Experience
                            </label>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Meal Prep Experience
                            </label>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Smoking Okay
                            </label>
                        </div>
                        <div className="flex items-center space-x-6">
                            <Checkbox id="terms" className="w-6 h-6" />
                            <label
                                htmlFor="terms"
                                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Dogs Okay
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[6px]">
                <div className="flex flex-col gap-4">
                    <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        Availability
                    </span>
                    <div className="flex flex-row gap-12">
                        <div className="flex items-center space-x-6">
                            <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="male" id="male" />
                                    <label htmlFor="male">24 hrs everyday</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="female" id="female" />
                                    <label htmlFor="female">Set shift everyday</label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
