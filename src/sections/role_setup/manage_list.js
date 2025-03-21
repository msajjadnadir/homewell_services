import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function manageList() {
  const [checkData, setCheckData] = useState([
    { label: "Pay Types", checked: true },
    { label: "Custom Prompt Group", checked: true },
    { label: "Skills/Service Type", checked: true },
    { label: "Observations", checked: true },
    { label: "Timesheet Mass Editor", checked: false },
    { label: "Service Items", checked: true },
    { label: "Payer List", checked: true },
    { label: "Pay Classes", checked: true },
    { label: "Activity Codes", checked: true },
    { label: "Custom Prompts", checked: false },
    { label: "Activities", checked: true },
    { label: "Tasks", checked: false },
    { label: "Task Group", checked: true },
  ]);

  const handleSwitchChange = (index) => {
    setCheckData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="flex flex-col mt-[73px]">
      <span className="font-satoshi font-bold text-[28px] leading-[37.8px] tracking-[0.016em] text-gray-900">
        Manage List
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
