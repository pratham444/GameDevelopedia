"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink, Clock, Users, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { getTutorials } from "@/lib/firestore"
import type { Tutorial } from "@/types"

export function TutorialsSection() {
  // Featured video will be populated from Firebase or can be hardcoded later
  const featuredVideo = null

  // Tutorial categories can be customized later or removed entirely
  const tutorialCategories: any[] = []

  // Add tutorials state and fetch function
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const tutorialsData = await getTutorials()
        setTutorials(tutorialsData)
      } catch (error) {
        console.error("Error fetching tutorials:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTutorials()
  }, [])

  return (
    <section id="tutorials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learn with Our{" "}
            <span className="bg-gradient-to-r from-neon-violet to-cyber-cyan bg-clip-text text-transparent">
              YouTube Tutorials
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive video tutorials covering everything from basic concepts to advanced game development
            techniques.
          </p>
        </motion.div>

        {/* Featured Video - Only show if featuredVideo exists */}
        {featuredVideo && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative group cursor-pointer">
                  <img
                    src={"/placeholder.svg"}
                    alt={"Featured Video"}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-neon-violet to-cyber-cyan rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-8 w-8 text-white ml-1" />
                    </motion.div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/70 text-white">
                    <Clock className="h-3 w-3 mr-1" />
                    {"00:00:00"}
                  </Badge>
                </div>

                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-neon-violet/20 text-neon-violet">Featured Course</Badge>
                  <CardTitle className="text-2xl text-white mb-4">{"Featured Video"}</CardTitle>
                  <CardDescription className="text-gray-300 mb-6 text-lg">{"Description"}</CardDescription>

                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {"0"} views
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {"Level"}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-neon-violet to-cyber-cyan hover:from-neon-violet/80 hover:to-cyber-cyan/80">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      YouTube Channel
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Tutorial Categories - Only show if categories exist */}
        {tutorialCategories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">{/* Categories content */}</div>
        )}

        {/* Add tutorials grid after the featured video section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-neon-violet/50 transition-all duration-300 h-full group">
                <div className="relative group cursor-pointer">
                  <div className="w-full h-48 bg-gradient-to-br from-neon-violet/20 to-cyber-cyan/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white group-hover:text-cyber-cyan transition-colors">
                    {tutorial.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">{tutorial.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-neon-violet/20 text-neon-violet text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-neon-violet to-cyber-cyan hover:from-neon-violet/80 hover:to-cyber-cyan/80"
                    onClick={() => window.open(tutorial.videoURL, "_blank")}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Tutorial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
