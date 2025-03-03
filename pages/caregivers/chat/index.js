import { Button } from "@/components/ui/button";

export default function index() {
  return (
    <div className="flex flex-col w-full font-satoshi">
      <h2 className="font-semibold text-4xl mb-6">Chat with John Doe</h2>
      <div className="bg-[#f6f2fc] p-6 rounded-xl">
        <div className="">

        </div>
        <div className="flex gap-5 px-8">
          <input className="w-full px-4 rounded shadow" type="text" placeholder="Type your message here"></input>
          <Button
            variant="outline"
            className="py-5 px-14 bg-[#a37ee6] text-white shadow-xl"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
