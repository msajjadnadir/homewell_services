import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { paths } from "@/routes/paths";

export default function Index() {
    const router = useRouter();

    return (
        <div className="flex flex-col w-full select-none font-satoshi">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-4xl font-semibold">Snapshot</p>
                    <p className="text-gray-400 mt-6">
                        Please review our help document by clicking on the following link Payroll Snapshot.
                    </p>
                </div>
                <div className="flex flex-col">
                    <Button
                        variant="default"
                        size="lg"
                        className="text-white shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] bg-primary hover:opacity-90"
                        onClick={() => router.push(paths.dashboard.snapshot.add)}
                    >
                        Add Snapshot
                    </Button>
                </div>
            </div>

            {/* Snapshot text moved below */}
            <div className="flex flex-row bg-red-100 text-red-500 items-center text-sm font-medium justify-center mt-8 p-5">
                No snapshot created. Please click Add Snapshot button to create your first snapshot.
            </div>
        </div>
    );
}
