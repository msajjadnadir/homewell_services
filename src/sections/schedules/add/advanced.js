import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddCaregiverAdvanced() {
  return (
    <div className="flex flex-col gap-6 mt-[46px]">
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          External Code 1
        </span>
        <Input placeholder="External Code 1" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          External Code 2
        </span>
        <Input placeholder="External Code 2" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Agency Emp. ID
          </span>
          <Input placeholder="Agency Emp. ID" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Phone/Text
          </span>
          <Input placeholder="1234567890000" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
          Email
        </span>
        <Input placeholder="Enter your email" />
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            How To Notify?
          </span>
          <div className="flex flex-row gap-12">
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Text SMS
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
            </div>
          </div>
        </div>
        <span className="font-satoshi font-normal text-base leading-[31px] tracking-[-0.63px] text-error-500">
          Based on scheduled shifts, caregiver employee and staff member(s) in
          Zone/Notify Tab gets alerted for late clock-in, late clock-out and
          schedule reminder
        </span>
      </div>
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-4">
          <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
            Notify Staff When?
          </span>
          <div className="flex flex-row gap-12">
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All Check-Ins
              </label>
            </div>
            <div className="flex items-center space-x-6">
              <Checkbox id="terms" className="w-6 h-6" />
              <label
                htmlFor="terms"
                className="font-satoshi font-medium text-base leading-[21.6px] tracking-[0] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All Check-Outs
              </label>
            </div>
          </div>
        </div>
        <span className="font-satoshi font-normal text-base leading-[31px] tracking-[-0.63px] text-error-500">
          Staff member(s) in Zone/Notify Tab gets alerted for caregiver employee
          clock-ins and clock-outs
        </span>
      </div>
    </div>
  );
}
