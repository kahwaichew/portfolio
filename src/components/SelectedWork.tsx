import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import CaseImageView from './CaseImageView';

export default function SelectedWork() {
  return (
    <section id="work" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-14 flex flex-col items-start">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#fef3c7] text-amber-700 mb-3 border border-amber-100">
            UI/UX Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Selected Work
          </h2>
          <p className="text-slate-500 font-medium text-sm mt-2 tracking-wide">
            From research and wireframes to design systems and tested prototypes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <Link
                to={`/work/${study.slug}`}
                className="group block rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-xs hover:shadow-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-brand"
              >
                <div
                  className={`overflow-hidden ${index === 0 ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[4/3]'}`}
                  style={{ backgroundColor: `${study.accent}14` }}
                >
                  <CaseImageView
                    image={study.cover}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                        {study.platform}
                      </span>
                      {study.isConcept && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500">
                          Concept
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight group-hover:text-brand transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2 max-w-xl">
                      {study.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="shrink-0 w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
