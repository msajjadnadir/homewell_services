import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { paths } from "@/routes/paths";

export default function CaregiversAction() {
  const router = useRouter();

  return (
    <div className="flex lg:flex-row flex-col w-full justify-between gap-4 select-none font-satoshi ">
      <span className="xl:text-5xl text-3xl font-bold">
        Document Management
      </span>
      <div className="flex flex-col">
        <Button
          variant="default"
          size="lg"
          onClick={() => router.push(paths.dashboard.document_management.add)}
        >
          Add New Document
        </Button>
      </div>
    </div>
  );
}
