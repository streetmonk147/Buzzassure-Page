"use client"

import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import ContactFooter from '../components/ContactFooter'
import { motion } from 'framer-motion'

const ServicesBar = () => (
  <div className="relative mt-32 mb-24 transform -skew-y-2 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10" />
    <div className="border-t-2 border-b-2 border-gray-700 py-6 bg-black/50">
      <motion.div 
        className="container mx-auto px-6 flex gap-8 items-center whitespace-nowrap text-gray-200 font-medium transform skew-y-2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <span className="text-lg">Web3 Marketing</span>
        <span className="text-pink-500 font-bold">+</span>
        <span className="text-lg">Brand Strategy</span>
        <span className="text-pink-500 font-bold">+</span>
        <span className="text-lg">Community Building</span>
        <span className="text-pink-500 font-bold">+</span>
        <span className="text-lg">Content Creation</span>
        <span className="text-pink-500 font-bold">+</span>
        <span className="text-lg">Social Media</span>
        <span className="text-pink-500 font-bold">+</span>
        <span className="text-lg">NFT Marketing</span>
        <span className="text-pink-500 font-bold">+</span>
        <span className="text-lg">DeFi Promotion</span>
      </motion.div>
    </div>
  </div>
)

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ServicesBar />
      <Testimonials />
      <ContactFooter />
    </main>
  )
} 