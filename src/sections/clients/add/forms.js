import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export default function Notes() {
  return (
    <div className="flex flex-col w-full font-satoshi">
      <div className="flex flex-col gap-[16px] mt-12">
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Available Forms</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">Completed Forms</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col mt-[60px] gap-5 items-start justify-start w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-bold text-xl text-gray-800">
                Form Name
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={7} className="text-center text-red-500 bg-red-100 font-semibold p-5">
                No Records Found
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
