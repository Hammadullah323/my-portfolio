import { TypeAnimation } from 'react-type-animation'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  const cvLink = `${import.meta.env.BASE_URL}cv.pdf`

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-6"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-teal-400 mb-2">Hello, I'm</p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hammadullah</h1>

          <TypeAnimation
            sequence={[
  'Aspiring Network Engineer', 2000,
  'CCNA Preparation in Progress', 2000,
  'Routing & Switching Enthusiast', 2000,
]}
            repeat={Infinity}
            className="text-xl sm:text-3xl text-slate-300 font-mono"
          />

          <p className="mt-6 text-slate-400 max-w-xl mx-auto md:mx-0">
            BSCS student focused on computer networking. I build Cisco labs,
            and I run a Facebook page that helps others practice CCNA MCQs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={cvLink}
              download="Hammadullah_CV.pdf"
              className="px-6 py-3 rounded-lg bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-teal-500 text-teal-400 hover:bg-teal-500/10 transition inline-flex items-center gap-2"
            >
              <FaWhatsapp /> Contact Me
            </a>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-7xl font-bold text-slate-900 shadow-lg shadow-teal-500/20">
          <img
  src={`${import.meta.env.BASE_URL}Profile.jpg`}
  alt="Hammadullah"
  className="h-48 w-48 rounded-full border-4 border-teal-400 object-cover shadow-lg shadow-teal-500/20 sm:h-64 sm:w-64"
/>
        </div>
      </div>
    </section>
  )
}