import { motion } from 'motion/react';
import { education } from '../data/portfolio';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-4">Academic Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Education & <span className="text-accent">Background</span></h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 pb-12 last:pb-0 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-neutral-800 group-last:bottom-auto group-last:h-12" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-neutral-900 border-2 border-accent flex items-center justify-center text-accent z-10 group-hover:scale-110 transition-transform">
                <GraduationCap size={20} />
              </div>

              <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-accent/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h4 className="text-2xl font-display font-bold">{item.degree}</h4>
                  <div className="flex items-center gap-2 text-sm font-semibold text-neutral-500 bg-neutral-800 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {item.period}
                  </div>
                </div>
                <p className="text-lg font-medium text-neutral-300 mb-2">{item.institution}</p>
                <p className="text-neutral-400">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
