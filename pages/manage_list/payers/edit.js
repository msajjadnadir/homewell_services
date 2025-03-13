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
import { Eye, Menu } from "lucide-react";

export default function AddPayer() {
    const [cptCodes, setCptCodes] = useState([
        { code: "T1019", amount: "19.39", effectiveDate: "2025-01-01", endDate: "2024-12-30" },
    ]);

    const [openModal, setOpenModal] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleOpenModal = (type, item) => {
        setSelectedItem(item);
        setOpenModal(type);
    };

    const handleCloseModal = () => {
        setOpenModal(null);
        setSelectedItem(null);
    };

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
                                        <TableCell colSpan={3} className="flex space-x-2">
                                            <Button variant="outline">-</Button>
                                            <Button variant="outline" onClick={() => handleOpenModal("eye", item)}>
                                                <Eye />
                                            </Button>
                                            <Button variant="outline" onClick={() => handleOpenModal("menu", item)}>
                                                <Menu />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="w-[15%] flex justify-end">
                        <Button className="bg-purple-500 text-white">Add CPT Code</Button>
                    </div>
                </div>
            </div>

            {/* Eye Modal */}
            {openModal === "eye" && selectedItem && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[1000px]">
                        <h2 className="text-xl font-bold mb-4">{selectedItem.code} - {selectedItem.name}</h2>

                        {/* Form Fields */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Modifier</label>
                            <input
                                type="text"
                                className="w-full border p-2 rounded-lg"
                                placeholder="Enter modifier"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Additional value per unit</label>
                            <input
                                type="number"
                                className="w-full border p-2 rounded-lg"
                                defaultValue={0}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2 mb-4">
                            <button className="bg-purple-500 text-white px-3 py-2 rounded-lg">+</button>
                            <button className="bg-gray-300 text-black px-3 py-2 rounded-lg">-</button>
                        </div>

                        {/* Submit & Cancel Buttons */}
                        <div className="flex justify-end space-x-2">
                            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">Submit</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleCloseModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Menu Modal */}
            {openModal === "menu" && selectedItem && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[1000px]">
                        <h2 className="text-xl font-bold mb-4">{selectedItem.code} - {selectedItem.name}</h2>

                        {/* Table Structure */}
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-purple-100">
                                    <th className="border p-2 text-left">Amount</th>
                                    <th className="border p-2 text-left">Effective Date</th>
                                    <th className="border p-2 text-left">End Date</th>
                                    <th className="border p-2 text-left">Updated Date</th>
                                    <th className="border p-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">{selectedItem.amount}</td>
                                    <td className="border p-2">{selectedItem.effectiveDate}</td>
                                    <td className="border p-2">{selectedItem.endDate}</td>
                                    <td className="border p-2">{selectedItem.updatedDate}</td>
                                    <td className="border p-2 text-center">
                                        <button className="bg-purple-500 text-white px-2 py-1 rounded-lg">+</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Cancel Button */}
                        <div className="flex justify-end mt-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleCloseModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}


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
                    <Button variant="default" className="px-10">Save Changes</Button>
                    <Button variant="default" className="bg-red-500 px-10">Cancel</Button>
                </div>
            </div>
        </div>
    );
}
