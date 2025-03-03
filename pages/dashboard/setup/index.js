"use client";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import ShowOverview from "@/sections/dashboard/setup/showOverview";
import Other from "@/sections/dashboard/setup/other";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function SetupPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col">
          <span className="font-satoshi text-[40px] font-bold leading-[54px] tracking-[0.016] text-gray-900">
            Dashboard Setupp
          </span>
          <div className="flex flex-row gap-10 items-center mt-11">
            <span className="font-satoshi text-[18px] font-medium leading-[24px] tracking-[-0.02] text-black">
              Zone
            </span>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a zone" />
              </SelectTrigger>
            </Select>
          </div>
        </div>
      </div>
      <ShowOverview />
      <Other />
      <button
        className="w-fit mt-32 px-[54px] py-[15px] font-satoshi text-[20px] font-medium leading-[24px] text-center select-none text-white bg-primary shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] rounded-[8px]"
        onClick={() => router.push(paths.dashboard.root)}
      >
        Save Changes
      </button>
    </div>
  );
}
