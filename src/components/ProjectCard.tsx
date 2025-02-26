import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps extends Project {
  index: number;
}

export const ProjectCard = ({ title, description, image, technologies, demoUrl, githubUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-blue-500 dark:text-blue-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-white/50 dark:bg-white/10 rounded-full text-blue-400 dark:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 text-black bg-white/50 dark:bg-white/10 dark:text-white rounded-md hover:bg-white/40 dark:hover:bg-white/20 transition-colors hover:border hover:border-blue-500"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};