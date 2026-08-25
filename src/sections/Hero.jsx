import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { NoiseBackground } from "@/components/ui/noise-background";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-display font-bold leading-[1.1] tracking-tighter mb-6">
                Siddharth <br />
                <span className="text-accent">Kumar Rai</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl"
            >
              <p className="text-base md:text-lg lg:text-xl text-white/50 font-light leading-relaxed mb-8 md:mb-10">
                Full Stack Developer | AI Engineer. Building the future with <span className="text-white font-medium">MERN Stack</span> and <span className="text-white font-medium">AI Intelligence</span>.
              </p>

              <div className="flex flex-wrap gap-4 items-center mb-10 md:mb-12">
                <NoiseBackground
                  containerClassName="w-fit p-[2px] rounded-full"
                  gradientColors={[
                    "rgb(242, 125, 38)",
                    "rgb(255, 100, 150)",
                    "rgb(255, 200, 100)",
                  ]}
                >
                  <a
                    href="#projects"
                    className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-900 via-black to-neutral-900 px-6 py-3 text-white font-medium text-sm md:text-base flex items-center gap-2 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset,0px_1px_0px_0px_rgba(0,0,0,0.8)] transition-all duration-150 active:scale-98"
                  >
                    <span>View Projects</span>
                    <ArrowRight size={18} />
                  </a>
                </NoiseBackground>

                <NoiseBackground
                  containerClassName="w-fit p-[2px] rounded-full"
                  gradientColors={[
                    "rgb(100, 150, 255)",
                    "rgb(255, 100, 150)",
                    "rgb(255, 200, 100)",
                  ]}
                >
                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-900 via-black to-neutral-900 px-6 py-3 text-white font-medium text-sm md:text-base flex items-center gap-2 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.1)_inset,0px_1px_0px_0px_rgba(0,0,0,0.8)] hover:text-white/90 transition-all duration-150 active:scale-98"
                  >
                    <span>Download Resume</span>
                    <Download size={18} />
                  </a>
                </NoiseBackground>
              </div>

              {/* Social Icons from Image */}
              <div className="flex gap-6 text-white/40">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  <Github size={22} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  <Mail size={22} />
                </a>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  <Phone size={22} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-2 border-accent/20 shadow-2xl shadow-accent/10 bg-neutral-900">
              <img
                src="/my-photo.jpg"
                alt="Siddharth Kumar Rai"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent" />
            </div>
            {/* Decorative element - Pulsing Glow */}
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] -z-10 scale-110" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
