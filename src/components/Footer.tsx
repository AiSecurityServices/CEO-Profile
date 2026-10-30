import React from 'react'
import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, Linkedin, Github, Terminal, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cyber-secondary border-t border-cyber-border mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-accent/40 flex items-center justify-center text-cyber-accent">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-heading text-base font-bold tracking-wider text-cyber-text">
                MOHAMMAD MUHIB ULLAH
              </span>
            </Link>
            <p className="text-sm text-cyber-muted leading-relaxed">
              Junior Red Team Analyst and Cybersecurity Specialist focused on offensive security, vulnerability assessment, and securing digital environments.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-cyber-accent">
              <span className="w-2 h-2 rounded-full bg-cyber-accent animate-ping" />
              <span>Available for security opportunities</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyber-text mb-4 border-l-2 border-cyber-accent pl-3">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-cyber-muted">
              <li><Link href="/" className="hover:text-cyber-accent transition-colors flex items-center gap-1.5"><span>›</span> Home</Link></li>
              <li><Link href="/about" className="hover:text-cyber-accent transition-colors flex items-center gap-1.5"><span>›</span> About Me</Link></li>
              <li><Link href="/experience" className="hover:text-cyber-accent transition-colors flex items-center gap-1.5"><span>›</span> Professional Experience</Link></li>
              <li><Link href="/skills" className="hover:text-cyber-accent transition-colors flex items-center gap-1.5"><span>›</span> Core Skills</Link></li>
              <li><Link href="/certifications" className="hover:text-cyber-accent transition-colors flex items-center gap-1.5"><span>›</span> Certifications & Training</Link></li>
            </ul>
          </div>

          {/* Col 3: Expertise & Projects */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyber-text mb-4 border-l-2 border-cyber-blue pl-3">
              Specialization
            </h3>
            <ul className="space-y-2.5 text-sm text-cyber-muted">
              <li><Link href="/projects" className="hover:text-cyber-blue transition-colors flex items-center gap-1.5"><span>›</span> Red Teaming & Pentesting</Link></li>
              <li><Link href="/projects" className="hover:text-cyber-blue transition-colors flex items-center gap-1.5"><span>›</span> Vulnerability Assessment</Link></li>
              <li><Link href="/projects" className="hover:text-cyber-blue transition-colors flex items-center gap-1.5"><span>›</span> Web Application Security</Link></li>
              <li><Link href="/projects" className="hover:text-cyber-blue transition-colors flex items-center gap-1.5"><span>›</span> Network Security</Link></li>
              <li><Link href="/contact" className="hover:text-cyber-blue transition-colors flex items-center gap-1.5"><span>›</span> Get in Touch</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyber-text mb-4 border-l-2 border-cyber-accent pl-3">
              Contact & Location
            </h3>
            <ul className="space-y-3 text-sm text-cyber-muted">
              <li>
                <a href="mailto:muhibchy90@gmail.com" className="hover:text-cyber-accent transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyber-accent shrink-0" />
                  <span className="truncate">muhibchy90@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+8801816438941" className="hover:text-cyber-accent transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyber-accent shrink-0" />
                  <span>+8801816-438941</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyber-accent shrink-0" />
                <span>Chittagong, Bangladesh</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="/Mohammad-Muhib-Ullah-CV.pdf"
                download
                className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-border flex items-center justify-center text-cyber-muted hover:text-cyber-blue hover:border-cyber-blue transition-all"
                aria-label="Download CV"
              >
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyber-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cyber-muted font-mono">
          <p>© {new Date().getFullYear()} Mohammad Muhib Ullah. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Red Team Analyst</span>
            <span>•</span>
            <span>Ethical Hacker</span>
            <span>•</span>
            <span>Penetration Tester</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
