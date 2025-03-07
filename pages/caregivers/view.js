"use client";

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";
import { Button } from "@/components/ui/button";

export default function ViewCaregiverPage() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col w-full font-satoshi ">
      <span className="font-bold text-[40px] leading-[54px] tracking-[0.016em] text-[#00261C]">
        View Caregiver
      </span>

      <div className="w-full mt-16">
        <div className="flex mb-5">
          <p className="w-72 font-bold">Employee Name:</p>
          <p className="flex-1 font-medium text-gray-900">Lara, Clay</p>
        </div>

        <div className="flex mb-5">
          <p className="w-72 font-bold">User Name:</p>
          <p className="flex-1 font-medium text-gray-900">Lara12344556</p>
        </div>

        <div className="flex mb-5">
          <p className="w-72 font-bold">Access Code:</p>
          <p className="flex-1 font-medium text-gray-900">12344556</p>
        </div>

        <div className="flex mb-5">
          <p className="w-72 font-bold">Employee Zone:</p>
          <p className="flex-1 font-medium text-gray-900">
            HAMPTON ROAD (7911)
          </p>
        </div>

        <div className="flex mb-5">
          <p className="w-72 font-bold">Language:</p>
          <p className="flex-1 font-medium text-gray-900">English</p>
        </div>

        <div className="flex mb-5">
          <p className="w-72 font-bold">Employee Level:</p>
          <p className="flex-1 font-medium text-gray-900">
            Corporate Billing Department
          </p>
        </div>

        <div className="flex mb-5">
          <p className="w-72 font-bold">Current Status:</p>
          <p className="flex-1 font-medium text-gray-900 text-success-500">
            Active
          </p>
        </div>

        <div className="flex mb-5">
          <p className="w-72 font-bold">Clock OUT Safeguard:</p>
          <p className="flex-1 font-medium text-gray-900">16</p>
        </div>
      </div>

      <div className="flex justify-end mt-16 w-full">
        <div className="flex flex-row items-center gap-3">
          <Button
            variant="outline"
            className="py-5 px-10 bg-gray-600 text-white shadow-xl"
            onClick={() => router.push(paths.dashboard.caregivers.chat)}
          >
            Chat
          </Button>
          <Button
            variant="outline"
            className="py-5 px-10 bg-success-500 text-white shadow-xl"
            onClick={() => router.push(paths.dashboard.caregivers.history)}
          >
            View History
          </Button>
          <Button
            variant="outline"
            className="py-5 px-10 bg-gray-800 text-white shadow-xl"
          >
            Edit
          </Button>
          <Button
            variant="outline"
            className="py-5 px-10 bg-[#A37EE6] text-white shadow-xl"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
