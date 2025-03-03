"use client";

import Action from "@/sections/clients/action";
import Filter from "@/sections/clients/filter";
import List from "@/sections/clients/list";
export default function CaregiversPage() {
  return (
    <div className="flex flex-col w-full">
      <Action />
      <Filter />
      <List />
    </div>
  );
}
