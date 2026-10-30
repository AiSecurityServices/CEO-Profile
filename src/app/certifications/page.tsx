'use client'

import React from 'react'
import { Award, Shield, CheckCircle2, Terminal } from 'lucide-react'

const certificationsList = [
  {
    num: '01',
    name: 'CEH (Ethical Hacking Essentials, Professional, Advanced)',
    issuer: 'EC-Council / Udemy',
    type: 'Professional Training & Certification',
    desc: 'Comprehensive coverage of ethical hacking concepts, reconnaissance, scanning networks, enumeration, vulnerability analysis, system hacking, and malware threats.',
    status: 'Completed / Training Certified'
  },
  {
    num: '02',
    name: 'Certified Ethical Hacking Masterclass',
    issuer: 'Udemy',
    type: 'Intensive Masterclass (130+ Hours)',
    desc: 'In-depth practical masterclass covering advanced offensive security techniques, penetration testing workflows, wireless security, and exploit development.',
    status: 'Completed (130+ Hours)'
  },
  {
    num: '03',
    name: 'Offensive Security Pathway',
    issuer: 'Udemy / Offensive Security Curriculum',
    type: 'Specialized Training (47 Hours)',
    desc: 'Rigorous training focused on red teaming methodologies, enumeration, privilege escalation, and lateral movement in Windows and Linux domains.',
    status: 'Completed (47 Hours)'
  },
  {
    num: '04',
    name: 'Advanced Web Application Security & Bug Bounty',
    issuer: 'Byte Capsule IT',
    type: 'Specialized Security Course',
    desc: 'Advanced vulnerability identification in web applications, OWASP Top 10 deep dive, burp suite extension usage, and bug bounty hunting methodology.',
    status: 'Completed'
  },
  {
    num: '05',
    name: 'Linux Administration (RHCSA Modules)',
    issuer: 'Red Hat Certified Server Administrator Training',
    type: 'System Administration Certification Training',
    desc: 'Enterprise Linux configuration, user management, security hardening, SELinux policies, storage management, and service deployment.',
    status: 'Modules Completed'
  },
  {
    num: '06',
    name: 'MCSA & MCP',
    issuer: 'Microsoft Certified Solution Associate & Professional',
    type: 'Enterprise Microsoft Certification',
    desc: 'Windows Server installation, storage, Active Directory implementation, networking services, and hyper-v virtualization management.',
    status: 'Certified'
  },
  {
    num: '07',
    name: 'One Year Diploma in Networking Technology',
    issuer: 'IDB-BISEW IT Scholarship',
    type: 'Professional Technical Diploma',
    desc: 'Intensive 1-year professional IT scholarship covering enterprise networking, routing, switching, system administration, and infrastructure security.',
    status: 'Graduated / Diploma Awarded'
  },
]

export default function CertificationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-cyber-blue uppercase tracking-widest">Professional Credentials</span>
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
          Certifications & Training
        </h1>
        <p className="text-base text-cyber-muted max-w-3xl">
          An overview of independently awarded certifications, professional diplomas, and specialized security training completed across EC-Council, Microsoft, Red Hat, and advanced masterclasses.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificationsList.map((cert, idx) => (
          <div key={idx} className="cyber-card rounded-xl p-8 flex flex-col justify-between gap-6 group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyber-bg border border-cyber-border flex items-center justify-center text-cyber-blue group-hover:border-cyber-accent transition-all">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/30">
                  {cert.status}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-cyber-blue uppercase tracking-wider">{cert.issuer}</span>
                <h3 className="font-heading text-xl font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                  {cert.name}
                </h3>
              </div>

              <p className="text-sm text-cyber-muted leading-relaxed">
                {cert.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-cyber-border flex items-center justify-between text-xs font-mono text-cyber-muted">
              <span>{cert.type}</span>
              <span className="text-cyber-accent">Credential ID on File</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
