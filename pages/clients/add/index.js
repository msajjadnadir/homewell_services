"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import General from "@/sections/clients/add/general";
import Tabs from "@/sections/clients/add/tabs";
import { tabData } from "@/contants/const";
import Location from "@/sections/clients/add/location";
import Advanced from "@/sections/clients/add/advanced";

export default function AddCaregiverPage() {
  const [tab, setTab] = useState(tabData[0]);
  return (
    <div className="flex flex-col">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[0.016em] text-[#00261C]">
        Add Client
      </span>
      <Tabs tab={tab} setTab={setTab} />
      {tab === "General" && <General />}
      {tab === "Location" && <Location />}
      {tab === "Advanced" && <Advanced />}
      <div className="flex flex-row items-center justify-between mt-16">
        <div className="flex flex-row items-center gap-3">
          <Button variant="outline" className="py-[18px] px-6">
            Previous
          </Button>
          <Button variant="outline" className="py-[18px] px-6">
            Save
          </Button>
        </div>
        <Button variant="default" className="py-[18px] px-14">
          Next
        </Button>
      </div>
    </div>
  );
}
