"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getTeamMembers } from "@/lib/firestore"
import type { TeamMember } from "@/types"

export function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const membersData = await getTeamMembers()
        setTeamMembers(membersData)
      } catch (error) {
        console.error("Error fetching team members:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  if (loading) {
    return (
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-800 rounded w-96 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 animate-pulse">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4" />
                <div className="h-6 bg-gray-800 rounded mb-2" />
                <div className="h-4 bg-gray-800 rounded mb-4" />
                <div className="flex justify-center gap-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="w-8 h-8 bg-gray-800 rounded" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-neon-violet to-cyber-cyan bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developers, designers, and educators dedicated to sharing knowledge and creating amazing games.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-neon-violet/50 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-neon-violet/50 transition-all duration-300">
                      <img
                        src={member.imageURL || "/placeholder.svg?height=128&width=128"}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-violet/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-neon-violet font-medium mb-3">{member.role}</p>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>

                  <div className="flex justify-center space-x-3">
                    {member.socials?.github && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                        asChild
                      >
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {member.socials?.linkedin && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                        asChild
                      >
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {member.socials?.twitter && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                        asChild
                      >
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {member.email && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                        asChild
                      >
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {teamMembers.length === 0 && !loading && (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-gray-400 text-lg">Team information will be available soon!</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
