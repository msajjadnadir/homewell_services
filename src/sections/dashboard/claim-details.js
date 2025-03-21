"use client";
import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const claimDetails = [
  {
    title: "Pending",
    value: 0,
  },
  {
    title: "Sent",
    value: 50,
  },
  {
    title: "Received",
    value: 4,
  },
  {
    title: "Rejected",
    value: 2,
  },
];

export default function ClaimDetailsSection() {
  const [state, setState] = useState({
    series: [75],
    options: {
      chart: {
        height: 450,
        type: "radialBar",
      },
      colors: ["#9C6CFE"],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          dataLabels: {
            name: {
              show: false,
              fontSize: "16px",
              color: undefined,
            },
            value: {
              offsetY: 0,
              fontSize: "36px",
              fontWeight: "bold",
              color: undefined,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {},
      labels: ["Median Ratio"],
    },
  });

  return (
    <div className="col-span-2 xl:col-span-1 flex flex-col h-full">
      <span className="font-satoshi font-bold text-2xl md:text-[40px] leading-[54px] tracking-[0.016em] text-primaryText-DEFAULT">
        Claim Details
      </span>
      <div className="flex flex-col gap-3 mt-[30px] justify-between h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {claimDetails.map((detail, index) => (
            <div
              key={detail.title}
              className="flex flex-row justify-between items-start px-[14px] pt-4 pb-3 rounded-[14px] bg-white shadow-[0px_2.56px_3.84px_-1.28px_#0A0D120D,0px_7.67px_10.23px_-2.56px_#0A0D121A]"
            >
              <Icon
                icon="ph:user"
                className="text-primary w-8 h-8 text-[32px]"
              />
              <div className="flex flex-col items-end">
                <span className="font-satoshi font-medium text-[10px] leading-[13.81px] tracking-[0%] text-secondaryShades-base">
                  {detail.title}
                </span>
                <span className="font-satoshi font-black text-[18px] leading-[24.94px] tracking-[0%] text-secondaryShades-900 mt-3">
                  {detail.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 md:p-9 col-span-1 flex flex-col mt-4 bg-accent-shades-500 rounded-[12px] items-center justify-between shadow-[0px_1px_2px_0px_#0A0D120F,0px_1px_3px_0px_#0A0D121A]">
        <div className="flex flex-row justify-end w-full">
          <Select>
            <SelectTrigger className="w-[138px] border border-gray-300 flex">
              <SelectValue placeholder="May" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="january">January</SelectItem>
                <SelectItem value="february">February</SelectItem>
                <SelectItem value="march">March</SelectItem>
                <SelectItem value="april">April</SelectItem>
                <SelectItem value="may">May</SelectItem>
                <SelectItem value="june">June</SelectItem>
                <SelectItem value="july">July</SelectItem>
                <SelectItem value="august">August</SelectItem>
                <SelectItem value="september">September</SelectItem>
                <SelectItem value="october">October</SelectItem>
                <SelectItem value="november">November</SelectItem>
                <SelectItem value="december">December</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          width="100%"
          height="400"
        />
        <div className="flex flex-row justify-center w-full px-4 mt-6 md:mt-12">
          <span className="font-inter font-bold text-[16.97px] leading-[20.54px] tracking-[0%] text-center text-[#404040]">
            Claim Partial
          </span>
        </div>
      </div>
    </div>
  );
}