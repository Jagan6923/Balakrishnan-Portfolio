import {
  Camera,
  Video,
  Send,
  Aperture,
  Lightbulb,
  Mountain,
} from "lucide-react";
import { SkillCard } from "./skill-card";
import { FadeIn } from "../ui/fade-in";

const technicalSkills = [
  {
    icon: Camera, 
    title: "Camera Operation",
    level: 95,
    description:
      "Expert in DSLR/Mirrorless cameras, manual settings, and advanced shooting techniques.",
  },
  {
    icon: Lightbulb, // Icon for lighting
    title: "Lighting",
    level: 95,
    description:
      "Studio lighting, natural light manipulation, and flash photography.",
  },
  {
    icon: Video, // Icon for videography
    title: "Videography",
    level: 90,
    description:
      "Professional video capture, stabilization, and cinematography.",
  },
  {
    icon: Send, // Icon for scriptwriting
    title: "Scriptwriting",
    level: 80,
    description:
      "Crafting compelling narratives, engaging dialogues, and impactful storytelling for various mediums.",
  },
  {
    icon: Mountain, // Icon for composition
    title: "Composition",
    level: 90,
    description:
      "Advanced knowledge of framing, rule of thirds, and visual storytelling.",
  },
  {
    icon: Aperture, // Icon for photography
    title: "Photography",
    level: 95,
    description:
      "Capturing moments with precision, creativity, and a deep understanding of visual storytelling.",
  },
];

export const TechnicalSkills = () => {
  return (
    <div className="space-y-8">
      <FadeIn>
        <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalSkills.map((skill, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <SkillCard {...skill} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
