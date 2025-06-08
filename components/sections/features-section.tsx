"use client"

import { motion } from "framer-motion"
import { Database, Mail, Palette, Smartphone, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Database,
    title: "Firebase Integration",
    description: "Seamless Firestore database integration for real-time data management.",
  },
  {
    icon: Mail,
    title: "EmailJS Support",
    description: "Send emails directly from your frontend without a backend server.",
  },
  {
    icon: Palette,
    title: "Neon Design System",
    description: "Beautiful neon-inspired color palette with dark mode by default.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Optimized for all devices from mobile to desktop.",
  },
  {
    icon: Zap,
    title: "Framer Motion",
    description: "Smooth animations and transitions powered by Framer Motion.",
  },
  {
    icon: Shield,
    title: "TypeScript Ready",
    description: "Built with TypeScript for better development experience.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Powerful{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to build modern, scalable applications with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-neon-cyan/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
