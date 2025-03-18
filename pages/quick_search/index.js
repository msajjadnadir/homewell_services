"use client";

import { useState } from "react";
import Action from "@/sections/quick_search/action";
import Filter from "@/sections/quick_search/filter";
import List from "@/sections/quick_search/list";

export default function QuickSearchPage() {
  const [selectedType, setSelectedType] = useState("job"); // Default "job"
  
  return (
    <div className="flex flex-col w-full font-satoshi gap-12">
      <Action />
      <Filter selectedType={selectedType} setSelectedType={setSelectedType} />
      <List selectedType={selectedType} />
    </div>
  );
}
