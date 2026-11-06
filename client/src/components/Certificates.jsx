import { FiAward, FiBookOpen, FiGithub, FiExternalLink } from 'react-icons/fi'
import { certificates, courses } from '../data/certificates'

export default function Certificates() {
  return (
    <section id="certificates" className="bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">
          Certificates & <span className="text-teal-400">Courses</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certificates.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center gap-3 text-teal-400">
                <FiAward className="text-2xl" />
                <span className="text-sm font-semibold uppercase tracking-wide">Certificate</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{c.issuer}</p>
              <p className="mt-1 text-sm text-slate-400">{c.place}</p>
              <p className="mt-3 text-sm text-slate-400">
                {c.period} · {c.grade}
              </p>
              <p className="text-sm text-slate-500">{c.issued}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-teal-500/10 px-3 py-1 text-xs text-teal-300">
                    {t}
                  </span>
                ))}
              </div>
              {c.file && (
                <a
                  href={`${import.meta.env.BASE_URL}${c.file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:underline"
                >
                  <FiExternalLink /> View certificate
                </a>
              )}
            </div>
          ))}

          {courses.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center gap-3 text-teal-400">
                <FiBookOpen className="text-2xl" />
                <span className="text-sm font-semibold uppercase tracking-wide">Course</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{c.issuer}</p>
              <p className="mt-3 text-sm text-slate-400">{c.note}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-teal-500/10 px-3 py-1 text-xs text-teal-300">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={c.repo}
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
