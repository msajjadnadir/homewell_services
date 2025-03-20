import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

export default function Add() {
    return (
        <div className="flex flex-col w-[80%] space-y-6 font-satoshi">
            <div className="flex flex-row items-center justify-between">
                <span className="text-3xl font-bold">Edit Time Card</span>
            </div>

            <div className="flex flex-col-2 gap-6 w-full">
                <div className="flex flex-row gap-2 w-full gap-6">
                    <span className="font-medium">Employee Name:</span>
                    <span className="">John Doe</span>
                </div>
                <div className="flex flex-row gap-2 w-full gap-6">
                    <span className="font-medium">Job Name:</span>
                    <span className="uppercase">Kimberly Henry (310143)</span>
                </div>
            </div>

            <div className="flex flex-col-2 gap-10 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">Clock-in Time</label>
                    <Input placeholder="Enter Clock-in Time" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">Clock-out Time</label>
                    <Input placeholder="Enter Clock-in Time" />
                </div>
            </div>

            <div className="flex flex-col-2 gap-10 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">Activity Code</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Activity" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="code1">Code 1</SelectItem>
                            <SelectItem value="code2">Code 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">Authorization</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Authorization" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="code1">Code 1</SelectItem>
                            <SelectItem value="code2">Code 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-col-2 gap-10 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">Billing Code</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Billing Code" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="code1">Code 1</SelectItem>
                            <SelectItem value="code2">Code 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-medium">Reason Code</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Reason Code" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="code1">Code 1</SelectItem>
                            <SelectItem value="code2">Code 2</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-end">
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">Update</Button>
                    <Button variant="default" className="bg-red-500 px-10">Cancel</Button>
                </div>
            </div>

            <span className="flex flex-col uppercase font-medium text-end">Please provide summary note</span>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Companionship</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">Do you provide companion care?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Bathing, Shower</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU BATH OR SHOWER THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Dressing</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">Did you dress the patient?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Toiliting Assit</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">Did you assist the patient with toiliting?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Transfer</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU TRANSFERTHE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Assit Eating</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU FEED THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Assit Ambulate</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU AMBULATE THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Turn or Change Position</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU TURN OR CHANGE POSITION THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Grooming</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU GROOM THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Supervise Medications</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU SUPERVISE MEDICATIONS WITH THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Meal Preparation</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU PREPARE A MEAL FOR THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Make or Changed the Bed</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU MAKE OR CHANGE THE BED?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between">
                <span className="uppercase font-medium w-[40%]">Clean Areas Used by the Patient</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU CLEAN AREAS USED BY THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center">
                <span className="uppercase font-medium w-[40%]">Shop or List Supplies</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU SHOP OR LIST SUPPLIES FOR THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center">
                <span className="uppercase font-medium w-[40%]">Laundary</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU DO LAUNDRY FOR THE PATIENT?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row items-center">
                <span className="uppercase font-medium w-[40%]">Medical Appointment</span>
                <div className="flex flex-col gap-4 w-full">
                    <label className="uppercase">DID YOU TAKE CLIENT TO A SCHEDULED MEDICAL APPOINTMENT THE PATIENT TODAY?</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Yes" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium">Notes</label>
                <Textarea placeholder="Enter additional detail" />
            </div>

            <div className="flex flex-row items-center justify-end">
                <div className="flex flex-row gap-4">
                    <Button variant="default" className="px-10">Inactivate</Button>
                </div>
            </div>
        </div>
    );
}

