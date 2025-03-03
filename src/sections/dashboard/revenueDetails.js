"use client";
import { Icon } from "@iconify-icon/react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 3.8 },
  { month: "February", desktop: 4.1 },
  { month: "March", desktop: 3.7 },
  { month: "April", desktop: 3.4 },
  { month: "May", desktop: 3.7 },
  { month: "June", desktop: 3.8 },
  { month: "July", desktop: 4.0 },
  { month: "August", desktop: 4.1 },
  { month: "September", desktop: 3.9 },
  { month: "October", desktop: 3.6 },
  { month: "November", desktop: 4.0 },
  { month: "December", desktop: 4.2 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export default function RevenueDetailsSection() {
  return (
    <div className="col-span-2 flex flex-col">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[0.016em] text-primaryText-DEFAULT">
        Revenue Details
      </span>
      <div className="grid grid-cols-3 gap-4 mt-[30px]">
        <div className="flex flex-row justify-between items-start px-[14px] pt-4 pb-3 rounded-[8px] bg-[#1F3E5A] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]">
          <Icon icon="ph:user" className="text-white w-8 h-8 text-[32px]" />
          <div className="flex flex-col items-end">
            <span className="font-satoshi font-medium text-[10px] leading-[12.1px] tracking-[0%] text-accent-shades-500">
              Total Claim
            </span>
            <span className="font-inter font-bold text-[18px] leading-[21.94px] tracking-[0%] text-white mt-3">
              $17,004.05
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start px-[14px] pt-4 pb-3 rounded-[8px] bg-[#A37EE6] bg-opacity-50 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]">
          <Icon icon="ph:user" className="text-white w-8 h-8 text-[32px]" />
          <div className="flex flex-col items-end">
            <span className="font-satoshi font-medium text-[10.23px] leading-[13.81px] tracking-[0px] text-accent-shades-500">
              Received Amount
            </span>
            <span className="font-inter font-bold text-[18px] leading-[21.94px] tracking-[0%] text-white mt-3">
              $17,004.05
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-start px-[14px] pt-4 pb-3 rounded-[8px] bg-warning-300 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]">
          <Icon icon="ph:user" className="text-white w-8 h-8 text-[32px]" />
          <div className="flex flex-col items-end">
            <span className="font-satoshi font-medium text-[10.23px] leading-[13.81px] tracking-[0px] text-accent-shades-500">
              Receivable Amount
            </span>
            <span className="font-inter font-bold text-[18px] leading-[21.94px] tracking-[0%] text-white mt-3">
              $17,004.05
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-7 mt-5 border border-accent-shades-500 rounded-[10px]">
        <Card className="w-full border-none">
          <CardHeader>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col items-center gap-1 ml-14">
                <span className="font-inter font-black text-[30px] leading-[36.31px] tracking-[0%] text-[#2E2E30] h-[36.31px]">
                  $1250
                </span>
                <span className="font-inter font-bold text-[10px] leading-[12.1px] tracking-[0%] text-[#939393]">
                  Your total revenue so far
                </span>
              </div>
              <Select>
                <SelectTrigger className="w-[138px] border border-gray-300 flex h-[45px]">
                  <SelectValue placeholder="May" />
                </SelectTrigger>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="mt-5 w-full">
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                height={350}
                margin={{
                  left: 0,
                  right: 0,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "12.1px",
                    letterSpacing: "0%",
                    color: "#767676",
                  }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={20}
                  tickCount={5}
                  domain={[1, 5]}
                  ticks={[1, 3, 5]}
                  tickFormatter={(value) => `$${value}K`}
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "12.1px",
                    letterSpacing: "0%",
                    color: "#767676",
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="55%" stopColor="#A37EE6" stopOpacity={1} />
                    <stop offset="95%" stopColor="#B1B9F8" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#fillDesktop)"
                  fillOpacity={0.4}
                  stroke="#B1B9F8"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
