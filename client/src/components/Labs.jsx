const labs = [
  {
    title: 'Static Routing Lab',
    desc: 'Connected multiple networks through routers using manually configured static routes and verified with ping and traceroute.',
    tags: ['Routing', 'Packet Tracer'],
  },
  {
    title: 'DHCP Configuration Lab',
    desc: 'Configured a DHCP server so clients receive IP addresses automatically across the network.',
    tags: ['DHCP', 'IP Addressing'],
  },
  {
    title: 'OSPF Dynamic Routing Lab',
    desc: 'Set up OSPF so routers learn routes dynamically and checked neighbor relationships and routing tables.',
    tags: ['OSPF', 'Dynamic Routing'],
  },
  {
    title: 'EIGRP Routing Lab',
    desc: 'Configured EIGRP between routers and verified route sharing across the topology.',
    tags: ['EIGRP', 'Dynamic Routing'],
  },
]

export default function Labs() {
  return (
    <section id="labs" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">
          Network <span className="text-teal-400">Labs</span>
        </h2>
        <p className="mt-2 text-slate-400">
          University labs done in Cisco Packet Tracer (Data Communication Networks and Internet/Intranet Architecture).
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {labs.map((l) => (
            <div
              key={l.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-teal-500/60"
            >
              <h3 className="text-lg font-semibold">{l.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{l.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {l.tags.map((t) => (
                  <span key={t} className="rounded-full bg-teal-500/10 px-3 py-1 text-xs text-teal-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}