import { Icon } from "@iconify-icon/react";
import { useHeaderData } from "./config-header";

export default function Header() {
  const headerData = useHeaderData();

  return (
    <div className="w-full flex flex-row justify-between items-start px-10 h-20 border-b border-[#E9EBF0]">
      <div className="flex flex-col gap-1">
        <span className="font-satoshi text-2xl font-medium leading-[32.4px] tracking-[0.016em] text-primaryText-DEFAULT">
          Homewell Services
        </span>
        <span className="font-satoshi text-sm font-normal leading-[18.9px] tracking-[-0.02em] text-[#9AA4B3]">
          Dec 19, 2024
        </span>
      </div>
      <div className="flex flex-row items-center gap-8">
        {headerData.map((item, index) => (
          <div key={"header" + index} className="flex flex-row items-end gap-1">
            <span className="font-satoshi text-base font-medium leading-5 tracking-[-0.02em] text-gray-150">
              {item.title}
            </span>
            <Icon icon={"uiw:down"} className="text-gray-150" />
          </div>
        ))}
        <div className="flex w-10 h-10 items-center justify-center">
          <Icon icon={"iconoir:bell-notification"} className="text-[#FE5C73]" />
        </div>
        <div className="flex flex-row items-end gap-1">
          <span className="font-satoshi text-base font-medium leading-5 tracking-[-0.02em] text-gray-150">
            Admin
          </span>
          <Icon icon={"uiw:down"} className="text-gray-150" />
        </div>
      </div>
    </div>
  );
}
