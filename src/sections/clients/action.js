import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { paths } from "@/routes/paths";

export default function CaregiversAction() {
  const router = useRouter();

  return (
    <div className="flex flex-row w-full justify-between items-center select-none">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[1.6%] text-primaryText">
        Clients
      </span>
      <div className="flex flex-row gap-3 items-center">
        <Button
          variant="default"
          size="lg"
          className="text-white bg-gradient-to-br from-[#9C6CFE] to-[#7A41DC] hover:opacity-90 shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A]"
        >
          Watch Tutorial
        </Button>
        <Button
          variant="default"
          size="lg"
          className="text-white shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] bg-primary hover:opacity-90"
          onClick={() => router.push(paths.dashboard.clients.add)}
        >
          Add Clients
        </Button>
        <Button
          variant="default"
          size="lg"
          className="text-white shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] bg-secondaryShades-base hover:opacity-90 hover:bg-secondaryShades-base/90"
        >
          Export as Excel
        </Button>
      </div>
    </div>
  );
}
