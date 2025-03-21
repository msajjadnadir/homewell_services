import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="col-span-2 flex flex-col rounded-[14px] border-2 px-4 sm:px-8 pt-6 pb-8 border-accent-shades-300 font-satoshi">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <span className="text-lg font-medium text-gray-900">Announcement</span>
        <Select>
          <SelectTrigger className="w-full sm:w-[138px] border border-gray-300 flex">
            <SelectValue placeholder="May" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <SelectItem key={month} value={month.toLowerCase()}>
                  {month}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Announcements List */}
      <div className="flex flex-col gap-4 mt-6">
        {announcementData.map((item, index) => (
          <div
            key={"announcement" + index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-[6px] border-[0.5px] px-4 py-3 bg-gray-100 border-[#E0E0E0] gap-4 sm:gap-[95px]"          >
            {/* Announcement Content */}
            <div className="flex flex-col items-start gap-1.5">
              <span className="text-base text-gray-700">
                {item.title}
              </span>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>

            {/* Icons Section */}
            <div className="flex flex-row gap-5 items-center">
              <Icon
                icon="bi:pin-angle-fill"
                className="text-[#686868] text-[18px] cursor-pointer"
              />
              
              {/* Three Dots Dropdown */}
              <div className="relative">
                <Icon
                  icon="tabler:dots"
                  className="text-[#686868] text-[18px] cursor-pointer"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                />
                {/* Dropdown Menu */}
                {openDropdown === index && (
                  <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 shadow-md rounded-md py-1 z-50">
                    <button
                      className="flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <Icon icon="akar-icons:eye" className="w-4 h-4" />
                      View
                    </button>
                    <button
                      className="flex items-center gap-2 w-full px-3 py-2 text-red-600 hover:bg-gray-100"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <Icon icon="akar-icons:flag" className="w-4 h-4" />
                      Report
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
