"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  GlobeAltIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline'
import { 
  RocketLaunchIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/solid'

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isHovered, setIsHovered] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#testimonials' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ]

  const services = [
    'Web3 Marketing',
    'NFT Promotion',
    'DeFi Marketing',
    'Community Building',
    'Token Launch',
    'Guerilla Marketing'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Image
          src="/footer-bg.jpg"
          alt="Footer Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                LET'S CREATE MAGIC
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Ready to revolutionize your Web3 presence? Let's embark on this journey together.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-pink-500 transition-colors"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-pink-500 transition-colors"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </div>

              <div className="relative group">
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-6 py-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-white font-medium relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 transition-transform group-hover:translate-x-2">
                  Send Message
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </motion.form>
          </div>

          {/* Right Column - Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <SparklesIcon className="w-4 h-4 text-pink-500 group-hover:rotate-12 transition-transform" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    <span className="text-gray-400 flex items-center gap-2 group">
                      <RocketLaunchIcon className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="md:col-span-2"
            >
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="mailto:contact@buzzassure.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    <EnvelopeIcon className="w-5 h-5 text-pink-500" />
                  </div>
                  info@buzzassure.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <PhoneIcon className="w-5 h-5 text-purple-500" />
                  </div>
                  +234 901 639 3346
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <GlobeAltIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  buzzassure.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 flex items-center gap-2">
            Made with <HeartIcon className="w-5 h-5 text-pink-500" /> by BuzzAssure
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            Back to Top
            <ArrowUpIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
} 