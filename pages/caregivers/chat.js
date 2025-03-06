import { Button } from "@/components/ui/button";
import Image from "next/image"; // If using Next.js

export default function Index() {
  return (
    <div className="flex flex-col w-full font-satoshi">
      <h2 className="font-semibold text-4xl mb-6">Chat with John Doe</h2>
      <div className="bg-[#f6f2fc] p-6 rounded-xl">
        <div className="px-8 pb-72">
          <div className="grid justify-end">
            <div className="flex col-2 gap-3 items-center justify-end">
              <div className="flex items">
                <Image
                  src="/assets/images/chat_image.png" // Path to your image
                  alt="User Avatar"
                  width={40} // Adjust as needed
                  height={40} // Adjust as needed
                />
              </div>
              <div className="flex">You</div>
            </div>
            <div className="flex bg-purple-400 text-white py-4 px-12 rounded-br-lg rounded-bl-lg rounded-tl-lg mt-1">
              Hi, I have assigned you a new shift
            </div>
          </div>
          <div className="grid justify-start">
            <div className="flex col-2 gap-3 items-center justify-start">
              <div className="flex">
                <Image
                  src="/assets/images/chat_image.png" // Path to your image
                  alt="User Avatar"
                  width={40} // Adjust as needed
                  height={40} // Adjust as needed
                />
              </div>
              <div className="flex">John Doe</div>
            </div>
            <div className="flex bg-purple-200 py-4 px-12 rounded-br-lg rounded-bl-lg rounded-tr-lg mt-1">
              Okay, I will cover this
            </div>
          </div>
        </div>
        <div className="flex gap-5 px-8">
          <input
            className="w-full px-4 rounded shadow"
            type="text"
            placeholder="Type your message here"
          />
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