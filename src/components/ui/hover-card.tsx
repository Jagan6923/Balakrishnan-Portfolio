import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface HoverCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export const HoverCard = ({ title, description, imageUrl, className }: HoverCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        'relative group overflow-hidden rounded-xl',
        'cursor-pointer transition-all duration-500',
        className
      )}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
      
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover aspect-[3/4]"
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};