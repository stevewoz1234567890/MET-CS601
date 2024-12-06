import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/WebWorkerDemo.css";

const WebWorkerDemo: React.FC = () => {
  const [maxNumber, setMaxNumber] = useState(100000);
  const [primes, setPrimes] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const navigate = useNavigate();

  const calculatePrimes = () => {
    if (maxNumber < 2 || maxNumber > 1000000) {
      alert("Please enter a number between 2 and 1,000,000.");
      return;
    }

    setIsCalculating(true);
    const worker = new Worker(new URL("../js/primeWorker.js", import.meta.url));
    worker.postMessage(maxNumber);

    worker.onmessage = (event) => {
      setPrimes(event.data);
      setIsCalculating(false);
      worker.terminate(); // Clean up the worker
    };
  };

  const saveResults = () => {
    if (primes.length === 0) return;

    const blob = new Blob([primes.join(", ")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `primes_up_to_${maxNumber}.txt`;
    link.click();
  };

  return (
    <div className="worker-demo-container">
      <button onClick={() => navigate("/projects")} className="back-button">
        Back to Projects
      </button>
      <h1>Prime Number Calculator</h1>
      <p>Calculate prime numbers up to a large number using Web Workers.</p>
      <div className="worker-tools">
        <label htmlFor="max-number">
          Max Number:{" "}
          <input
            id="max-number"
            type="number"
            value={maxNumber}
            onChange={(e) => setMaxNumber(Number(e.target.value))}
            min="2"
            max="1000000"
            aria-label="Enter the maximum number for prime calculation"
          />
        </label>
        <button
          onClick={calculatePrimes}
          disabled={isCalculating}
          aria-label="Start prime number calculation"
        >
          {isCalculating ? "Calculating..." : "Calculate Primes"}
        </button>
        <button
          onClick={saveResults}
          disabled={primes.length === 0}
          aria-label="Save prime number results"
        >
          Save Results
        </button>
      </div>
      <div className="worker-results">
        <h2>Prime Numbers</h2>
        <div
          className="primes-output"
          aria-live="polite"
          aria-busy={isCalculating}
        >
          {isCalculating
            ? "Calculating prime numbers, please wait..."
            : primes.length > 0
            ? primes.join(", ")
            : "No primes calculated yet. Enter a number and click 'Calculate Primes'."}
        </div>
      </div>
    </div>
  );
};

export default WebWorkerDemo;
