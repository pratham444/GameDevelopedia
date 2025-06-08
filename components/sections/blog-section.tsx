"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/firestore"
import type { BlogPost } from "@/types"

export function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const postsData = await getBlogPosts()
        setBlogPosts(postsData)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  if (loading) {
    return (
      <section id="blog" className="py-20 px-4 bg-gradient-to-b from-deep-black to-gray-950">
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
    <section id="blog" className="py-20 px-4 bg-gradient-to-b from-deep-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-neon-violet to-cyber-cyan bg-clip-text text-transparent">
              Dev Blogs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest insights, tutorials, and behind-the-scenes development stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-neon-violet/50 transition-all duration-300 overflow-hidden group h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.thumbnailURL || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.datePublished).toLocaleDateString()}
                    </div>
                  </div>

                  <CardTitle className="text-white group-hover:text-cyber-cyan transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>

                  <CardDescription className="text-gray-300 line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-cyber-cyan hover:text-white hover:bg-cyber-cyan/20 group/btn"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {blogPosts.length === 0 && !loading && (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-gray-400 text-lg">No blog posts available at the moment. Check back soon!</p>
          </motion.div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-violet to-cyber-cyan hover:from-neon-violet/80 hover:to-cyber-cyan/80 text-white font-semibold"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
