"use client"

import { useEffect, useRef } from "react"

export function DitherBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const createDitherPattern = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % canvas.width
        const y = Math.floor(i / 4 / canvas.width)

        // Create a dither pattern with light green tones
        const noise = Math.random()
        const pattern = (x + y) % 4

        let intensity
        if (pattern === 0) intensity = noise > 0.8 ? 255 : 240
        else if (pattern === 1) intensity = noise > 0.6 ? 250 : 235
        else if (pattern === 2) intensity = noise > 0.7 ? 245 : 230
        else intensity = noise > 0.9 ? 255 : 225

        // Light green tint
        data[i] = Math.floor(intensity * 0.9) // R
        data[i + 1] = intensity // G
        data[i + 2] = Math.floor(intensity * 0.9) // B
        data[i + 3] = 30 // A (low opacity)
      }

      ctx.putImageData(imageData, 0, 0)
    }

    createDitherPattern()

    window.addEventListener("resize", () => {
      resizeCanvas()
      createDitherPattern()
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
