import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageIntro from '@/components/PageIntro'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | The Kodex',
  description:
    'AI/ML researcher building multi-agent systems, financial forecasting models, and simulation pipelines.',
}

export const dynamic = 'force-static'

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
      'Designed a multi-agent B2B sales simulation pipeline using Perplexity API, LinkedIn data, and LLM-driven decision-making agents.',
      'Developed a custom multi-agent finance assistant with intent-based routing and specialized agents for stock charts, economic data, and SEC reports.',
      'Built a SARIMAX forecasting model for stock and crypto prices, augmented with real-time LLM-driven sentiment analysis.',
      'Created geospatial intelligence tools using MapLibre/Deck.gl for interactive economic data visualization.',
      'Engineered a scraping and embedding pipeline for daily finance news using PostgreSQL + pgvector (HNSW indexing).',
    ],
  },
  {
    year: 'Jul – Sep 2024',
    kind: 'work',
    label: '████████',
    role: 'AI Research Intern',
    items: [
      'Fine-tuned VITS and StyleTTS2 text-to-speech models on custom datasets with multi-stage training pipelines.',
      'Implemented multispeaker support and voice-cloning capabilities for low-resource environments.',
      'Developed a Gradio-based interface to democratize access to the speech synthesis pipeline.',
    ],
  },
  {
    year: '2022 – 2024',
    kind: 'edu',
    label: '████████████████████████████',
    role: 'MSc Astronomy & Astrophysics',
    items: [
      'Thesis: Alien Megastructures in Transit — trained a CNN to reconstruct 2D opacity maps from 1D light curves with ~200k synthetic simulations.',
      'Achieved Folded MSE of 0.1615 on test data; presented at Strange New Worlds (2023) and Interstellar Frontiers 2024 (Perth).',
      'Applied deep learning models to the Kepler dataset to identify astrophysical anomalies.',
    ],
  },
  {
    year: '2018 – 2022',
    kind: 'edu',
    label: '█████████████████████████████████',
    role: 'BTech Electrical & Electronics Engineering',
    items: [
      'Thesis: Thrust Vector Control of Solid Propellant Model Rocket — PID-based pitch control modeled in MATLAB/Simulink and built with Arduino. Published at IEEE INCOFT 2023.',
      'Internship: Designed open-circuit fault-tolerant half-bridge LLC resonant converter for satellite power systems. Published at IEEE SPICES 2022.',
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
          className="relative z-10 mt-1 w-3 h-3 rounded-full border-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
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
          <div style={{ marginRight: '0.25rem' }}>
            <KindBadge kind={entry.kind} />
          </div>
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

        <ul className="space-y-2.5">
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

      <main className="page-main">
        <section className="mb-24 animate-fade-up">
          <PageIntro
            eyebrow="About Me"
            title="The Whale Dragon"
            description="Neural Network ❤️ Humanity."
          />

          <div className="text-[var(--muted)] leading-relaxed space-y-6 max-w-2xl">
            <p>
              I like learning about neural networks.
            </p>

            {/* <ul className="space-y-3 list-none p-0">
              <li className="flex gap-4 items-start">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--accent2)] flex-shrink-0" />
                <span>
                  Currently developing <strong>multi-agent frameworks</strong> and intent-aware financial assistants,
                  applying Large Language Models to complex decision-making and forecasting tasks.
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--accent2)] flex-shrink-0" />
                <span>
                  Built <strong>deep learning pipelines</strong> during my MSc in Astronomy to reconstruct
                  opacity maps of astrophysical anomalies, exploring potential Dyson-like structures in transit data.
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--accent2)] flex-shrink-0" />
                <span>
                  Developed <strong>PID-based control systems</strong> for model rockets during my BTech,
                  focusing on active pitch stability and real-time sensor fusion.
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--accent2)] flex-shrink-0" />
                <span>
                  Authored and presented research at international conferences and <strong>IEEE venues</strong>,
                  focusing on the intersection of machine learning and physical simulations.
                </span>
              </li>
            </ul> */}
          </div>

        </section>

        {/* ── Timeline ── */}
        {/* <section>

          <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--muted)] mb-12">
            Professional & Academic Journey
          </h2>

          <div className="pl-4 border-l border-[var(--border)] ml-1">
            {timeline.map((entry, i) => (
              <TimelineItem
                key={i}
                entry={entry}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>

        </section> */}

      </main>
      <Footer />
    </div>
  )
}
