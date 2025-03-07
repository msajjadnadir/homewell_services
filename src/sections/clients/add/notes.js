import { Button } from "@/components/ui/button";
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
      <div className="flex flex-row mt-14 gap-3 items-center justify-end">
        <Button
          variant="default"
          size="lg"
          className="text-white shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] bg-secondaryShades-base hover:opacity-90 hover:bg-secondaryShades-base/90"
        >
          Export Excel
        </Button>
        <Button
          variant="default"
          size="lg"
          className="text-white shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] bg-primary hover:opacity-90"
          onClick={() => router.push(paths.dashboard.caregivers.add)}
        >
          Add New Note
        </Button>
      </div>
      <div className="flex flex-col mt-[60px] gap-5 items-start justify-start w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-[#DED1F6] rounded-t-[8px]">
              <TableHead className="font-bold text-xl text-gray-800">
                Title
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Note
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Creadted by
              </TableHead>
              <TableHead className="font-bold text-xl text-gray-800">
                Created on
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
