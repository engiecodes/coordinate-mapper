import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.min.mjs";

// A4 width in mm for coordinate conversion
const A4_WIDTH_MM = 210;

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function CanvasPreview({ file, onClickLog }){
    const canvasRef = useRef();
    const [pdfDoc, setPdfDoc] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        if(!file) return;
    
        // Reset state on file change
        setPdfDoc(null);
        setCurrentPage(1);
        setTotalPages(1);
    
        const isPDF = file.type === "application/pdf";
        const isImage = file.type.startsWith("image/");
    
        if(isPDF){
            const reader = new FileReader();
            reader.onload = async(e) => {
                const loadingTask = pdfjsLib.getDocument({ data: e.target.result });
                const loadedPdf = await loadingTask.promise;
                setPdfDoc(loadedPdf);
                setTotalPages(loadedPdf.numPages);
                setCurrentPage(1);
                await renderPage(1);
            };
            reader.readAsArrayBuffer(file);
        }
    
        if(isImage){
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext("2d");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }, [file]);
      
    useEffect(() => {
        if(pdfDoc) renderPage(currentPage);
    }, [pdfDoc, currentPage]);

    const renderPage = async(pageNum) => {
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;
    };

    const handleCanvasClick = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const xPx = e.clientX - rect.left;
        const yPx = e.clientY - rect.top;
        const mmPerPx = A4_WIDTH_MM / canvasRef.current.width;
        const xMm = (xPx * mmPerPx).toFixed(2);
        const yMm = (yPx * mmPerPx).toFixed(2);

        onClickLog({
        page: currentPage,
        x: parseFloat(xMm),
        y: parseFloat(yMm),
        note: "",
        });
    };

    return(
        <div className="border p-2 rounded bg-white max-w-[700px]">
            <h3 className="mb-2 font-semibold">Preview</h3>
            {file && (
                <>
                <canvas
                    ref={canvasRef}
                    onClick={handleCanvasClick}
                    className="border cursor-crosshair w-full"
                />
                <div className="mt-2 flex items-center justify-between">
                    <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-2 py-1 bg-gray-200 rounded"
                    >
                        ◀ Prev
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 bg-gray-200 rounded"
                    >
                        Next ▶
                    </button>
                </div>
                </>
            )}
        </div>
    );
}
