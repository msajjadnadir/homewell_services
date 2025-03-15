import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function CaregiversAction() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-row w-full justify-between items-center select-none">
        <span className="font-bold text-5xl">
          Zone List
        </span>
        <div className="flex flex-row gap-3 items-center">
          <Button
            variant="default"
            size="lg"
            className="text-white shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] bg-primary hover:opasupervisor-90"
            onClick={() => router.push(paths.dashboard.zone.add)}
          >
            Add Zone
          </Button>
        </div>
      </div>

      <span className="text-gray-500 mt-6">
        Want to delete a zone? Switch out employees and jobs to a different zone so count is zero. You will then see a delete button in the action column.
      </span>
    </>
  );
}
