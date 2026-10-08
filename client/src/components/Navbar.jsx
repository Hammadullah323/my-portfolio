import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Labs', href: '#labs' },
  { name: 'Community', href: '#community' },
  { name: 'Why Hire Me', href: '#why' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cvLink = `${import.meta.env.BASE_URL}cv.pdf`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-teal-400">
          Hammadullah
        </a>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="hover:text-teal-400 transition">
                {l.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cvLink}
              download="Hammadullah_CV.pdf"
              className="px-4 py-2 rounded-lg bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 transition"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="lg:hidden px-6 pb-4 flex flex-col gap-4 bg-slate-900">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} onClick={() => setOpen(false)} className="block hover:text-teal-400">
                {l.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cvLink}
              download="Hammadullah_CV.pdf"
              className="inline-block px-4 py-2 rounded-lg bg-teal-500 text-slate-900 font-semibold"
            >
              Download CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}