import { FiBookOpen, FiTool, FiUsers, FiTrendingUp } from 'react-icons/fi'

const points = [
  {
    icon: <FiTool />,
    title: 'Hands-on Practice',
    text: 'I have configured routing, DHCP, OSPF and EIGRP in real lab topologies, not just theory.',
  },
  {
    icon: <FiBookOpen />,
    title: 'Consistent Learner',
    text: 'I am studying for CCNA daily and tracking my progress by creating practice content.',
  },
  {
    icon: <FiUsers />,
    title: 'Good Communicator',
    text: 'Running a learning page has taught me to explain technical topics in a simple way.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Focused Career Goal',
    text: 'My direction is clear: networking. I want to grow into a network engineer role.',
  },
]

export default function WhyHireMe() {
  return (
    <section id="why" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">
          Why <span className="text-teal-400">Hire Me</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-teal-500/60"
            >
              <div className="text-3xl text-teal-400">{p.icon}</div>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}