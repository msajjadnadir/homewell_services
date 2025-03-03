import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    name: "George R.R Martin",
    documentName: "Updated SOS UHS",
    expirationDate: "01-02-25",
  },
  {
    name: "Jodi Picoult",
    documentName: "Updated SOS UHS",
    expirationDate: "01-02-25",
  },
  {
    name: "James Clear",
    documentName: "Updated SOS UHS",
    expirationDate: "01-02-25",
  },
];

export default function DocumentExpirationSection() {
  return (
    <div className="mt-[60px] flex flex-col w-full">
      <span className="font-satoshi font-bold text-[40px] leading-[54px] tracking-[0.016em] text-primaryText-DEFAULT">
        Document Expiration
      </span>
      <div className="grid grid-cols-8 gap-5 mt-[30px]">
        <div className="col-span-3 flex flex-col">
          <div className="grid grid-cols-5 gap-4">
            <Input
              className="col-span-2  border border-gray-300 rounded-[6px] h-[45px]"
              placeholder="Search Here..."
            />
            <Select className="">
              <SelectTrigger className="col-span-1 border border-gray-300 rounded-[6px] h-[45px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">0</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select className="">
              <SelectTrigger className="col-span-2 border border-gray-300 rounded-[6px] h-[45px]">
                <SelectValue placeholder="Month" />
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
          <div className="flex flex-row gap-4 mt-5">
            <Button className="bg-success-500 font-satoshi font-medium text-[12.71px] leading-[15.25px] tracking-[0px] text-center w-24 h-9">
              Search
            </Button>
            <Button className="bg-warning-500 font-satoshi font-medium text-[12.71px] leading-[15.25px] tracking-[0px] text-center w-24 h-9">
              Clear
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8">
            <div className="flex flex-row justify-between items-start px-[14px] pt-4 pb-3 rounded-[8px] bg-gradient-to-br from-[#9C6CFE] to-[#7A41DC] from-[26.04%] to-[87%] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]">
              <Icon icon="ph:user" className="text-white w-8 h-8 text-[32px]" />
              <div className="flex flex-col items-end">
                <span className="font-satoshi font-medium text-[10.23px] leading-[13.81px] tracking-[0px] text-accent-shades-500">
                  Expiring This Month
                </span>
                <span className="font-satoshi font-black text-lg leading-[24.16px] tracking-[0.64px] text-white mt-3">
                  170
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-start px-[14px] pt-4 pb-3 rounded-[8px] bg-gradient-to-br from-[#9C6CFE] to-[#7A41DC] from-[26.04%] to-[87%] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]  opacity-50">
              <Icon icon="ph:user" className="text-white w-8 h-8 text-[32px]" />
              <div className="flex flex-col items-end">
                <span className="font-satoshi font-medium text-[10.23px] leading-[13.81px] tracking-[0px] text-accent-shades-500">
                  Expiring Next Month
                </span>
                <span className="font-satoshi font-black text-lg leading-[24.16px] tracking-[0.64px] text-white mt-3">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 flex w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
                <TableHead className="font-satoshi font-bold text-[12.67px] leading-[17.11px] tracking-[0px] text-secondaryShades-900">
                  Name
                </TableHead>
                <TableHead className="font-satoshi font-bold text-[12.67px] leading-[17.11px] tracking-[0px] text-secondaryShades-900">
                  Document Name
                </TableHead>
                <TableHead className="font-satoshi font-bold text-[12.67px] leading-[17.11px] tracking-[0px] text-secondaryShades-900">
                  Expiration Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice, index) => (
                <TableRow key={"invoice" + index}>
                  <TableCell className="font-satoshi font-medium text-[12.67px] leading-[17.11px] tracking-[0px] text-gray-900">
                    {invoice.name}
                  </TableCell>
                  <TableCell className="font-satoshi font-medium text-[12.67px] leading-[17.11px] tracking-[0px] text-gray-900">
                    {invoice.documentName}
                  </TableCell>
                  <TableCell className="font-satoshi font-medium text-[12.67px] leading-[17.11px] tracking-[0px] text-gray-900">
                    {invoice.expirationDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
