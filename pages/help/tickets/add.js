import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Calendar, File } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function AdvancedTicketSystem() {
  const router = useRouter();
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    category: "Technical Issue",
    priority: "Medium",
    status: "Open",
    assignedTo: "",
    dueDate: new Date(),
    attachment: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket({ ...newTicket, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewTicket({ ...newTicket, attachment: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTickets([...tickets, { ...newTicket, id: tickets.length + 1 }]);
    setNewTicket({
      title: "",
      description: "",
      category: "Technical Issue",
      priority: "Medium",
      status: "Open",
      assignedTo: "",
      dueDate: new Date(),
      attachment: null,
    });
  };

  return (
    <div className="min-h-screen w-full font-satoshi">
      <div className="flex lg:flex-row flex-col gap-4 justify-between">
        <h1 className="xl:text-4xl text-3xl font-semibold mb-6">
          Create a New Ticket
        </h1>
        <Button
          onClick={() => router.push(paths.dashboard.tickets.root)}
          variant="default"
          size="lg"
          className="px-6"
        >
          Ticket List
        </Button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-white p-6 rounded-lg shadow-md xl:w-[60%] w-full"
      >
        <div className="flex flex-col">
          <label className="font-medium text-gray-800">Title</label>
          <Input
            name="title"
            value={newTicket.title}
            onChange={handleInputChange}
            placeholder="Enter ticket title"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-800">Description</label>
          <Textarea
            name="description"
            value={newTicket.description}
            onChange={handleInputChange}
            placeholder="Enter ticket details"
          />
        </div>
        <div className="grid xl:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium text-gray-800">Category</label>
            <select
              name="category"
              value={newTicket.category}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="Technical Issue">Technical Issue</option>
              <option value="Billing">Billing</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-800">Priority</label>
            <select
              name="priority"
              value={newTicket.priority}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium text-gray-800">Status</label>
            <select
              name="status"
              value={newTicket.status}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-gray-800">Assigned To</label>
            <Input
              name="assignedTo"
              value={newTicket.assignedTo}
              onChange={handleInputChange}
              placeholder="Enter assignee name"
            />
          </div>
        </div>
        <div className="flex flex-col relative">
          <label className="font-medium text-gray-800">Due Date</label>
          <div className="relative">
            <DatePicker
              selected={newTicket.dueDate}
              onChange={(date) => setNewTicket({ ...newTicket, dueDate: date })}
              dateFormat="MM/dd/yyyy"
              className="w-full border border-gray-300 rounded-md p-2 pl-10"
              placeholderText="Select date"
            />
            <Calendar
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-gray-800">Attachment</label>
          <div className="flex items-center gap-3 border border-gray-300 rounded-md p-2">
            <File size={20} className="text-gray-600" />
            <input type="file" onChange={handleFileChange} className="w-full" />
          </div>
        </div>
        <div className="flex gap-4">
          <Button type="submit" variant="default" size="lg" className="px-6">
            Create Ticket
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-red-500 text-red-50 px-6"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
