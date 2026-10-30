'use client'

import React, { useState } from 'react'
import { Terminal, Shield, Cpu, Network, Lock, CheckCircle2 } from 'lucide-react'

const skillCategories = [
  {
    id: 'red-teaming',
    title: 'Red Teaming & Penetration Testing',
    icon: Shield,
    accent: 'text-cyber-accent',
    skills: [
      { name: 'Metasploit', level: 'Advanced', desc: 'Exploitation framework for penetration testing and payload generation.' },
      { name: 'Burp Suite', level: 'Advanced', desc: 'Web vulnerability assessment, proxy interception, and security testing.' },
      { name: 'SQLMap', level: 'Proficient', desc: 'Automatic SQL injection and database takeover tool.' },
      { name: 'Hydra', level: 'Proficient', desc: 'Fast network login cracker supporting numerous protocols.' },
      { name: 'John the Ripper', level: 'Proficient', desc: 'Password security auditing and hash cracking.' },
      { name: 'Mimikatz', level: 'Proficient', desc: 'Credential extraction and Windows security auditing.' },
      { name: 'BloodHound', level: 'Proficient', desc: 'Active Directory attack path and relationship analysis.' },
    ]
  },
  {
    id: 'vulnerability',
    title: 'Vulnerability Assessment & Security Tools',
    icon: Terminal,
    accent: 'text-cyber-blue',
    skills: [
      { name: 'Nessus', level: 'Advanced', desc: 'Enterprise vulnerability scanner for compliance and risk identification.' },
      { name: 'OpenVAS', level: 'Proficient', desc: 'Full-featured vulnerability scanner and manager.' },
      { name: 'Qualys', level: 'Proficient', desc: 'Cloud-based security and compliance auditing.' },
      { name: 'Acunetix', level: 'Proficient', desc: 'Automated web vulnerability scanner.' },
      { name: 'Wazuh', level: 'Proficient', desc: 'Open-source security monitoring and threat detection (SIEM/XDR).' },
      { name: 'Splunk', level: 'Working Knowledge', desc: 'Log analysis, security monitoring, and SIEM.' },
    ]
  },
  {
    id: 'networking',
    title: 'Networking & Systems',
    icon: Network,
    accent: 'text-cyber-accent',
    skills: [
      { name: 'Windows Server 2012/2016', level: 'Advanced', desc: 'Enterprise server administration, deployment, and hardening.' },
      { name: 'Kali Linux', level: 'Expert', desc: 'Penetration testing and security research distribution.' },
      { name: 'Parrot OS', level: 'Advanced', desc: 'Security-oriented operating system for pentesting.' },
      { name: 'BlackArch', level: 'Proficient', desc: 'Penetration testing distribution for security researchers.' },
      { name: 'Red Hat Linux', level: 'Advanced', desc: 'Enterprise Linux server management and administration.' },
      { name: 'Active Directory', level: 'Advanced', desc: 'Domain services, group policy, and IAM management.' },
      { name: 'DNS, DHCP, LDAP', level: 'Advanced', desc: 'Core networking services and protocol configuration.' },
      { name: 'Squid Server', level: 'Proficient', desc: 'Caching proxy server configuration and traffic management.' },
    ]
  },
  {
    id: 'programming',
    title: 'Programming & Scripting',
    icon: Cpu,
    accent: 'text-cyber-blue',
    skills: [
      { name: 'Python', level: 'Proficient', desc: 'Security automation, scripting, and custom exploit tooling.' },
      { name: 'Bash', level: 'Advanced', desc: 'Linux shell scripting and task automation.' },
      { name: 'PHP', level: 'Proficient', desc: 'Web development, server-side scripting, and code review.' },
      { name: 'Java (Basic)', level: 'Working Knowledge', desc: 'Object-oriented programming and application review.' },
    ]
  },
  {
    id: 'additional',
    title: 'Additional Security Knowledge',
    icon: Lock,
    accent: 'text-cyber-accent',
    skills: [
      { name: 'Incident Response', level: 'Proficient', desc: 'Triage, containment, and mitigation of security incidents.' },
      { name: 'Phishing Simulation', level: 'Advanced', desc: 'Designing and executing awareness campaigns and email simulation.' },
      { name: 'Password Security Assessment', level: 'Advanced', desc: 'Policy enforcement and brute-force resistance testing.' },
      { name: 'Web Application Security Testing', level: 'Advanced', desc: 'OWASP Top 10 assessment and remediation guidance.' },
      { name: 'Security Hardening', level: 'Advanced', desc: 'OS and network infrastructure hardening best practices.' },
    ]
  }
]

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState('red-teaming')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Technical Proficiency</span>
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
          Core Skills & Technical Stack
        </h1>
        <p className="text-base text-cyber-muted max-w-3xl">
          A comprehensive breakdown of offensive security tools, vulnerability scanners, networking infrastructure, and programming languages mastered through practical lab work and professional experience.
        </p>
      </div>

      {/* Category Navigation Tabs */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-cyber-border">
        {skillCategories.map((cat) => {
          const isActive = activeTab === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-cyber-accent text-cyber-bg font-bold shadow-lg shadow-cyber-accent/20'
                  : 'bg-cyber-card text-cyber-muted border border-cyber-border hover:text-cyber-text hover:border-cyber-accent'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          )
        })}
      </div>

      {/* Active Category Display */}
      {skillCategories.map((cat) => {
        if (cat.id !== activeTab) return null
        const Icon = cat.icon
        return (
          <div key={cat.id} className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-cyber-card border border-cyber-border flex items-center justify-center ${cat.accent}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-cyber-text">{cat.title}</h2>
                <span className="text-xs font-mono text-cyber-muted">Professional technical competencies & tools</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.skills.map((skill, idx) => (
                <div key={idx} className="cyber-card rounded-xl p-6 flex flex-col justify-between gap-4 group">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading text-lg font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyber-bg text-cyber-accent border border-cyber-accent/30">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-cyber-muted leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-cyber-border flex items-center gap-2 text-xs font-mono text-cyber-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-accent" />
                    <span>Verified Practical Competency</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
