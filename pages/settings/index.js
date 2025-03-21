import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminSettings() {
    return (
        <div className="flex flex-col w-full gap-8 font-satoshi">
            <h2 className="text-3xl font-bold">Admin Settings</h2>

            {/* General Settings */}
            <Card className="border-none shadow">
                <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <label className="font-medium">Organization Name</label>
                        <Input placeholder="Enter Organization Name" />
                    </div>
                    <div>
                        <label className="font-medium">Time Zone</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="EST" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="est">EST</SelectItem>
                                <SelectItem value="pst">PST</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Billing & Payment Settings */}
            <Card className="border-none shadow">
                <CardHeader>
                    <CardTitle>Billing & Payment Settings</CardTitle>
                </CardHeader>
                <CardContent className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <label className="font-medium">Default Billing Cycle</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Weekly" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="font-medium">Invoice Due Dates</label>
                        <Input placeholder="Enter Due date in days" />
                    </div>
                </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="border-none shadow">
                <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <label className="font-medium">Enable Two-Factor Authentication</label>
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
                    <div>
                        <label className="font-medium">Allowed IP Addresses</label>
                        <Input placeholder="Enter Allowed IP Addresses" />
                    </div>
                    <div className="col-span-2">
                        <label className="font-medium">Reset Admin Password</label>
                        <Input type="password" placeholder="Enter New Password" />
                    </div>
                </CardContent>
            </Card>

            {/* Notification Preferences */}
            <Card className="border-none shadow">
                <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <label className="font-medium">Receive Email Notifications</label>
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
                    <div>
                        <label className="font-medium">Receive SMS Alerts</label>
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
                </CardContent>
            </Card>

            {/* System Preferences */}
            <Card className="border-none shadow">
                <CardHeader>
                    <CardTitle>System Preferences</CardTitle>
                </CardHeader>
                <CardContent className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <label className="font-medium">Enable Auto Logout (Idle Time in Minutes)</label>
                        <Input placeholder="Enter Minutes" />
                    </div>
                    <div>
                        <label className="font-medium">Default Date Format</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="DD/MM/YYYY" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ddmmyyyy">DD/MM/YYYY</SelectItem>
                                <SelectItem value="mmddyyyy">MM/DD/YYYY</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
                <Button className="px-8">Save Settings</Button>
                <Button className="bg-red-500 px-8">Cancel</Button>
            </div>
        </div>
    );
}
