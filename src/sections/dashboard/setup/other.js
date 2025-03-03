import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Other() {
  const [checkData, setCheckData] = useState([
    { label: "Document Expiration", checked: false },
    { label: "Employees/Caregivers", checked: false },
    { label: "Revenue Details", checked: false },
    { label: "Claim Details", checked: false },
    { label: "Announcement", checked: false },
    { label: "Recent Activity", checked: false },
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
        Other
      </span>
      <div className="grid grid-cols-3 gap-6 mt-9 gap-x-24 gap-y-8">
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
