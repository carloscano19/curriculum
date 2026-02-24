"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Send, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to drop me a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:carlos.cano.fernandez@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                    carlos.cano.fernandez@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-slate-400">Madrid, Spain (Remote Available)</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/carlos-cano-fernandez-seo-aso-manager/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/carloscano19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form action="https://formspree.io/f/mqaeobnd" method="POST" className="bg-white p-8 rounded-3xl shadow-2xl text-slate-900">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
