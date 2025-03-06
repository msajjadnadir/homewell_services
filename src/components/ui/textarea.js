import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }) {
  return (
    <textarea rows={5}
      className={cn(
        "w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",
        className
      )}
      {...props}
    />
  );
}
