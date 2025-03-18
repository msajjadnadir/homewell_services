import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileIcon } from "lucide-react";

const InvoicingGuide = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "creating", label: "Creating An Invoice" },
    { id: "managing", label: "Managing Invoice" },
    { id: "settings", label: "Settings" }
  ];

  return (
    <div className="font-satoshi">
      <h1 className="text-5xl font-bold mb-14">Invoicing Module Guide</h1>
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 ${activeTab === tab.id ? "border-b-2 border-purple-500 text-purple-600" : "text-gray-600"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p>
          {activeTab === "overview" && "Learn how to navigate the Invoicing Module."}
          {activeTab === "creating" && "Steps to create a new invoice."}
          {activeTab === "managing" && "How to manage and track invoices."}
          {activeTab === "settings" && "Customize invoicing settings."}
        </p>
      </div>
      <Button className="bg-gray-200 hover:bg-gray-300 text-black flex items-center px-4 py-2 rounded">
        <span className="mr-2"><FileIcon /></span> Download Pdf Guide
      </Button>
    </div>
  );
};

export default InvoicingGuide;
