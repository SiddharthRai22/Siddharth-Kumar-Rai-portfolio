import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              ABOUT <span className="text-accent">ME</span>
            </h2>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed max-w-2xl mb-12">
              <p>
                I am a <span className="text-white font-semibold">Computer Science Engineer</span> and <span className="text-white font-semibold">Full Stack Developer</span> specializing in the MERN stack and AI-powered applications. I enjoy building responsive, scalable web applications and exploring how AI can enhance real-world user experiences.
              </p>
              <p>
                I have worked on multiple projects involving modern technologies like <span className="text-white font-semibold">React, Node.js</span>, and LLM-based tools such as <span className="text-accent font-semibold">LangChain</span>. I am passionate about learning, problem-solving, and continuously improving my skills to build efficient and impactful solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Dots */}
            <div className="absolute -top-6 -right-6 grid grid-cols-5 gap-2 opacity-20 hidden md:grid">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-accent rounded-full" />
              ))}
            </div>

            <div className="p-8 md:p-12 bg-black border border-white/10 hover:border-accent transition-all duration-500 rounded-[2rem] relative z-10 shadow-2xl group hover:shadow-accent/5">
              <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-10 font-serif">
                "I believe that AI is not just a tool, but a partner in creating scalable, efficient, and intelligent systems that can truly make a difference in how we interact with technology."
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center border border-accent/30">
                  <span className="text-accent font-bold text-xl">SK</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Siddharth Kumar Rai</h4>
                  <p className="text-white/40 text-sm">Full Stack & AI Engineer</p>
                </div>
              </div>
            </div>

            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-accent/5 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
