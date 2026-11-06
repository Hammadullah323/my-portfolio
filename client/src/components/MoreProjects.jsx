import { FiGithub } from 'react-icons/fi'
import { moreProjects } from '../data/moreProjects'

export default function MoreProjects() {
  return (
    <section id="more-projects" className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-bold">
          More <span className="text-teal-400">Projects</span>
        </h3>
        <p className="mt-2 max-w-3xl text-slate-400">
          Internship work, university projects and practice projects. The code for all of these is public on GitHub.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {moreProjects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-teal-500/60"
            >
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <p className="mt-1 text-xs font-medium text-teal-400">{p.meta}</p>
              <p className="mt-3 flex-1 text-sm text-slate-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-teal-500/10 px-3 py-1 text-xs text-teal-300">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:underline"
              >
                <FiGithub /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
