import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | TheWhaleDragonKodex',
  description: 'AI/ML Researcher with a background in astrophysics and electrical engineering.',
}

/* ─── small inline SVG icons ─────────────────────────────────────── */
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
  </svg>
)

const GraduationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
  </svg>
)

/* ─── reusable section heading ───────────────────────────────────── */
function SectionHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-10">
      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--accent)] text-white shrink-0">
        {icon}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
        {children}
      </h2>
    </div>
  )
}

/* ─── dot bullet list ────────────────────────────────────────────── */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 text-[0.97rem] text-[var(--muted)] leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 items-start">
          <span className="mt-[0.55rem] shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent2)] block" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ─── project card ───────────────────────────────────────────────── */
function ProjectCard({ title, period, items }: { title: string; period: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent2)] transition-colors duration-200">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <h4 className="font-semibold text-[var(--text)] text-[1rem]">{title}</h4>
        <span className="text-xs font-medium tracking-wide text-[var(--tag-text)] bg-[var(--tag-bg)] px-3 py-1 rounded-full whitespace-nowrap">
          {period}
        </span>
      </div>
      <BulletList items={items} />
    </div>
  )
}

/* ─── job card ───────────────────────────────────────────────────── */
function JobCard({ role, company, period, children }: {
  role: string; company: string; period: string; children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] overflow-hidden">
      {/* Card header stripe */}
      <div className="bg-[var(--surface)] border-b border-[var(--border)] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-0.5">{company}</p>
          <h3 className="text-lg font-semibold text-[var(--text)] tracking-tight">{role}</h3>
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--tag-text)] bg-[var(--tag-bg)] px-3 py-1.5 rounded-full">
          {period}
        </span>
      </div>
      {/* Card body */}
      <div className="px-6 py-5 space-y-4 bg-[var(--bg)]">
        {children}
      </div>
    </div>
  )
}

/* ─── conference badge ───────────────────────────────────────────── */
function ConfBadge({ type, title, venue }: { type: string; title: string; venue: string }) {
  return (
    <div className="flex gap-3 items-start text-sm">
      <span className="shrink-0 mt-0.5 inline-block text-[0.65rem] font-bold tracking-widest uppercase text-[var(--accent)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded">
        {type}
      </span>
      <div>
        <p className="text-[var(--text)] font-medium leading-snug">{title}</p>
        <p className="text-[var(--muted)] text-xs mt-0.5">{venue}</p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-4xl px-5 py-14">

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--accent)] mb-3">
            AI / ML Research
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[var(--text)] leading-[1.1] mb-6">
            About Me
          </h1>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] mb-8" />
          <div className="space-y-4 text-[1.05rem] leading-[1.82] text-[var(--muted)] max-w-3xl">
            <p>
              AI/ML researcher with a background in astrophysics and electrical engineering, focused on building practical intelligent systems that combine statistical modeling, multi-agent LLM architectures, and data pipelines.
            </p>
            <p>
              Work spans multi-agent finance assistants, sentiment-augmented SARIMAX forecasting, and a B2B sales simulation pipeline. Earlier research applied deep learning to astrophysical anomaly detection — training CNNs to reconstruct 2D opacity maps from 1D transit light curves — with results presented at international conferences.
            </p>
            <p>
              Core stack: Python · TensorFlow · LLM APIs · time-series modeling · PostgreSQL/pgvector.
            </p>
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {['Multi-Agent LLMs', 'SARIMAX', 'TensorFlow', 'pgvector', 'Geospatial', 'Finance AI', 'TTS / Voice Cloning', 'CNN'].map(tag => (
              <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] bg-[var(--surface)]">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="border-t border-[var(--border)] mb-14" />

        {/* ── Work Experience ──────────────────────────────────────── */}
        <section className="mb-16">
          <SectionHeading icon={<BriefcaseIcon />}>Work Experience</SectionHeading>

          <div className="space-y-8">
            {/* ── Job 1 ── */}
            <JobCard role="AI / ML Researcher" company="████████████" period="Mar 2025 – Present">
              <ProjectCard
                title="AI Sales Simulation Pipeline"
                period="Nov 2025 – Present"
                items={[
                  'Designed a multi-stage pipeline for simulating B2B sales interactions using data from Perplexity API, LinkedIn scraping (via Bright Data), and LLM-based summarization.',
                  'Incorporated market research and decision-maker agents to evaluate message relevance and generate responses.',
                  'Evolved architecture to include multi-agent simulation to mimic the Decision Maker Unit of a firm.',
                ]}
              />
              <ProjectCard
                title="Financial Chat Bot"
                period="Mar – Nov 2025"
                items={[
                  'Built a custom multi-agent framework using OpenAI Python SDK and gpt-5-mini for finance Q&A.',
                  'Handled queries via async clients, XML-tagged prompts, and tool execution; implemented routing via intent layer.',
                  'Built specialized agents for: stock charts, web search, company finance reports, country economy graphs.',
                  'Focused on observability and token usage tracking.',
                ]}
              />
              <ProjectCard
                title="Stock Price Prediction"
                period="May – Nov 2025"
                items={[
                  'Created a SARIMAX-based model for forecasting stock and crypto closing prices over 5 days.',
                  'Used 120 days of historical data augmented by LLM-driven sentiment analysis from web searches.',
                  'Applied quadratic adjustment to predictions based on sentiment scores (0–100); ensured non-negativity.',
                ]}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <ProjectCard
                  title="Map Intelligence"
                  period="Apr – May 2025"
                  items={[
                    'Geospatial tools using MapLibre and Deck.gl for economic data (GDP, population, unemployment).',
                    'Integrated with agents for query-based visualizations and time-series hover interactions.',
                  ]}
                />
                <ProjectCard
                  title="Finance DB"
                  period="May 2025"
                  items={[
                    'Scraping and embedding pipeline for daily finance news from Yahoo and DuckDuckGo.',
                    'PostgreSQL + pgvector with HNSW indexing for similarity search; integrated with Insight Agent.',
                  ]}
                />
              </div>
            </JobCard>

            {/* ── Job 2 ── */}
            <JobCard role="AI Research Intern" company="████████" period="Jul – Sep 2024">
              <ProjectCard
                title="Text-To-Speech (TTS)"
                period="Jul – Sep 2024"
                items={[
                  'Fine-tuned VITS and StyleTTS2 on custom datasets; configured multi-stage training (first-stage acceleration + second-stage) with parameters adjusted for OOM mitigation.',
                  'Implemented structured dataset handling: audio directories, text cleaners, lossless formats.',
                  'Developed a complete voice cloning pipeline (data formatting, normalization, training) with multispeaker support.',
                  'Built a Gradio interface to make the pipeline accessible to non-technical users.',
                ]}
              />
            </JobCard>
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="border-t border-[var(--border)] mb-14" />

        {/* ── Education ────────────────────────────────────────────── */}
        <section className="mb-10">
          <SectionHeading icon={<GraduationIcon />}>Education</SectionHeading>

          <div className="space-y-10">
            {/* MS */}
            <div className="relative pl-6 border-l-2 border-[var(--border)]">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)] block" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-[var(--text)] tracking-tight">
                  Master of Science — Astronomy & Astrophysics
                </h3>
                <span className="text-sm text-[var(--muted)] font-medium">2022 – 2024</span>
              </div>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[var(--muted)] mb-5">
                ████████████████████████████
              </p>

              <div className="space-y-5">
                {/* Thesis */}
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <h4 className="font-semibold text-[var(--text)] mb-0.5">MS Thesis: Alien Megastructures in Transit</h4>
                  <p className="text-xs text-[var(--muted)] italic mb-3">
                    Exploring Detection and Machine Learning Inference · 2023–2024
                  </p>
                  <BulletList items={[
                    'Designed a CNN in TensorFlow to reconstruct 2D opacity maps (38×38 px) from 1D transit light curves (120 pts). Folded MSE 0.1615 at SNR=500.',
                    'Generated ~200,000 synthetic training light curves using Bézier curves and EightBitTransit simulations.',
                    'Applied model to Kepler dataset; identified performance limits in low-SNR cases.',
                  ]} />
                </div>

                {/* Conferences */}
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--accent)] mb-3">
                    Conference Presentations
                  </p>
                  <div className="space-y-3">
                    <ConfBadge type="Oral" title='"Unveiling Alien Megastructures in Transit: Exploring Detection and ML Inference"' venue="Strange New Worlds: The Exploration of Exoplanets — Aug 2023" />
                    <ConfBadge type="Poster" title='"Exploring Alien Megastructures: Analyzing Transit Light Curves for Anomalies with ML"' venue="42nd Astronomical Society of India Meeting" />
                    <ConfBadge type="Virtual" title="Invited talk — Interstellar Frontiers 2024" venue="Perth, Australia — Mar 2024" />
                  </div>
                </div>
              </div>
            </div>

            {/* BTech */}
            <div className="relative pl-6 border-l-2 border-[var(--border)]">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)] block" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-[var(--text)] tracking-tight">
                  BTech — Electrical & Electronics Engineering
                </h3>
                <span className="text-sm text-[var(--muted)] font-medium">2018 – 2022</span>
              </div>
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-[var(--muted)] mb-5">
                ██████████████████████████
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <h4 className="font-semibold text-[var(--text)] mb-3">
                    BTech Thesis: Thrust Vector Control of Solid Propellant Model Rocket
                  </h4>
                  <BulletList items={[
                    'Modeled 3DOF rocket dynamics in MATLAB/Simulink; implemented PID-based thrust vector control.',
                    'Built hardware prototype with Arduino Nano, MPU6050, and SG90 servo; conducted hold-down tests.',
                    'Published findings in IEEE INCOFT 2023.',
                  ]} />
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <h4 className="font-semibold text-[var(--text)] mb-3">
                    Summer Internship @ █████████████████
                  </h4>
                  <BulletList items={[
                    'Designed an open-circuit fault-tolerant half-bridge LLC resonant converter for satellite applications.',
                    'Simulated in LTSpice at 500kHz / 100W; implemented fault detection via resonant capacitor voltage monitoring.',
                    'Achieved Zero Voltage Switching (ZVS). Published in IEEE SPICES 2022.',
                  ]} />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
