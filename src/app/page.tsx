import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Top Golf Simulators — Real Reviews, Real Golfers',
  description: 'Honest golf simulator reviews and buying guides from people who actually use them. We test the gear so you know what to buy.',
}

export default function HomePage() {
  return (
    <div className="bg-gs-white">

      {/* Full-bleed hero image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img src="/images/hero.png" alt="Home golf simulator setup" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gs-white/80" />
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-5">Golf Simulator Reviews</p>
          <h1 className="font-serif text-5xl md:text-6xl text-gs-green leading-tight mb-6">
            Stop Guessing. Here&apos;s What Actually Works.
          </h1>
          <p className="font-inter text-lg text-gs-muted leading-relaxed mb-8 font-light">
            Golf simulators have gotten legitimately good. They&apos;ve also gotten legitimately expensive, with a lot of marketing noise in between. We break down exactly what each system does well, what it doesn&apos;t, and who should actually buy it.
          </p>
          <Link
            href="/best-golf-simulators"
            className="inline-block bg-gs-green text-white font-inter text-sm font-medium px-8 py-3 tracking-wide hover:bg-opacity-90 transition-all"
          >
            See Our Top Picks →
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gs-border" />
      </div>

      {/* Featured Simulators */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-baseline gap-4 mb-10">
          <h2 className="font-serif text-3xl text-gs-green">Our Top Picks</h2>
          <Link href="/best-golf-simulators" className="font-inter text-sm text-gs-muted hover:text-gs-green transition-colors">View full comparison →</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'SkyTrak+',
              tag: 'Best Overall',
              price: '$2,995',
              blurb: 'The camera-radar hybrid that hits the sweet spot between accuracy and price. If you want one system for a home setup and don\'t want to think too hard about it, this is the one.',
              href: '/reviews/skytrak-plus-review',
            },
            {
              name: 'Foresight GC3',
              tag: 'Best for Accuracy',
              price: '$4,999',
              blurb: 'Three high-speed cameras tracking every millimeter of ball flight. The kind of accuracy that club fitters rely on. Expensive, but you\'re paying for data you can trust completely.',
              href: '/reviews/foresight-sports-gc3-review',
            },
            {
              name: 'Full Swing KIT',
              tag: 'Best for Outdoor Use',
              price: '$4,999',
              blurb: 'Dual radar, works in full daylight, and it\'s what Tiger has in his garage. Not just marketing — the outdoor performance is genuinely in a different tier from camera systems.',
              href: '/reviews/full-swing-kit-review',
            },
            {
              name: 'FlightScope Mevo+',
              tag: 'Best Mid-Range Portable',
              price: '$2,199',
              blurb: 'A portable Doppler radar that punches above its weight class. Needs 8 feet behind the ball and a $150/yr subscription for full simulator mode, but the data quality is impressive.',
              href: '/reviews/flightscope-mevo-plus-review',
            },
            {
              name: 'Garmin Approach R10',
              tag: 'Best Budget Entry',
              price: '$599',
              blurb: 'Yes, $599 for something that actually works. Not a $3,000 system, and doesn\'t pretend to be. A genuine entry point for anyone who wants to try simulator golf without a big commitment.',
              href: '/reviews/garmin-approach-r10-review',
            },
            {
              name: 'TruGolf APOGEE',
              tag: 'Best All-in-One',
              price: '$8,995',
              blurb: 'The only one that comes with TGC2 included — 150,000 courses, no subscription. If you want to skip the build-your-own complexity and have one package that just works, this is it.',
              href: '/reviews/truegolf-apogee-review',
            },
          ].map((sim) => (
            <Link key={sim.name} href={sim.href} className="group border border-gs-border p-6 hover:border-gs-gold transition-colors block">
              <div className="flex items-start justify-between mb-3">
                <span className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold">{sim.tag}</span>
                <span className="font-inter text-sm font-medium text-gs-muted">{sim.price}</span>
              </div>
              <h3 className="font-serif text-2xl text-gs-green mb-3 group-hover:text-gs-gold transition-colors">{sim.name}</h3>
              <p className="font-inter text-sm text-gs-muted leading-relaxed font-light">{sim.blurb}</p>
              <p className="font-inter text-xs text-gs-green mt-4 font-medium">Read full review →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gs-border" />
      </div>

      {/* Editorial Teasers */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl text-gs-green mb-10">Buying Guides</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'The Best Golf Simulators Under $5,000',
              desc: 'This isn\'t a list of cheap launch monitors. It\'s a complete system budget breakdown — launch monitor, screen, projector, enclosure, software — at three real price tiers.',
              href: '/reviews/best-golf-simulator-under-5000',
              label: 'Budget Guide',
            },
            {
              title: 'Best Garage Golf Simulator: A Real Setup Guide',
              desc: 'Ceiling height, depth requirements, projector throw ratios, lighting considerations for radar vs. camera systems. Everything you need before you start buying parts.',
              href: '/reviews/best-golf-simulator-for-garage',
              label: 'Space Guide',
            },
            {
              title: 'How to Build a Home Golf Simulator',
              desc: 'From room selection to equipment list to common mistakes people make after spending $4,000. The complete guide to getting it right the first time.',
              href: '/reviews/home-golf-simulator-setup-guide',
              label: 'Setup Guide',
            },
          ].map((article) => (
            <Link key={article.title} href={article.href} className="group block">
              <div className="bg-gs-light p-6 h-full border border-transparent group-hover:border-gs-border transition-colors">
                <span className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold">{article.label}</span>
                <h3 className="font-serif text-xl text-gs-green mt-2 mb-3 leading-snug">{article.title}</h3>
                <p className="font-inter text-sm text-gs-muted leading-relaxed font-light">{article.desc}</p>
                <p className="font-inter text-xs text-gs-green mt-4 font-medium">Read more →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gs-border" />
      </div>

      {/* Why Trust Us */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-gs-green mb-6">Why Trust This Site?</h2>
          <div className="space-y-4 font-inter text-base text-gs-muted font-light leading-relaxed">
            <p>
              Fair question. There&apos;s a lot of garbage golf simulator content out there — affiliate farms that repackage manufacturer specs and call it a review. That&apos;s not what this is.
            </p>
            <p>
              I&apos;ve spent real time with all of the major systems covered here. I know the difference between a camera-based system struggling with side lighting and a radar system that can&apos;t see spin axis accurately. I know which software feels like it was designed in 2015 and which one actually makes you want to play.
            </p>
            <p>
              My goal is simple: tell you what works, what doesn&apos;t, and who each system is actually right for. If a $600 Garmin R10 is the right answer for you, I&apos;ll tell you that. If you need to spend $7,000, I&apos;ll tell you that too.
            </p>
            <p>
              We use affiliate links. That&apos;s disclosed, and it never changes our recommendations. The Garmin R10 is our entry-level pick at $599 — not because of the commission, but because it&apos;s genuinely the right answer for a lot of people.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
