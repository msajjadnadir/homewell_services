"use client";

import Action from "@/sections/caregivers/action";
import Filter from "@/sections/caregivers/filter";
import List from "@/sections/caregivers/list";

export default function CaregiversPage() {
  return (
    <div className="flex flex-col w-full font-satoshi">
      <Action />
      <Filter />
      <List />
    </div>
  );
}
