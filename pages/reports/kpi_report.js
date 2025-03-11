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
    <div className="flex flex-col space-y-8 w-full font-satoshi">
      <span className="text-5xl font-bold">KPI Report</span>

      <div className="flex flex-row items-center justify-between">
        <div className="grid grid-cols-6 gap-6">
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
        <div className="flex flex-row gap-4">
          <Button variant="default" className="bg-sky-900 px-10">
            Export Excel
          </Button>
          <Button variant="default" className="bg-sky-900 px-10">
            Download PDF
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <Button variant="default" className="bg-gray-500 px-10">
          Currebt Year by Month
        </Button>
        <Button variant="default" className="bg-warning-500 px-10">
          Yearly Report
        </Button>
      </div>
      <div className="text-center text-red-500 bg-red-100 font-semibold p-5">
        No Records Found
      </div>
    </div>
  );
}
