import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Top Golf Simulators — Real Reviews, Real Golfers',
    template: '%s | Top Golf Simulators',
  },
  description: 'Honest golf simulator reviews and buying guides from people who actually use them. We test the gear so you know what to buy.',
  metadataBase: new URL('https://www.topgolfsimulators.com'),
  openGraph: {
    title: 'Top Golf Simulators — Real Reviews, Real Golfers',
    description: 'Honest golf simulator reviews and buying guides from people who actually use them.',
    url: 'https://www.topgolfsimulators.com',
    siteName: 'Top Golf Simulators',
    type: 'website',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Top Golf Simulators' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Golf Simulators — Real Reviews, Real Golfers',
    description: 'Honest golf simulator reviews and buying guides from people who actually use them.',
    images: ['/images/hero.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
