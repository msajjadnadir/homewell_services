import { useRouter } from "next/navigation";

export default function Action() {
  const router = useRouter();

  return (
    <div className="flex flex-row w-full justify-between items-center select-none">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[1.6%] text-primaryText">
        Map View
      </span>
    </div>
  );
}
