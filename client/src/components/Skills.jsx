const groups = [
  {
    title: 'Routing (Labs)',
    items: ['Static & Default Routing', 'RIP v2', 'EIGRP', 'OSPF', 'Route Redistribution'],
  },
  {
    title: 'Services & Security (Labs)',
    items: [
      'DHCP & DHCP Relay',
      'NAT',
      'Access Lists (ACL)',
      'Port Security',
      'Wireless (WPA)',
      'FTP',
      'DNS',
      'HTTP',
      'Email (SMTP/POP3)',
    ],
  },
  {
    title: 'Foundations',
    items: [
      'IP Addressing',
      'Subnetting (FLSM & VLSM)',
      'Telnet Remote Access',
      'Cisco IOS CLI',
      'Cisco Packet Tracer',
    ],
  },
  {
    title: 'Web Development (FYP)',
    items: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Socket.io (real-time)',
      'JWT Authentication',
    ],
  },
  {
    title: 'Currently Learning (CCNA)',
    items: ['VLANs', 'Trunking', 'STP', 'IPv6'],
  },
  {
    title: 'Other',
    items: ['Git & GitHub', 'MS Office', 'Figma (basics)'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">
          My <span className="text-teal-400">Skills</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
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
