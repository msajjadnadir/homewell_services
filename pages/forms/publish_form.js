import { Button } from '@/components/ui/button'
import { Group, User } from 'lucide-react'
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function publish_form() {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center w-full p-12 font-satoshi'>
            <span className='text-green-500 text-xl mt-10'>Publish Form</span>
            <span className='font-bold text-3xl mt-4'>Who would you liket to send the form</span>
            <div className="flex flex-row gap-4 mt-10 mb-20">
                <div className='flex flex-col items-center justify-center border border-gray-300 p-16 rounded-lg text-gray-500'>
                    <Group className='mb-4' />
                    Select Group
                </div>
                <div className='flex flex-col items-center justify-center border border-purple-300 p-16 rounded-lg text-purple-500'>
                    <User className='mb-4' />
                    Select Users
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <Button className="text-lg px-16 py-5 mt-8" onClick={() => router.push(paths.dashboard.forms.users)}>Next</Button>
                <Button className="bg-red-500 text-lg px-16 py-5 mt-8">Cancel</Button>
            </div>
        </div>
    )
}
