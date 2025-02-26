import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-white/90 rounded-xl p-2 shadow-lg">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
        <p className="text-blue-200 text-sm">{skill.description}</p>
      </div>
    </motion.div>
  );
};