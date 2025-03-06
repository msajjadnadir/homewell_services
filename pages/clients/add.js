"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import BasicSetup from "@/sections/clients/add/basic_setup";
import Tabs from "@/sections/clients/add/tabs";
import { clientsTabData } from "@/constants/clients/const";
import Location from "@/sections/clients/add/location";
import Advanced from "@/sections/clients/add/advanced";

export default function add() {
  const [tab, setTab] = useState(clientsTabData[0]);
  return (
    <div className="flex flex-col">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[0.016em] text-[#00261C]">
        Add Client
      </span>
      <Tabs tab={tab} setTab={setTab} />
      {tab === "Basic Setup" && <BasicSetup />}
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
