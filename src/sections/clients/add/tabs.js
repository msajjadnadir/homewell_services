import { clientsTabData } from "@/constants/clients/const";

export default function Tabs({ tab, setTab }) {
  return (
    <div className="flex flex-row gap-2 mt-6">
      {clientsTabData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row items-center border border-gray-300 rounded-lg px-3 py-3 cursor-pointer select-none ${item === tab
            ? "bg-secondaryShades-base text-white"
            : "bg-white text-accent-shades-900"
            }`}
          onClick={() => setTab(item)}
        >
          <span className="font-inter font-normal">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}
