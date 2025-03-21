import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function kpi_report() {
  return (
    <div className="flex flex-col gap-4 w-full font-satoshi">
      <span className="xl:text-5xl text-3xl font-bold">KPI Report</span>
      <div className="flex xl:flex-row flex-col justify-between">
        <div className="flex xl:flex-row flex-col gap-6 w-[48%
        ]">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option">Option</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="default" className="bg-success-500 px-10">
            Search
          </Button>
        </div>
        <div className="flex xl:flex-row flex-col gap-4">
          <Button variant="default" className="w-full bg-sky-900 px-10">
            Export Excel
          </Button>
          <Button variant="default" className="w-full bg-sky-900 px-10">
            Download PDF
          </Button>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col gap-4">
        <Button variant="default" className="w-full bg-gray-500 px-10">
          Current Year by Month
        </Button>
        <Button variant="default" className="w-full bg-warning-500 px-10">
          Yearly Report
        </Button>
      </div>
      <div className="text-center text-red-500 bg-red-100 font-semibold p-5">
        No Records Found
      </div>
    </div>
  );
}
