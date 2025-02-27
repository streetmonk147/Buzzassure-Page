"use client"

import React, { useState, useEffect, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const NavButton = memo(({ onClick, children, className }: {
  onClick?: () => void;
  children: React.ReactNode;
  className: string;
}) => (
  <button 
    onClick={onClick} 
    className={className}
  >
    {children}
  </button>
));

NavButton.displayName = 'NavButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const heroHeight = window.innerHeight
    setIsScrolled(window.scrollY > heroHeight - 80)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          <div className="relative h-16 w-40 md:h-20 md:w-56 -ml-2 md:ml-0">
            <Image
              src="/logobuzz.png"
              alt="BuzzAssure Logo"
              fill
              sizes="(max-width: 768px) 160px, 224px"
              className="object-contain"
              priority
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavButton 
              onClick={() => scrollToSection('about')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </NavButton>
            <NavButton 
              onClick={() => scrollToSection('services')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Services
            </NavButton>
            <NavButton 
              onClick={() => scrollToSection('testimonials')} 
              className="text-white/80 hover:text-white transition-colors"
            >
              Clients
            </NavButton>
            <NavButton 
              className="px-6 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 transition-colors text-white font-medium"
            >
              Let's Talk
            </NavButton>
          </div>

          <NavButton className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </NavButton>
        </div>
      </div>
    </motion.nav>
  )
} 