import Action from "@/sections/zone/action";
import Filter from "@/sections/zone/filter";
import List from "@/sections/zone/list";

export default function index() {
    return (
        <div className="flex flex-col w-full font-satoshi">
            <Action />
            <Filter />
            <List />
        </div>
    );
}
