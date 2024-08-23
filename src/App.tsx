import { useEffect, useState } from "react";
import Image from "./types/Image";

function App() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch('/images.json')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  
  return (
    <div className="App">
      <div className="container">
        <div className="display-flex flex-direction-column ai-center mb-20">
          <h1 className="">brb...</h1>
          <h3 className="">website under constuction</h3>
        </div>

        <div className="image-grid mb-20">
          {images.map((image, index) => (
            <div className="image">
              <img src={image.filePath} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
