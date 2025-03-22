import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { paths } from "@/routes/paths";

export default function Action() {
  const router = useRouter();

  return (
    <div className="flex flex-row w-full justify-between items-center select-none">
      <span className="text-4xl font-light">
        Quick Search
      </span>
    </div>
  );
}
