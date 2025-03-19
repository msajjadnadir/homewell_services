"use client";

const recentlyActivityData = [
  {
    time: "10.40 AM, Fri 10 Feb 2025",
    title: "System Update",
    description: "System update completed. Check your dashboard for changes.",
  },
  {
    time: "10.40 AM, Fri 10 Feb 2025",
    title: "New Caregivers Added",
    description:
      "New caregiver profiles have been added. Review and verify their details.",
  },
  {
    time: "10.40 AM, Fri 10 Feb 2025",
    title: "Payroll Processed",
    description: "Payroll processed. Verify records for accuracy.",
  },
];
export default function RecentlyActivitySection() {
  return (
    <div className="flex flex-col xl:items-center h-full bg-gray-100 col-span-2 xl:col-span-1">
      <div className="flex px-6 py-[10px] w-full justify-start bg-gradient-to-br from-[#9C6CFE] to-[#7A41DC] rounded-t-[10px]">
        <span className="font-satoshi font-medium text-[18px] leading-[28px] text-white">
          Recently Activity
        </span>
      </div>
      <div className="flex flex-col rounded-b-[10px] bg-gray-100 p-6 h-full">
        <div className="flex flex-col gap-[26px]">
          {recentlyActivityData.map((item, index) => (
            <div className="flex flex-col gap-[6px]" key={"recent" + index}>
              <span className="font-satoshi font-medium text-[10px] leading-[13.5px] tracking-[0%] text-secondaryShades-900 opacity-60">
                {item.time}
              </span>
              <span className="font-satoshi font-medium text-[18px] leading-[28px] tracking-[0%] text-secondaryShades-900">
                System Update
              </span>
              <span className="font-satoshi font-normal text-[14px] leading-[20px] tracking-[0%] text-secondaryShades-900 opacity-80">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
