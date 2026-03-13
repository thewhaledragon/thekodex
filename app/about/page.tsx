import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | TheWhaleDragonKodex',
  description:
    'AI/ML researcher building multi-agent systems, financial forecasting models, and simulation pipelines.',
}

/* ─────────────────────────── Timeline data ─────────────────────────── */

type TimelineEntry = {
  year: string
  kind: 'work' | 'edu'
  label: string       // company / institution
  role: string        // job title / degree
  items: string[]
}

const timeline: TimelineEntry[] = [
  {
    year: 'Mar 2025 – Present',
    kind: 'work',
    label: '████████████',
    role: 'AI / ML Researcher',
    items: [
      'Designed multi-stage pipeline for B2B sales interaction simulation using Perplexity API, LinkedIn data, and LLM-based summarisation.',
      'Built custom multi-agent finance assistant (OpenAI SDK) with async query handling, intent routing, and specialised agents for stock charts, economic data, and company reports.',
      'Developed SARIMAX forecasting model for stock and crypto prices augmented with LLM-driven sentiment analysis.',
      'Built geospatial intelligence tools using MapLibre / Deck.gl and a scraping + embedding pipeline backed by PostgreSQL + pgvector.',
    ],
  },
  {
    year: 'Jul – Sep 2024',
    kind: 'work',
    label: '████████',
    role: 'AI Research Intern',
    items: [
      'Fine-tuned VITS and StyleTTS2 TTS models on custom datasets with multi-stage training pipelines.',
      'Added multispeaker support and voice-cloning capability.',
      'Built a Gradio interface to make the pipeline accessible to non-technical users.',
    ],
  },
  {
    year: '2022 – 2024',
    kind: 'edu',
    label: '████████████████████████████',
    role: 'MSc Astronomy & Astrophysics',
    items: [
      'Thesis: Alien Megastructures in Transit — trained a CNN to reconstruct 2D opacity maps (38×38 px) from 1D transit light curves.',
      'Generated ~200 k synthetic training samples using Bézier curves and EightBitTransit simulations.',
      'Applied model to Kepler dataset; presented at Strange New Worlds (2023), ASI 42nd Meeting, and Interstellar Frontiers 2024 (Perth).',
    ],
  },
  {
    year: '2018 – 2022',
    kind: 'edu',
    label: '█████████████████████████████████',
    role: 'BTech Electrical & Electronics Engineering',
    items: [
      'Thesis: Thrust Vector Control of Solid Propellant Model Rocket — modelled 3-DOF dynamics in MATLAB/Simulink, implemented PID control, built Arduino hardware prototype. Published at IEEE INCOFT 2023.',
      'Internship: Designed open-circuit fault-tolerant half-bridge LLC resonant converter for satellite applications; published at IEEE SPICES 2022.',
    ],
  },
]

/* ─────────────────────────── Components ─────────────────────────── */

function KindBadge({ kind }: { kind: 'work' | 'edu' }) {
  return (
    <span
      className="inline-block text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full"
      style={{
        background: kind === 'work' ? 'var(--tag-bg)' : 'var(--surface2)',
        color: kind === 'work' ? 'var(--tag-text)' : 'var(--muted)',
      }}
    >
      {kind === 'work' ? 'Work' : 'Education'}
    </span>
  )
}

function TimelineItem({ entry, isLast }: { entry: TimelineEntry; isLast: boolean }) {
  return (
    <div className="relative flex gap-8 group">

      {/* ── Stem ── */}
      <div className="flex flex-col items-center">
        {/* dot */}
        <div
          className="relative z-10 mt-1 w-3 h-3 rounded-full border-2 flex-shrink-0 transition-colors duration-200"
          style={{
            borderColor: 'var(--accent)',
            background: 'var(--bg)',
          }}
          aria-hidden
        />
        {/* line */}
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{ background: 'var(--border)' }}
            aria-hidden
          />
        )}
      </div>

      {/* ── Content ── */}
      <div className="pb-14 flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <KindBadge kind={entry.kind} />
          <span className="text-xs text-[var(--muted)] font-medium">
            {entry.year}
          </span>
        </div>

        <p
          className="text-xs uppercase tracking-wider font-semibold mb-1"
          style={{ color: 'var(--accent)' }}
        >
          {entry.label}
        </p>

        <h3 className="text-lg font-semibold leading-snug text-[var(--text)] mb-4">
          {entry.role}
        </h3>

        <ul className="space-y-2">
          {entry.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-sm text-[var(--muted)] leading-relaxed">
              <span
                className="mt-[0.55rem] w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent2)' }}
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">

      <Header />

      <main className="mx-auto max-w-3xl px-6 py-24">

        {/* ── Hero ── */}
        <section className="mb-20">

          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-5"
            style={{ color: 'var(--accent)' }}>
            AI / ML Research
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-[var(--text)]">
            Building intelligent systems for{' '}
            <span className="gradient-text">finance</span>,{' '}
            <span className="gradient-text">simulation</span>, and research.
          </h1>

          <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl mb-10">
            AI/ML researcher with a background in astrophysics and electrical engineering.
            I design multi-agent LLM frameworks, financial forecasting models, and
            large-scale simulation pipelines — combining rigorous quantitative foundations
            with hands-on systems engineering.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--muted)] border-t border-[var(--border)] pt-6">
            {[
              '2× IEEE publications',
              '3 international conference presentations',
              '200 k+ synthetic training samples',
              'Multi-agent AI systems',
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

        </section>

        {/* ── Selected Work ── */}
        <section className="mb-20">

          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--muted)] mb-6">
            Selected Work
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Multi-Agent Finance Assistant',
                desc: 'Custom agent architecture for financial Q&A, chart generation, and economic data retrieval.',
              },
              {
                title: 'Sales Simulation Engine',
                desc: 'Multi-agent pipeline modelling B2B decision-maker units for realistic sales interaction simulation.',
              },
              {
                title: 'Megastructure Detection ML',
                desc: 'CNN reconstructing 2D opacity maps from transit light curves for astrophysical anomaly detection.',
              },
            ].map((p) => (
              <div
                key={p.title}
                className="glass-card rounded-xl p-5"
              >
                <h3 className="text-sm font-semibold text-[var(--text)] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* ── Timeline ── */}
        <section>

          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--muted)] mb-10">
            Experience & Education
          </h2>

          <div>
            {timeline.map((entry, i) => (
              <TimelineItem
                key={i}
                entry={entry}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}