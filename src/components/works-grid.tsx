import { motion } from "framer-motion";
import { HoverCard } from "./ui/hover-card";
import { FadeIn } from "./ui/fade-in";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";
import work6 from "../assets/work6.jpg";
import work7 from "../assets/work7.jpg";
import work8 from "../assets/work8.jpg";
import work9 from "../assets/work9.jpg";
const works = [
  {
    title: "Event Photography",
    description: "MTR Food Festivel 2024 - Bangalore",
    imageUrl: work1,
  },
  {
    title: "Art & Culture",
    description: "Jatayu Earth's Center",
    imageUrl: work6,
  },
  {
    title: "Fashion ",
    description: "Kavya Manohar Shetty  - Model",
    imageUrl: work4,
  },
  {
    title: "Nature & Landscapes",
    description: "Sirumalai Reserve Forest - Dindigul",
    imageUrl: work5,
  },
  {
    title: "Event Photography",
    description: "MTR Food Festivel 2024 - Bangalore",
    imageUrl: work2,
  },
  {
    title: "Street Photography",
    description: "Chidambara Vilas",
    imageUrl: work9,
  },
];

export const WorksGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {works.map((work, index) => (
        <FadeIn
          key={index}
          delay={index * 0.1}
          direction={index % 2 === 0 ? "left" : "right"}
        >
          <HoverCard {...work} className="h-[400px]" />
        </FadeIn>
      ))}
    </div>
  );
};
