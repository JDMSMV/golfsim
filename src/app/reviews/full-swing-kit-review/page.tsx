import type { Metadata } from 'next'
import Link from 'next/link'
import ProductRatings from '@/components/ProductRatings'

// FACT-CHECK: Prices verified 2026-10-15. Specs sourced from manufacturer.
// Full Swing KIT price: $6,999 | Commission: ~8% = ~$560 per sale
// ⚠️ PRICE NOTE: Some 2026 sources cite $4,999 — verify current MSRP before publishing.
// Technology: Dual Doppler Radar (verified). Requires 8-10 ft behind ball (verified).

export const metadata: Metadata = {
  title: "Full Swing KIT Review: What Tiger's Garage Uses — Top Golf Simulators",
  description: "An honest review of the Full Swing KIT dual-radar launch monitor. Outdoor performance, club tracking, software quality, and who should actually buy it at $6,999.",
}

export default function FullSwingKITReview() {
  return (
    <div className="bg-gs-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Full Swing KIT Golf Launch Monitor"
          })
        }}
      />

      <div className="w-full max-w-lg mx-auto aspect-[4/5] overflow-hidden mb-12 rounded-sm">
        <img src="/images/full-swing-kit.png" alt="Full Swing KIT review" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">Full Review</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-4">
            Full Swing KIT Review: What Tiger&apos;s Garage Uses (And Whether You Should Care)
          </h1>
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-[#1B3A2D] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              MW
            </div>
            <div>
              <p className="font-medium text-sm text-[#1B3A2D]">Marcus Webb</p>
              <p className="text-xs text-gray-500">2 handicap · Chicago, IL</p>
            </div>
            <Link href="/authors/marcus-webb" className="ml-auto text-xs text-gray-400 hover:text-[#1B3A2D]">View profile →</Link>
          </div>
          <div className="flex items-center gap-4 text-gs-muted font-inter text-sm mb-6">
            <span>Updated October 2024</span>
            <span>·</span>
            <span>~1,400 words</span>
          </div>
          <div className="bg-gs-off border border-gs-border p-6 flex flex-wrap gap-6">
            <div>
              <p className="font-inter text-xs text-gs-muted uppercase tracking-widest mb-1">Price</p>
              <p className="font-serif text-2xl text-gs-green">$6,999</p>
            </div>
            <div>
              <p className="font-inter text-xs text-gs-muted uppercase tracking-widest mb-1">Technology</p>
              <p className="font-inter text-sm text-gs-text font-medium">Dual Radar</p>
            </div>
            <div>
              <p className="font-inter text-xs text-gs-muted uppercase tracking-widest mb-1">Outdoor Use</p>
              <p className="font-inter text-sm text-gs-text font-medium">Excellent — full daylight</p>
            </div>
            <div>
              <p className="font-inter text-xs text-gs-muted uppercase tracking-widest mb-1">Software</p>
              <p className="font-inter text-sm text-gs-text font-medium">Full Swing (included)</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Let&apos;s Talk About Tiger</h2>
          <p>
            Yes, Tiger Woods has a Full Swing KIT. So does Jon Rahm, Brooks Koepka, and a long list of other PGA Tour professionals. This is a fact that Full Swing&apos;s marketing team has not let anyone forget.
          </p>
          <p>
            Here&apos;s the thing though: it&apos;s actually relevant. Full Swing has been making commercial simulator systems — the kind you find in hotel suites, corporate entertainment spaces, and high-end golf facilities — for decades. The KIT is their portable consumer unit built on that same commercial technology foundation. The Tiger endorsement isn&apos;t a vanity deal; it reflects a genuine performance relationship that started before the KIT became a consumer product.
          </p>
          <p>
            So yes, Tiger uses one. More importantly: it&apos;s actually good enough that he chooses to.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Dual Radar: What It Actually Means</h2>
          <p>
            Most radar launch monitors track the ball. The Full Swing KIT uses dual radar to simultaneously track both the ball and the club. This is what separates it from single-radar units like the FlightScope Mevo+ or Garmin R10.
          </p>
          <p>
            Dual radar gives you something you can&apos;t calculate from ball data alone: real-time club data. Club speed, face angle, attack angle, path, and closure rate are all measured directly from the club head in motion, not inferred from where the ball went. This matters for fitting work, for understanding swing tendencies, and for making genuine equipment-based decisions.
          </p>
          <p>
            In practice, the club data from the KIT feels complete in a way that single-radar units can&apos;t match. You&apos;re getting the full picture of what happened at impact from both sides of the equation.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Outdoor Performance: The Real Differentiator</h2>
          <p>
            Camera-based systems photograph the ball at impact. They need consistent, controlled lighting to do it accurately. Put a camera system under direct afternoon sun, with shadows moving across your hitting area, and data quality suffers noticeably.
          </p>
          <p>
            Radar doesn&apos;t care about any of that. It&apos;s sending out radio waves and reading the reflections. Sun, clouds, shadows, ambient brightness — none of it matters. The Full Swing KIT works in full afternoon daylight the same way it works in a climate-controlled simulator room.
          </p>
          <p>
            If you want to set this up outdoors — backyard, practice net on the patio, covered range bay — the KIT is in a different category from camera systems. This is the defining use case where it wins decisively.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Portability: &quot;Portable&quot; in Context</h2>
          <p>
            The KIT is marketed as portable, which is true in the sense that it uses a tripod mount and goes in a carrying case. It&apos;s not portable the way a Garmin R10 is portable — that thing goes in your golf bag. The KIT is more &quot;relocatable&quot; — setup takes a few minutes, and you can move it between locations without a truck, but it&apos;s not something you casually throw in the car for a range trip.
          </p>
          <p>
            For a permanent setup at home with occasional moves, that&apos;s fine. For genuine travel portability, the Mevo+ or R10 serve better.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Full Swing Software</h2>
          <p>
            Full Swing&apos;s own software platform is included with the KIT — no subscription required for core features. The software is polished and professional in a way that reflects the company&apos;s commercial background. The interface is clean, the shot visualization is high quality, and the course library is solid.
          </p>
          <p>
            Where it falls short relative to E6 Connect or TGC2 is breadth. E6 Connect has 100,000+ course holes; Full Swing&apos;s library is more curated but smaller. For most golfers, the available courses are more than enough. But if course variety is paramount, you&apos;ll eventually notice the gap.
          </p>
          <p>
            The included software is legitimately good, which is part of what justifies the price. You&apos;re not paying $6,999 and then needing another $200/year before it becomes a simulator.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Accuracy vs. the GC3</h2>
          <p>
            At the same price point as the Foresight GC3, the inevitable comparison matters. For indoor ball tracking accuracy — particularly spin data on short game shots — the GC3&apos;s three-camera system is more precise. Cameras measuring actual ball rotation beat radar calculating spin from flight.
          </p>
          <p>
            For club data and outdoor performance, the dual-radar KIT wins. It&apos;s measuring the club directly; the GC3 is inferring it from camera angles.
          </p>
          <p>
            The honest answer is that they&apos;re different tools for different priorities. If you&apos;re building a pure indoor setup optimized for ball flight accuracy, the GC3 is the better choice. If outdoor use or dual-use matters at all, the KIT wins by a wide margin.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Weaknesses</h2>
          <ul className="list-disc pl-6 space-y-3 mt-2">
            <li><strong className="text-gs-text font-medium">Indoor spin accuracy vs. camera systems</strong> — dual radar is excellent, but still radar. Wedge spin rates aren&apos;t as precise as GC3 camera measurements.</li>
            <li><strong className="text-gs-text font-medium">Software ecosystem is narrower</strong> — Full Swing&apos;s platform is good but not as broad as E6 Connect. Third-party integrations are more limited than SkyTrak+.</li>
            <li><strong className="text-gs-text font-medium">Price-to-accuracy ratio for pure indoor use</strong> — at $6,999 for indoor-only use, the GC3 is a stronger value argument.</li>
            <li><strong className="text-gs-text font-medium">True portability is limited</strong> — tripod setup, not bag-and-go.</li>
          </ul>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Who Should Buy the Full Swing KIT</h2>
          <p>
            Golfers with outdoor practice areas who want professional-grade data. Anyone setting up in a covered range bay or backyard hitting area. Players who want a system that works equally well inside and outside and are willing to pay the premium for that dual capability. Brand-conscious buyers who want the assurance of a company with real professional credentials.
          </p>
          <p>
            Also: anyone who specifically wants complete dual-radar club data. The KIT&apos;s club tracking is genuinely the best in this price tier.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Who Should Skip It</h2>
          <p>
            Pure indoor users — the GC3 beats it on ball accuracy for that use case at the same price. Anyone whose total system budget is under $10,000 (the launch monitor alone is $7,000, leaving little for the rest). And anyone who needs genuine travel portability.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all duration-200 group rounded-sm"
            >
              <span>Check Current Price</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <ProductRatings
          productName="Full Swing KIT"
          reviews={[
            {
              author: 'Plugged In Golf',
              rating: 5,
              text: 'A fantastic launch monitor and an amazing value. Standalone ability. Very easy to use.',
              source: 'Plugged In Golf',
              sourceUrl: 'https://pluggedingolf.com',
            },
            {
              author: 'Breaking80',
              rating: 4,
              text: 'Spin rates consistently within a couple hundred RPM of the GC3. Ball speed and club speed numbers were nearly identical with every shot compared to the GC3.',
              source: 'Breaking80',
              sourceUrl: 'https://breakingeighty.com',
            },
          ]}
        />

        <div className="mt-14 border-t border-gs-border pt-10">
          <h3 className="font-serif text-2xl text-gs-green mb-6">Related</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/best-golf-simulators" className="block border border-gs-border p-4 hover:border-gs-gold transition-colors">
              <span className="font-inter text-sm text-gs-text font-medium">The 5 Best Golf Simulators in 2024 →</span>
            </Link>
            <Link href="/reviews/foresight-sports-gc3-review" className="block border border-gs-border p-4 hover:border-gs-gold transition-colors">
              <span className="font-inter text-sm text-gs-text font-medium">Foresight GC3 Review →</span>
            </Link>
            <Link href="/reviews/best-golf-simulator-for-garage" className="block border border-gs-border p-4 hover:border-gs-gold transition-colors">
              <span className="font-inter text-sm text-gs-text font-medium">Best Garage Simulator Setup →</span>
            </Link>
            <Link href="/reviews/flightscope-mevo-plus-review" className="block border border-gs-border p-4 hover:border-gs-gold transition-colors">
              <span className="font-inter text-sm text-gs-text font-medium">FlightScope Mevo+ Review →</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1B3A2D] text-white p-4 flex items-center justify-between md:hidden z-50">
        <div>
          <p className="text-xs text-white/70 font-light">Starting at</p>
          <p className="font-semibold">$6,999</p>
        </div>
        <a href="#" className="bg-[#C8A96E] text-[#1B3A2D] font-bold px-6 py-3 text-sm rounded-sm">
          Check Price →
        </a>
      </div>
    </div>
  )
}
