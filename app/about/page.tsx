import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | TheWhaleDragonKodex',
  description:
    'AI/ML researcher building multi-agent systems, financial forecasting models, and simulation pipelines.',
}

/* ───────────────────────── icons ───────────────────────── */

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.95 22.95 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2z" />
  </svg>
)

const GraduationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 2L2 6l8 4 8-4-8-4zm-6 7v5l6 3 6-3V9l-6 3-6-3z" />
  </svg>
)

/* ───────────────────── section heading ───────────────────── */

function SectionHeading({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] text-white shadow-md">
        {icon}
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">
        {children}
      </h2>
    </div>
  )
}

/* ───────────────────── bullet list ───────────────────── */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-[var(--muted)] leading-relaxed">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start">
          <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ───────────────────── experience block ───────────────────── */

function JobBlock({
  role,
  company,
  period,
  children,
}: {
  role: string
  company: string
  period: string
  children: React.ReactNode
}) {
  return (
    <div className="glass-card rounded-2xl p-8 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
        <div>
          <p className="text-sm uppercase tracking-wider text-[var(--accent)] font-semibold">
            {company}
          </p>

          <h3 className="text-2xl font-semibold text-[var(--text)]">{role}</h3>
        </div>

        <span className="text-sm bg-[var(--surface2)] px-4 py-1.5 rounded-full border border-[var(--border)]">
          {period}
        </span>
      </div>

      <div className="space-y-8">{children}</div>
    </div>
  )
}

/* ───────────────────── page ───────────────────── */

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">

      <Header />

      <main className="mx-auto max-w-6xl px-6 py-24">

        {/* ───────── HERO ───────── */}

        <section className="mb-32">

          <div className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-6">
            AI / ML Research
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.05] mb-6">
            AI systems for{' '}
            <span className="gradient-text">finance</span>,
            <br className="hidden sm:block" />
            <span className="gradient-text">simulation</span>, and research.
          </h1>

          <div className="max-w-3xl space-y-6 text-lg text-[var(--muted)] leading-relaxed">

            <p>
              AI/ML researcher building multi-agent systems, financial
              forecasting models, and large-scale simulation pipelines.
              My background combines machine learning, astrophysics
              research, and electrical engineering.
            </p>

            <p>
              Previously applied deep learning to astrophysical anomaly
              detection — reconstructing 2D opacity maps from transit
              light curves to investigate potential megastructure
              signatures.
            </p>

          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)] mt-10">

            <span>2× IEEE publications</span>
            <span>International conference speaker</span>
            <span>200k+ synthetic training samples</span>
            <span>Multi-agent AI systems</span>

          </div>

          {/* expertise */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">

            <div className="glass-card p-6 rounded-2xl">
              <p className="text-sm font-semibold text-[var(--accent)] mb-2">
                AI Systems
              </p>

              <p className="text-sm text-[var(--muted)]">
                Multi-agent LLM frameworks, tool orchestration,
                async pipelines.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <p className="text-sm font-semibold text-[var(--accent)] mb-2">
                Machine Learning
              </p>

              <p className="text-sm text-[var(--muted)]">
                Time-series forecasting, CNNs, sentiment-augmented models.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <p className="text-sm font-semibold text-[var(--accent)] mb-2">
                Infrastructure
              </p>

              <p className="text-sm text-[var(--muted)]">
                Python, TensorFlow, PostgreSQL, pgvector,
                geospatial analytics.
              </p>
            </div>

          </div>
        </section>

        {/* ───────── SELECTED WORK ───────── */}

        <section className="mb-32">

          <SectionHeading icon={<BriefcaseIcon />}>
            Selected Work
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-semibold text-[var(--text)] mb-2">
                Multi-Agent Finance Assistant
              </h3>

              <p className="text-sm text-[var(--muted)]">
                Custom agent architecture for financial Q&A, chart
                generation, economic data retrieval, and tool execution.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-semibold text-[var(--text)] mb-2">
                Sales Simulation Engine
              </h3>

              <p className="text-sm text-[var(--muted)]">
                Multi-agent pipeline simulating B2B decision-maker
                units for realistic sales interaction modeling.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-semibold text-[var(--text)] mb-2">
                Megastructure Detection ML
              </h3>

              <p className="text-sm text-[var(--muted)]">
                CNN model reconstructing 2D opacity maps from transit
                light curves for astrophysical anomaly detection.
              </p>
            </div>

          </div>
        </section>

        {/* ───────── EXPERIENCE ───────── */}

        <section className="mb-32">

          <SectionHeading icon={<BriefcaseIcon />}>
            Work Experience
          </SectionHeading>

          <JobBlock
            role="AI / ML Researcher"
            company="████████████"
            period="Mar 2025 – Present"
          >

            <div>
              <h4 className="font-semibold text-lg mb-3">
                AI Sales Simulation Pipeline
              </h4>

              <BulletList
                items={[
                  'Designed pipeline simulating B2B sales interactions using Perplexity API and LinkedIn data.',
                  'Implemented LLM-driven market research and decision-maker agents.',
                  'Expanded system into multi-agent simulation of corporate decision units.',
                ]}
              />
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">
                Financial Chatbot
              </h4>

              <BulletList
                items={[
                  'Built multi-agent finance assistant using OpenAI SDK.',
                  'Implemented async query handling, intent routing, and tool execution.',
                  'Agents for stock charts, economic data, and company reports.',
                ]}
              />
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">
                Stock Price Prediction
              </h4>

              <BulletList
                items={[
                  'Developed SARIMAX forecasting model for stock and crypto prices.',
                  'Integrated sentiment analysis from web sources.',
                  'Applied quadratic adjustments based on sentiment scores.',
                ]}
              />
            </div>

          </JobBlock>

          <JobBlock
            role="AI Research Intern"
            company="████████"
            period="Jul – Sep 2024"
          >

            <div>
              <h4 className="font-semibold text-lg mb-3">
                Text-To-Speech Voice Cloning
              </h4>

              <BulletList
                items={[
                  'Fine-tuned VITS and StyleTTS2 models on custom datasets.',
                  'Built full training pipeline with structured datasets.',
                  'Created Gradio interface for non-technical users.',
                ]}
              />
            </div>

          </JobBlock>

        </section>

        {/* ───────── EDUCATION ───────── */}

        <section className="mb-20">

          <SectionHeading icon={<GraduationIcon />}>
            Education
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="glass-card p-8 rounded-2xl">

              <p className="text-sm text-[var(--accent)] font-semibold mb-2">
                2022 – 2024
              </p>

              <h3 className="text-xl font-semibold mb-4">
                MSc Astronomy & Astrophysics
              </h3>

              <p className="text-sm text-[var(--muted)] mb-6">
                ████████████████████████████
              </p>

              <h4 className="font-semibold text-lg mb-3">
                Thesis: Alien Megastructures in Transit
              </h4>

              <BulletList
                items={[
                  'CNN reconstructing 2D opacity maps from 1D transit curves.',
                  'Generated ~200k synthetic training samples.',
                  'Applied model to Kepler data.',
                ]}
              />

            </div>

            <div className="glass-card p-8 rounded-2xl">

              <p className="text-sm text-[var(--accent)] font-semibold mb-2">
                2018 – 2022
              </p>

              <h3 className="text-xl font-semibold mb-4">
                BTech Electrical & Electronics Engineering
              </h3>

              <p className="text-sm text-[var(--muted)] mb-6">
                ██████████████████████████
              </p>

              <h4 className="font-semibold text-lg mb-3">
                Thesis: Thrust Vector Control Rocket
              </h4>

              <BulletList
                items={[
                  'Modeled rocket dynamics in MATLAB/Simulink.',
                  'Built hardware prototype with Arduino and IMU.',
                  'Published results at IEEE INCOFT 2023.',
                ]}
              />

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}