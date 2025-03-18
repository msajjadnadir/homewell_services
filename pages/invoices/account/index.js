import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function index() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full font-satoshi gap-12">
      <div className="flex flex-col-2 items-center justify-between">
        <span className="text-5xl font-bold">Invoicing Account Setup</span>
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
          variant="default"
          className="px-10 py-6 text-lg"
          onClick={() =>
            router.push(paths.dashboard.invoices.root)
          }
        >
          Account
        </Button>
        <Button
          variant="light"
          className="border px-10 py-6 text-lg"
          onClick={() =>
            router.push(paths.dashboard.invoices.email_branding)
          }
        >
          Email Branding
        </Button>
      </div>

      <div className="grid rid-row items-center justify-center text-xl text-gray-500 font-extralight space-y-4">
        <span className="flex flex-row">
          1. Invoicing Account <Check className="text-green-500 ml-2" />
        </span>
        <span className="flex flex-row">
          2. Merchant API Created <Check className="text-green-500 ml-2" />
        </span>
        <span className="flex flex-row">
          3. Current Account Status: Pending Signup
        </span>
      </div>

      <div className="grid rid-row items-center justify-center space-y-4 mt-10">
        <span className="text-green-500 text-center text-xl">
          Your Payment Account Has Been Created. You Cam Start Creating Invoices
          and Accept Payment from your Clients.
        </span>
        <span className="text-green-500 text-center text-xl">
          Please Click Below to Access your Merchant Account.
        </span>
      </div>

      <div className="grid rid-row items-center justify-center space-y-4 mt-10">
        <Button variant="default" className="px-10 py-6 text-lg">
          Access Merchant Account
        </Button>
      </div>
    </div>
  );
}
