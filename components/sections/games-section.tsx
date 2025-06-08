"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getGames } from "@/lib/firestore"
import type { Game } from "@/types"

export function GamesSection() {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames()
        setGames(gamesData)
      } catch (error) {
        console.error("Error fetching games:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  if (loading) {
    return (
      <section id="games" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-800 rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 animate-pulse">
                <div className="h-48 bg-gray-800 rounded mb-4" />
                <div className="h-6 bg-gray-800 rounded mb-2" />
                <div className="h-4 bg-gray-800 rounded mb-4" />
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-gray-800 rounded w-16" />
                  <div className="h-6 bg-gray-800 rounded w-20" />
                </div>
                <div className="h-10 bg-gray-800 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="games" className="py-20 px-4 bg-gradient-to-b from-deep-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-neon-violet to-cyber-cyan bg-clip-text text-transparent">
              Game Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our collection of innovative mobile games, each crafted with passion and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-neon-violet/50 transition-all duration-300 overflow-hidden group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={game.imageURL || "/placeholder.svg?height=200&width=400"}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white group-hover:text-cyber-cyan transition-colors">
                      {game.title}
                    </CardTitle>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">{game.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">{game.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {/* {game.platforms?.map((platform) => (
                      <Badge key={platform} variant="secondary" className="bg-neon-violet/20 text-neon-violet">
                        {platform}
                      </Badge>
                    ))} */}
                    <Badge className="bg-neon-violet/20 text-neon-violet border-neon-violet/30">{game.platform}</Badge>
                    <Badge variant="secondary" className="bg-cyber-cyan/20 text-cyber-cyan">
                      {game.genre}
                    </Badge>
                  </div>

                  {/* <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {game.downloads}+ downloads
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {game.players}+ players
                    </div>
                  </div> */}

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-neon-violet to-cyber-cyan hover:from-neon-violet/80 hover:to-cyber-cyan/80"
                      onClick={() => window.open(game.downloadLink, "_blank")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {games.length === 0 && !loading && (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-gray-400 text-lg">No games available at the moment. Check back soon!</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
