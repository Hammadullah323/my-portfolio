const education = [
  { title: 'BS Computer Science', note: 'Currently studying' },
  { title: 'Intermediate', note: 'Completed' },
  { title: 'Matric', note: 'Completed' },
]

const labs = [
  'IP Addressing',
  'Subnetting (FLSM/VLSM)',
  'Static Routing',
  'RIP v2',
  'EIGRP',
  'OSPF',
  'DHCP',
  'NAT & ACLs',
  'Port Security',
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">
          About <span className="text-teal-400">Me</span>
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-slate-400">
            <p>
              I'm Hammadullah, a BS Computer Science student who wants to build
              a career in networking. During my degree I completed labs for
              Data Communication Networks and Internet/Intranet Architecture
              using Cisco Packet Tracer.
            </p>
            <p>
              I'm currently preparing for CCNA through self-study and I run a
              Facebook page where I share CCNA practice MCQs. Teaching others
              helps me revise and stay consistent.
            </p>
            <p>
  Alongside networking, I am building Travel Buddy, my final year project with the MERN stack. It has
  real-time chat (Socket.io), JWT authentication and a partner matching engine.
</p>

            <h3 className="pt-4 font-semibold text-slate-200">Lab topics I've practiced</h3>
            <div className="flex flex-wrap gap-2">
              {labs.map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-sm text-teal-300"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-200">Education</h3>
            <div className="space-y-4 border-l-2 border-slate-700 pl-6">
              {education.map((e) => (
                <div key={e.title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-teal-400" />
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-slate-500">{e.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}