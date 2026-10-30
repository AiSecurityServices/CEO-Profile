'use client'

import React from 'react'
import { Shield, Terminal, CheckCircle2, Globe, Award, Briefcase, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const timelineEntries = [
  {
    role: 'Junior Red Team Analyst (Internship)',
    period: '2025–2026',
    company: 'Offensive Security Training & Lab Environment',
    responsibilities: [
      'Conducted penetration testing on web applications and networks using Kali Linux, Burp Suite, and Metasploit.',
      'Performed vulnerability scans using Nessus and OpenVAS.',
      'Documented security findings and mitigation recommendations.',
      'Simulated phishing and lateral movement scenarios in authorized security assessments.',
      'Documented attack paths and provided security-hardening recommendations.'
    ]
  },
  {
    role: 'IT Support Officer',
    period: '4 Years',
    company: 'B&F Corporate (UK-Based)',
    responsibilities: [
      'Provided remote technical support to UK clients.',
      'Troubleshot networking, operating system, and application issues.',
      'Focused on secure system operation and minimizing downtime.',
      'Trained non-technical users on safe IT practices and phishing awareness.',
      'Developed strong English communication and client-facing skills.'
    ]
  },
  {
    role: 'IT Officer',
    period: '3 Years 9 Months',
    company: 'MS. Monzur & Company',
    responsibilities: [
      'Managed IT infrastructure, including servers and LAN/WAN environments.',
      'Implemented backup and recovery procedures.',
      'Supported Windows and Linux server deployment.',
      'Managed meter-rent calculating software for CNG auto-rickshaw operations.'
    ]
  },
]

const educationList = [
  {
    degree: 'MBS — Master of Business Studies',
    institution: 'Govt. Commerce College, Chittagong',
    university: 'National University',
    year: '2015'
  },
  {
    degree: 'BBS — Bachelor of Business Studies',
    institution: 'Govt. Commerce College, Chittagong',
    university: 'National University',
    year: '2014'
  }
]

const languagesList = [
  { name: 'English', proficiency: 'Fluent (IELTS + Aptis)' },
  { name: 'Bengali', proficiency: 'Native' },
  { name: 'Hindi / Urdu', proficiency: 'Fluent' },
]

const approachPoints = [
  'Think critically about potential attack surfaces and adversary motivations.',
  'Assess systems systematically using industry-standard methodologies.',
  'Identify security weaknesses and latent vulnerabilities before exploitation.',
  'Document findings clearly with accurate risk ratings and actionable insights.',
  'Recommend practical, high-impact improvements for organizational defense.',
  'Continue learning and improving through rigorous training and lab exercises.'
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-20">
      {/* SECTION A: INTRODUCTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-card border border-cyber-accent/30 text-xs font-mono text-cyber-accent w-fit cyber-glow">
            <Shield className="w-3.5 h-3.5" />
            <span>ABOUT MOHAMMAD MUHIB ULLAH</span>
          </div>

          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
            Cybersecurity Professional | Red Team Analyst | Ethical Hacker
          </h1>

          <p className="text-base text-cyber-muted leading-relaxed">
            I am a cybersecurity professional with hands-on experience in penetration testing, ethical hacking, vulnerability assessment, and IT infrastructure management.
          </p>

          <p className="text-sm text-cyber-muted leading-relaxed">
            My professional background includes working as an IT Support Officer for a UK-based company and as an IT Officer managing business IT infrastructure.
          </p>

          <p className="text-sm text-cyber-muted leading-relaxed">
            I am currently developing my specialization in red teaming and offensive security through practical security assessments, technical training, and continuous learning.
          </p>

          <p className="text-sm text-cyber-text font-medium leading-relaxed bg-cyber-card p-4 rounded-xl border border-cyber-border">
            "My goal is to help organizations understand their security weaknesses, improve their defenses, and maintain more secure digital environments."
          </p>
        </motion.div>

        {/* Right Card / Quick Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="cyber-card rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-cyber-border pb-4">
              <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-accent/40 flex items-center justify-center text-cyber-accent">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-cyber-text">Profile Summary</h3>
                <span className="text-xs font-mono text-cyber-muted">Chittagong, Bangladesh</span>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-cyber-border/60 pb-3">
                <span className="text-cyber-muted">Primary Focus</span>
                <span className="font-mono text-cyber-accent">Red Teaming & Pentesting</span>
              </div>
              <div className="flex justify-between border-b border-cyber-border/60 pb-3">
                <span className="text-cyber-muted">IT Support Experience</span>
                <span className="font-mono text-cyber-text">UK Client Operations (3+ Years)</span>
              </div>
              <div className="flex justify-between border-b border-cyber-border/60 pb-3">
                <span className="text-cyber-muted">Corporate IT Career</span>
                <span className="font-mono text-cyber-text">7+ Years Total IT Background</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyber-muted">Languages</span>
                <span className="font-mono text-cyber-blue">English, Bengali, Hindi</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION B: PROFESSIONAL JOURNEY TIMELINE */}
      <section className="flex flex-col gap-8">
        <div>
          <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Career Pathway</span>
          <h2 className="font-heading text-3xl font-bold text-cyber-text mt-1">
            Professional Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {timelineEntries.map((item, idx) => (
            <div key={idx} className="cyber-card rounded-xl p-8 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-cyber-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-center text-cyber-accent">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-cyber-text">{item.role}</h3>
                    <span className="text-xs font-mono text-cyber-blue">{item.company}</span>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/30 w-fit">
                  {item.period}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-cyber-muted uppercase tracking-wider">Key Responsibilities:</span>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-sm text-cyber-muted">
                      <CheckCircle2 className="w-4 h-4 text-cyber-accent shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION C & E: EDUCATION & LANGUAGES */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-mono text-cyber-blue uppercase tracking-widest">Academic Background</span>
            <h2 className="font-heading text-2xl font-bold text-cyber-text mt-1">
              Education
            </h2>
          </div>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div key={idx} className="cyber-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-center text-cyber-blue shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-bold text-cyber-text">{edu.degree}</h3>
                  <span className="text-xs text-cyber-muted">{edu.institution} — {edu.university}</span>
                  <span className="text-xs font-mono text-cyber-accent mt-1">Passing Year: {edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Professional Approach */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Communication & Philosophy</span>
            <h2 className="font-heading text-2xl font-bold text-cyber-text mt-1">
              Languages & Approach
            </h2>
          </div>

          <div className="cyber-card rounded-xl p-6 flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold text-cyber-text uppercase tracking-wider">Languages</h3>
            <div className="space-y-3">
              {languagesList.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-cyber-border pb-2 text-sm">
                  <span className="text-cyber-text font-medium">{lang.name}</span>
                  <span className="font-mono text-xs text-cyber-accent">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cyber-card rounded-xl p-6 flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold text-cyber-text uppercase tracking-wider">My Approach to Cybersecurity</h3>
            <ul className="space-y-2 text-sm text-cyber-muted">
              {approachPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyber-accent font-mono">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
