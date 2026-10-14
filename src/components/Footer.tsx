import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gs-off border-t border-gs-border mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="font-serif text-xl text-gs-green font-medium">
              Top Golf Simulators
            </Link>
            <p className="mt-2 text-gs-muted text-sm font-inter leading-relaxed max-w-xs">
              Honest reviews and buying guides for golf simulators, written by real golfers.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-muted mb-3">Reviews</h4>
              <ul className="space-y-2">
                <li><Link href="/reviews/skytrak-plus-review" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">SkyTrak+</Link></li>
                <li><Link href="/reviews/foresight-sports-gc3-review" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">Foresight GC3</Link></li>
                <li><Link href="/reviews/full-swing-kit-review" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">Full Swing KIT</Link></li>
                <li><Link href="/reviews/flightscope-mevo-plus-review" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">FlightScope Mevo+</Link></li>
                <li><Link href="/reviews/garmin-approach-r10-review" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">Garmin R10</Link></li>
                <li><Link href="/reviews/truegolf-apogee-review" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">TruGolf APOGEE</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-muted mb-3">Guides</h4>
              <ul className="space-y-2">
                <li><Link href="/best-golf-simulators" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">Best Simulators</Link></li>
                <li><Link href="/reviews/best-golf-simulator-under-5000" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">Under $5,000</Link></li>
                <li><Link href="/reviews/best-golf-simulator-for-garage" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">Garage Setup</Link></li>
                <li><Link href="/reviews/golf-simulator-vs-launch-monitor" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">vs. Launch Monitor</Link></li>
                <li><Link href="/reviews/home-golf-simulator-setup-guide" className="font-inter text-sm text-gs-text hover:text-gs-green transition-colors">Setup Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gs-border">
          <p className="font-inter text-xs text-gs-muted leading-relaxed">
            <strong>Affiliate Disclosure:</strong> Top Golf Simulators participates in affiliate programs. When you click links and make a purchase, we may earn a commission at no extra cost to you. Our reviews are based on independent research and personal testing — affiliate relationships never influence our recommendations.
          </p>
          <p className="font-inter text-xs text-gs-muted mt-3">
            © {new Date().getFullYear()} Top Golf Simulators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
