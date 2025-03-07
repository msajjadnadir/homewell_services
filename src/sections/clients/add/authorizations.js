import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Notes() {
  return (
    <div className="flex flex-col w-full font-satoshi">
      <div className="flex flex-col mt-[60px] gap-5 items-start justify-start w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-bold text-xl text-gray-800">
                IDs
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Payor
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Skill
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Activity
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Total Authorized Hours
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Status
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
