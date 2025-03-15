import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, CheckSquare, Radio, Calendar, File, PenTool, Edit } from "lucide-react";
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function DragDropForm() {
    const router = useRouter();
    const [required, setRequired] = useState(false);
    const [open, setOpen] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] }
    });

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-row gap-6 justify-between">
                <span className="text-3xl font-bold">Create New Form</span>
                <div className="flex flex-row gap-3">
                    <Button variant="default" className="bg-sky-950 px-10 py-5" onClick={() => setOpen(true)}>
                        Add Field
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-[60%]">
                <label>Enter Label</label>
                <Input placeholder="Enter Label" />
            </div>

            <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg w-[60%] mt-10">
                <h2 className="text-center font-medium mb-4">Drag and drop form fields here</h2>
                <Card className="p-4">
                    <div className="flex flex-col justify-center text-center mx-24 gap-2">
                        <span className="font-medium">Signature</span>
                        <div className="border-dashed border-2 px-12 py-16 rounded-lg"></div>
                    </div>
                    <div className="mt-4 p-2 border rounded-md bg-gray-50 p-6">
                        <div className="flex items-center gap-2">
                            <Checkbox checked={required} onCheckedChange={setRequired} />
                            <span>Required</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <Checkbox checked={!required} onCheckedChange={() => setRequired(false)} />
                            <span>Optional</span>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="flex flex-row gap-4">
                <Button variant="default" className="px-10 py-5">Save Form</Button>
                <Button variant="default" className="bg-red-500 px-10 py-5">Cancel</Button>
            </div>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Select Field Type</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.dropdown)}>
                                <ChevronDown className="w-6 h-6" /> Dropdown
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.checkbox)}>
                                <CheckSquare className="w-6 h-6" /> Checkbox
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.radio)}>
                                <Radio className="w-6 h-6" /> Radio Button
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.datepicker)}>
                                <Calendar className="w-6 h-6" /> Date Picker
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.file)}>
                                <File className="w-6 h-6" /> File Upload
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.esign)}>
                                <PenTool className="w-6 h-6" /> E-Sign
                            </Button>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button variant="default" onClick={() => setOpen(false)}>Close</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}