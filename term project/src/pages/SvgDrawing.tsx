import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SvgDrawing.css";

const SvgDrawing: React.FC = () => {
  const [shapes, setShapes] = useState<JSX.Element[]>([]);
  const [color, setColor] = useState("#007bff");
  const navigate = useNavigate();

  const addCircle = () => {
    const id = Date.now();
    setShapes((prevShapes) => [
      ...prevShapes,
      <circle
        key={id}
        cx={Math.random() * 480 + 10} // Ensure circles stay within bounds
        cy={Math.random() * 280 + 10}
        r={20}
        fill={color}
        aria-label={`Circle with color ${color}`}
      />,
    ]);
  };

  const addRectangle = () => {
    const id = Date.now();
    setShapes((prevShapes) => [
      ...prevShapes,
      <rect
        key={id}
        x={Math.random() * 450 + 10} // Ensure rectangles stay within bounds
        y={Math.random() * 250 + 10}
        width={50}
        height={30}
        fill={color}
        aria-label={`Rectangle with color ${color}`}
      />,
    ]);
  };

  const clearSvg = () => {
    setShapes([]);
  };

  const saveSvg = () => {
    const svgElement = document.querySelector(".svg-canvas");
    if (!svgElement) return;

    const svgContent = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "drawing.svg";
    link.click();
  };

  return (
    <div className="svg-drawing-container">
      <button onClick={() => navigate("/projects")} className="back-button">
        Back to Projects
      </button>
      <h1>Interactive SVG Drawing Tool</h1>
      <p>Add circles or rectangles to the canvas, pick a color, and save your artwork!</p>
      <div className="svg-tools">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-picker"
          aria-label="Select color for shapes"
        />
        <button onClick={addCircle} aria-label="Add a circle">
          Add Circle
        </button>
        <button onClick={addRectangle} aria-label="Add a rectangle">
          Add Rectangle
        </button>
        <button onClick={clearSvg} aria-label="Clear all shapes">
          Clear SVG
        </button>
        <button onClick={saveSvg} aria-label="Save the SVG drawing">
          Save SVG
        </button>
      </div>
      <svg
        className="svg-canvas"
        width="500"
        height="300"
        viewBox="0 0 500 300"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SVG drawing canvas"
      >
        {shapes.length > 0 ? (
          shapes
        ) : (
          <text x="50%" y="50%" textAnchor="middle" fill="#aaa" fontSize="20px">
            Add shapes to start drawing
          </text>
        )}
      </svg>
    </div>
  );
};

export default SvgDrawing;
