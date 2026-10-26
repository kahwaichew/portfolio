import { motion } from 'motion/react';
import { Search, Target, Lightbulb, PenTool, FlaskConical } from 'lucide-react';
import type { ProcessPhase } from '../types';

export const PHASES: { id: ProcessPhase; title: string; detail: string; icon: typeof Search }[] = [
  { id: 'discover', title: 'Discover', detail: 'Interviews, surveys, competitor audits', icon: Search },
  { id: 'define', title: 'Define', detail: 'Personas, problem statements, HMW', icon: Target },
  { id: 'ideate', title: 'Ideate', detail: 'User flows, IA, low-fi wireframes', icon: Lightbulb },
  { id: 'design', title: 'Design', detail: 'Design systems, hi-fi UI, prototypes', icon: PenTool },
  { id: 'test', title: 'Test', detail: 'Usability tests, iteration, hand-off', icon: FlaskConical },
];

export default function Process() {
  return (
    <section id="process" className="w-full py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-12 flex flex-col items-start">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-pink-50 text-pink-700 mb-3 border border-pink-100">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            How I design
          </h2>
          <p className="text-slate-500 font-medium text-sm mt-2 tracking-wide">
            A design-thinking workflow, and as a developer I also ship what I design
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PHASES.map((phase, index) => (
            <motion.li
              key={phase.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-slate-100 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-indigo-50 text-brand flex items-center justify-center">
                  <phase.icon className="w-5 h-5" />
                </span>
                <span className="font-mono text-xs font-bold text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">{phase.title}</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{phase.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
