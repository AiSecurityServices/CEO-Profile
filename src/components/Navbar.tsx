'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Menu, X, Terminal, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber-bg/90 backdrop-blur-md border-b border-cyber-border py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="w-[min(94%,1850px)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 w-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="w-10 h-10 rounded-lg bg-cyber-card border border-cyber-accent/40 flex items-center justify-center text-cyber-accent group-hover:border-cyber-accent group-hover:cyber-glow transition-all">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading text-lg lg:text-xl font-bold tracking-wider text-cyber-text group-hover:text-cyber-accent transition-colors">
                MOHAMMAD MUHIB ULLAH
              </span>
              <span className="block text-[10px] font-mono text-cyber-muted tracking-widest uppercase">
                Red Team Analyst & Ethical Hacker
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-between items-center gap-4 bg-cyber-secondary/50 backdrop-blur-sm border border-cyber-border px-8 py-2.5 rounded-full w-full max-w-4xl mx-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap text-center flex-1 ${
                    isActive
                      ? 'bg-cyber-accent text-cyber-bg font-semibold shadow-md shadow-cyber-accent/25'
                      : 'text-cyber-muted hover:text-cyber-text hover:bg-cyber-card/60'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3 justify-end">
            <a
              href="/Mohammad-Muhib-Ullah-CV.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-card border border-cyber-border text-xs font-mono text-cyber-text hover:border-cyber-blue hover:text-cyber-blue transition-all whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <Link
              href="/contact"
              className="relative group overflow-hidden rounded-lg p-[1px] font-medium text-xs font-mono uppercase tracking-wider whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-accent to-cyber-blue group-hover:opacity-100 transition-opacity" />
              <span className="relative px-4 py-2 rounded-[7px] bg-cyber-bg flex items-center gap-2 text-cyber-text group-hover:bg-transparent group-hover:text-cyber-bg transition-colors">
                <Terminal className="w-3.5 h-3.5 text-cyber-accent group-hover:text-cyber-bg" />
                <span>LET'S CONNECT</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-cyber-card border border-cyber-border text-cyber-text hover:text-cyber-accent focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cyber-card border-b border-cyber-border mt-4 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-cyber-accent text-cyber-bg font-semibold'
                        : 'text-cyber-muted hover:text-cyber-text hover:bg-cyber-secondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-cyber-border flex flex-col gap-3">
                <a
                  href="/Mohammad-Muhib-Ullah-CV.pdf"
                  download
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-cyber-secondary border border-cyber-border text-sm font-mono text-cyber-text"
                >
                  <Download className="w-4 h-4 text-cyber-blue" />
                  <span>Download CV</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-cyber-accent text-cyber-bg font-mono font-bold text-sm tracking-wider uppercase"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Let's Connect</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
