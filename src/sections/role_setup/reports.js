import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function reports() {
  const [checkData, setCheckData] = useState([
    { label: "Actual Vs Scheduled Report", checked: false },
    { label: "Authorized Vs Actual Report", checked: true },
    { label: "Authorized Vs Schedule Report", checked: false },
    { label: "Weekly Overtime Threshold", checked: true },
    { label: "Job Weekly Hours Report", checked: true },
    { label: "Inactive Employee List", checked: true },
    { label: "Custom Prompt Report", checked: true },
    { label: "Certificate Expiration Report", checked: false },
    { label: "Authorization Expiration Report", checked: true },
    { label: "Historical A/R Report", checked: true },
    { label: "Revenue Report", checked: true },
    { label: "RVV Recording LIST", checked: false },
    { label: "Budget Vs Actual Report", checked: false },
    { label: "Weekly Payroll Report", checked: true },
    { label: "Employee Weekly Summary Report", checked: true },
    { label: "Historical A/R Report", checked: true },
    { label: "Revenue Report", checked: true },
    { label: "RVV Recording LIST", checked: false },
    { label: "Jobs List Without Schedule", checked: true },
    { label: "Weekly Prompt Report", checked: true },
    { label: "Custom Prompt Report Detail", checked: false },
    { label: "Accounts Receivable Report", checked: true },
    { label: "A/R Aging Summary", checked: true },
    { label: "KPI Report", checked: false },
    { label: "Schedule Reporting", checked: true },
    { label: "Weekly Schedule Reporting", checked: true },
    { label: "Job Observation Report", checked: false },
    { label: "Job List", checked: true },
    { label: "Authorization Report", checked: true },
    { label: "Visits By Payer Summary Report", checked: false },
    { label: "Schedule Edit Employee", checked: true },
    { label: "Job Task Report", checked: true },
    { label: "Employee List", checked: false },
    { label: "Job Note Report", checked: true },
    { label: "Completed Forms Report", checked: true },
    { label: "Care Plan/Docs Expiration Report", checked: false },
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
        Reports
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
