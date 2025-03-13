import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function AddPayer() {
    const [cptCodes, setCptCodes] = useState([
        { code: "T1019", amount: "19.39", effectiveDate: "01 January 2025", endDate: "30 December 2024" },
    ]);

    return (
        <div className="flex flex-col space-y-6 w-full font-satoshi">
            <span className="text-3xl font-bold">Add New Payer</span>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Name *</label>
                <Input placeholder="Enter Name" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Address Line 1 *</label>
                <Input placeholder="Enter Address" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Address Line 2</label>
                <Input placeholder="Enter Address Line 2 (Optional)" />
            </div>

            <div className="grid grid-cols-4 gap-4">
                <Input placeholder="Zip Code" />
                <Input placeholder="County" />
                <Input placeholder="City" />
                <Input placeholder="State" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Country</label>
                <Input placeholder="United States" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Phone</label>
                <Input placeholder="Enter Phone" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Claim Submission Payer ID *</label>
                <Input placeholder="Enter Payer ID" />
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between items-start">
                    {/* CPT Codes Table (Left) */}
                    <div className="w-[80%]">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                                    <TableCell>CPT Codes</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Effective Date</TableCell>
                                    <TableCell>End Date</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cptCodes.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Input type="text" defaultValue={item.code} />
                                        </TableCell>
                                        <TableCell>
                                            <Input type="number" defaultValue={item.amount} />
                                        </TableCell>
                                        <TableCell>
                                            <Input type="date" defaultValue={item.effectiveDate} />
                                        </TableCell>
                                        <TableCell>
                                            <Input type="date" defaultValue={item.endDate} />
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outline">-</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Add CPT Code Button (Right) */}
                    <div className="w-[20%] flex justify-end">
                        <Button className="bg-purple-500 text-white">Add CPT Code</Button>
                    </div>
                </div>
            </div>


            <div className="grid grid-row gap-4">
                <label className="font-medium">Status</label>
                <RadioGroup defaultValue="option-one" className="flex flex-row gap-12">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" checked />
                        <label htmlFor="male">Active</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <label htmlFor="female">Inactive</label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4 select-none">
                    <Button variant="default" className="px-10">
                        Save Changes
                    </Button>
                    <Button variant="default" className="bg-red-500 px-10">
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
}
