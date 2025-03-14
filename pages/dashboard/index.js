import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";
import dynamic from 'next/dynamic'; // Dynamic import کے لیے

// Dynamic imports for all components
const Overview = dynamic(() => import("@/sections/dashboard/overview"), { ssr: false });
const DocumentExpiration = dynamic(() => import("@/sections/dashboard/document-expiration"), { ssr: false });
const EmployeesCaregivers = dynamic(() => import("@/sections/dashboard/employees-caregivers"), { ssr: false });
const RevenueDetails = dynamic(() => import("@/sections/dashboard/revenue-details"), { ssr: false });
const ClaimDetails = dynamic(() => import("@/sections/dashboard/claim-details"), { ssr: false });
const Announcement = dynamic(() => import("@/sections/dashboard/announcement"), { ssr: false });
const RecentActivity = dynamic(() => import("@/sections/dashboard/recently-activity"), { ssr: false });

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full justify-between">
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
      </div>
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

      <div className="hidden md:grid md:grid-cols-3 gap-14 mt-[60px]">
        <RevenueDetails />
        <ClaimDetails />
      </div>

      <div className="flex flex-col gap-14 mt-[60px] md:hidden">
        <RevenueDetails />
        <ClaimDetails />
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-14 mt-[60px]">
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