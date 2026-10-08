import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { info } from '../data/links'

const socials = [
  { icon: <FaFacebook />, href: info.facebookProfile, label: 'Facebook' },
  { icon: <FaInstagram />, href: info.instagram, label: 'Instagram' },
  { icon: <FaLinkedin />, href: info.linkedin, label: 'LinkedIn' },
  { icon: <FaGithub />, href: info.github, label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Hammadullah. All rights reserved.
        </p>
        <div className="flex gap-5 text-xl text-slate-400">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="hover:text-teal-400">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}