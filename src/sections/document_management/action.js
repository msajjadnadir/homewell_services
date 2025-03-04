import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { paths } from "@/routes/paths";

export default function CaregiversAction() {
  const router = useRouter();

  return (
    <div className="flex flex-row w-full justify-between items-center select-none">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[1.6%] text-primaryText">
        Document Management
      </span>
      <div className="flex flex-row gap-3 items-center">
        <Button
          variant="default"
          size="lg"
          className="text-white shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] bg-primary hover:opacity-90"
          onClick={() => router.push(paths.dashboard.document_management.add)}
        >
          Add New Document
        </Button>
      </div>
    </div>
  );
}
