import React, { useState } from "react";
import "./steptwoform.css";
import { useDropzone } from "react-dropzone"; // Import react-dropzone

const FormStep2 = ({ formData, handleChange, values, onUpload, onBack }) => {
  const [csvData, setCsvData] = useState(null); // Store the CSV data
  const [maxX, setMaxX] = useState("");
  const [minX, setMinX] = useState("");
  const [maxY, setMaxY] = useState("");
  const [minY, setMinY] = useState("");
  const [maxZ, setMaxZ] = useState("");
  const [minZ, setMinZ] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const csvText = event.target.result;
      setCsvData(csvText);
      const lines = csvText.split("\n");
      const columnXValues = lines
        .slice(1) // Skip header row
        .map((line) => line.split(",")[1]) // Assuming X values are in the second column (index 1)
        .filter((x) => !isNaN(x)) // Filter out non-numeric values
        .map(parseFloat);
      const columnYValues = lines
        .slice(1)
        .map((line) => line.split(",")[2])
        .filter((y) => !isNaN(y))
        .map(parseFloat);
      const columnZValues = lines
        .slice(1)
        .map((line) => line.split(",")[3])
        .filter((z) => !isNaN(z))
        .map(parseFloat);
      const maxXValue = Math.max(...columnXValues);
      const minXValue = Math.min(...columnXValues);
      const maxYValue = Math.max(...columnYValues);
      const minYValue = Math.min(...columnYValues);
      const maxZValue = Math.max(...columnZValues);
      const minZValue = Math.min(...columnZValues);
      setMaxX(maxXValue);
      setMinX(minXValue);
      setMaxY(maxYValue);
      setMinY(minYValue);
      setMaxZ(maxZValue);
      setMinZ(minZValue);
    };

    reader.readAsText(file);
  };
  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (
      String(maxX).trim() === "" ||
      String(minX).trim() === "" ||
      String(maxY).trim() === "" ||
      String(minY).trim() === "" ||
      String(maxZ).trim() === "" ||
      String(minZ).trim() === ""
    ) {
      return; // Return early if any field is empty
    }

    onUpload({
      ...values,
      maxX,
      minX,
      maxY,
      minY,
      maxZ,
      minZ,
      csvData,
    });
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <div>
      <h2>Step 2: Additional Details and File Upload</h2>
      <div className="container">
        <h2>Form One</h2>
        <label>
          Project Name:
          <input type="text" value={values.projectName} disabled />
        </label>
        <label>
          Project Description:
          <input type="text" value={values.projectDescription} disabled />
        </label>
        <label>
          Client:
          <input type="text" value={values.client} disabled />
        </label>
        <label>
          Contractor:
          <input type="text" value={values.contractor} disabled />
        </label>
      </div>
      <div className="containerSecond">
        <h2>Form Two</h2>
        <div
          className="drop-container"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
        >
          <p>Drag and drop a CSV file here or click to upload:</p>
          <input type="file" onChange={handleFileUpload} className="file" />
        </div>

        <label>
          Max X:
          <input
            type="number"
            value={maxX}
            onChange={(e) => setMaxX(e.target.value)}
          />
        </label>
        <label>
          Min X:
          <input
            type="number"
            value={minX}
            onChange={(e) => setMinX(e.target.value)}
          />
        </label>
        <label>
          Max Y:
          <input
            type="number"
            value={maxY}
            onChange={(e) => setMaxY(e.target.value)}
          />
        </label>
        <label>
          Min Y:
          <input
            type="number"
            value={minY}
            onChange={(e) => setMinY(e.target.value)}
          />
        </label>
        <label>
          Max Z :
          <input
            type="number"
            value={maxZ}
            onChange={(e) => setMaxZ(e.target.value)}
          />
        </label>
        <label>
          Min Z :
          <input
            type="number"
            value={minZ}
            onChange={(e) => setMinZ(e.target.value)}
          />
        </label>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default FormStep2;
