import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths"

export default function audit_report() {
    const router = useRouter();

    return (
        <div className="flex flex-col font-satoshi space-y-10">
            <p className="font-semibold text-4xl">EVV Audit Report</p>
            <div className="flex flex-col mt-10 space-y-4">
                <p className="font-semibold text-2xl">Caregiver and Client Information</p>
                <p className="font-medium">Caregiver: <span className="font-light ms-4">John Doe</span></p>
                <p className="font-medium">Client: <span className="font-light ms-4">John Wick</span></p>
                <p className="font-medium">Shift Date: <span className="font-light ms-4">10/02/2025</span></p>
                <p className="font-medium">Shift Time: <span className="font-light ms-4">9:00 AM - 12:00 AM</span></p>
            </div>

            <p className="font-semibold text-2xl">EVV Compliance Data</p>
            <div className="flex flex-col mt-10 space-y-4">
                <p className="font-medium">Check-in: <span className="font-light ms-4">9:02 AM (Expected: 9:00)</span></p>
                <p className="font-medium">Check-out: <span className="font-light ms-4">10:00 AM (Expected: 10:00)</span></p>
                <p className="font-medium">Verification Method: <span className="font-light ms-4">GPS - Telephony - Biometric</span></p>
                <p className="font-medium">Compliance Status: <span className="font-light ms-4 text-red-500">No Complaint</span></p>
            </div>


            <p className="font-semibold text-2xl">Issue Breakdown</p>
            <div className="flex flex-col mt-10 space-y-4">
                <p className="font-medium">Reason for EVV Faliure: <span className="font-light ms-4">GPS Mismatch, Biometric verification failed</span></p>
                <p className="font-medium">Admin Notes: <span className="font-light ms-4">Caregiver reported poor internet connection at client's location</span></p>
            </div>

            <p className="font-semibold text-2xl">Compliance Actions Taken</p>
            <div className="flex flex-col mt-10 space-y-4">
                <p className="font-medium">Resolution: <span className="font-light ms-4">Manual review pending</span></p>
                <p className="font-medium">Handeled by: <span className="font-light ms-4">Sarah Davidson</span></p>
                <p className="font-medium">Flagged for further audit: <span className="font-light ms-4">Yes</span></p>
            </div>

            <div className="flex">
                <div className="flex flex-row items-center gap-3">
                    <Button className="py-5 px-10 bg-sky-950 text-white">
                        Export Audit Report
                    </Button>
                </div>
            </div>
        </div>
    )
}