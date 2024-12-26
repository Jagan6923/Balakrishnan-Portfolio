import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  level: number;
  description: string;
}

export const SkillCard = ({ icon: Icon, title, level, description }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white/5 rounded-xl backdrop-blur-sm"
    >
      <Icon className="w-10 h-10 mb-4 text-white/80" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="w-full h-2 bg-white/10 rounded-full mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-white rounded-full"
        />
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
};