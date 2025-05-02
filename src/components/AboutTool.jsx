export default function AboutTool(){
    return(
        <section id="about" className="mt-8 bg-white border rounded p-4 text-sm leading-relaxed">
            <h2 className="text-lg font-semibold mb-2">📘 About This Tool</h2>
            <p className="mb-2">
                This is a browser-based tool to help developers and form builders log precise
                <strong> X and Y coordinates</strong> by clicking on PDFs or image files. 
                It’s especially useful for anyone working on form overlays, automated PDF filling, or UI alignment.
            </p>
            <ul className="list-disc list-inside mb-2">
                <li>Upload a <strong>multi-page PDF</strong> or image (PNG, JPG)</li>
                <li>Click on the preview to log the coordinate position (in mm)</li>
                <li>Add notes for each point (e.g., “PhD checkbox”, “total score field”)</li>
                <li>Navigate between PDF pages if applicable</li>
                <li>Export your list as a <strong>.json</strong> or <strong>.txt</strong> file</li>
            </ul>
            <p>
                All processing is done locally in your browser. Your files are never uploaded.
            </p>
        </section>
    );
}
