'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Terminal, Send, CheckCircle2, Download } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate secure transmission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }, 1000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
      {/* Header */}
      <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Direct Communication</span>
        <h1 className="font-heading text-4xl lg:text-5xl font-bold text-cyber-text">
          Have a Security Challenge or Professional Opportunity?
        </h1>
        <p className="text-base text-cyber-muted">
          I'm always interested in connecting with cybersecurity professionals, organizations, and people passionate about information security.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="cyber-card rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-cyber-border pb-4">
              <div className="w-12 h-12 rounded-xl bg-cyber-bg border border-cyber-accent/40 flex items-center justify-center text-cyber-accent">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-cyber-text">Mohammad Muhib Ullah</h3>
                <span className="text-xs font-mono text-cyber-accent">Red Team Analyst & Ethical Hacker</span>
              </div>
            </div>

            <ul className="space-y-6 text-sm">
              <li>
                <a href="mailto:muhibchy90@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-center text-cyber-accent group-hover:border-cyber-accent transition-all shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-cyber-muted">Email Address</span>
                    <span className="text-cyber-text font-medium group-hover:text-cyber-accent transition-colors">muhibchy90@gmail.com</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="tel:+8801816438941" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-center text-cyber-accent group-hover:border-cyber-accent transition-all shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-cyber-muted">Phone Number</span>
                    <span className="text-cyber-text font-medium group-hover:text-cyber-accent transition-colors">+8801816-438941</span>
                  </div>
                </a>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyber-bg border border-cyber-border flex items-center justify-center text-cyber-accent shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-cyber-muted">Location</span>
                  <span className="text-cyber-text font-medium">Chittagong, Bangladesh</span>
                </div>
              </li>
            </ul>

            <div className="pt-6 border-t border-cyber-border flex flex-col gap-3">
              <a
                href="/Mohammad-Muhib-Ullah-CV.pdf"
                download
                className="w-full py-3 rounded-lg bg-cyber-secondary border border-cyber-border text-center text-xs font-mono font-bold text-cyber-text hover:border-cyber-blue hover:text-cyber-blue transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download My CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="cyber-card rounded-2xl p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-cyber-accent/10 border border-cyber-accent text-cyber-accent flex items-center justify-center cyber-glow">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-cyber-text">Message Transmitted Successfully</h3>
                <p className="text-sm text-cyber-muted max-w-md">
                  Thank you for reaching out. Your secure transmission has been received, and I will get back to you promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ fullName: '', email: '', subject: '', message: '' })
                  }}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-cyber-accent text-cyber-bg font-mono font-bold text-xs uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-cyber-accent uppercase tracking-widest">Secure Inquiry Form</span>
                  <h3 className="font-heading text-2xl font-bold text-cyber-text">Send a Secure Message</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-cyber-muted">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="px-4 py-3 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-text text-sm focus:border-cyber-accent focus:outline-none transition-all font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-cyber-muted">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="px-4 py-3 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-text text-sm focus:border-cyber-accent focus:outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-cyber-muted">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Security Assessment / Collaboration / Opportunity"
                    className="px-4 py-3 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-text text-sm focus:border-cyber-accent focus:outline-none transition-all font-sans"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-cyber-muted">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your security challenge or professional opportunity..."
                    className="px-4 py-3 rounded-lg bg-cyber-bg border border-cyber-border text-cyber-text text-sm focus:border-cyber-accent focus:outline-none transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg bg-cyber-accent text-cyber-bg font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyber-accent/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyber-accent/20 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmitting Secure Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
