import { motion } from "framer-motion";
import about from "../assets/about1.jpg";
import resume from "../assets/Balakrishnan_Resume.pdf";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-gray-300">
              With over a decade of experience in photography, I've developed a
              keen eye for capturing the perfect moment. My passion lies in
              creating visual stories that resonate with people.
            </p>
            <p className="text-gray-300">
              Whether it's a wedding, corporate event, or personal portrait
              session, I bring creativity and professionalism to every shoot.
            </p>
            <br />
            <div>
              <motion.a

                href={resume}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold 
                     rounded-full hover:bg-white/10 transition-all duration-200 shadow-lg"
              >
               Resume
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <img
              src={about}
              alt="Balakrishnan - Professional Photographer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
