import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function logList() {
  const [checkData, setCheckData] = useState([
    { label: "Call Logs", checked: true },
    { label: "Activity Reporting", checked: true },
    { label: "Overlapping Shifts Report", checked: true },
    { label: "Time Cards Details", checked: true },
    { label: "Alert Log", checked: false },
    { label: "Timecard Report", checked: true },
    { label: "Timecard Report By Employee", checked: true },
    { label: "Timecard Report By Job", checked: true },
    { label: "Daily Hours Chart", checked: true },
    { label: "Open Timecards Reporting", checked: false },
    { label: "Account Activity Report", checked: true },
    { label: "Alert Log Dashboard", checked: false },
    { label: "Timecard Export Report", checked: true },
    { label: "Mobile Map Report", checked: true }
]);

  const handleSwitchChange = (index) => {
    setCheckData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="flex flex-col mt-11">
      <span className="font-satoshi font-bold text-[28px] leading-[37.8px] tracking-[0.016em] text-gray-900">
        Log List
      </span>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 gap-x-24 gap-y-8">
        {checkData.map((item, index) => (
          <div
            key={item.label}
            className="flex flex-row items-center justify-between select-none"
          >
            <span className="font-satoshi text-base leading-6 tracking-[-0.02em] text-gray-700">
              {item.label}
            </span>
            <Switch
              checked={item.checked}
              onCheckedChange={() => handleSwitchChange(index)}
              className="data-[state=checked]:bg-[#34C759]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
