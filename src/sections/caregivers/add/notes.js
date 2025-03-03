import Action from "@/sections/caregivers/add/action";
import List from "@/sections/caregivers/add/list";

export default function AddCaregiverNotes() {
    return (
        <div className="flex flex-col mt-[46px] gap-6">
            <div className="flex flex-col w-full">
                <Action />
                <List />
            </div>
            <div className="flex flex-col w-full bg-gray-200 px-16 py-4 font-medium text-gray-950 mt-48">
                <p>Employee: 307921, User Name: ABCDS307921</p>
                <p>Created by: 1399BRANDIPRYOR (1399BRANDIPRYOR), Created date is: Jan 15, 2025 08:27 PM</p>
                <p>Edited by: LoremIpsum (LOREM1234), Last Edited date is: Feb 11, 2025 01:19 AM</p>
            </div>
        </div>
    );
}
