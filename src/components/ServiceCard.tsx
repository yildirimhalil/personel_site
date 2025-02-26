import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export const ServiceCard = ({ title, description, image, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col md:flex-row gap-8 items-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-1/2"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />
      </motion.div>
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300  leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};