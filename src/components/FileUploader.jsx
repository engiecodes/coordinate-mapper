export default function FileUploader({ onFileSelect, onReset }) {
    return(
        <div className="w-full flex justify-center">
            <div className="flex gap-4 items-center p-2 bg-white">
                {/* Hidden file input */}
                <input
                    type="file"
                    id="fileInput"
                    accept="application/pdf,image/*"
                    className="hidden"
                    onChange={(e) => onFileSelect(e.target.files[0])}
                />

                <label
                    htmlFor="fileInput"
                    className="px-4 py-2 bg-indigo-600 text-white rounded cursor-pointer hover:bg-indigo-700"
                >
                    Upload File
                </label>
                <button
                    onClick={onReset}
                    type="button"
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Reset
                </button>

            </div>
        </div>
    );
}
