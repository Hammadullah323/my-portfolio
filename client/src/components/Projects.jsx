import { useState } from 'react'
import { FiLock, FiCheckCircle, FiClock, FiArrowRight } from 'react-icons/fi'
import { projects } from '../data/projects'

const tabs = [
  { id: 'done', label: 'Completed (FYP 1)' },
  { id: 'wip', label: 'In Progress (FYP 2)' },
  { id: 'jury', label: 'Jury Additions' },
]

function ProjectCard({ p }) {
  const [tab, setTab] = useState('done')

  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-10">
      {/* Header */}
      <p className="text-sm font-medium text-teal-400">{p.type}</p>
      <h3 className="mt-2 text-3xl font-bold sm:text-4xl">{p.title}</h3>
      <p className="mt-1 text-lg text-slate-300">{p.subtitle}</p>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
        {p.status.map((s) => (
          <span
            key={s.label}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 ${
              s.done
                ? 'border-teal-500/50 bg-teal-500/10 text-teal-300'
                : 'border-amber-500/50 bg-amber-500/10 text-amber-300'
            }`}
          >
            {s.done ? <FiCheckCircle /> : <FiClock />} {s.label}
          </span>
        ))}
        <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-300">{p.team}</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-slate-300">
          <FiLock /> Source code is private
        </span>
      </div>
      {p.myRole && (
        <p className="mt-4 text-slate-300">
          <span className="font-semibold text-teal-400">My role:</span> {p.myRole}
        </p>
      )}

      {/* Problem and solution */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h4 className="font-semibold text-teal-400">The problem</h4>
          <p className="mt-2 text-sm text-slate-400">{p.problem}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <h4 className="font-semibold text-teal-400">The solution</h4>
          <p className="mt-2 text-sm text-slate-400">{p.solution}</p>
        </div>
      </div>

      {/* Architecture */}
      <h4 className="mt-10 text-xl font-semibold">Architecture</h4>
      <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        {p.flow.map((f, i) => (
          <div key={f.name} className="flex flex-1 flex-col items-center gap-3 md:flex-row">
            <div className="w-full flex-1 rounded-xl border border-teal-500/40 bg-teal-500/5 p-4 text-center">
              <p className="font-semibold text-teal-300">{f.name}</p>
              <p className="mt-1 text-xs text-slate-400">{f.detail}</p>
            </div>
            {i < p.flow.length - 1 && <FiArrowRight className="rotate-90 text-xl text-slate-500 md:rotate-0" />}
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {p.services.map((s) => (
          <div key={s.name} className="rounded-xl border border-slate-700 bg-slate-950/40 p-4 text-center">
            <p className="font-semibold text-slate-200">{s.name}</p>
            <p className="mt-1 text-xs text-slate-400">{s.detail}</p>
          </div>
        ))}
      </div>

      {/* Stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
            {t}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <h4 className="mt-10 text-xl font-semibold">Key highlights</h4>
      <ul className="mt-4 space-y-2 text-sm text-slate-400">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <FiCheckCircle className="mt-0.5 shrink-0 text-teal-400" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Features */}
      <h4 className="mt-10 text-xl font-semibold">Feature breakdown</h4>
      <div className="mt-4 flex flex-wrap gap-3">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
              tab === t.id
                ? 'border-teal-500 bg-teal-500 text-slate-900'
                : 'border-slate-700 text-slate-300 hover:border-teal-500/60'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {p.features[tab].map((f) => (
          <div key={f.title} className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
            <h5 className="font-semibold">{f.title}</h5>
            <p className="mt-2 text-sm text-slate-400">{f.text}</p>
          </div>
        ))}
      </div>
      {tab !== 'done' && (
        <p className="mt-4 text-sm text-amber-300/80">These modules are still under development.</p>
      )}

      {/* Why it is different */}
      <h4 className="mt-10 text-xl font-semibold">What makes it different</h4>
      <p className="mt-2 text-sm text-slate-400">{p.differentiators}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.sdgs.map((s) => (
          <span key={s} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
            SDG: {s}
          </span>
        ))}
      </div>

      {/* Private code note */}
      <p className="mt-10 rounded-2xl border border-slate-700 bg-slate-950/40 p-5 text-sm text-slate-400">
        <FiLock className="mr-2 inline text-teal-400" />
        The source code is private because this is a university project.
      </p>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">
          Featured <span className="text-teal-400">Project</span>
        </h2>
        <p className="mt-2 max-w-3xl text-slate-400">
          My final year project, built with the MERN stack. It uses REST APIs, WebSockets and a cloud database,
          so it also shows how client-server systems and real-time communication work.
        </p>
        <div className="mt-10 space-y-10">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
