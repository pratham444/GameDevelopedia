"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Ripple {
  x: number
  y: number
  id: number
}

export function TouchRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch) {
        const newRipple = {
          x: touch.clientX,
          y: touch.clientY,
          id: Date.now(),
        }
        setRipples((prev) => [...prev, newRipple])

        setTimeout(() => {
          setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
        }, 1000)
      }
    }

    document.addEventListener("touchstart", handleTouch)
    return () => document.removeEventListener("touchstart", handleTouch)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border-2 border-cyber-cyan"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 50, height: 50, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
