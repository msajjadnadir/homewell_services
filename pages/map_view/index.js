"use client";

import Action from "@/sections/map_view/action";
import Filter from "@/sections/map_view/filter";
import Map from "@/sections/map_view/map";

export default function CaregiversPage() {
  return (
    <div className="flex flex-col w-full">
      <Action />
      <Filter />
      <Map />
    </div>
  );
}
