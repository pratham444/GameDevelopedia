"use client"

import { motion } from "framer-motion"
import { Calendar, Award, Users, Code, Briefcase, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function InternshipSection() {
  const timeline = [
    {
      phase: "Application",
      duration: "Week 1",
      description: "Submit your application, portfolio, and a brief motivation letter",
      icon: Briefcase,
    },
    {
      phase: "Assessment",
      duration: "Weeks 2-3",
      description: "Short technical test and remote interview",
      icon: Code,
    },
    {
      phase: "Onboarding",
      duration: "Week 4",
      description: "Welcome session, intro tasks, and team setup",
      icon: Users,
    },
    {
      phase: "Development",
      duration: "Weeks 5-16",
      description: "Collaborate on real projects under mentorship",
      icon: Award,
    },
  ]

  const benefits = [
    "Work on real mobile game projects",
    "Mentorship and feedback throughout your journey",
    "Flexible remote work arrangement",
    "Certificate of completion",
    "Portfolio-worthy projects",
    "Networking and community access",
    "Top performers may be invited for future collaborations",
  ]

  const requirements = [
    "Basic programming knowledge (C# preferred)",
    "Familiarity with Unity or Unreal Engine",
    "A portfolio or sample personal projects",
    "Strong communication skills",
    "Commitment to a 3-month program",
    "Availability of at least 20 hours/week",
  ]

  return (
    <section id="internships" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-deep-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our{" "}
            <span className="bg-gradient-to-r from-neon-violet to-cyber-cyan bg-clip-text text-transparent">
              Internship Program
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Launch your game development career with hands-on experience, personal mentorship, and real-world project
            exposure.
          </p>
        </motion.div>

        {/* Program Overview */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Award className="h-6 w-6 text-neon-violet mr-2" />
                Program Benefits
              </CardTitle>
              <CardDescription className="text-gray-300">
                What you'll gain from our comprehensive internship program
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0" />
                  {benefit}
                </motion.div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Code className="h-6 w-6 text-cyber-cyan mr-2" />
                Requirements
              </CardTitle>
              <CardDescription className="text-gray-300">
                What we're looking for in our ideal candidates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {requirements.map((requirement, index) => (
                <motion.div
                  key={requirement}
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-golden-yellow mr-3 flex-shrink-0" />
                  {requirement}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Program Timeline</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-neon-violet/50 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-neon-violet to-cyber-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white">{phase.phase}</CardTitle>
                    <Badge variant="secondary" className="bg-neon-violet/20 text-neon-violet w-fit mx-auto">
                      {phase.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center">{phase.description}</CardDescription>
                  </CardContent>
                </Card>

                {/* Connection line */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-neon-violet to-cyber-cyan transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-neon-violet/10 to-cyber-cyan/10 border-neon-violet/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
              <p className="text-gray-300 mb-6">
                Be a part of our founding cohort and grow your game dev skills through structured, hands-on learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-neon-violet to-cyber-cyan hover:from-neon-violet/80 hover:to-cyber-cyan/80 text-white font-semibold"
                >
                  Apply Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-deep-black"
                >
                  Learn More
                </Button>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                <Calendar className="h-4 w-4 inline mr-1" />
                Next cohort starts July 2025
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
