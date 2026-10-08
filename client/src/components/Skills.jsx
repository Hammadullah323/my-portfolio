const groups = [
  {
    title: 'Practiced in Labs',
    items: ['Static Routing', 'DHCP', 'OSPF', 'EIGRP', 'Cisco Packet Tracer'],
  },
  {
    title: 'Currently Learning (CCNA)',
    items: ['Subnetting & VLSM', 'VLANs', 'STP', 'ACLs', 'NAT'],
  },
  {
    title: 'Other',
    items: ['React (basics)', 'Git & GitHub', 'MS Office'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">
          My <span className="text-teal-400">Skills</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="mb-4 font-semibold text-teal-400">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                  >
                    {i}
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