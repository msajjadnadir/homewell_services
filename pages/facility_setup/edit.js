import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";


export default function add() {
    return (
        <div className="flex flex-col xl:w-[60%] w-full space-y-6 font-satoshi">

            <span className="font-bold lg:text-5xl text-3xl">
                Edit Facility Setup
            </span>

            <div className="flex flex-col gap-2">
                <span>
                    Facility Setup Name
                </span>
                <Input placeholder="Enter Facility Setup Name" />
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Agency Name
                </span>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Enter Agency Name" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Place of Service
                </span>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Enter Place of Service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Tax ID
                </span>
                <Input placeholder="Enter Tax ID" />
            </div>

            <div className="flex flex-col gap-2">
                <span className="font-medium mb-4">
                    Select the Clearing House SFTP Setup
                </span>
                <div className="flex lg:flex-row flex-col gap-12 mb-6">
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terms" className="w-6 h-6" />
                        <label
                            htmlFor="terms"
                        >
                            HHAeXchange
                        </label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terms" className="w-6 h-6" checked />
                        <label
                            htmlFor="terms"
                        >
                            Office Ally
                        </label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terms" className="w-6 h-6" checked />
                        <label
                            htmlFor="terms"
                        >
                            Waystar
                        </label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terms" className="w-6 h-6" />
                        <label
                            htmlFor="terms"
                        >
                            Availity
                        </label>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-12">
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terms" className="w-6 h-6" />
                        <label
                            htmlFor="terms"
                        >
                            eMOMED
                        </label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terms" className="w-6 h-6" />
                        <label
                            htmlFor="terms"
                        >
                            Care Bridge
                        </label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terms" className="w-6 h-6" />
                        <label
                            htmlFor="terms"
                        >
                            Authenticare
                        </label>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Checkbox id="terms" className="w-6 h-6" />
                        <label
                            htmlFor="terms"
                        >
                            Tansshuttle
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col border border-gray-200 p-6 rounded-lg space-y-4">
                <span className="font-bold text-3xl">
                    HHAeXchange
                </span>

                <div className="flex flex-col gap-2">
                    <span>
                        Hostname
                    </span>
                    <Input placeholder="Enter Hostname" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Port
                    </span>
                    <Input placeholder="Enter Port" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Username
                    </span>
                    <Input placeholder="Enter Username" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Password
                    </span>
                    <Input placeholder="Enter Password" />
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        PEM File (optional)
                    </span>
                    <div className="flex items-center gap-3 border rounded-lg p-2">
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            Choose File
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    console.log("Selected file:", file.name);
                                }
                            }}
                        />
                        <span className="text-gray-500">No file choosen</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Inbound Directory
                    </span>
                    <Input placeholder="Enter Inbound Directory" />
                </div>

                <Button className="bg-sky-950 w-48">Check Connection</Button>
            </div>

            <div className="flex flex-col border border-gray-200 p-6 rounded-lg space-y-4">
                <span className="font-bold text-3xl">
                    Office Ally
                </span>

                <div className="flex flex-col gap-2">
                    <span>
                        Hostname
                    </span>
                    <Input placeholder="Enter Hostname" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Port
                    </span>
                    <Input placeholder="Enter Port" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Username
                    </span>
                    <Input placeholder="Enter Username" />
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Password
                    </span>
                    <Input placeholder="Enter Password" />
                </div>
                <div className="flex flex-col gap-4">
                    <span className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                        PEM File (optional)
                    </span>
                    <div className="flex items-center gap-3 border rounded-lg p-2">
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            Choose File
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    console.log("Selected file:", file.name);
                                }
                            }}
                        />
                        <span className="text-gray-500">No file choosen</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>
                        Inbound Directory
                    </span>
                    <Input placeholder="Enter Inbound Directory" />
                </div>
            </div>


            <div className="flex flex-col gap-2">
                <span>
                    Address Line
                </span>
                <Input placeholder="Enter Address Line" />
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Address Line 2
                </span>
                <Input placeholder="Enter Address Line 2" />
            </div>

            <div className="mt-6 lg:w-[60%] w-full">
                <span>
                    Zip/Country/City/State
                </span>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div className="flex flex-col gap-2">
                        <Input placeholder="Enter Zip" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input placeholder="Enter Country" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input placeholder="Enter City" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input placeholder="Enter State" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span>
                    Madicaid ID
                </span>
                <Input placeholder="Enter Medicaid ID" />
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    NPI Number
                </span>
                <Input placeholder="Enter NPI Number" />
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Taxonomy Code
                </span>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Enter Texonomy Code" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="option">Option</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Electronic Transmitter Id Number
                </span>
                <Input placeholder="Enter Electronic Transmitter ID Number" />
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Sandata Business Identity ID
                </span>
                <Input placeholder="Enter Sandata Business Identity ID" />
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Sandata User ID
                </span>
                <Input placeholder="Enter Sandata User ID" />
            </div>
            <div className="flex flex-col gap-2">
                <span>
                    Sandata Password
                </span>
                <Input placeholder="Enter Electronic Password" />
            </div>
            <div className="flex justify-between gap-2">
                <Button>Save Facility Setup</Button>
                <Button className="bg-red-500">Cancel</Button>
            </div>
        </div>
    );
}
