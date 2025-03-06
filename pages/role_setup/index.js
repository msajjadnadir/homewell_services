"use client";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import LeftMenu from "@/sections/role_setup/left_menu";
import ManageList from "@/sections/role_setup/manage_list";
import Reports from "@/sections/role_setup/reports";
import LogList from "@/sections/role_setup/log_list";

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function index() {
    const router = useRouter();
    return (
        <div className="flex flex-col w-full font-satoshi">
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col">
                    <span className="text-[40px] font-bold leading-[54px] tracking-[0.016] text-gray-900">
                        Role Setup
                    </span>
                    <span className="text-gray-500 mt-6">
                        Employees use radio buttons to show access levels within each role. The module shows roles currently available and allows agency admins to create/manage roles.
                    </span>

                    <div className="flex flex-col gap-[16px] mt-6">
                        <div className="flex flex-row gap-6">
                            <RadioGroup defaultValue="option-one" className="flex flex-row gap-6">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="pp" id="pp" checked />
                                    <label htmlFor="pp">By Employee Role</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="cdr" id="cdr" />
                                    <label htmlFor="cdr">By Module</label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-row items-center mt-11 w-72">
                        <span className="flex font-medium text-black w-36">
                            User Role
                        </span>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Role" />
                            </SelectTrigger>
                        </Select>
                    </div>
                </div>
            </div>
            <LeftMenu />
            <ManageList />
            <Reports />
            <LogList />
            <button
                className="w-fit mt-20 px-12 py-4 font-satoshi text-[20px] font-medium leading-[24px] text-center select-none text-white bg-primary shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] rounded-[8px]"
                onClick={() => router.push(paths.dashboard.root)}
            >
                Save Changes
            </button>
        </div>
    );
}
