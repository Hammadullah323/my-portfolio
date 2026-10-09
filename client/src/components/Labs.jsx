import { useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { labs, courses, REPO } from '../data/labs'

export default function Labs() {
  const [course, setCourse] = useState(courses[0].id)
  const shown = labs.filter((l) => l.course === course)

  return (
    <section id="labs" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">
          Network <span className="text-teal-400">Labs</span>
        </h2>
        <p className="mt-2 max-w-3xl text-slate-400">
          Cisco Packet Tracer labs and assignments from my BSCS coursework. Each one has a topology,
          explanation, report and the Packet Tracer file on GitHub.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {courses.map((c) => (
            <button
              key={c.id}
              onClick={() => setCourse(c.id)}
              className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                course === c.id
                  ? 'border-teal-500 bg-teal-500 text-slate-900'
                  : 'border-slate-700 text-slate-300 hover:border-teal-500/60'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((l) => (
            <div
              key={l.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-teal-500/60"
            >
              <h3 className="text-lg font-semibold">{l.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400">{l.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {l.tags.map((t) => (
                  <span key={t} className="rounded-full bg-teal-500/10 px-3 py-1 text-xs text-teal-300">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={`${REPO}/tree/main/${l.folder}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:underline"
              >
                <FiGithub /> View lab files
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-teal-500 px-6 py-3 text-teal-400 transition hover:bg-teal-500/10"
          >
            <FiGithub /> All labs on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
