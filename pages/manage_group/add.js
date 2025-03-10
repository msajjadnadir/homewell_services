"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const caregiversList = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
];

export default function AddGroup() {
    const [selectedCaregivers, setSelectedCaregivers] = useState([]);

    const toggleSelection = (id) => {
        setSelectedCaregivers((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="flex flex-col space-y-8 w-[75%] font-satoshi">
            <span className="font-bold text-5xl">Create New Group</span>

            <div className="flex flex-col gap-2">
                <span>Group Name</span>
                <Input placeholder="Enter Group Name" />
            </div>

            <div className="flex flex-col gap-2">
                <span>Select Caregivers</span>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Choose" />
                    </SelectTrigger>
                    <SelectContent>
                        {caregiversList.map((caregiver) => (
                            <div key={caregiver.id} className="flex items-center gap-2 p-2">
                                <Checkbox
                                    checked={selectedCaregivers.includes(caregiver.id)}
                                    onCheckedChange={() => toggleSelection(caregiver.id)}
                                />
                                <span>{caregiver.name}</span>
                            </div>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="flex justify-end gap-2">
                <Button className="px-10 py-5">Create Group</Button>
            </div>
        </div>
    );
}
