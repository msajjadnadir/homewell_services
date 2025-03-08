import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths"
import Link from "next/link";

export default function shift_details() {
    const router = useRouter();

    return (
        <div className="flex flex-col font-satoshi space-y-12 w-full">
            <p className="font-semibold text-4xl">Shift Details</p>
            <div className="flex flex-col mt-10 space-y-6 text-2xl">
                <p className="font-medium">Client: <span className="font-light ms-4">John Doe</span></p>
                <p className="font-medium">Assign Caregiver:
                    <span className="font-light ms-4">
                        Mike Brown
                        <Link href={paths.dashboard.schedules.evv_compliance_report} legacyBehavior>
                            <a className="text-blue-500"> (View Details)</a>
                        </Link>
                    </span>
                </p>
                <p className="font-medium">Status: <span className="font-light ms-4 text-warning-500">Upcoming</span></p>
                <p className="font-medium">Shift Date: <span className="font-light ms-4">10/02/2025</span></p>
                <p className="font-medium">Time: <span className="font-light ms-4">10:00 AM</span></p>
                <p className="font-medium">Duration: <span className="font-light ms-4">3 hours</span></p>
            </div>
            <div className="flex flex-row items-center justify-end gap-3">
                <Button className="py-5 px-10 bg-success-500 text-white">
                    Approve
                </Button>
                <Button
                    className="py-5 px-10 bg-red-500 text-white"
                    onClick={() => router.push(paths.dashboard.evv_compliance.audit_report)}
                >
                    Reject
                </Button>
            </div>
        </div>
    )
}