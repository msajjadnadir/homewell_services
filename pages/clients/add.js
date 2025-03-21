import { useState } from "react";
import { Button } from "@/components/ui/button";
import Tabs from "@/sections/clients/add/tabs";
import { clientsTabData } from "@/constants/clients/const";

import BasicSetup from "@/sections/clients/add/basic_setup";
import Location from "@/sections/clients/add/location";
import Advanced from "@/sections/clients/add/advanced";
import Notes from "@/sections/clients/add/notes";
import CarePlanDocs from "@/sections/clients/add/care_plan_docs";
import Forms from "@/sections/clients/add/forms";
import ActivityCode from "@/sections/clients/add/activity_code";
import Billing from "@/sections/clients/add/billing";
import Insurance from "@/sections/clients/add/insurance";
import CustomPrompts from "@/sections/clients/add/custom_prompts";
import Authorizations from "@/sections/clients/add/authorizations";

export default function Add() {
  const [tabIndex, setTabIndex] = useState(0);
  const tab = clientsTabData[tabIndex];
  
  const handlePrevious = () => {
    if (tabIndex > 0) setTabIndex(tabIndex - 1);
  };

  const handleNext = () => {
    if (tabIndex < clientsTabData.length - 1) setTabIndex(tabIndex + 1);
  };

  return (
    <div className="flex flex-col font-satoshi w-full">
      <span className="font-bold text-[40px] leading-[54px] tracking-[0.016em] text-[#00261C]">
        Add Client
      </span>

      <Tabs tab={tab} setTab={(newTab) => setTabIndex(clientsTabData.indexOf(newTab))} />
      {tab === "Basic Setup" && <BasicSetup />}
      {tab === "Location" && <Location />}
      {tab === "Advanced" && <Advanced />}
      {tab === "Notes" && <Notes />}
      {tab === "Care Plans/Docs" && <CarePlanDocs />}
      {tab === "Forms" && <Forms />}
      {tab === "Activity Code" && <ActivityCode />}
      {tab === "Billing" && <Billing />}
      {tab === "Insurance" && <Insurance />}
      {tab === "Custom Prompts" && <CustomPrompts />}
      {tab === "Authorizations" && <Authorizations />}

      <div className="flex flex-row items-center mt-20 justify-between">
        <div className="flex flex-row items-center gap-3">
          <Button 
            variant="outline" 
            className="px-10 py-5"
            onClick={handlePrevious} 
            disabled={tabIndex === 0}>
            Previous
          </Button>
          <Button 
            variant="outline" 
            className="px-10 py-5"
            onClick={handleNext} 
            disabled={tabIndex === clientsTabData.length - 1}>
            Next
          </Button>
        </div>

        {tab === "Authorizations" && (
          <Button variant="default" className="px-10 py-5">
            Save
          </Button>
        )}
      </div>

      <div className="bg-gray-200 text-gray-700 font-medium px-20 py-4 mt-16">
        <span className="block">Job: ALEXA SARAH ALEFELD (794890)</span>
        <span className="block">Created by: GARRIDO, GLYZZA (GLYGAR940973), Created date is: Jun 04, 2024 11:19 PM</span>
      </div>
    </div>
  );
}