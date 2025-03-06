"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO at MetaVerse Labs",
    content: "BuzzAssure transformed our Web3 marketing strategy. Their innovative approach and deep understanding of blockchain technology helped us achieve 300% growth in community engagement.",
    rating: 5,
    tags: ["NFT Marketing", "Community Growth"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Founder of DeFi Protocol",
    content: "The team's expertise in DeFi marketing is unmatched. They helped us launch our token with a bang, reaching our hardcap in just 48 hours. Truly exceptional service!",
    rating: 5,
    tags: ["Token Launch", "DeFi Marketing"]
  },
  {
    id: 3,
    name: "Elena Zhang",
    role: "Marketing Director at CryptoTech",
    content: "Working with BuzzAssure was a game-changer. Their strategic approach to Web3 marketing helped us establish a strong presence in the blockchain space.",
    rating: 5,
    tags: ["Brand Strategy", "Web3"]
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-pink-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            CLIENTS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from our clients about their transformative journey in Web3 marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => {
                setIsHovered(true)
                setActiveIndex(index)
              }}
              onHoverEnd={() => setIsHovered(false)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-8 rounded-2xl h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">"</span>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {testimonial.content}
                  </p>
                  <div className="space-x-2">
                    {testimonial.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 text-sm text-white/60 bg-white/5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 to-purple-500 p-[2px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-black">
                      <UserCircleIcon className="w-10 h-10 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                  animate={{
                    x: isHovered && activeIndex === index ? ["0%", "200%"] : "0%",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 