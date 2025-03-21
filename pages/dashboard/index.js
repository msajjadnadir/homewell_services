import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";
import dynamic from "next/dynamic";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = Array.from({ length: 20 }, (_, i) => ({
  value: Math.random() * 100,
}));

// Dynamic imports for all components
const Overview = dynamic(() => import("@/sections/dashboard/overview"), {
  ssr: false,
});
const DocumentExpiration = dynamic(
  () => import("@/sections/dashboard/document-expiration"),
  { ssr: false }
);
const EmployeesCaregivers = dynamic(
  () => import("@/sections/dashboard/employees-caregivers"),
  { ssr: false }
);
const RevenueDetails = dynamic(
  () => import("@/sections/dashboard/revenue-details"),
  { ssr: false }
);
const ClaimDetails = dynamic(
  () => import("@/sections/dashboard/claim-details"),
  { ssr: false }
);
const Announcement = dynamic(
  () => import("@/sections/dashboard/announcement"),
  { ssr: false }
);
const RecentActivity = dynamic(
  () => import("@/sections/dashboard/recently-activity"),
  { ssr: false }
);

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      {/* <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="flex flex-col">
          <span className="font-satoshi text-[20px] md:text-[24px] font-medium leading-[27px] md:leading-[32.4px] tracking-[0.016em] text-primaryText-DEFAULT">
            HOMEWELL SERVICES LLC
          </span>
          <div className="flex flex-col gap-2 md:gap-4 mt-2">
            <span className="font-satoshi text-[14px] md:text-[16px] font-medium leading-[18.9px] md:leading-[21.6px] tracking-[0.016em] text-gray-500">
              Call In: (007) 944-2588
            </span>
            <span className="font-satoshi text-[14px] md:text-[16px] font-medium leading-[18.9px] md:leading-[21.6px] tracking-[0.016em] text-gray-500">
              Agency ID: 2044
            </span>
            <span className="font-satoshi text-[14px] md:text-[16px] font-medium leading-[18.9px] md:leading-[21.6px] tracking-[0.016em] text-gray-500">
              Saturday, February 15, 2025
            </span>
          </div>
        </div>
        <button
          className="mt-4 md:mt-0 px-[20px] md:px-[27px] py-[10px] md:py-[15px] font-medium text-[16px] md:text-[20px] bg-[#A37EE6] text-white rounded-lg h-fit shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A]"
          onClick={() => router.push(paths.dashboard.dashboardSetup)}
        >
          Manage Dashboard
        </button>
      </div> */}
      <Card className="flex flex-col gap-4 border-none shadow-none">
        <div className="flex lg:flex-row flex-col justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold uppercase">
              Homewell Services LLC
            </h2>
            <p className="text-sm text-gray-600">Call In: (757) 699-5359</p>
            <p className="text-sm text-gray-600">Agency ID: 1399</p>
            <p className="text-sm text-gray-600">Saturday, March 22, 2025</p>
          </div>
          <div className="text-green-600 text-sm font-medium">
            Today's Scheduled Visits (SHIFTS):{" "}
            <span className="font-bold">8</span>
          </div>
          <div className="flex md:flex-row flex-col gap-6 items-center">
            <div className="text-center">
              <ResponsiveContainer width={200} height={80}>
                <BarChart data={data}>
                  <Bar dataKey="value" fill="#3498db" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-600">THIS MONTH</p>
              <p className="text-sm font-semibold">$0.00</p>
            </div>
            <div className="text-center">
              <ResponsiveContainer width={200} height={80}>
                <BarChart data={data}>
                  <Bar dataKey="value" fill="#9b59b6" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-600">LAST MONTH</p>
              <p className="text-sm font-semibold">$18,512.52</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-3">
          <div className="w-36">
            <label className="text-sm font-medium text-gray-700">
              SELECT ZONES
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[
                    "Zone 1",
                    "Zone 2",
                    "Zone 3",
                  ].map((month) => (
                    <SelectItem key={month} value={month.toLowerCase()}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button variant="default" onClick={() => router.push(paths.dashboard.dashboardSetup)} className="flex items-center gap-2">
            <Settings size={16} /> MANAGE DASHBOARD
          </Button>
        </div>
      </Card>
      <Overview />
      <DocumentExpiration />
      <EmployeesCaregivers />

      {/* <div className="grid grid-cols-3 gap-14 mt-[60px]">
        <RevenueDetails />
        <ClaimDetails />
      </div> */}

      {/* <div className="grid grid-cols-3 gap-14 mt-[60px]">
        <Announcement />
        <RecentActivity />
      </div> */}

      <div className="hidden md:grid xl:grid-cols-3 gap-14 mt-[60px]">
        <RevenueDetails />
        <ClaimDetails />
      </div>

      <div className="flex flex-col gap-14 mt-[60px] md:hidden">
        <RevenueDetails />
        <ClaimDetails />
      </div>

      <div className="hidden md:grid xl:grid-cols-3 gap-14 mt-[60px]">
        <Announcement />
        <RecentActivity />
      </div>

      <div className="flex flex-col gap-14 mt-[60px] md:hidden">
        <Announcement />
        <RecentActivity />
      </div>
    </div>
  );
}
