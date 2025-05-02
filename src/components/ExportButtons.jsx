export default function ExportButtons({ coordinates }){
    const exportJSON = () => {
        const blob = new Blob([JSON.stringify(coordinates, null, 2)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        download(url, "coordinates.json");
    };

    const exportTXT = () => {
        const lines = coordinates.map((coord, i) =>
            `#${i + 1} Page ${coord.page} - X: ${coord.x} mm, Y: ${coord.y} mm${coord.note ? ` - Note: ${coord.note}` : ""}`
        );
        const blob = new Blob([lines.join("\n")], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        download(url, "coordinates.txt");
    };

    const download = (url, filename) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };

    return(
        <div className="mt-6 flex gap-4 justify-center">
            <button
            onClick={exportJSON}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
            >
                Export JSON
            </button>
            <button
            onClick={exportTXT}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800"
            >
                Export TXT
            </button>
        </div>
    );
}
