"use client";

import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";
import { Button } from "@/components/ui/button";

export default function view() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full font-satoshi">
            <span className="font-bold text-[40px] leading-[54px] tracking-[0.016em] text-[#00261C]">
                View Client
            </span>

            <div className="w-full mt-16">
                <div className="flex mb-5">
                    <p className="w-72 font-bold">Job Name:</p>
                    <p className="flex-1 font-medium text-gray-900">Lara, Clay</p>
                </div>

                <div className="flex mb-5">
                    <p className="w-72 font-bold">Job/First/Middle/Last Name:</p>
                    <p className="flex-1 font-medium text-gray-900">Lara12344556</p>
                </div>

                <div className="flex mb-5">
                    <p className="w-72 font-bold">Job Code:</p>
                    <p className="flex-1 font-medium text-gray-900">12344556</p>
                </div>

                <div className="flex mb-5">
                    <p className="w-72 font-bold">Job Zone:</p>
                    <p className="flex-1 font-medium text-gray-900">
                        HAMPTON ROAD (7911)
                    </p>
                </div>

                <div className="flex mb-5">
                    <p className="w-72 font-bold">Contact Name:</p>
                    <p className="flex-1 font-medium text-gray-900">Lorem Ipsum</p>
                </div>

                <div className="flex mb-5">
                    <p className="w-72 font-bold">Authorized Phone:</p>
                    <p className="flex-1 font-medium text-gray-900">
                        Lorem Ipsum
                    </p>
                </div>

                <div className="flex mb-5">
                    <p className="w-72 font-bold">Scheduled Visit Only:</p>
                    <p className="flex-1 font-medium text-gray-900">No</p>
                </div>

                <div className="flex mb-5">
                    <p className="w-72 font-bold">Status:</p>
                    <p className="flex-1 font-medium text-gray-900 text-success-500">
                        Active
                    </p>
                </div>
            </div>

            <div className="flex justify-end mt-16 w-full">
                <div className="flex flex-row items-center gap-3">
                    <Button
                        variant="outline"
                        className="py-5 px-10 bg-sky-950 text-white shadow-xl"
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outline"
                        className="py-5 px-10 bg-[#A37EE6] text-white shadow-xl"
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
}
