import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths"

export default function evv_compliance_report() {
    const router = useRouter();

    return (
        <div className="flex flex-col font-satoshi  w-full">
            <p className="font-semibold text-4xl">EVV Compliance Report</p>
            <div className="flex flex-col mt-10 space-y-4 text-2xl">
                <p className="font-semibold text-2xl">Caregiver Details</p>
                <p className="font-medium">Caregiver: <span className="font-light ms-4">John Doe</span></p>
                <p className="font-medium">Shift Date: <span className="font-light ms-4">10/02/2025</span></p>
                <p className="font-medium">Shift Time: <span className="font-light ms-4">10:00 AM</span></p>
            </div>


            <p className="font-semibold text-2xl mt-12">Check-in Attempt Logs</p>
            <div className="flex flex-col mt-6 space-y-4 text-2xl">
                <p className="font-medium">GPS Check-in: <span className="font-light ms-4 text-red-500">Location Mismatch</span></p>
                <p className="font-medium">Telephony Check-in: <span className="font-light ms-4">Used Phone Verification</span></p>
                <p className="font-medium">Biometric Check-in: <span className="font-light ms-4 text-red-500">No Match Found</span></p>
                <p className="font-medium">Reason: <span className="font-light ms-4">Poor Internet Connection!</span></p>
            </div>

            <div className="flex mt-24 items-center justify-center gap-6">
                <Button className="py-5 px-10 bg-success-500 text-white">
                    Approved Check-in
                </Button>
                <Button className="py-5 px-10 bg-warning-500 text-white">
                    Request Verification
                </Button>
                <Button
                    className="py-5 px-10 bg-red-500 text-white"
                    onClick={() => router.push(paths.dashboard.schedules.overview_review)}
                >
                    Flag for Audit
                </Button>
            </div>
        </div>
    )
}