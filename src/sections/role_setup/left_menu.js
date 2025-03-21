import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function leftMenu() {
  const [checkData, setCheckData] = useState([
    { label: "Dashboard", checked: false },
    { label: "Schedules", checked: true },
    { label: "Time Cards", checked: false },
    { label: "Forms", checked: true},
    { label: "Announcements", checked: true},
    { label: "Clients", checked: true},
    { label: "Caregivers", checked: true},
    { label: "EVV Compliance", checked: false },
    { label: "Document Management", checked: true },
    { label: "Role Setup", checked: false },
    { label: "Claims", checked: true },
    { label: "Facilty Setup", checked: false },
    { label: "Invoicing Module", checked: true },
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
        Left Menu
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
