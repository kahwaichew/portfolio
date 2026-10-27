import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, Frame, Quote } from 'lucide-react';
import { CASE_STUDIES, getCaseStudy } from '../data/caseStudies';
import { PHASES } from '../components/Process';
import CaseImageView from '../components/CaseImageView';
import Lightbox from '../components/Lightbox';
import NotFound from './NotFound';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import type { CaseImage, CaseSection, CaseStudy } from '../types';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  if (!study) return <NotFound />;
  // Keyed so lightbox state resets when moving between case studies
  return <CaseStudyView key={study.slug} study={study} />;
}

function CaseStudyView({ study }: { study: CaseStudy }) {
  useDocumentTitle(`${study.title} case study`);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // One flat list so the lightbox can step through every image on the page
  const allImages = useMemo(() => study.sections.flatMap((s) => s.images ?? []), [study]);
  const openImage = (image: CaseImage) => setLightboxIndex(allImages.indexOf(image));

  const position = CASE_STUDIES.indexOf(study);
  const next = CASE_STUDIES[(position + 1) % CASE_STUDIES.length];

  const meta = [
    { label: 'Role', value: study.role },
    { label: 'Platform', value: study.platform },
    { label: 'Timeline', value: study.timeline },
    { label: 'Tools', value: study.tools.join(', ') },
  ].filter((m) => m.value);

  return (
    <article>
      {/* Hero */}
      <header className="w-full pt-12 pb-16" style={{ backgroundColor: `${study.accent}0f` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/#work"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-brand mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All work
          </Link>
          <span className="block mb-3 text-xs font-bold tracking-widest text-indigo-600 uppercase">
            {study.platform} case study
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-slate-900">
            {study.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mt-4 max-w-3xl leading-relaxed">
            {study.tagline}
          </p>

          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10 border-t border-slate-200/70 pt-8">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">
                  {m.label}
                </dt>
                <dd className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">{m.value}</dd>
              </div>
            ))}
          </dl>

          {(study.figmaUrl || study.prototypeUrl) && (
            <div className="flex flex-wrap gap-3 mt-8">
              {study.figmaUrl && (
                <a
                  href={study.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800"
                >
                  <Frame className="w-4 h-4" /> Open Figma file
                </a>
              )}
              {study.prototypeUrl && (
                <a
                  href={study.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:border-brand hover:text-brand"
                >
                  <ExternalLink className="w-4 h-4" /> Try the prototype
                </a>
              )}
            </div>
          )}

          <button
            onClick={() => setLightboxIndex(-1)}
            className="block w-full mt-12 rounded-3xl overflow-hidden border border-white shadow-xl cursor-zoom-in"
            aria-label={`Enlarge: ${study.cover.alt}`}
          >
            <CaseImageView image={study.cover} eager className="w-full aspect-[16/9] object-cover" />
          </button>
        </div>
      </header>

      {/* Process stepper */}
      <nav aria-label="Design process" className="border-b border-slate-100 bg-white">
        <ol className="max-w-7xl mx-auto px-6 py-5 flex gap-2 overflow-x-auto">
          {PHASES.map((phase, i) => {
            const firstSection = study.sections.find((s) => s.phase === phase.id);
            return (
              <li key={phase.id} className="flex items-center gap-2 shrink-0">
                {firstSection ? (
                  <a
                    href={`#${firstSection.id}`}
                    className="px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-brand hover:bg-brand hover:text-white transition-colors"
                  >
                    {phase.title}
                  </a>
                ) : (
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold text-slate-300">
                    {phase.title}
                  </span>
                )}
                {i < PHASES.length - 1 && <span className="text-slate-300">→</span>}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Body with sticky table of contents */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="hidden lg:block lg:col-span-3">
          <nav aria-label="On this page" className="sticky top-28">
            <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">
              On this page
            </p>
            <ul className="space-y-2 border-l border-slate-100">
              {study.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block pl-4 -ml-px border-l-2 border-transparent text-sm text-slate-500 hover:text-brand hover:border-brand"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-9 space-y-20">
          {study.sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28"
            >
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase" style={{ color: study.accent }}>
                {PHASES.find((p) => p.id === section.phase)?.title}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight mt-1 mb-5">
                {section.title}
              </h2>
              {section.body?.map((p) => (
                <p key={p} className="text-slate-600 leading-relaxed mb-4 max-w-3xl">
                  {p}
                </p>
              ))}
              <SectionContent section={section} />
              <SectionImages section={section} onOpen={openImage} />
            </motion.section>
          ))}
        </div>
      </div>

      {/* Next case study */}
      {next.slug !== study.slug && (
        <Link
          to={`/work/${next.slug}`}
          className="group block border-t border-slate-100 bg-slate-50/60 hover:bg-indigo-50/50 transition-colors"
        >
          <div className="max-w-7xl mx-auto px-6 py-14 flex items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">Next case study</p>
              <p className="text-3xl font-display font-extrabold text-slate-900 mt-1 group-hover:text-brand">
                {next.title}
              </p>
            </div>
            <ArrowRight className="w-8 h-8 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      )}

      <Lightbox
        images={lightboxIndex === -1 ? [study.cover] : allImages}
        index={lightboxIndex === -1 ? 0 : lightboxIndex}
        onIndexChange={setLightboxIndex}
        title={study.title}
      />
    </article>
  );
}

function SectionContent({ section }: { section: CaseSection }) {
  switch (section.kind) {
    case 'insights':
      return (
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {section.items.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-100 bg-white p-6">
              <dd className="text-3xl font-display font-extrabold text-slate-900">{item.value}</dd>
              <dt className="text-sm text-slate-500 mt-1">{item.label}</dt>
            </div>
          ))}
        </dl>
      );
    case 'personas':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {section.personas.map((p) => (
            <div key={p.name} className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-indigo-50 text-brand font-display font-extrabold text-lg flex items-center justify-center">
                  {p.name[0]}
                </span>
                <div>
                  <p className="font-display font-extrabold text-lg text-slate-900">
                    {p.name}, {p.age}
                  </p>
                  <p className="text-xs text-slate-500">{p.occupation}</p>
                </div>
              </div>
              <blockquote className="flex gap-2 text-slate-700 italic mt-5 text-sm leading-relaxed">
                <Quote className="w-4 h-4 shrink-0 text-slate-300" />
                {p.quote}
              </blockquote>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-sm">
                <PersonaList title="Goals" items={p.goals} tone="text-emerald-600" />
                <PersonaList title="Frustrations" items={p.frustrations} tone="text-rose-600" />
              </div>
            </div>
          ))}
        </div>
      );
    case 'steps':
      return (
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {section.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-slate-100 bg-white p-6 flex gap-4">
              <span className="font-mono text-sm font-bold text-brand">0{i + 1}</span>
              <div>
                <p className="font-bold text-slate-900">{step.title}</p>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case 'palette':
      return (
        <div className="mt-6 space-y-6">
          <ul className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {section.colors.map((c) => (
              <li key={c.hex} className="rounded-2xl border border-slate-100 overflow-hidden bg-white">
                <span className="block h-20" style={{ backgroundColor: c.hex }} />
                <span className="block px-3 py-2">
                  <span className="block text-xs font-semibold text-slate-800">{c.name}</span>
                  <span className="block font-mono text-[11px] text-slate-500">{c.hex}</span>
                </span>
              </li>
            ))}
          </ul>
          {section.fonts.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {section.fonts.map((f) => (
                <li key={f} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm text-slate-600">
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    default:
      return null;
  }
}

function PersonaList({ title, items, tone }: { title: string; items: string[]; tone: string }) {
  return (
    <div>
      <p className={`font-mono text-[10px] font-bold tracking-widest uppercase ${tone}`}>{title}</p>
      <ul className="mt-2 space-y-1.5 text-slate-600 list-disc pl-4">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SectionImages({ section, onOpen }: { section: CaseSection; onOpen: (image: CaseImage) => void }) {
  if (!section.images?.length) return null;
  const mobile = section.kind === 'gallery' && section.layout === 'mobile';
  const screenRatio = section.kind === 'gallery' ? (section.screenRatio ?? 390 / 844) : undefined;
  const gridClass = mobile
    ? 'grid-cols-2 sm:grid-cols-3'
    : section.images.length > 1
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1';

  return (
    <div className={`grid gap-6 mt-8 ${gridClass}`}>
      {section.images.map((image) => (
        <figure key={image.src}>
          <button
            onClick={() => onOpen(image)}
            className="block w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow cursor-zoom-in"
            aria-label={`Enlarge: ${image.alt}`}
          >
            {mobile ? (
              // Long scrolling screens are cut to the phone height here and shown whole in the lightbox
              <div style={{ aspectRatio: screenRatio }}>
                <CaseImageView image={image} className="w-full h-full object-cover object-top" />
              </div>
            ) : (
              <CaseImageView image={image} className="w-full h-auto" />
            )}
          </button>
          {image.caption && (
            <figcaption className="text-xs text-slate-500 mt-2 leading-relaxed">{image.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
