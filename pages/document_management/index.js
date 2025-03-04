"use client";

import Action from "@/sections/document_management/action";
import Filter from "@/sections/document_management/filter";
import List from "@/sections/document_management/list";

export default function DocumentManagementPage() {
  return (
    <div className="flex flex-col w-full">
      <Action />
      <Filter />
      <List />
    </div>
  );
}
