"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TrailPoint {
  x: number
  y: number
  id: number
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    if (isMobile) return

    let animationId: number
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      }

      setTrail((prev) => [...prev.slice(-20), newPoint])
    }

    const animate = () => {
      setTrail((prev) => prev.filter((point) => Date.now() - point.id < 1000))
      animationId = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", handleMouseMove)
    animationId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-neon-violet to-cyber-cyan"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
