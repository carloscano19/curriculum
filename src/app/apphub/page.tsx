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
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      iconBorder: "border-emerald-100",
    },
    {
      title: "GEO Performance Auditor",
      description: "Data visualization tool based on GSC to identify regional search opportunities.",
      href: "https://carloscanofernandez.com/geo-auditor/",
      icon: Globe,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
    },
    {
      title: "Data Analysis Suite",
      description: "Data processing dashboard for automated insights extraction and log file analysis.",
      href: "https://carloscanofernandez.com/data-analysis/",
      icon: Terminal,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-100",
    },
    {
      title: "AI Content Brief Studio",
      description: "Intelligent generator for SEO-optimized content structures powered by LLMs.",
      href: "https://carloscanofernandez.com/brief-generator/",
      icon: Sparkles,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      iconBorder: "border-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 flex flex-col relative overflow-hidden font-sans">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      {/* Subtle Light Effects */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 w-full p-6 flex items-center justify-between mx-auto" style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
             <span className="text-sm font-bold tracking-tighter">{`</>`}</span>
          </div>
          <span className="text-slate-900 font-bold text-base tracking-tight">AppHub</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center">
        <div className="mb-16 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
               My Ecosystem
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
            Applications & <span className="text-blue-600">Tools</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
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
                className="group relative p-8 rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top Row: Icon & Link Arrow */}
                <div className="relative flex justify-between items-start mb-6 pb-4 border-b border-slate-50">
                  <div className={`p-3 rounded-xl ${app.iconBg} border ${app.iconBorder} transition-colors ${app.iconColor}`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:text-slate-900 group-hover:bg-slate-100 transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{app.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 font-medium">{app.description}</p>
                </div>

                {/* Bottom Row */}
                <div className="relative pt-4 flex items-center justify-between mt-auto border-t border-slate-50">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-wider">Launch Application</span>
                  <div className="relative flex items-center justify-center w-4 h-4">
                    <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500/20 group-hover:w-4 group-hover:h-4 animate-pulse transition-all duration-300"></span>
                    <span className="relative w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-xs font-bold text-slate-400 uppercase tracking-widest" style={{ borderTop: '1px solid rgba(0,0,0,0.03)' }}>
        &copy; 2026 Carlos Cano Fernández • All systems operational
      </footer>
    </div>
  );
}
