import React, { useRef, useState } from "react";

const CELL_SIZE = 6;
const THRESHOLD = 128;

function nextGeneration(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const next = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  const dirs = [-1, 0, 1];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let liveNeighbors = 0;

      dirs.forEach(dr =>
        dirs.forEach(dc => {
          if (dr === 0 && dc === 0) return;
          const nr = r + dr;
          const nc = c + dc;
          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            grid[nr][nc]
          ) {
            liveNeighbors++;
          }
        })
      );

      if (grid[r][c] === 1) {
        next[r][c] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0;
      } else {
        next[r][c] = liveNeighbors === 3 ? 1 : 0;
      }
    }
  }
  return next;
}

export default function GameOfLifeFromImage() {
  const canvasRef = useRef();
  const [grid, setGrid] = useState([]);
  const [running, setRunning] = useState(false);

  const loadImage = e => {
    const file = e.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const w = Math.floor(img.width / CELL_SIZE);
      const h = Math.floor(img.height / CELL_SIZE);

      canvas.width = w * CELL_SIZE;
      canvas.height = h * CELL_SIZE;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      const newGrid = Array.from({ length: h }, (_, r) =>
        Array.from({ length: w }, (_, c) => {
          const idx =
            (r * CELL_SIZE * canvas.width + c * CELL_SIZE) * 4;
          const brightness =
            (imageData[idx] +
              imageData[idx + 1] +
              imageData[idx + 2]) /
            3;
          return brightness < THRESHOLD ? 1 : 0;
        })
      );

      setGrid(newGrid);
      draw(newGrid);
    };
  };

  const draw = g => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    g.forEach((row, r) =>
      row.forEach((cell, c) => {
        if (cell) {
          ctx.fillStyle = "black";
          ctx.fillRect(
            c * CELL_SIZE,
            r * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE
          );
        }
      })
    );
  };

  const step = () => {
    setGrid(g => {
      const next = nextGeneration(g);
      draw(next);
      return next;
    });
  };

  const run = () => {
    if (!running) return;
    step();
    requestAnimationFrame(run);
  };

  return (
    <div style={{
      display: "flex", flexDirection: "row",
      alignItems: "center", justifyContent: "center", width: "100vw" }}>
      <div id="mainDiv" style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>QR Code Game of Life</h2>
        <input type="file" accept="image/*" onChange={loadImage} />
        <br /><br />
        <button onClick={() => setRunning(true) & run()}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={step}>Step</button>
        <br /><br />
        <canvas ref={canvasRef} style={{ border: "1px solid #333" }} />
      </div>
    </div>
  );
}
