import { motion } from "motion/react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import ProjectSlideshow from "../components/ProjectSlideshow";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col gap-8 lg:gap-12 items-center mb-24 lg:mb-40 last:mb-0 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-3/5 group">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-neutral-900 aspect-[16/10]">
          <ProjectSlideshow images={project.images} />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 flex flex-col lg:items-start text-left">
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
          {project.title}
        </h3>

        {/* Description Box */}
        <div className="p-6 md:p-8 rounded-2xl bg-neutral-900/80 border border-white/5 backdrop-blur-sm shadow-2xl mb-8 relative z-10 hover:border-accent/20 transition-colors">
          <p className="text-white/70 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-white/40 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-accent transition-all transform hover:scale-110"
            title="View Code"
          >
            <Github size={24} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-accent transition-all transform hover:scale-110"
              title="Live Demo"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="text-accent">Projects</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              A selection of my recent projects. I build products that are scalable, 
              performant, and beautifully designed.
            </p>
          </div>
          <a
            href="https://github.com/SiddharthRai22"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 group"
          >
            View all on GitHub <ArrowUpRight size={20} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
