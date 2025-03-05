import { tabData } from "@/contants/const";

export default function AddCaregiverTabs({ tab, setTab }) {
  return (
    <div className="flex flex-row gap-3 mt-[28px]">
      {tabData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row border border-gray-300 rounded-[8px] px-5 py-3 cursor-pointer select-none ${
            item === tab
              ? "bg-secondaryShades-base text-white"
              : "bg-white text-accent-shades-900"
          }`}
          onClick={() => setTab(item)}
        >
          <span className="font-inter font-normal text-[16px] leading-[24px] tracking-[-2%]">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}
