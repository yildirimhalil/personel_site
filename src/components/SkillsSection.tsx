import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { useStore } from '../store/useStore';
import { translations } from '../data/translations';

export const SkillsSection = () => {
  const { language } = useStore();
  const t = translations[language];

  const categories = [
    { key: 'frontend', title: t.frontend, skills: skills.frontend },
    { key: 'backend', title: t.backend, skills: skills.backend },
    { key: 'database', title: t.database, skills: skills.database },
    { key: 'tools', title: t.tools, skills: skills.tools },
  ];

  return (
    <div className="grid gap-8">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
          className="bg-white/50 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-300">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1
                }}
                className="group relative bg-white dark:bg-white/10 rounded-xl p-4 flex flex-col items-center gap-3 border border-gray-100 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};