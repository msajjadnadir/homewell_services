const overViewData = [
  {
    title: "Total Check-ins",
    value: 170,
    icon: "/assets/icons/dashboard/totlaClients.svg",
    color: "text-freen-500",
  },
  {
    title: "Verifiend Check-ins",
    value: 75,
    icon: "/assets/icons/dashboard/totalCaregivers.svg",
    color: "text-green-500", // Green color for verified
  },
  {
    title: "Pending Issues",
    value: 5,
    icon: "/assets/icons/dashboard/pendingRequests.svg",
    color: "text-red-500", // Red color for pending issues
  },
];

export default function Overview() {
  return (
    <div className="mt-11 flex flex-col">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[0.016em] text-primaryText-DEFAULT">
        EVV Compliance
      </span>
      <div className="grid grid-cols-3 gap-9 mt-6">
        <div className="col-span-3 grid grid-cols-3 gap-8">
          {overViewData.map((item, index) => (
            <div
              key={"overview" + index}
              className="flex flex-row justify-between items-start rounded-[14px] backdrop-blur-[8px] shadow-[0px_4px_6px_-2px_#0A0D120D,0px_12px_16px_-4px_#0A0D121A] pl-5 pr-6 pt-6 pb-9"
            >
              <div className="flex flex-col gap-4">
                <span className="font-satoshi font-bold text-base leading-[21.6px] text-secondaryShades-base">
                  {item.title}
                </span>
                <span className={`font-satoshi font-black text-[28px] leading-[37.8px] tracking-[1px] ${item.color}`}>
                  {item.value}
                </span>
              </div>
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[22px] bg-[#A37EE610]">
                <img src={item.icon} alt="clients" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
