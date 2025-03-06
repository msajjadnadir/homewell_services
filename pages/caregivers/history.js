"use client";

import List from "@/sections/caregivers/history/list";

export default function index() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-4xl font-bold font-satoshi text-center">Caregiver Work History</h2>
      <List />
    </div>
  );
}
