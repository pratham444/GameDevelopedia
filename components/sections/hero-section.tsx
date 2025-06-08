"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering the Next Generation of Game Developers
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center text-gray-400 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Learn the skills to create amazing games and launch your career in the gaming industry.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-violet to-cyber-cyan hover:from-neon-violet/80 hover:to-cyber-cyan/80 text-white font-semibold px-8 py-4 text-lg group"
            onClick={() => document.getElementById("internships")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
