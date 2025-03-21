import React from "react";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EmailBranding() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full font-satoshi gap-12">
      <div className="flex flex-col-2 items-center justify-between">
        <span className="xl:text-5xl text-3xl font-bold">Invoicing Account Setup</span>
        <Button
          variant="default"
          className="px-10 py-6 text-lg"
          onClick={() =>
            router.push(paths.dashboard.invoices.invoicing_module_guide)
          }
        >
          Invoicing Module Guide
        </Button>
      </div>
      <div className="flex flex-col-2 items-center justify-start gap-6">
        <Button
          variant="light"
          className="border px-10 py-6 text-lg"
          onClick={() => router.push(paths.dashboard.invoices.root)}
        >
          Account
        </Button>
        <Button
          variant="default"
          className="border px-10 py-6 text-lg"
          onClick={() => router.push(paths.dashboard.invoices.email_branding)}
        >
          Email Branding
        </Button>
      </div>

      <div className="flex flex-col gap-2 w-[60%]">
        <label className="font-medium">Email Snippet</label>
        <Input placeholder="Email Snippet" />
      </div>

      <div className="flex flex-col gap-2 w-[60%]">
        <label className="font-medium">Invoice Description at Top</label>
        <Input placeholder="Invoice Description" />
        <span className="text-gray-500">
          Default Description: This is your invoice for the details of service
          (date_of_service).
        </span>
      </div>

      <div className="flex flex-col gap-2 w-[60%]">
        <label className="font-medium">Invoice Description at Bottom</label>
        <Input placeholder="Invoice Description" />
        <span className="text-gray-500">
          Default Description: If you have any questions, please reach out to us
          for help.
        </span>
      </div>

      <div className="flex flex-col gap-2 w-[60%]">
        <label className="font-medium">Address</label>
        <Input
          placeholder="Address"
          defaultValue="3214 HOLLAND ROAD STE 204, Virginia Beach, VIRGINIA 23453 VA"
        />
      </div>

      <div className="flex flex-col gap-2 w-[60%]">
        <label className="font-medium">Email</label>
        <Input placeholder="Email" defaultValue="chrislucent@gmail.com" />
      </div>

      <div className="flex flex-col gap-2 w-[60%]">
        <label className="font-medium">Phone</label>
        <Input placeholder="Phone" defaultValue="7571300132" />
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4">
          <Button variant="default" className="px-10">
            Save Changes
          </Button>
          <Button variant="default" className="bg-red-500 px-10">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
