'use client'

import React from 'react'
import Link from 'next/link'
import {
  Shield, Terminal, Download, ArrowRight, CheckCircle2,
  Lock, Cpu, Server, Network, Award, Briefcase, ChevronRight, Send
} from 'lucide-react'
import { motion } from 'framer-motion'

const techMarqueeItems = [
  'KALI LINUX', 'METASPLOIT', 'BURP SUITE', 'NESSUS', 'OPENVAS',
  'PYTHON', 'BASH', 'ACTIVE DIRECTORY', 'WIRESHARK', 'WINDOWS SERVER',
  'LINUX', 'WEB APPLICATION SECURITY', 'SQLMAP', 'HYDRA', 'MAP'
]

const expertiseAreas = [
  {
    num: '01',
    title: 'Red Teaming & Penetration Testing',
    desc: 'Simulating sophisticated adversary tactics, techniques, and procedures (TTPs) to evaluate organizational defense posture.',
    tools: ['Metasploit', 'Burp Suite', 'Hydra', 'BloodHound', 'Mimikatz'],
    icon: Shield,
    accent: 'text-cyber-accent'
  },
  {
    num: '02',
    title: 'Vulnerability Assessment',
    desc: 'Systematic identification, quantification, and prioritization of security vulnerabilities in systems, networks, and applications.',
    tools: ['Nessus', 'OpenVAS', 'Qualys', 'Acunetix'],
    icon: Terminal,
    accent: 'text-cyber-blue'
  },
  {
    num: '03',
    title: 'Web Application Security',
    desc: 'Deep-dive security testing of web applications against OWASP Top 10 vulnerabilities, injection flaws, and authorization bypasses.',
    tools: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'PHP Security'],
    icon: Lock,
    accent: 'text-cyber-accent'
  },
  {
    num: '04',
    title: 'Network Security',
    desc: 'Analyzing network traffic, identifying weak protocols, configuring firewalls, and assessing perimeter security controls.',
    tools: ['Wireshark', 'Nmap', 'TCP Dump', 'LAN/WAN Security'],
    icon: Network,
    accent: 'text-cyber-blue'
  },
  {
    num: '05',
    title: 'System Administration',
    desc: 'Deploying, hardening, and maintaining secure Windows and Linux server environments with robust backup & recovery procedures.',
    tools: ['Windows Server', 'Red Hat Linux', 'Active Directory', 'DNS/DHCP'],
    icon: Server,
    accent: 'text-cyber-accent'
  },
  {
    num: '06',
    title: 'Security Operations & Response',
    desc: 'Incident monitoring, log analysis, phishing awareness training, and executing proactive mitigation strategies.',
    tools: ['Wazuh', 'Splunk', 'Phishing Simulation', 'Incident Response'],
    icon: Cpu,
    accent: 'text-cyber-blue'
  },
]

const featuredProjects = [
  {
    title: 'Enterprise Web Application Penetration Test',
    category: 'Web Application Security',
    overview: 'Conducted comprehensive security assessment against a multi-tier web application, identifying critical OWASP Top 10 vulnerabilities including SQL injection and broken access control.',
    tools: ['Burp Suite', 'SQLMap', 'Python', 'OWASP Top 10'],
    slug: 'web-app-pentest'
  },
  {
    title: 'Active Directory Lateral Movement Simulation',
    category: 'Red Teaming',
    overview: 'Simulated internal network adversary scenarios within an authorized lab environment, executing credential harvesting and Kerberoasting attack paths.',
    tools: ['BloodHound', 'Mimikatz', 'PowerView', 'Metasploit'],
    slug: 'ad-lateral-movement'
  },
  {
    title: 'Automated Infrastructure Vulnerability Scan',
    category: 'Vulnerability Assessment',
    overview: 'Performed systematic vulnerability scans across enterprise servers and network endpoints, generating prioritized remediation reports.',
    tools: ['Nessus', 'OpenVAS', 'Bash Scripting', 'Nmap'],
    slug: 'infra-vuln-assessment'
  },
]

const experiencePreview = [
  {
    role: 'Junior Red Team Analyst (Internship)',
    period: '2025–2026',
    company: 'Offensive Security Training & Lab Environment',
    desc: 'Conducted penetration testing on web applications and networks using Kali Linux, Burp Suite, and Metasploit. Performed vulnerability scans using Nessus and OpenVAS.'
  },
  {
    role: 'IT Support Officer',
    period: '4 Years',
    company: 'B&F Corporate (UK-Based)',
    desc: 'Provided remote technical support to UK clients, troubleshooting networking, OS, and application issues with a strong focus on secure system operation.'
  },
  {
    role: 'IT Officer',
    period: '3 Years 9 Months',
    company: 'MS. Monzur & Company',
    desc: 'Managed IT infrastructure, including servers, LAN/WAN environments, backup & recovery procedures, and secure database operations.'
  },
]

const certsPreview = [
  { name: 'CEH Training (Essential, Professional, Advanced)', issuer: 'EC-Council / Udemy' },
  { name: 'Certified Ethical Hacking Masterclass (130+ Hours)', issuer: 'Udemy' },
  { name: 'Offensive Security Pathway (47 Hours)', issuer: 'Udemy / Offensive Security' },
  { name: 'Advanced Web Application Security & Bug Bounty', issuer: 'Byte Capsule IT' },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* SECTION A: HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,229,168,0.15),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-card border border-cyber-accent/30 text-xs font-mono text-cyber-accent w-fit cyber-glow">
                <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse" />
                <span>CYBERSECURITY PROFESSIONAL</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-cyber-text">
                Think Like an Attacker. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-accent to-cyber-blue">
                  Secure Like a Defender.
                </span>
              </h1>

              <p className="text-lg text-cyber-muted leading-relaxed font-sans">
                I'm <strong className="text-cyber-text font-semibold">Mohammad Muhib Ullah</strong>, a Junior Red Team Analyst and Cybersecurity Specialist with hands-on experience in penetration testing, vulnerability assessment, ethical hacking, and IT infrastructure management.
              </p>

              <p className="text-sm text-cyber-muted/80 leading-relaxed">
                With practical background in IT support, networking, system administration, and offensive security assessments, I focus on identifying security weaknesses and helping organizations strengthen their digital environments.
              </p>

              {/* Professional Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {['Red Team Analyst', 'Ethical Hacker', 'Penetration Tester', 'Cybersecurity Specialist'].map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-md bg-cyber-secondary border border-cyber-border text-xs font-mono text-cyber-accent">
                    {badge}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 rounded-lg bg-cyber-accent text-cyber-bg font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyber-accent/90 transition-all flex items-center gap-2 shadow-lg shadow-cyber-accent/20"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="/Mohammad-Muhib-Ullah-CV.pdf"
                  download
                  className="px-6 py-3 rounded-lg bg-cyber-card border border-cyber-border text-cyber-text font-mono text-xs uppercase tracking-wider hover:border-cyber-blue hover:text-cyber-blue transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download My CV</span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-cyber-secondary border border-cyber-border text-cyber-muted font-mono text-xs uppercase tracking-wider hover:text-cyber-text hover:border-cyber-accent transition-all"
                >
                  Let's Connect
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Cybersecurity Visual Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="cyber-card rounded-xl p-6 relative overflow-hidden cyber-glow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-accent/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyber-blue/5 rounded-full blur-2xl pointer-events-none" />

                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-cyber-border mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-cyber-muted">muhib@kali-sec:~</span>
                </div>

                {/* Terminal Body */}
                <div className="space-y-3 font-mono text-xs text-cyber-muted">
                  <div className="flex items-center gap-2 text-cyber-accent">
                    <span>$</span>
                    <span className="text-cyber-text">whoami</span>
                  </div>
                  <p className="text-cyber-text/90 pl-4 border-l border-cyber-accent/30">
                    Mohammad Muhib Ullah — Junior Red Team Analyst & Ethical Hacker.
                  </p>

                  <div className="flex items-center gap-2 text-cyber-accent pt-2">
                    <span>$</span>
                    <span className="text-cyber-text">nmap -sV target-environment.local</span>
                  </div>
                  <div className="text-[11px] text-cyber-muted/90 pl-4 space-y-1">
                    <p className="text-green-400">[+] Starting Nmap scan at 2026-10-30</p>
                    <p>PORT     STATE SERVICE       VERSION</p>
                    <p>22/tcp   open  ssh           OpenSSH 8.9p1</p>
                    <p>80/tcp   open  http          nginx 1.18.0</p>
                    <p>443/tcp  open  ssl/https     TLSv1.3</p>
                    <p>3389/tcp open  ms-wbt-server Microsoft Terminal Services</p>
                    <p className="text-cyber-accent font-bold">[✓] Security Audit Complete: 4 services identified.</p>
                  </div>

                  <div className="flex items-center gap-2 text-cyber-accent pt-2">
                    <span>$</span>
                    <span className="text-cyber-text animate-pulse">status --operational</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Readiness: 100% Prepared for Security Assessment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION B: TECHNOLOGY MARQUEE */}
      <section className="py-6 bg-cyber-secondary border-y border-cyber-border overflow-hidden">
        <div className="flex whitespace-nowrap overflow-x-hidden">
          <div className="flex animate-marquee items-center gap-12">
            {techMarqueeItems.concat(techMarqueeItems).map((tech, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyber-accent/60" />
                <span className="font-mono text-sm tracking-wider text-cyber-muted hover:text-cyber-accent transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: PROFESSIONAL INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="cyber-card rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">
                Professional Background
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text">
                Who I Am
              </h2>
              <p className="text-base text-cyber-muted leading-relaxed">
                I'm a cybersecurity enthusiast and Junior Red Team Analyst with practical experience in ethical hacking, penetration testing, IT support, and infrastructure management.
              </p>
              <p className="text-sm text-cyber-muted leading-relaxed">
                My professional journey combines hands-on IT operations experience with an evolving specialization in offensive security. I enjoy analyzing systems, understanding security weaknesses, and developing practical recommendations to improve organizational security.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono text-cyber-accent hover:text-cyber-blue transition-colors group"
                >
                  <span>MORE ABOUT ME</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 p-6 rounded-xl bg-cyber-bg border border-cyber-border">
              <span className="text-xs font-mono text-cyber-blue uppercase tracking-wider">Experience Snapshot</span>
              <div className="space-y-3 text-sm text-cyber-text">
                <div className="flex justify-between border-b border-cyber-border pb-2">
                  <span className="text-cyber-muted">UK IT Support</span>
                  <span className="font-mono text-cyber-accent">3+ Years</span>
                </div>
                <div className="flex justify-between border-b border-cyber-border pb-2">
                  <span className="text-cyber-muted">B&F Corporate</span>
                  <span className="font-mono text-cyber-accent">4 Years</span>
                </div>
                <div className="flex justify-between border-b border-cyber-border pb-2">
                  <span className="text-cyber-muted">IT Officer Experience</span>
                  <span className="font-mono text-cyber-accent">3 Years 9 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyber-muted">Red Team Internship</span>
                  <span className="font-mono text-cyber-blue">2025–2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: PROFESSIONAL STATISTICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'UK-Based IT Support', value: '3+ Years', sub: 'Remote Client Operations' },
            { label: 'B&F Corporate Officer', value: '4 Years', sub: 'Technical Infrastructure' },
            { label: 'IT Officer Experience', value: '3 Years 9 Mos', sub: 'Servers & LAN/WAN' },
            { label: 'Red Team Internship', value: '2025–2026', sub: 'Offensive Security Focus' },
          ].map((stat, idx) => (
            <div key={idx} className="cyber-card rounded-xl p-6 text-center flex flex-col items-center justify-center gap-2 group hover:border-cyber-accent transition-all">
              <span className="font-heading text-3xl lg:text-4xl font-bold text-cyber-accent group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-cyber-text">{stat.label}</span>
              <span className="text-xs font-mono text-cyber-muted">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: CORE EXPERTISE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">
            Specialized Capabilities
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text">
            Areas of Expertise
          </h2>
          <p className="text-sm text-cyber-muted max-w-2xl">
            Combining offensive security methodologies with robust IT system administration to deliver comprehensive security assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="cyber-card rounded-xl p-6 flex flex-col justify-between gap-6 group">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-center ${item.accent} group-hover:border-cyber-accent transition-all`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-cyber-muted/40 group-hover:text-cyber-accent/40 transition-colors">
                    {item.num}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cyber-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-cyber-border">
                  {item.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-0.5 rounded bg-cyber-bg text-[11px] font-mono text-cyber-muted border border-cyber-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* SECTION F: FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Portfolio Showcase</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text mt-1">
              Selected Security Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyber-accent hover:text-cyber-blue transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <div key={idx} className="cyber-card rounded-xl p-6 flex flex-col justify-between gap-6 group">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-cyber-blue uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-cyber-text group-hover:text-cyber-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-cyber-muted leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded bg-cyber-bg text-[11px] font-mono text-cyber-muted border border-cyber-border">
                      {tool}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="w-full py-2.5 rounded-lg bg-cyber-secondary border border-cyber-border text-center text-xs font-mono text-cyber-text group-hover:border-cyber-accent group-hover:text-cyber-accent transition-all flex items-center justify-center gap-2"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION G & H: EXPERIENCE & CERTIFICATIONS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Preview */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Career History</span>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-cyber-text mt-1">
                  Professional Experience
                </h2>
              </div>
              <Link href="/experience" className="text-xs font-mono text-cyber-accent hover:text-cyber-blue transition-colors">
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {experiencePreview.map((exp, idx) => (
                <div key={idx} className="cyber-card rounded-xl p-6 flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-heading text-lg font-bold text-cyber-text">{exp.role}</h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-cyber-blue">{exp.company}</span>
                  <p className="text-sm text-cyber-muted mt-2">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Preview */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyber-blue uppercase tracking-widest">Credentials</span>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-cyber-text mt-1">
                  Certifications & Training
                </h2>
              </div>
              <Link href="/certifications" className="text-xs font-mono text-cyber-blue hover:text-cyber-accent transition-colors">
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {certsPreview.map((cert, idx) => (
                <div key={idx} className="cyber-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-center text-cyber-blue shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-base font-bold text-cyber-text">{cert.name}</h3>
                    <span className="text-xs font-mono text-cyber-muted">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION I: CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="cyber-card rounded-2xl p-8 lg:p-16 relative overflow-hidden text-center flex flex-col items-center gap-6 cyber-glow">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,229,168,0.1),rgba(255,255,255,0))] pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-cyber-bg border border-cyber-accent/40 flex items-center justify-center text-cyber-accent">
            <Terminal className="w-8 h-8" />
          </div>

          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cyber-text">
              Let's Make the Digital World More Secure.
            </h2>
            <p className="text-sm lg:text-base text-cyber-muted leading-relaxed">
              Interested in cybersecurity, security assessments, technical collaboration, or professional opportunities? Let's connect.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg bg-cyber-accent text-cyber-bg font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyber-accent/90 transition-all flex items-center gap-2 shadow-lg shadow-cyber-accent/20"
            >
              <span>Contact Me</span>
              <Send className="w-4 h-4" />
            </Link>
            <a
              href="/Mohammad-Muhib-Ullah-CV.pdf"
              download
              className="px-8 py-3.5 rounded-lg bg-cyber-card border border-cyber-border text-cyber-text font-mono text-xs uppercase tracking-wider hover:border-cyber-blue hover:text-cyber-blue transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
