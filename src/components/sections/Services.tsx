"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon, PaintBrushIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

interface ServiceData {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  features: string[];
}

const services: ServiceData[] = [
  {
    icon: SparklesIcon,
    title: "INVENT",
    description: "Pioneering innovative Web3 marketing strategies that revolutionize how brands connect with their digital audience.",
    gradient: "from-pink-500 via-purple-500 to-blue-500",
    features: [
      "Custom Web3 Marketing Plans",
      "Blockchain Integration",
      "Smart Contract Marketing",
      "NFT Launch Strategies"
    ]
  },
  {
    icon: PaintBrushIcon,
    title: "DESIGN",
    description: "Crafting captivating Web3 brand experiences that seamlessly blend creativity with blockchain technology.",
    gradient: "from-purple-500 via-blue-500 to-teal-500",
    features: [
      "Brand Identity Design",
      "Web3 UI/UX Design",
      "NFT Artwork Creation",
      "Metaverse Aesthetics"
    ]
  },
  {
    icon: RocketLaunchIcon,
    title: "GROW",
    description: "Accelerating your Web3 presence through data-driven marketing strategies and community engagement.",
    gradient: "from-blue-500 via-teal-500 to-pink-500",
    features: [
      "Community Building",
      "Token Marketing",
      "Growth Analytics",
      "Engagement Optimization"
    ]
  }
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-[#0A0A0A]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text font-kanit">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Empowering your digital presence with cutting-edge Web3 solutions and innovative marketing strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 h-full transition-all duration-300 hover:border-gray-700">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <service.icon className="h-12 w-12 mb-6 text-white" />
                
                <h3 className="text-2xl font-bold mb-4 text-white font-kanit tracking-wide">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={hoveredService === index ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <SparklesIcon className="h-5 w-5 mr-3 text-purple-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 