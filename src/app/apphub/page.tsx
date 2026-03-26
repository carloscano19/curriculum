import Link from "next/link";
import { ArrowLeft, LineChart, Globe, Terminal, Sparkles, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "AppHub | Carlos Cano",
  description: "Directory of specialized SEO tools, custom dashboards, and automated systems.",
};

export default function AppHub() {
  const apps = [
    {
      title: "Redirect Master",
      description: "Advanced engine for bulk redirection management and HTTP status validation.",
      href: "https://carloscanofernandez.com/redirectmaster/",
      icon: LineChart,
      iconColor: "text-emerald-400",
      bgHover: "hover:bg-emerald-500/5",
      borderHover: "hover:border-emerald-500/30",
    },
    {
      title: "GEO Performance Auditor",
      description: "Data visualization tool based on GSC to identify regional search opportunities.",
      href: "https://carloscanofernandez.com/geo-auditor/",
      icon: Globe,
      iconColor: "text-cyan-400",
      bgHover: "hover:bg-cyan-500/5",
      borderHover: "hover:border-cyan-500/30",
    },
    {
      title: "Data Analysis Suite",
      description: "Data processing dashboard for automated insights extraction and log file analysis.",
      href: "https://carloscanofernandez.com/data-analysis/",
      icon: Terminal,
      iconColor: "text-amber-400",
      bgHover: "hover:bg-amber-500/5",
      borderHover: "hover:border-amber-500/30",
    },
    {
      title: "AI Content Brief Studio",
      description: "Intelligent generator for SEO-optimized content structures powered by LLMs.",
      href: "https://carloscanofernandez.com/brief-generator/",
      icon: Sparkles,
      iconColor: "text-purple-400",
      bgHover: "hover:bg-purple-500/5",
      borderHover: "hover:border-purple-500/30",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30 flex flex-col relative overflow-hidden font-sans">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      {/* Glow Effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 w-full p-6 flex items-center justify-between mx-auto opacity-100" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Link href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-white/10 shadow-sm backdrop-blur-md">
          <span className="text-blue-400 font-mono font-bold text-sm tracking-tighter">{`</>`}</span>
          <span className="text-white font-semibold text-sm tracking-wide">AppHub</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center">
        {/* Title Section */}
        <div className="mb-16 text-center max-w-2xl text-white">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <Sparkles size={14} /> My Ecosystem
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Applications & <span className="text-blue-500">Tools</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
            An interactive directory of specialized SEO tools, custom dashboards, and automated systems I've developed to scale operations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {apps.map((app, index) => {
            const Icon = app.icon;
            return (
              <a 
                key={index}
                href={app.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group relative p-8 rounded-2xl bg-[#111111]/80 backdrop-blur-sm border border-white/5 transition-all duration-300 hover:-translate-y-1 ${app.borderHover} ${app.bgHover} overflow-hidden flex flex-col h-full shadow-xl hover:shadow-2xl`}
              >
                {/* Highlight Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top Row: Icon & Link Arrow */}
                <div className="relative flex justify-between items-start mb-6 text-white pb-4 border-b border-white/5">
                  <div className={`p-3.5 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors shadow-inner ${app.iconColor}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="p-2.5 rounded-full bg-white/5 text-slate-500 group-hover:text-white group-hover:bg-white/10 transition-colors shadow-sm">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 flex flex-col text-white">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors tracking-tight">{app.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{app.description}</p>
                </div>

                {/* Bottom Row */}
                <div className="relative pt-4 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">Launch Application</span>
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500/20 group-hover:w-4 group-hover:h-4 transition-all duration-300"></span>
                    <span className="relative w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-sm text-slate-500" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        &copy; 2026 Carlos Cano Fernández. All systems operational.
      </footer>
    </div>
  );
}
