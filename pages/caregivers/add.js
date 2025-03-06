"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddCaregiverGeneral from "@/sections/caregivers/add/general";
import AddCaregiverTabs from "@/sections/caregivers/add/tabs";
import { tabData } from "@/constants/const";
import AddCaregiverLocation from "@/sections/caregivers/add/location";
import AddCaregiverAdvanced from "@/sections/caregivers/add/advanced";
import AddCaregiverPreferences from "@/sections/caregivers/add/preferences";
import AddCaregiverRvv from "@/sections/caregivers/add/rvv";
import AddCaregiverCertification from "@/sections/caregivers/add/certification";
import AddCaregiverGaa from "@/sections/caregivers/add/gaa";
import AddCaregiverNotes from "@/sections/caregivers/add/notes";

export default function AddCaregiverPage() {
  const [tab, setTab] = useState(tabData[0]);

  return (
    <div className="flex flex-col">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[0.016em] text-[#00261C]">
        Add Caregiver
      </span>
      <AddCaregiverTabs tab={tab} setTab={setTab} />
      {tab === "General" && <AddCaregiverGeneral />}
      {tab === "Location" && <AddCaregiverLocation />}
      {tab === "Advanced" && <AddCaregiverAdvanced />}
      {tab === "Preferences" && <AddCaregiverPreferences />}
      {tab === "RVV" && <AddCaregiverRvv />}
      {tab === "Certification" && <AddCaregiverCertification />}
      {tab === "Grant Admin Access" && <AddCaregiverGaa />}
      {tab === "Notes" && <AddCaregiverNotes />}
      <div className="flex flex-row items-center justify-between mt-16">
        <div className="flex flex-row items-center gap-3">
          <Button variant="outline" className="py-[18px] px-6">
            Previous
          </Button>
          <Button variant="outline" className="py-[18px] px-6">
            Save
          </Button>
        </div>
        <div className="flex flex-row items-center gap-3">
          {tab === "Certification" && (
            <Button variant="outline" className="py-[18px] px-6 bg-secondaryShades-base text-white ">
              Add New Certificate
            </Button>
          )}
          <Button variant="default" className="py-[18px] px-14">
          {tab === "Notes" ? "Save Caregiver" : "Next" }
          </Button>
        </div>
      </div>
    </div>
  );
}