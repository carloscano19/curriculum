import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { CoreSoftSkills } from "../components/CoreSoftSkills";
import { Clients } from "../components/Clients";
import { TechStack } from "../components/TechStack";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { cvData } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero data={cvData.hero} />
        <About data={cvData.about} />
        <Skills data={cvData.specialization} />
        <CoreSoftSkills />
        <Clients data={cvData.clients} />
        <TechStack />
        <Experience data={cvData.experience} />
        <Education data={cvData.education} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
