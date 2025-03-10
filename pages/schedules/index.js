"use client";

import Action from "@/sections/schedules/action";
import Filter from "@/sections/schedules/filter";
import Filter2 from "@/sections/schedules/filter2";
import List from "@/sections/schedules/list";
import Calendar from "@/sections/schedules/calendar";
import { Button } from "@/components/ui/button";

export default function CaregiversPage() {
  return (
    <div className="flex flex-col w-full font-satoshi">
      <Action />
      <Filter />
      <List />
      <Filter2 />
      <div className="flex flex-row items-center justify-between mt-[38px]">
        <div className="flex flex-row gap-4 select-none">
          <Button variant="default" className="bg-success-500 px-[42px]">
            Search
          </Button>
          <Button variant="default" className="bg-warning-500 px-[42px]">
            Clear
          </Button>
          <Button variant="default" className="bg-sky-950 px-[42px]">
            PDF Export
          </Button>
        </div>
      </div>
      <div className="flex flex-col mt-12">
            {/* <img src="/assets/images/schedule_calendar.png" /> */}
            <Calendar />
      </div>
    </div>
  );
}
