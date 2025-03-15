import { useState } from "react";
import { Button } from "@/components/ui/button";
import Tabs from "@/sections/zone/add/tabs";
import { zoneTabData } from "@/constants/zone/const";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";


import BasicSetup from "@/sections/zone/add/basic_setup";
import Notify from "@/sections/zone/add/notify";

export default function Add() {
    const router = useRouter();
    const [tab, setTab] = useState(zoneTabData[0]);

    return (
        <div className="flex flex-col font-satoshi w-full">
            <span className="font-bold text-[40px] leading-[54px] tracking-[0.016em] text-[#00261C]">
                Add New Zone
            </span>

            <Tabs tab={tab} setTab={setTab} />
            {tab === "Basic Setup" && <BasicSetup />}
            {tab === "Notify" && <Notify />}

            <div className="flex flex-row items-center mt-20 justify-between">
                <div className="flex flex-row items-center gap-3">
                    <Button variant="outline" className="px-10 py-5">
                        Previous
                    </Button>
                    {tab === "Basic Setup" &&
                        <Button variant="outline" className="px-10 py-5">
                            Save
                        </Button>
                    }
                </div>
                <Button variant="default" className="px-10 py-5">
                    {tab === "Notify" ? "Add" : "Next"}
                </Button>
            </div>
        </div>
    );
}
