import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

export default function merge_pdf() {
    const router = useRouter();

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'] // sirf PDF accept karega
        }
    });

    return (
        <div className="flex flex-col space-y-8 w-full font-satoshi">
            <div className="flex flex-row gap-6 justify-between">
                <span className="xl:text-5xl text-3xl font-bold">
                    Merge PDF
                </span>
                <div className="flex flex-row gap-3">
                    <Button variant="default" className="px-10 py-5" onClick={() => router.push(paths.dashboard.forms.publish_pdf)}>
                        Publish Now
                    </Button>
                    <Button variant="default" className="bg-gray-500 px-10 py-5" onClick={() => router.push(paths.dashboard.forms.merge_pdf)}>
                        Merge PDF
                    </Button>
                </div>
            </div>
            <div className="flex flex-row border-b pb-5 items-center">
                <img src="/assets/images/upload_files_icon.png" className="w-8 h-8 me-2" />
                <div className="flex flex-col">
                    <span className="font-medium">Upload files</span>
                    <span className="text-gray-500">Select and upload the files of your choice</span>
                </div>
            </div>
            <div
                {...getRootProps()}
                className="border-2 mx-14 border-dashed border-gray-000 p-16 text-center rounded-2xl cursor-pointer hover:bg-gray-50 transition"
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p className="text-gray-600">Drop the files here ...</p>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <img src="/assets/images/upload_files_icon.png" className="w-6 h-6 mb-6" />
                        <p className="font-medium">Choose a file or drag & drop it here</p>
                        <p className="text-gray-400">JPEG, PNG, PDF and MP4 formats, up tp 50MB</p>
                        <div className="flex flex-col gap-4 mt-10">
                            <div className="flex items-center gap-3">
                                <label htmlFor="file-upload" className="cursor-pointer bg-gray-100 border px-24 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                                    Browse File
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            console.log("Selected file:", file.name);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
