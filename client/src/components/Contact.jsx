import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { info, whatsappLink, emailLink } from '../data/links'

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">
          Contact <span className="text-teal-400">Me</span>
        </h2>
        <p className="mt-4 text-slate-400">
          Looking for a networking intern or junior role. Message me directly and I will reply as soon as I can.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href={emailLink}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-900 hover:bg-teal-400"
          >
            <FaEnvelope /> Email
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          {info.email} &nbsp;|&nbsp; +{info.whatsappNumber}
        </p>

        <div className="mt-6 flex justify-center gap-6 text-3xl text-slate-400">
          <a href={info.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal-400">
            <FaLinkedin />
          </a>
          <a href={info.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-teal-400">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  )
}