"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

type Section = 'vision' | 'team' | null
type SubSection = 'vision' | 'mission' | null

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-4 left-4 p-2 rounded-full bg-pink-500/20 hover:bg-pink-500/30 transition-colors"
  >
    <ArrowLeftIcon className="h-6 w-6 text-pink-500" />
  </button>
)

const ArrowButton = ({ onClick, direction = 'right' }: { onClick: () => void; direction?: 'left' | 'right' }) => (
  <button 
    onClick={onClick}
    className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all group"
  >
    {direction === 'left' && <ArrowLeftIcon className="h-5 w-5 text-pink-500" />}
    <span className="group-hover:text-pink-500">
      {direction === 'left' ? 'Back' : 'View'}
    </span>
    {direction === 'right' && <ArrowRightIcon className="h-5 w-5 text-pink-500" />}
  </button>
)

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    bio: 'Web3 pioneer with 10+ years of experience in blockchain marketing and community building.',
    expertise: ['Strategic Leadership', 'Blockchain Innovation', 'Growth Strategy']
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Marketing',
    bio: 'Marketing strategist specializing in Web3 community engagement and brand development.',
    expertise: ['Digital Strategy', 'Community Building', 'Brand Development']
  },
  {
    name: 'Alex Thompson',
    role: 'Creative Director',
    bio: 'Award-winning creative leader with expertise in Web3 brand identity and design.',
    expertise: ['Brand Design', 'UI/UX', 'Creative Strategy']
  },
  {
    name: 'Emma Watson',
    role: 'Technical Lead',
    bio: 'Blockchain technology expert with deep understanding of Web3 infrastructure.',
    expertise: ['Blockchain Tech', 'Smart Contracts', 'Technical Strategy']
  }
]

export default function About() {
  const [activeSection, setActiveSection] = useState<Section>(null)
  const [activeSubSection, setActiveSubSection] = useState<SubSection>('vision')
  const [activeTeamIndex, setActiveTeamIndex] = useState(0)

  const handleTeamNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveTeamIndex(prev => (prev === 0 ? teamMembers.length - 1 : prev - 1))
    } else {
      setActiveTeamIndex(prev => (prev === teamMembers.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <section id="about" className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/service-bg.jpg"
          alt="About Background"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-center"
          priority
          style={{ position: 'absolute' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Gradient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-10 -left-20 w-40 h-40 bg-pink-500/20 rounded-full blur-xl"
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-8"
          >
            ABOUT US
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/80 mb-12 max-w-2xl leading-relaxed"
          >
            Accelerating Web3 projects with innovative marketing solutions and exceptional talent.
          </motion.p>

          <div className="space-y-6">
            {/* Vision & Mission Buttons */}
            <div className="flex flex-col md:flex-row gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative group cursor-pointer"
                onClick={() => {
                  setActiveSection('vision')
                  setActiveSubSection('vision')
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl group-hover:bg-black/40 transition-all">
                  <h4 className="text-xl font-bold mb-2 text-pink-500">Vision & Mission</h4>
                  <p className="text-white/80 text-sm mb-4">Discover our vision for the future of Web3 marketing and our mission to achieve it.</p>
                  <ArrowButton onClick={() => {
                    setActiveSection('vision')
                    setActiveSubSection('vision')
                  }} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative group cursor-pointer"
                onClick={() => {
                  setActiveSection('team')
                  setActiveTeamIndex(0)
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl group-hover:bg-black/40 transition-all">
                  <h4 className="text-xl font-bold mb-2 text-pink-500">Our Team</h4>
                  <p className="text-white/80 text-sm mb-4">Meet our exceptional team of Web3 marketing experts and innovators.</p>
                  <ArrowButton onClick={() => {
                    setActiveSection('team')
                    setActiveTeamIndex(0)
                  }} />
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                  <div className="text-4xl font-bold mb-2 text-white">30<span className="text-pink-400">+</span></div>
                  <div className="text-white text-sm">team members</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                  <div className="text-4xl font-bold mb-2 text-white">50<span className="text-pink-400">+</span></div>
                  <div className="text-white text-sm">completed projects</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                  <div className="text-4xl font-bold mb-2 text-white">240<span className="text-pink-400">+</span></div>
                  <div className="text-white text-sm">global partners</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                  <div className="text-4xl font-bold mb-2 text-white">92<span className="text-pink-400">%</span></div>
                  <div className="text-white text-sm">growth rate</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                  <div className="text-4xl font-bold mb-2 text-white">24/7</div>
                  <div className="text-white text-sm">support</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Modal */}
      <AnimatePresence>
        {activeSection === 'vision' && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-8 md:p-12"
          >
            <div className="container mx-auto max-w-6xl relative">
              <BackButton onClick={() => setActiveSection(null)} />
              
              {/* Vision & Mission Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <h4 className="text-2xl font-bold mb-4 text-pink-500">Our Vision</h4>
                    <div className="space-y-4 text-white/80">
                      <p className="leading-relaxed">
                        To be the global leader in Web3 marketing innovation, shaping the future of digital engagement through groundbreaking strategies and technologies.
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Pioneer revolutionary Web3 marketing solutions</li>
                        <li>Set industry standards for blockchain marketing</li>
                        <li>Create meaningful brand connections in the digital space</li>
                        <li>Drive sustainable growth for Web3 projects</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <h4 className="text-2xl font-bold mb-4 text-pink-500">Our Mission</h4>
                    <div className="space-y-4 text-white/80">
                      <p className="leading-relaxed">
                        To empower Web3 projects with innovative marketing solutions that drive sustainable growth and meaningful engagement in the blockchain ecosystem.
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Deliver data-driven Web3 marketing strategies</li>
                        <li>Build and nurture engaged crypto communities</li>
                        <li>Create impactful brand narratives</li>
                        <li>Drive measurable results for our clients</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Team Modal */}
      <AnimatePresence>
        {activeSection === 'team' && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-8"
          >
            <div className="container mx-auto max-w-6xl relative">
              <BackButton onClick={() => setActiveSection(null)} />

              <div className="mt-12">
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={() => handleTeamNavigation('prev')}
                    className="p-2 rounded-full bg-pink-500/20 hover:bg-pink-500/30 transition-colors"
                  >
                    <ArrowLeftIcon className="h-6 w-6 text-pink-500" />
                  </button>
                  <button
                    onClick={() => handleTeamNavigation('next')}
                    className="p-2 rounded-full bg-pink-500/20 hover:bg-pink-500/30 transition-colors"
                  >
                    <ArrowRightIcon className="h-6 w-6 text-pink-500" />
                  </button>
                </div>

                <motion.div
                  key={activeTeamIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                    <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6" />
                    <h4 className="text-3xl font-bold mb-2 text-white">{teamMembers[activeTeamIndex].name}</h4>
                    <p className="text-pink-500 mb-4 text-lg">{teamMembers[activeTeamIndex].role}</p>
                    <p className="text-white/80 text-lg mb-6">{teamMembers[activeTeamIndex].bio}</p>
                    <div className="flex flex-wrap gap-3">
                      {teamMembers[activeTeamIndex].expertise.map((skill, i) => (
                        <div key={i} className="text-sm text-white/80 bg-white/5 px-4 py-2 rounded-full">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 