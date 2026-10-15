'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-gs-white border-b border-gs-border">
      <div className="max-w-5xl mx-auto px-6 h-[80px] flex items-center justify-between">
        <Link href="/" className="flex items-center overflow-visible">
          <img src="/images/logo.png" alt="Top Golf Simulators" style={{height:'160px',width:'auto',marginTop:'-40px',marginBottom:'-40px'}} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/best-golf-simulators"
            className="font-inter text-sm font-medium text-gs-text hover:text-gs-green transition-colors tracking-wide"
          >
            Best Simulators
          </Link>
          <Link
            href="/reviews/skytrak-plus-review"
            className="font-inter text-sm font-medium text-gs-text hover:text-gs-green transition-colors tracking-wide"
          >
            Reviews
          </Link>
          <Link
            href="/the-range"
            className="font-inter text-sm font-medium text-gs-text hover:text-gs-green transition-colors tracking-wide"
          >
            The Range
          </Link>
          <Link
            href="/reviews/home-golf-simulator-setup-guide"
            className="font-inter text-sm font-medium text-gs-text hover:text-gs-green transition-colors tracking-wide"
          >
            Setup Guide
          </Link>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 text-gs-text"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="md:hidden border-t border-gs-border bg-gs-white">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/best-golf-simulators"
              className="font-inter text-sm font-medium text-gs-text hover:text-gs-green transition-colors tracking-wide py-2"
              onClick={() => setOpen(false)}
            >
              Best Simulators
            </Link>
            <Link
              href="/reviews/skytrak-plus-review"
              className="font-inter text-sm font-medium text-gs-text hover:text-gs-green transition-colors tracking-wide py-2"
              onClick={() => setOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/reviews/home-golf-simulator-setup-guide"
              className="font-inter text-sm font-medium text-gs-text hover:text-gs-green transition-colors tracking-wide py-2"
              onClick={() => setOpen(false)}
            >
              Setup Guide
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
