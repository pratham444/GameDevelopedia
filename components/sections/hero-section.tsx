"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/effects/particle-background"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-neon-violet/20 border border-neon-violet/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Code className="h-4 w-4 text-neon-violet mr-2" />
            <span className="text-sm text-neon-violet font-medium">Professional Game Development</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Master{" "}
            <span className="bg-gradient-to-r from-neon-violet via-cyber-cyan to-neon-green bg-clip-text text-transparent">
              Game Development
            </span>
            <br />
            with Expert Guidance
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            From beginner tutorials to professional internships, we provide comprehensive game development education,
            showcase amazing mobile games, and offer cutting-edge digital services for aspiring developers.
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
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-deep-black px-8 py-4 text-lg group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { icon: Code, title: "100+ Tutorials", desc: "Comprehensive learning path" },
              { icon: Users, title: "50+ Graduates", desc: "Successful internship program" },
              { icon: Play, title: "10+ Games", desc: "Published mobile games" },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-violet to-cyber-cyan rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
