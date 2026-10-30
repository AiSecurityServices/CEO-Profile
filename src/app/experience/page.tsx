'use client'

import React from 'react'
import { Briefcase, CheckCircle2, Terminal, Shield, Server, Network } from 'lucide-react'

const experienceList = [
  {
    role: 'Junior Red Team Analyst (Internship)',
    period: '2025–2026',
    company: 'Offensive Security Training & Lab Environment',
    location: 'Remote / Hybrid',
    description: 'Engaged in simulated red teaming exercises, offensive security assessments, and vulnerability verification across web and network environments.',
    responsibilities: [
      'Conducted penetration testing on web applications and networks using Kali Linux, Burp Suite, and Metasploit.',
      'Performed vulnerability scans using Nessus and OpenVAS to identify exploitable attack surfaces.',
      'Documented security findings, exploit chains, and mitigation recommendations in professional reports.',
      'Simulated phishing and lateral movement scenarios in authorized lab environments.',
      'Analyzed attack paths and provided actionable security-hardening recommendations to prevent credential dumping.'
    ]
  },
  {
    role: 'IT Support Officer',
    period: '4 Years',
    company: 'B&F Corporate (UK-Based)',
    location: 'Remote / Client Support',
    description: 'Provided high-level remote IT support and technical troubleshooting for UK-based corporate clients, ensuring secure system operation and minimal downtime.',
    responsibilities: [
      'Provided remote technical support to UK corporate clients, resolving complex hardware, software, and networking incidents.',
      'Troubleshot operating systems, secure remote desktop connections, and business application issues.',
      'Maintained strict focus on secure system operation, data privacy, and minimizing operational downtime.',
      'Trained non-technical staff and business users on safe IT practices, password hygiene, and phishing awareness.',
      'Developed strong English communication, client-facing collaboration, and ticket management skills.'
    ]
  },
  {
    role: 'IT Officer',
    period: '3 Years 9 Months',
    company: 'MS. Monzur & Company',
    location: 'Chittagong, Bangladesh',
    description: 'Managed complete organizational IT infrastructure, including server deployment, LAN/WAN maintenance, data backups, and specialized software operations.',
    responsibilities: [
      'Managed organizational IT infrastructure, including servers, workstations, and local area network (LAN/WAN) environments.',
      'Implemented robust backup and disaster recovery procedures to safeguard critical business data.',
      'Supported Windows and Linux server deployment, user access control, and network security configuration.',
      'Managed meter-rent calculating software for CNG auto-rickshaw operations, ensuring high availability and accurate data processing.',
      'Provided hands-on hardware and software troubleshooting for all office personnel.'
    ]
  }
]

const technicalSummary = [
  { title: 'Penetration Testing', desc: 'Web app & network penetration testing using Metasploit, Burp Suite, and Kali Linux.' },
  { title: 'Vulnerability Assessment', desc: 'Enterprise vulnerability scanning and risk prioritization with Nessus and OpenVAS.' },
  { title: 'Network Troubleshooting', desc: 'Advanced diagnostics, packet analysis with Wireshark, and LAN/WAN management.' },
  { title: 'Server Administration', desc: 'Windows Server & Red Hat Linux deployment, configuration, and security hardening.' },
  { title: 'IT Infrastructure', desc: 'Backup & recovery, Active Directory, DNS/DHCP, and hardware maintenance.' },
  { title: 'Security Awareness & Hardening', desc: 'Phishing simulation, user training, and OS security baseline enforcement.' },
]

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Career History</span>
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
          Professional Experience
        </h1>
        <p className="text-base text-cyber-muted max-w-3xl">
          Detailed timeline of my professional career, combining 7+ years of IT infrastructure and client support management with specialized offensive security experience.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-cyber-border ml-4 lg:ml-8 space-y-12">
        {experienceList.map((exp, idx) => (
          <div key={idx} className="relative pl-8 lg:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-cyber-card border-2 border-cyber-accent flex items-center justify-center text-cyber-accent cyber-glow">
              <Briefcase className="w-4 h-4" />
            </div>

            <div className="cyber-card rounded-2xl p-8 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-cyber-border pb-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-2xl font-bold text-cyber-text">{exp.role}</h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-cyber-blue">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/30 w-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-cyber-text/90 italic">
                {exp.description}
              </p>

              <div className="space-y-3">
                <span className="text-xs font-mono text-cyber-muted uppercase tracking-wider">Key Responsibilities & Achievements:</span>
                <ul className="grid grid-cols-1 gap-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-sm text-cyber-muted">
                      <CheckCircle2 className="w-4 h-4 text-cyber-accent shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Experience Summary */}
      <div className="flex flex-col gap-6 pt-8 border-t border-cyber-border">
        <div>
          <span className="text-xs font-mono text-cyber-blue uppercase tracking-widest">Core Competencies</span>
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-cyber-text mt-1">
            Technical Experience Summary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSummary.map((item, idx) => (
            <div key={idx} className="cyber-card rounded-xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-cyber-accent font-heading font-bold text-base">
                <Terminal className="w-4 h-4" />
                <span>{item.title}</span>
              </div>
              <p className="text-sm text-cyber-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
