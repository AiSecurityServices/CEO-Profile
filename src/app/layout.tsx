import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import '../app/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Mohammad Muhib Ullah | Red Team Analyst | Ethical Hacker | Penetration Tester',
  description: 'Explore the professional portfolio of Mohammad Muhib Ullah, a Junior Red Team Analyst specializing in ethical hacking, penetration testing, vulnerability assessment, and IT infrastructure.',
  keywords: ['Mohammad Muhib Ullah', 'Red Team Analyst', 'Ethical Hacker', 'Penetration Tester', 'Cybersecurity Specialist', 'Vulnerability Assessment', 'Network Security', 'Web Application Security', 'Offensive Security'],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-cyber-bg text-cyber-text min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
