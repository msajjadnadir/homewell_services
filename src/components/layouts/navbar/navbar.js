import { useNavData, NavIcon } from "./config-navigation";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const navData = useNavData();
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen w-[280px] p-6 overflow-y-auto border border-[#00000010]">
      <div className="flex flex-row gap-3 w-full items-center" id="title">
        <img src="/assets/icons/logo.png" alt="logo" className="w-11 h-11" />
        <span className="font-satoshi text-sm font-bold leading-5">
          Homewell Services
        </span>
      </div>
      <div className="flex flex-col gap-2 mt-8">
        {navData.map((item, index) => (
          <div
            key={"navbar" + index}
            className="px-3 py-[10px] gap-4 flex flex-row items-center hover:cursor-pointer select-none"
            onClick={() => router.push(item.path)}
          >
            <img
              src={`/assets/icons/navbar/${item.icon}.svg`}
              className="w-5 h-5 fill-red-800"
              alt={item.icon}
            />
            <span className="font-['Inter'] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-gray-150">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <div className="px-3 py-[10px] gap-4 flex flex-row items-center hover:cursor-pointer select-none mt-10">
        <Icon
          icon={"streamline:logout-1"}
          color="#D55F5A"
          className="text-[#D55F5A]"
        />
        <span className="font-inter text-[14px] font-semibold leading-[20px] tracking-[-0.02em] text-[#D55F5A]">
          Logout Account
        </span>
      </div>
    </div>
  );
}
