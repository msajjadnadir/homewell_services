"use client";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Icon } from "@iconify-icon/react";

const announcementData = [
  {
    title: "Review new caregiver compliance guidelines. Meeting: Mon, 10 AM.",
    time: "5 Minutes ago",
  },
  {
    title: "Submit timesheets by Friday to avoid payroll delays.",
    time: "5 Minutes ago",
  },
  {
    title: "Staff meeting on Wed at 2 PM, mandatory for department heads.",
    time: "5 Minutes ago",
  },
  {
    title:
      "A staff meeting is scheduled for Wednesday at 2 PM. All department heads must attend.",
    time: "5 Minutes ago",
  },
];

export default function AnnouncementSection() {
  return (
    <div className="col-span-2 flex flex-col rounded-[14px] border-2 px-4 sm:px-8 pt-6 pb-8 border-accent-shades-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <span className="font-satoshi font-medium text-[18px] leading-[28px] tracking-[0%] text-secondaryShades-900">
          Announcement
        </span>
        <Select>
          <SelectTrigger className="w-full sm:w-[138px] border border-gray-300 flex">
            <SelectValue placeholder="May" />
          </SelectTrigger>
        </Select>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {announcementData.map((item, index) => (
          <div
            key={"announcement" + index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-[6px] border-[0.5px] px-4 py-3 bg-gray-100 border-[#E0E0E0] gap-4 sm:gap-[95px]"
          >
            <div className="flex flex-col items-start gap-[6px]">
              <span className="font-satoshi font-normal text-base leading-6 tracking-[0%] text-gray-700">
                {item.title}
              </span>
              <span className="font-satoshi font-normal text-[10px] leading-[14px] tracking-[0%] text-gray-500 mt-[6px]">
                {item.time}
              </span>
            </div>
            <div className="flex flex-row gap-5 items-center">
              <Icon
                icon="bi:pin-angle-fill"
                className="text-[#686868] text-[18px] cursor-pointer"
              />
              <Icon
                icon="tabler:dots"
                className="text-[#686868] text-[18px] cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}