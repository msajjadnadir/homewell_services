import { useRouter } from "@/routes/hooks";
import { paths } from "@/routes/paths";

import OverviewSection from "@/sections/dashboard/overview";
import DocumentExpirationSection from "@/sections/dashboard/document_expiration";
import EmployeesCaregiversSection from "@/sections/dashboard/enployeesCaregivers";
import RevenueDetailsSection from "@/sections/dashboard/revenueDetails";
import ClaimDetailsSection from "@/sections/dashboard/claimDetails";
import AnnouncementSection from "@/sections/dashboard/announcement";
import RecentActivitySection from "@/sections/dashboard/recentlyActivity";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col">
          <span className="font-satoshi text-[24px] font-medium leading-[32.4px] tracking-[0.016em] text-primaryText-DEFAULT">
            HOMEWELL SERVICES LLC
          </span>
          <div className="flex flex-col gap-4 mt-2">
            <span className="font-satoshi text-[16px] font-medium leading-[21.6px] tracking-[0.016em] text-gray-500">
              Call In: (007) 944-2588
            </span>
            <span className="font-satoshi text-[16px] font-medium leading-[21.6px] tracking-[0.016em] text-gray-500">
              Agency ID: 2044
            </span>
            <span className="font-satoshi text-[16px] font-medium leading-[21.6px] tracking-[0.016em] text-gray-500">
              Saturday, February 15, 2025
            </span>
          </div>
        </div>
        <button
          className="px-[27px] py-[15px] font-medium text-[20px] bg-[#A37EE6] text-white rounded-lg h-fit shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A]"
          onClick={() => router.push(paths.dashboard.dashboardSetup)}
        >
          Manage Dashboard
        </button>
      </div>
      <OverviewSection />
      <DocumentExpirationSection />
      <EmployeesCaregiversSection />
      <div className="grid grid-cols-3 gap-14 mt-[60px]">
        <RevenueDetailsSection />
        <ClaimDetailsSection />
      </div>
      <div className="grid grid-cols-3 gap-14 mt-[60px]">
        <AnnouncementSection />
        <RecentActivitySection />
      </div>
    </div>
  );
}
