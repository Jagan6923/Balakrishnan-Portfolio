import { Layers, Image, Film, Palette, Monitor, Cloud } from "lucide-react";
import { SkillCard } from "./skill-card";
import { FadeIn } from "../ui/fade-in";

const softwareSkills = [
  {
    icon: Layers,
    title: "Adobe Photoshop",
    level: 75,
    description: "Advanced photo manipulation, retouching, and compositing",
  },
  {
    icon: Image,
    title: "Adobe Lightroom",
    level: 90,
    description: "Professional color grading and photo organization",
  },
  {
    icon: Monitor,
    title: "DaVinci Resolve",
    level: 90,
    description: "Advanced color grading and video post-production",
  },
  {
    icon: Cloud,
    title: "Photo Management",
    level: 90,
    description: "Digital asset management and cloud backup solutions",
  },
];

export const SoftwareSkills = () => {
  return (
    <div className="space-y-8">
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-6">Software Proficiency</h3>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softwareSkills.map((skill, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <SkillCard {...skill} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
