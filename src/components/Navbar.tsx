import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-gs-white border-b border-gs-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-wide text-gs-green font-medium">
          Golf Sim Lab
        </Link>
        <nav className="flex items-center gap-8">
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
            href="/reviews/home-golf-simulator-setup-guide"
            className="font-inter text-sm font-medium text-gs-text hover:text-gs-green transition-colors tracking-wide"
          >
            Setup Guide
          </Link>
        </nav>
      </div>
    </header>
  )
}
