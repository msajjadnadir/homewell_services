import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Calendar, Search, User, Mail, Phone, Ticket, CheckCircle, AlertCircle } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AdvancedTicketSystem() {
  const [startDate, setStartDate] = useState(new Date());
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Open",
    assignedTo: "",
    dueDate: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTicket({ ...newTicket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTickets([...tickets, { ...newTicket, id: tickets.length + 1 }]);
    setNewTicket({
      title: "",
      description: "",
      priority: "Medium",
      status: "Open",
      assignedTo: "",
      dueDate: new Date(),
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Advanced Ticket System</h1>

      {/* Create New Ticket Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Ticket</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-4">
            <span className="font-medium text-gray-900">Title</span>
            <Input
              name="title"
              value={newTicket.title}
              onChange={handleInputChange}
              placeholder="Enter ticket title"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-medium text-gray-900">Description</span>
            <Input
              name="description"
              value={newTicket.description}
              onChange={handleInputChange}
              placeholder="Enter ticket description"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-gray-900">Priority</span>
              <select
                name="priority"
                value={newTicket.priority}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-gray-900">Status</span>
              <select
                name="status"
                value={newTicket.status}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-gray-900">Assigned To</span>
              <Input
                name="assignedTo"
                value={newTicket.assignedTo}
                onChange={handleInputChange}
                placeholder="Enter assignee name"
              />
            </div>
            <div className="flex flex-col gap-4 relative">
              <span className="font-medium text-gray-900">Due Date</span>
              <div className="relative w-full">
                <DatePicker
                  selected={newTicket.dueDate}
                  onChange={(date) => setNewTicket({ ...newTicket, dueDate: date })}
                  dateFormat="MM/dd/yyyy"
                  className="w-full border border-gray-300 rounded-md p-2 pl-10"
                  placeholderText="Select date"
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Ticket
          </button>
        </form>
      </div>

      {/* Tickets List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Tickets</h2>
        <div className="grid grid-cols-1 gap-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{ticket.title}</h3>
                  <p className="text-sm text-gray-600">{ticket.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                    ticket.priority === "High" ? "bg-red-100 text-red-600" :
                    ticket.priority === "Medium" ? "bg-yellow-100 text-yellow-600" :
                    "bg-green-100 text-green-600"
                  }`}>
                    {ticket.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                    ticket.status === "Open" ? "bg-blue-100 text-blue-600" :
                    ticket.status === "In Progress" ? "bg-orange-100 text-orange-600" :
                    "bg-green-100 text-green-600"
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>Assigned To: {ticket.assignedTo}</p>
                <p>Due Date: {ticket.dueDate.toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}