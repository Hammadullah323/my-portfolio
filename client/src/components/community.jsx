import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { info } from '../data/links'

export default function Community() {
  return (
    <section id="community" className="bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold">
          My <span className="text-teal-400">Community</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          I run <span className="text-slate-200">Hammad Tech Solutions</span>, where I share CCNA practice
          MCQs and networking content. Creating this content regularly helps me revise
          what I learn and helps other students prepare.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={info.facebookPage}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
          >
            <FaFacebook /> Facebook Page
          </a>
          <a
            href={info.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-500"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </section>
  )
}