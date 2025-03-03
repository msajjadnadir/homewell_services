import { Input } from "@/components/ui/input";

export default function AddCaregiverGeneral() {
    return (
        <div className="flex flex-col mt-[46px] gap-6">
            <div className="flex flex-col gap-[16px]">
                <label className="font-satoshi font-medium text-[18px] leading-[30px] tracking-[-0.48px] text-gray-900">
                    Enter Email Address
                </label>
                <Input placeholder="example@gmail.com" />
            </div>
        </div>
    );
}
