import { Button } from '@/components/ui/button'
import { Check, CheckCircle } from 'lucide-react'
import React from 'react'
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function successful() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center w-full p-24 font-satoshi'>
      <CheckCircle size={'72'} className='text-green-500' />
      <span className='text-green-500 text-2xl mt-10'>Your form was published successfully.</span>
      <Button className="text-lg px-16 py-5 mt-36" onClick={() => router.push(paths.dashboard.root)}>Confirm</Button>
    </div>
  )
}
