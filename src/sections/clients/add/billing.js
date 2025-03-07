import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

export default function Notes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full font-satoshi">
      <div className="flex flex-row mt-14 gap-3 items-center justify-end">
        <Button
          variant="default"
          size="lg"
          className="text-white shadow-[0px_6.55px_9.83px_-3.28px_#0A0D120D,0px_19.66px_26.22px_-6.55px_#0A0D121A] bg-primary hover:opacity-90"
          onClick={() => setIsModalOpen(true)}
        >
          Manage Payment Methods
        </Button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-xl shadow-2xl w-[600px] md:w-[700px] lg:w-[800px] max-w-full">
            <h2 className="text-3xl font-bold text-gray-900">Manage Payments</h2>

            <div className="flex flex-col gap-4 mt-6">
              <span className="text-sm">Payment Method Type</span>
              <div className="flex gap-6">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="billing" value="yes" className="w-5 h-5 text-purple-600 focus:ring-purple-500" />
                  <span className="text-gray-700">Credit/Debit Card</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="billing" value="no" className="w-5 h-5 text-purple-600 focus:ring-purple-500" defaultChecked />
                  <span className="text-gray-700">Bank Account</span>
                </label>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700">First Name</label>
              <input type="text" className="w-full mt-2 p-3 border border-gray-300 rounded-md" placeholder="First Name" />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Last Name</label>
              <input type="text" className="w-full mt-2 p-3 border border-gray-300 rounded-md" placeholder="Last Name" />
            </div>

            <div className="mt-6">
              <label className="block text-gray-700">Card</label>
              <div className="flex gap-3 mt-2">
                <Input placeholder="0000000000000000" />
                <Input placeholder="CVV" />
                <Input placeholder="MM" />
                <Input placeholder="YY" />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600" onClick={() => setIsModalOpen(false)}>
                Save Payment Method
              </Button>
            </div>
          </div>
        </div>
      )}


      <div className="flex flex-col gap-[16px]">
        <span>Enable Billing</span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">No</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px] mt-6">
        <span>Billing Type</span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Private</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">Claims</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px] mt-12">
        <span>Invoice Type</span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Hourly Billing</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">Task Based Biiling</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <label htmlFor="no">Fixed Amount</label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-[16px] mt-6">
        <span>Invoice Billing Rate</span>
        <RadioGroup className="flex flex-row gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <label htmlFor="yes">Default Rate</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" checked />
            <label htmlFor="no">Custom Rate</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
