import { FadeIn } from './ui/fade-in';
import { TechnicalSkills } from './skills/technical-skills';
import { SoftwareSkills } from './skills/software-skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        </FadeIn>
        
        <div className="space-y-20">
          <TechnicalSkills />
          <SoftwareSkills />
        </div>
      </div>
    </section>
  );
};