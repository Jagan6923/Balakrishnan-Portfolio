import { Camera } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Camera className="w-6 h-6" />
            <a className="text-lg font-semibold" href="#hero">BALA</a>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};