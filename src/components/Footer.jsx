import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-xl font-display font-bold tracking-tighter">
              SIDDHARTH<span className="text-accent">.</span>
            </p>
            <p className="text-white/40 text-sm mt-2">
              © {new Date().getFullYear()} Siddharth Kumar Rai. All rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
