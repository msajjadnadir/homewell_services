import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function index() {
    return (
        <div className="flex flex-col w-full gap-8 font-satoshi">
            <h2 className="text-2xl font-bold">New Announcement</h2>
            <Card className="p-6 xl:w-[75%]">
                <div className="flex flex-col gap-4 mt-4">
                    <div>
                        <label className="font-medium">Title</label>
                        <Input placeholder="Enter Announcement Title" />
                    </div>
                    <div>
                        <label className="font-medium">Message</label>
                        <Textarea placeholder="Enter Announcement Details..." />
                    </div>
                    <div>
                        <label className="font-medium">Service Authorizations</label>
                        <div className="flex md:flex-row flex-col gap-4 mt-2">
                            <div className="flex items-center gap-2">
                                <Checkbox id="caregivers" />
                                <label htmlFor="caregivers">Caregivers</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="clients" />
                                <label htmlFor="clients">Clients</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="allUsers" />
                                <label htmlFor="allUsers">All Users</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="font-medium">Send Time</label>
                        <Input placeholder="Send Now" />
                    </div>
                    <div className="flex md:flex-row flex-col xl:justify-end gap-4 mt-4">
                        <Button className="px-8 bg-red-500">Cancel</Button>
                        <Button className="px-8">Send Announcement</Button>
                    </div>
                </div>
            </Card>

            <div className="xl:w-[75%]">
                <h2 className="text-2xl font-bold">Past Announcements</h2>
                <div className="flex flex-col gap-4 mt-4">
                    {[1, 2, 3].map((_, index) => (
                        <Card key={index} className="p-4">
                            <CardContent>
                                <h3 className="font-semibold">Updated EVV Compliance Guidelines</h3>
                                <p className="text-sm text-gray-600">
                                    Please ensure all caregivers use GPS tracking for visit verification.
                                </p>
                                <p className="text-xs text-gray-500 mt-2">Sent on: 02/10/2023 - 10:00 AM</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
