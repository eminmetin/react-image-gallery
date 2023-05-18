import React, { useState } from "react";
import images from "./images";
import "./styles.css";
function App() {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  return (
    <div className="app">
      <div className="container">
        <img src={selectedImg} alt="selected" className="selected" />
      </div>
      <div className="img-container">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt="bodybuilding"
              onClick={() => {
                return setSelectedImg(img);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
