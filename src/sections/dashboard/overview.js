import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const overViewData = [
  {
    title: "Total Clients",
    value: 170,
    icon: "./assets/icons/dashboard/totlaClients.svg",
  },
  {
    title: "Total Caregivers",
    value: 75,
    icon: "./assets/icons/dashboard/totalCaregivers.svg",
  },
  {
    title: "Pending Requests",
    value: 5,
    icon: "./assets/icons/dashboard/pendingRequests.svg",
  },
  {
    title: "Upcoming Appointments",
    value: 18,
    icon: "./assets/icons/dashboard/upcomingAppointments.svg",
  },
  {
    title: "Active Shifts",
    value: 32,
    icon: "./assets/icons/dashboard/activeShifts.svg",
  },
  {
    title: "Billing Due",
    value: "$10,000",
    icon: "./assets/icons/dashboard/billingDue.svg",
  },
];

export default function OverviewSection() {
  const [state, setState] = useState({
    series: [75],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        offsetY: -10,
      },
      colors: ["#9C6CFE"],
      plotOptions: {
        radialBar: {
          startAngle: -140,
          endAngle: 140,
          hollow: {
            margin: 15,
            size: "60%",
            image: "./assets/icons/dashboard/chartUser.svg",
            imageWidth: 42,
            imageHeight: 42,
            imageClipped: false,
            imageOffsetY: -20,
          },
          dataLabels: {
            name: {
              show: false,
              fontSize: "16px",
              color: undefined,
            },
            value: {
              offsetY: 30,
              fontSize: "36px",
              fontWeight: "bold",
              color: undefined,
              formatter: function (val) {
                return "350";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#7A41DC"],
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Median Ratio"],
    },
  });

  return (
    <div className="mt-12 flex flex-col w-full">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[0.016em] text-primaryText-DEFAULT">
        Overview
      </span>
      <div className="grid grid-cols-3 gap-9 mt-6">
        <div className="col-span-2 grid grid-cols-2 gap-8">
          {overViewData.map((item, index) => (
            <div
              key={"overview" + index}
              className="flex flex-row justify-between items-start rounded-[14px] backdrop-blur-[8px] shadow-[0px_4px_6px_-2px_#0A0D120D,0px_12px_16px_-4px_#0A0D121A] pl-5 pr-6 pt-6 pb-9"
            >
              <div className="flex flex-col gap-4">
                <span className="font-satoshi font-bold text-base leading-[21.6px] text-secondaryShades-base">
                  {item.title}
                </span>
                <span className="font-satoshi font-black text-[28px] leading-[37.8px] tracking-[1px] text-secondaryShades-900">
                  {item.value}
                </span>
              </div>
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[22px] bg-[#A37EE610]">
                <img src={item.icon} alt="clients" />
              </div>
            </div>
          ))}
        </div>
        <div className="p-9 col-span-1 flex flex-col border shadow-[0px_0px_4.92px_0px_#00000040] rounded-[12px] border-[#0A0D121A] items-center justify-between">
          <span className="font-satoshi font-black text-2xl leading-9 text-[#2E2E30]">
            Visits vs Schedule
          </span>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="radialBar"
          />
          <div className="flex flex-row justify-between w-full px-4">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[10px] h-[10px] rounded-full bg-[#E9EDF0]"></div>
              <span className="font-inter font-bold text-[14.75px] leading-[17.85px] text-[#767676]">
                New
              </span>
              <span className="font-inter font-bold text-[14.75px] leading-[17.85px] text-[#404040]">
                25
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-[10px] h-[10px] rounded-full bg-[#3A5AFE]"></div>
              <span className="font-inter font-bold text-[14.75px] leading-[17.85px] text-[#767676]">
                Visits
              </span>
              <span className="font-inter font-bold text-[14.75px] leading-[17.85px] text-[#404040]">
                100
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
