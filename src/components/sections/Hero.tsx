"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const tags = [
  "Web Development",
  "UI/UX Design",
  "Brand Strategy",
  "Digital Marketing",
  "Mobile Apps",
  "Cloud Solutions",
  "E-commerce",
  "Custom Software",
  "SEO Optimization",
  "System Integration",
  "Web Development",
  "UI/UX Design",
  "Brand Strategy",
  "Digital Marketing",
]

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/hero3d.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mt-20">
          {/* Main Adventure Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-40 left-[180px] md:left-[400px] flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-white/90 text-sm">Ready for Web3 Adventures</span>
          </motion.div>

          {/* Web3 Innovation Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-24 right-0 md:right-20 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm">Web3 Innovation</span>
          </motion.div>

          {/* Blockchain Ready Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-48 right-0 md:right-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-white/90 text-sm">Blockchain Ready</span>
          </motion.div>

          {/* NFT Marketing Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute top-40 left-0 md:left-40 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-white/90 text-sm">NFT Marketing</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-7xl font-bold mb-8 text-white"
          >
            Web3 Marketing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"> Innovation </span>
            Hub
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-200 mb-12 max-w-2xl"
          >
            Elevate your Web3 presence with our cutting-edge marketing solutions. We combine innovation, design, and strategy to help you stand out in the decentralized space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <button className="group relative px-8 py-3 rounded-xl overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all">
              <span className="relative text-white font-medium drop-shadow-lg">Get Started →</span>
            </button>
            <button className="group px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              <span className="text-white font-medium">Learn More</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-8"
          >
            <SparklesIcon className="w-6 h-6 text-pink-400 animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* Slanted Tags Slideshow */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-24 transform -skew-y-3 bg-gradient-to-r from-black/80 via-black/90 to-black/80 border-t border-pink-400/30">
        <motion.div 
          className="flex items-center gap-8 py-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
        >
          {tags.map((tag, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-white text-lg font-kanit tracking-wider hover:text-pink-400 transition-colors cursor-pointer">{tag}</span>
              <SparklesIcon className="h-4 w-4 text-pink-400/70 transform rotate-12" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 