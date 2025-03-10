import React, { useState } from "react";
import { format, startOfWeek, addDays, isSameDay, startOfDay } from "date-fns";
import { Button } from "@/components/ui/button";

const Calendar = () => {
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const startWeek = startOfWeek(currentWeek, { weekStartsOn: 0 });

    const events = [
        { date: new Date(2025, 2, 24, 8, 0), title: "John - Assigned to Emily", color: "bg-blue-100", border: "border-l-blue-500", text: "text-blue-500" },
        { date: new Date(2025, 2, 24, 9, 0), title: "John - Assigned to Emily", color: "bg-blue-100", border: "border-l-blue-500", text: "text-blue-500" },
        { date: new Date(2025, 2, 25, 9, 0), title: "John - Assigned to Emily", color: "bg-green-100", border: "border-l-green-500", text: "text-green-500" },
        { date: new Date(2025, 2, 26, 9, 0), title: "John - Assigned to Emily", color: "bg-purple-100", border: "border-l-purple-500", text: "text-purple-500" },
        { date: new Date(2025, 2, 26, 10, 0), title: "John - Assigned to Emily", color: "bg-blue-100", border: "border-l-blue-500", text: "text-blue-500" },
        { date: new Date(2025, 2, 27, 12, 0), title: "John - Assigned to Emily", color: "bg-yellow-100", border: "border-l-yellow-500", text: "text-yellow-500" },
        { date: new Date(2025, 2, 27, 14, 0), title: "John - Assigned to Emily", color: "bg-yellow-100", border: "border-l-yellow-500", text: "text-yellow-500" },
    ];

    const prevWeek = () => {
        setCurrentWeek(addDays(currentWeek, -7));
    };

    const nextWeek = () => {
        setCurrentWeek(addDays(currentWeek, 7));
    };

    return (
        <div className="pt-12">
            <div className="flex justify-between items-center mb-4">
                <Button onClick={prevWeek}>Previous</Button>
                <h2 className="text-xl font-bold">{format(currentWeek, "MMMM yyyy")}</h2>
                <Button onClick={nextWeek}>Next</Button>
            </div>
            <div className="grid grid-cols-8 border divide-x text-center">
                <div className="p-2 font-bold">Time</div>
                {[...Array(7)].map((_, i) => {
                    const day = addDays(startWeek, i);
                    return (
                        <div key={i} className="p-2 font-bold">{format(day, "E dd")}</div>
                    );
                })}
            </div>
            <div className="grid grid-cols-8 border divide-x">
                {[...Array(10)].map((_, hourIndex) => (
                    <React.Fragment key={hourIndex}>
                        <div className="p-2 border-r text-center">{8 + hourIndex}:00 AM</div>
                        {[...Array(7)].map((_, dayIndex) => {
                            const day = addDays(startWeek, dayIndex);
                            const event = events.find(
                                (event) =>
                                    isSameDay(event.date, day) &&
                                    event.date.getHours() === 8 + hourIndex
                            );
                            return (
                                <div key={dayIndex} className="p-2 h-20 border relative">
                                    {event && (
                                        <div
                                            className={`absolute inset-0 flex items-center justify-center ${event.text} p-2 rounded ${event.color} border border-4 ${event.border}`}
                                        >
                                            {event.title}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Calendar;