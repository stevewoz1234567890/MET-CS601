import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CanvasDrawing.css";

const CanvasDrawing: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#007bff");
  const [canvasWidth, setCanvasWidth] = useState(500);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCanvasSize = () => {
      setCanvasWidth(Math.min(500, window.innerWidth - 40));
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = color;
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="canvas-container">
      <button onClick={() => navigate("/projects")} className="back-button">
        Back to Projects
      </button>
      <h1>Canvas Drawing Tool</h1>
      <p>Use the canvas below to draw. Pick a color, clear the canvas, or download your masterpiece!</p>
      <div className="canvas-tools">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-picker"
          aria-label="Pick a color"
        />
        <button onClick={clearCanvas}>Clear Canvas</button>
        <button onClick={saveCanvas}>Download Canvas</button>
      </div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={300}
        className="drawing-canvas"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      >
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
};

export default CanvasDrawing;
