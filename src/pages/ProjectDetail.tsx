import { Fragment } from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowDown, ArrowLeft, ArrowRight, Check, Download } from 'lucide-react';
import { PROJECTS, getProject } from '../data/projects';
import NotFound from './NotFound';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import type { Project, ProjectDetail } from '../types';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = getProject(id);
  if (!project) return <NotFound />;
  return <ProjectDetailView key={project.id} project={project} />;
}

function ProjectDetailView({ project }: { project: Project }) {
  useDocumentTitle(project.title);
  const { detail, accent } = project;

  const position = PROJECTS.indexOf(project);
  const next = PROJECTS[(position + 1) % PROJECTS.length];

  const sections: { id: string; title: string; content: React.ReactNode }[] = [
    { id: 'overview', title: 'Overview', content: <Paragraphs items={detail.overview} /> },
    { id: 'role', title: 'What I did', content: <Responsibilities items={detail.responsibilities} accent={accent} /> },
    { id: 'flow', title: detail.flowTitle, content: <FlowDiagram steps={detail.flow} accent={accent} /> },
    { id: 'features', title: 'Key features', content: <Features items={detail.features} accent={accent} /> },
    ...(detail.challenges.length
      ? [{ id: 'challenges', title: 'Problems I solved', content: <Challenges detail={detail} accent={accent} /> }]
      : []),
    { id: 'architecture', title: 'Architecture', content: <StackDiagram stack={detail.stack} accent={accent} /> },
  ];

  return (
    <article>
      {/* Hero */}
      <header className="w-full pt-12 pb-16" style={{ backgroundColor: `${accent}0f` }}>
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-brand mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All software
          </Link>
          <div className="flex items-center gap-5">
            <img
              src={project.icon}
              alt=""
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-[18px] border border-white shadow-md flex-shrink-0"
            />
            <div>
              <span className="block mb-2 text-xs font-bold tracking-widest uppercase" style={{ color: accent }}>
                {project.tag}
              </span>
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-slate-900">
                {project.title}
              </h1>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 mt-6 max-w-3xl leading-relaxed">{project.description}</p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 border-t border-slate-200/70 pt-8">
            {[
              { label: 'Users', value: project.users },
              { label: 'Tech', value: project.tech.join(', ') },
              { label: 'Outcome', value: project.highlight },
            ].map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">{m.label}</dt>
                <dd className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">{m.value}</dd>
              </div>
            ))}
          </dl>

          {(detail.appStoreUrl || detail.playStoreUrl) && (
            <div className="flex flex-wrap gap-3 mt-8">
              {detail.appStoreUrl && <StoreButton href={detail.appStoreUrl} label="App Store" dark />}
              {detail.playStoreUrl && <StoreButton href={detail.playStoreUrl} label="Google Play" />}
            </div>
          )}
        </div>
      </header>

      {/* Body with sticky table of contents */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="hidden lg:block lg:col-span-3">
          <nav aria-label="On this page" className="sticky top-28">
            <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">On this page</p>
            <ul className="space-y-2 border-l border-slate-100">
              {sections.map((s) => (
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

        <div className="lg:col-span-9 space-y-20 min-w-0">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight mb-5">
                {section.title}
              </h2>
              {section.content}
            </motion.section>
          ))}
        </div>
      </div>

      {/* Next project */}
      <Link
        to={`/apps/${next.id}`}
        className="group block border-t border-slate-100 bg-slate-50/60 hover:bg-indigo-50/50 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 py-14 flex items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">Next app</p>
            <p className="text-3xl font-display font-extrabold text-slate-900 mt-1 group-hover:text-brand">{next.title}</p>
          </div>
          <ArrowRight className="w-8 h-8 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </article>
  );
}

function StoreButton({ href, label, dark }: { href: string; label: string; dark?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        dark
          ? 'inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800'
          : 'inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:border-brand hover:text-brand'
      }
    >
      <Download className="w-4 h-4" /> {label}
    </a>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p) => (
        <p key={p} className="text-slate-600 leading-relaxed mb-4 max-w-3xl">
          {p}
        </p>
      ))}
    </>
  );
}

function Responsibilities({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="space-y-3 max-w-3xl">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-600 leading-relaxed">
          <span
            className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${accent}1a`, color: accent }}
          >
            <Check className="w-3 h-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Numbered steps in reading order, each pointing on to the next. */
function FlowDiagram({ steps, accent }: { steps: ProjectDetail['flow']; accent: string }) {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
      {steps.map((step, i) => (
        <li key={step.title} className="rounded-2xl border border-slate-100 bg-white p-4 flex gap-3">
          <span
            className="w-7 h-7 rounded-full text-xs font-bold text-white flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: accent }}
          >
            {i + 1}
          </span>
          <div className="flex-grow">
            <p className="font-bold text-slate-900 text-sm mt-1">{step.title}</p>
            {step.detail && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.detail}</p>}
          </div>
          {i < steps.length - 1 && <ArrowRight aria-hidden className="w-4 h-4 mt-1.5 text-slate-300 flex-shrink-0" />}
        </li>
      ))}
    </ol>
  );
}

function Features({ items, accent }: { items: ProjectDetail['features']; accent: string }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((f) => (
        <li key={f.title} className="rounded-2xl border border-slate-100 bg-white p-6">
          <span className="block w-8 h-1 rounded-full mb-4" style={{ backgroundColor: accent }} />
          <p className="font-bold text-slate-900">{f.title}</p>
          <p className="text-sm text-slate-500 mt-1 leading-relaxed">{f.detail}</p>
        </li>
      ))}
    </ul>
  );
}

function Challenges({ detail, accent }: { detail: ProjectDetail; accent: string }) {
  return (
    <div className="space-y-6">
      {detail.challenges.map((c, i) => (
        <div key={c.title} className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8">
          <p className="font-mono text-xs font-bold" style={{ color: accent }}>
            0{i + 1}
          </p>
          <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">{c.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-rose-600">Problem</p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{c.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-emerald-600">What I did</p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{c.solution}</p>
            </div>
          </div>
        </div>
      ))}
      {detail.illustration === 'dual-screen' && <DualScreenIllustration accent={accent} />}
    </div>
  );
}

/** Layers stacked top to bottom, with the parts I was involved in highlighted. */
function StackDiagram({ stack, accent }: { stack: ProjectDetail['stack']; accent: string }) {
  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-5 text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm border-2" style={{ borderColor: accent, backgroundColor: `${accent}1a` }} />
          Me
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm border border-slate-200 bg-white" />
          Others
        </span>
      </div>
      <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-4 sm:p-6">
        {stack.map((layer, i) => (
          <Fragment key={layer.layer}>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              <p className="sm:col-span-3 font-mono text-[10px] font-bold tracking-widest uppercase text-slate-400">
                {layer.layer}
              </p>
              <ul className="sm:col-span-9 flex flex-wrap gap-3">
                {layer.parts.map((part) => (
                  <li
                    key={part.name}
                    className={`rounded-xl px-4 py-3 bg-white ${part.mine ? 'border-2' : 'border border-slate-200'}`}
                    style={part.mine ? { borderColor: accent, backgroundColor: `${accent}0d` } : undefined}
                  >
                    <span className="block text-sm font-semibold text-slate-800">{part.name}</span>
                    {part.note && <span className="block text-[11px] text-slate-500 mt-0.5">{part.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
            {i < stack.length - 1 && (
              <div aria-hidden className="sm:grid sm:grid-cols-12 py-2">
                <ArrowDown className="w-4 h-4 text-slate-300 sm:col-start-4" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/** A drawing of the dual-screen POS: the cashier's screen and the customer display. */
function DualScreenIllustration({ accent }: { accent: string }) {
  return (
    <figure className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8">
      <svg viewBox="0 0 640 300" className="w-full h-auto" role="img" aria-labelledby="dual-screen-title">
        <title id="dual-screen-title">
          Dual-screen POS: the cashier screen runs the POS, the second screen shows the customer ads and the order total
        </title>
        {/* Cashier screen */}
        <rect x="20" y="20" width="360" height="220" rx="14" fill="#1e293b" />
        <rect x="32" y="32" width="336" height="196" rx="6" fill="#f8fafc" />
        <rect x="32" y="32" width="336" height="26" rx="6" fill={accent} />
        <text x="44" y="50" fontSize="12" fontWeight="700" fill="#fff">POS · Table 12</text>
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <rect key={`${r}${c}`} x={44 + c * 66} y={68 + r * 50} width="58" height="42" rx="6" fill="#e2e8f0" />
          )),
        )}
        <rect x="250" y="68" width="106" height="148" rx="6" fill="#fff" stroke="#e2e8f0" />
        {[0, 1, 2, 3].map((r) => (
          <rect key={r} x="260" y={80 + r * 18} width={r % 2 ? 60 : 80} height="8" rx="4" fill="#cbd5e1" />
        ))}
        <rect x="260" y="188" width="86" height="20" rx="5" fill={accent} />
        <rect x="160" y="240" width="80" height="30" fill="#334155" />
        <rect x="110" y="268" width="180" height="12" rx="6" fill="#334155" />
        <text x="200" y="298" fontSize="12" textAnchor="middle" fill="#64748b">Cashier screen · POS app</text>

        {/* Customer display */}
        <rect x="420" y="70" width="200" height="140" rx="12" fill="#1e293b" />
        <rect x="430" y="80" width="180" height="120" rx="5" fill="#f8fafc" />
        <rect x="440" y="90" width="160" height="58" rx="4" fill={accent} opacity="0.85" />
        <text x="520" y="124" fontSize="13" fontWeight="700" textAnchor="middle" fill="#fff">Today’s promo</text>
        <text x="440" y="172" fontSize="11" fill="#475569">Total</text>
        <text x="600" y="172" fontSize="16" fontWeight="800" textAnchor="end" fill="#0f172a">RM 48.50</text>
        <rect x="500" y="210" width="40" height="40" fill="#334155" />
        <text x="520" y="298" fontSize="12" textAnchor="middle" fill="#64748b">Customer display · second app</text>
      </svg>
      <figcaption className="text-xs text-slate-500 mt-3 leading-relaxed">
        What we were after: the cashier uses the POS on the main screen while a separate app on the customer-facing
        screen shows ads and the order total. Illustration, not a screenshot.
      </figcaption>
    </figure>
  );
}
