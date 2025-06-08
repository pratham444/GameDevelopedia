"use client"

import { motion } from "framer-motion"
import { Gamepad2, Github, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function FooterSection() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-white" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
  ]

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Games", href: "#games" },
    { name: "Tutorials", href: "#tutorials" },
    { name: "Internships", href: "#internships" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    { name: "Game Development", href: "#contact" },
    { name: "Mobile Apps", href: "#contact" },
    { name: "Consulting", href: "#contact" },
    { name: "Training", href: "#contact" },
    { name: "Code Review", href: "#contact" },
    { name: "Technical Writing", href: "#contact" },
  ]

  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-deep-black to-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-neon-violet" />
              <span className="text-xl font-bold bg-gradient-to-r from-neon-violet to-cyber-cyan bg-clip-text text-transparent">
                GameDevelopedia
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the next generation of game developers through comprehensive tutorials, hands-on experience,
              and innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`text-gray-400 ${link.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-neon-violet" />
                <span className="text-sm">gamedevelopedia@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-cyber-cyan" />
                <span className="text-sm">+91 9766414494</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-neon-green" />
                <span className="text-sm">Pune, Maharashtra</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 GameDevelopedia. All rights reserved. Built with passion for game development.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
