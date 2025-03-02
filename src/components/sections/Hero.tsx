"use client"

import React, { useCallback } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

// Reduce array size for better performance
const tags = [
  "Web Development",
  "UI/UX Design",
  "Brand Strategy",
  "Digital Marketing",
  "Mobile Apps",
  "Cloud Solutions",
  "E-commerce"
].filter(Boolean);

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  
  const scrollToServices = useCallback(() => {
    const element = document.getElementById('services')
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      })
    }
  }, [prefersReducedMotion])

  const fadeInAnimation = prefersReducedMotion ? {} : {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/hero3d.jpg"
          alt="Hero Background"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] opacity-75" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-75" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mt-20">
          <motion.div {...fadeInAnimation} className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Web3 Marketing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"> Innovation </span>
              Hub
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl">
              Elevate your Web3 presence with our cutting-edge marketing solutions. We combine innovation, design, and strategy to help you stand out in the decentralized space.
            </p>

            <div>
              <button 
                onClick={scrollToServices}
                className="group relative px-8 py-3 rounded-xl overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                <span className="relative text-white font-medium drop-shadow-lg">Get Started →</span>
              </button>
            </div>
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

      {/* Optimized Slanted Tags Slideshow */}
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
              duration: 60,
              ease: "linear"
            }
          }}
        >
          {[...tags, ...tags].map((tag, index) => (
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