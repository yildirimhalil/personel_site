import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface HexagonSkillsProps {
  skills: Skill[];
  category: string;
  index: number;
}

export const HexagonSkills = ({ skills, category, index }: HexagonSkillsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-300">{category}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            className="relative"
          >
            <div className="skill-container">
              <div className="skill-card bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 mb-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};