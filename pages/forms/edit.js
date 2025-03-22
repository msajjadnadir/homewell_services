import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, CheckSquare, Radio, Calendar, File, PenTool } from "lucide-react";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function Index() {
    const router = useRouter();
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
            <div className="flex flex-col md:flex-row gap-6 justify-between">
                <span className="text-3xl font-bold">Edit Form</span>
                <div className="flex flex-row gap-3">
                    <Button variant="default" className="bg-sky-950 px-10 py-5" onClick={() => setOpen(true)}>
                        Add Field
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-2 md:w-[60%]">
                <label>Form Title</label>
                <Input placeholder="Enter Form Title" />
            </div>
            <div className="flex flex-col gap-2 md:w-[60%]">
                <label>Form Description</label>
                <Textarea placeholder="Enter Form Description" />
            </div>
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 text-center rounded-2xl cursor-pointer hover:bg-gray-50 transition md:w-[60%]">
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className="text-gray-600">Drop the files here ...</p>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <img src="/assets/images/upload_files_icon.png" className="w-6 h-6 mb-6" />
                        <p className="font-medium">Choose a file or drag & drop it here</p>
                        <p className="text-gray-400">JPEG, PNG, PDF, and MP4 formats, up to 50MB</p>
                    </div>
                )}
            </div>
            <Button variant="default" className="px-10 py-5 w-36" onClick={() => router.push(paths.dashboard.forms.publish_form)}>Save Form</Button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Select Field Type</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.dropdown)}>
                                <ChevronDown className="w-6 h-6"/> Dropdown
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.checkbox)}>
                                <CheckSquare className="w-6 h-6"/> Checkbox
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.radio)}>
                                <Radio className="w-6 h-6"/> Radio Button
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.datepicker)}>
                                <Calendar className="w-6 h-6"/> Date Picker
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.file)}>
                                <File className="w-6 h-6"/> File Upload
                            </Button>
                            <Button variant="outline" className="flex flex-col items-center py-8" onClick={() => router.push(paths.dashboard.forms.esign)}>
                                <PenTool className="w-6 h-6"/> E-Sign
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