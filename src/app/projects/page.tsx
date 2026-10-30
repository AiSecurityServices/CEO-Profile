'use client'

import React, { useState } from 'react'
import { Terminal, Shield, ArrowRight, ExternalLink, X, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: string
  title: string
  category: string
  overview: string
  objective: string
  scope: string
  methodology: string
  tools: string[]
  findings: string[]
  recommendations: string[]
  status: string
}

const projectsList: Project[] = [
  {
    id: 'web-app-pentest',
    title: 'Enterprise Web Application Penetration Test',
    category: 'Web Application Security',
    overview: 'Conducted a comprehensive security assessment against a multi-tier web application, identifying critical OWASP Top 10 vulnerabilities including SQL injection and broken access control.',
    objective: 'Evaluate web application resilience against external attackers and verify data confidentiality and integrity.',
    scope: 'Authenticated and unauthenticated web application endpoints, API routes, and user session handling mechanisms.',
    methodology: 'Black-box and grey-box penetration testing following OWASP Testing Guide v4.2 standards using manual probing and automated scanners.',
    tools: ['Burp Suite Professional', 'SQLMap', 'OWASP ZAP', 'Python Scripts', 'Custom Payloads'],
    findings: [
      'Critical SQL Injection in user search parameters allowing database enumeration.',
      'Broken Object Level Authorization (BOLA) in user account profile endpoints.',
      'Reflected Cross-Site Scripting (XSS) in feedback submission forms.'
    ],
    recommendations: [
      'Implement parameterized queries and prepared statements across all database interactions.',
      'Enforce strict server-side authorization checks on all object-level API endpoints.',
      'Apply context-aware output encoding and sanitize all user-supplied input.'
    ],
    status: 'Authorized Lab / Personal Research'
  },
  {
    id: 'ad-lateral-movement',
    title: 'Active Directory Lateral Movement Simulation',
    category: 'Red Teaming',
    overview: 'Simulated internal network adversary scenarios within an authorized lab environment, executing credential harvesting and Kerberoasting attack paths.',
    objective: 'Demonstrate how an attacker with low-privileged access can escalate privileges and achieve domain dominance.',
    scope: 'Simulated Windows Active Directory domain controller, member workstations, and service accounts.',
    methodology: 'Adverse simulation framework modeling MITRE ATT&CK enterprise tactics for credential access and lateral movement.',
    tools: ['BloodHound', 'Mimikatz', 'PowerView', 'Metasploit Framework', 'Responder'],
    findings: [
      'Kerberoastable service accounts with weak passwords allowing offline dictionary attacks.',
      'Excessive ACL permissions on Active Directory security groups allowing group membership modification.',
      'Cached domain administrator credentials found in workstation memory.'
    ],
    recommendations: [
      'Enforce strong, complex passwords (15+ characters) for all service accounts and implement Group Managed Service Accounts (gMSA).',
      'Audit and prune unnecessary Active Directory object ACLs.',
      'Enable Credential Guard on all Windows enterprise endpoints.'
    ],
    status: 'Authorized Lab / Personal Research'
  },
  {
    id: 'infra-vuln-assessment',
    title: 'Automated Infrastructure Vulnerability Scan & Hardening',
    category: 'Vulnerability Assessment',
    overview: 'Performed systematic vulnerability scans across enterprise servers and network endpoints, generating prioritized remediation reports.',
    objective: 'Identify unpatched software, misconfigured services, and weak cryptographic ciphers across internal networks.',
    scope: 'Simulated server cluster including Windows Server 2016 and Red Hat Linux nodes.',
    methodology: 'Credentialed and uncredentialed vulnerability scanning coupled with manual verification.',
    tools: ['Nessus Professional', 'OpenVAS', 'Nmap', 'Bash Scripting'],
    findings: [
      'Outdated OpenSSL library susceptible to known CVE exploits.',
      'Unencrypted SMBv1 protocol enabled on legacy file shares.',
      'Default administrative credentials active on auxiliary network printers.'
    ],
    recommendations: [
      'Apply latest vendor security patches and establish an automated patch management cadence.',
      'Disable SMBv1 globally and enforce SMBv3 with packet signing.',
      'Change all default credentials and enforce multi-factor authentication where applicable.'
    ],
    status: 'Authorized Lab / Personal Research'
  },
  {
    id: 'security-monitoring-siem',
    title: 'Security Monitoring & Threat Detection with Wazuh',
    category: 'Security Monitoring',
    overview: 'Deployed and configured an open-source SIEM and XDR platform to monitor endpoint activity, detect brute-force attempts, and alert on unauthorized file integrity changes.',
    objective: 'Establish real-time visibility into system logs and detect suspicious authentication anomalies.',
    scope: 'Linux and Windows endpoint agents reporting to central Wazuh manager.',
    methodology: 'Log collection, rule tuning, syscheck file integrity monitoring, and active response configuration.',
    tools: ['Wazuh SIEM', 'Sysmon', 'Elasticsearch / Filebeat', 'Bash'],
    findings: [
      'High volume of failed SSH login attempts from external IP ranges during brute-force simulation.',
      'Unauthorized modification of system configuration files detected within 5 seconds.'
    ],
    recommendations: [
      'Implement fail2ban to automatically block IP addresses exceeding failed login thresholds.',
      'Review file integrity monitoring alerts daily and restrict write permissions on critical system binaries.'
    ],
    status: 'Authorized Lab / Personal Research'
  },
  {
    id: 'phishing-awareness',
    title: 'Phishing Simulation & Security Awareness Campaign',
    category: 'Security Operations',
    overview: 'Designed and executed a controlled phishing simulation campaign to measure organizational susceptibility to social engineering and deliver targeted awareness training.',
    objective: 'Evaluate employee awareness regarding malicious email attachments and credential harvesting links.',
    scope: 'Simulated internal campaign targeting test organizational units.',
    methodology: 'Controlled phishing email distribution, metric tracking, and immediate interactive training delivery upon submission.',
    tools: ['Gophish', 'SMTP Relay', 'HTML Email Templates'],
    findings: [
      '14% click-through rate on simulated credential harvesting landing pages.',
      'Departmental variance noted, highlighting the need for tailored role-based training.'
    ],
    recommendations: [
      'Conduct recurring quarterly phishing simulations with immediate remedial micro-training for clickers.',
      'Implement external email warning banners for incoming messages originating outside the corporate domain.'
    ],
    status: 'Authorized Lab / Personal Research'
  }
]

const categories = ['All', 'Web Application Security', 'Red Teaming', 'Vulnerability Assessment', 'Security Monitoring', 'Security Operations']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Portfolio Showcase</span>
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
          Security Projects & Lab Research
        </h1>
        <p className="text-base text-cyber-muted max-w-3xl">
          Authorized security assessments, penetration testing lab reports, vulnerability evaluations, and security monitoring deployments. All examples reflect ethical hacking research and authorized engagements.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-cyber-border">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                isActive
                  ? 'bg-cyber-accent text-cyber-bg font-bold shadow-lg shadow-cyber-accent/20'
                  : 'bg-cyber-card text-cyber-muted border border-cyber-border hover:text-cyber-text hover:border-cyber-accent'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="cyber-card rounded-xl p-6 flex flex-col justify-between gap-6 group">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyber-blue uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-bg text-cyber-muted border border-cyber-border">
                  {project.status}
                </span>
              </div>
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
                  <span key={tool} className="px-2.5 py-0.5 rounded bg-cyber-bg text-[11px] font-mono text-cyber-muted border border-cyber-border">
                    {tool}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveProject(project)}
                className="w-full py-3 rounded-lg bg-cyber-secondary border border-cyber-border text-center text-xs font-mono font-bold text-cyber-text group-hover:border-cyber-accent group-hover:text-cyber-accent transition-all flex items-center justify-center gap-2"
              >
                <span>View Full Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-bg/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="cyber-card rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative flex flex-col gap-6 shadow-2xl border border-cyber-accent/40"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-2 pr-12">
                <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">{activeProject.category}</span>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-cyber-text">{activeProject.title}</h2>
                <span className="text-xs font-mono text-cyber-blue">{activeProject.status}</span>
              </div>

              <div className="space-y-6 text-sm text-cyber-muted">
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-cyber-text uppercase tracking-wider text-xs border-l-2 border-cyber-accent pl-2">Project Overview</h4>
                  <p className="leading-relaxed">{activeProject.overview}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="cyber-card rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-heading font-bold text-cyber-text text-xs uppercase">Objective</span>
                    <p className="text-xs leading-relaxed">{activeProject.objective}</p>
                  </div>
                  <div className="cyber-card rounded-xl p-4 flex flex-col gap-2">
                    <span className="font-heading font-bold text-cyber-text text-xs uppercase">Scope</span>
                    <p className="text-xs leading-relaxed">{activeProject.scope}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-cyber-text uppercase tracking-wider text-xs border-l-2 border-cyber-blue pl-2">Methodology</h4>
                  <p className="leading-relaxed">{activeProject.methodology}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-cyber-text uppercase tracking-wider text-xs border-l-2 border-cyber-accent pl-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeProject.tools.map((t) => (
                      <span key={t} className="px-3 py-1 rounded bg-cyber-bg text-xs font-mono text-cyber-accent border border-cyber-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-cyber-text uppercase tracking-wider text-xs border-l-2 border-red-500 pl-2">Key Findings / Outcomes</h4>
                  <ul className="space-y-2">
                    {activeProject.findings.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-red-400 font-mono">[-]</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-cyber-text uppercase tracking-wider text-xs border-l-2 border-cyber-accent pl-2">Security Recommendations</h4>
                  <ul className="space-y-2">
                    {activeProject.recommendations.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyber-accent shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-cyber-border flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 rounded-lg bg-cyber-accent text-cyber-bg font-mono font-bold text-xs uppercase tracking-wider"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
