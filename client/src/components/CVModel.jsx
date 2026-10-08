import { useEffect, useState } from 'react'
import { FiX, FiDownload } from 'react-icons/fi'

export default function CVModal() {
  const [show, setShow] = useState(false)
  const cvLink = `${import.meta.env.BASE_URL}cv.pdf`

  useEffect(() => {
    if (sessionStorage.getItem('cvModalSeen')) return
    const timer = setTimeout(() => setShow(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setShow(false)
    sessionStorage.setItem('cvModalSeen', '1')
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6">
      <div className="relative w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center shadow-xl">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 text-xl text-slate-400 hover:text-white"
        >
          <FiX />
        </button>

        <h2 className="text-2xl font-bold text-teal-400">Welcome!</h2>
        <p className="mt-3 text-slate-300">Want to download my CV?</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={cvLink}
            download="Hammadullah_CV.pdf"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-900 hover:bg-teal-400"
          >
            <FiDownload /> Download PDF
          </a>
          <button
            onClick={close}
            className="rounded-lg border border-slate-600 px-6 py-3 text-slate-300 hover:bg-slate-800"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}