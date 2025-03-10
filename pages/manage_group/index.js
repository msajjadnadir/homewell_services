import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function index() {
    const router = useRouter();
    return (
        <div className="flex flex-col w-full gap-8 font-satoshi">
            <h2 className="text-4xl font-bold">Manage Craegiver Groups</h2>

            <div className="w-[75%]">
                <div className="flex flex-col gap-4 mt-4">
                    {[1, 2].map((_, index) => (
                        <Card key={index} className="p-4">
                            <CardContent>
                                <h3 className="font-semibold">Morning Shift Caregivers</h3>
                                <p className="text-sm text-gray-800 font-medium">
                                    Members: John Doe, Jane Smith, Michael Brown
                                </p>
                                <p className="text-xs text-gray-500 mt-2">Created on: 02/10/2025 - 10:00 AM</p>
                            </CardContent>
                            <div className="flex justify-end gap-4 mt-4">
                                <Button className="px-8" onClick={() => router.push(paths.dashboard.manage_group.add)}>Edit Group</Button>
                                <Button className="bg-red-500 px-8">Delete Group</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
