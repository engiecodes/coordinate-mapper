import { useState } from "react";
import FileUploader from "./components/FileUploader";
import CanvasPreview from "./components/CanvasPreview";
import CoordinateNotes from "./components/CoordinateNotes";
import ExportButtons from "./components/ExportButtons";
import AboutTool from "./components/AboutTool";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){
    const [file, setFile] = useState(null);
    const [coordinates, setCoordinates] = useState([]);

    const handleReset = () => {
        setFile(null);
        setCoordinates([]);
    };

    return(
      <>
        <Header />
          <main className="p-6 max-w-screen-xl mx-auto">
            <div className="p-6 max-w-screen-xl mx-auto">
              <div className="p-2 bg-white">
                <h1 className="text-2xl font-bold mb-4 text-center">File Layout Coordinate Mapper</h1>
                
                <FileUploader
                    onFileSelect={(file) => {
                      setFile(file);
                      setCoordinates([]);
                    }}
                    onReset={handleReset}
                />
              </div>

              {!file && <AboutTool />}

              {file && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded p-2 bg-white">
                      <CanvasPreview
                        file={file}
                        onClickLog={(coord) => setCoordinates([...coordinates, coord])}
                      />
                    </div>

                    <div className="border rounded p-2 bg-white">
                      <div className="max-h-[600px] overflow-y-auto border rounded p-2 bg-white">
                        <CoordinateNotes
                          coordinates={coordinates}
                          setCoordinates={setCoordinates}
                        />
                      </div>
                      <ExportButtons coordinates={coordinates}/>
                    </div >
                  </div>
                </>
              )}
            </div>
          </main>
        <Footer />
      </> 
    );
}

export default App;
