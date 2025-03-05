"use client";

import Overview from "@/sections/evv_compliance/overview";
import List from "@/sections/evv_compliance/list";

export default function DocumentManagementPage() {
  return (
    <div className="flex flex-col w-full">
      <Overview/>
      <List />
    </div>
  );
}
