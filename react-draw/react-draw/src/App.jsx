import React, { useEffect, useRef, useState, useCallback } from 'react'

const getDPR = () =>
  typeof window !== 'undefined'
    ? Math.max(1, Math.min(3, window.devicePixelRatio || 1))
    : 1

export default function App() {
  const canvasRef = useRef(null)
  const [squares, setSquares] = useState([])
  const [size, setSize] = useState(40)
  const [canvasDims, setCanvasDims] = useState({ w: 900, h: 600 })

  const fitCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const maxW = Math.min(window.innerWidth * 0.95, 1200)
    const maxH = Math.min(window.innerHeight * 0.80, 800)
    const w = Math.max(300, Math.floor(maxW))
    const h = Math.max(200, Math.floor(maxH))

    const dpr = getDPR()
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    canvas.width = Math.floor(w * dpr)
    canvas.height = Math.floor(h * dpr)

    const ctx = canvas.getContext('2d')
    if (ctx) {
      // Make 1 unit = 1 CSS pixel despite backing store scaling
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    setCanvasDims({ w, h })
  }, [])

  useEffect(() => {
    fitCanvas()
    const onResize = () => fitCanvas()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [fitCanvas])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvasDims.w, canvasDims.h)

    ctx.fillStyle = 'red'
    for (const sq of squares) {
      const half = sq.size / 2
      ctx.fillRect(Math.round(sq.x - half), Math.round(sq.y - half), sq.size, sq.size)
    }
  }, [squares, canvasDims.w, canvasDims.h])

  useEffect(() => {
    draw()
  }, [draw])

  const handleClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setSquares((prev) => [...prev, { x, y, size }])
  }

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSize((s) => Math.min(300, s + 5))
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSize((s) => Math.max(5, s - 5))
      } else if (e.key.toLowerCase() === 'c') {
        setSquares([])
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="app">
      <div className="toolbar">
        <strong>Red Squares</strong> — Click canvas to add a square.
        &nbsp; Current size: <strong>{size}px</strong>
        &nbsp; | Increase: <kbd>ArrowUp</kbd>
        &nbsp; | Decrease: <kbd>ArrowDown</kbd>
        &nbsp; | Clear: <kbd>C</kbd>
      </div>

      <div className="canvas-wrap">
        <canvas
          ref={canvasRef}
          onClick={handleClick}
          aria-label="Red squares canvas"
        />
      </div>
    </div>
  )
}
