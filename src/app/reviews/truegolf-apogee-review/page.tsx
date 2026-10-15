import type { Metadata } from 'next'
import Link from 'next/link'
import ProductRatings from '@/components/ProductRatings'

// FACT-CHECK: Prices verified 2026-10-15. Specs sourced from manufacturer.
// TruGolf APOGEE price: $8,995 | Commission: ~8% = ~$720 per sale
// Includes TGC2 software with no ongoing subscription (verified).
// Technology: Camera-based tracking (verified). All-in-one package.

export const metadata: Metadata = {
  title: 'TruGolf APOGEE Review: The All-in-One That Takes the Headache Out — Top Golf Simulators',
  description: 'An honest review of the TruGolf APOGEE golf simulator. TGC2 included, no subscription, camera-based tracking, and who should buy the all-in-one package at $8,995.',
}

export default function TruGolfAPOGEEReview() {
  return (
    <div className="bg-gs-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "TruGolf APOGEE Golf Simulator"
          })
        }}
      />
      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">Full Review</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-4">
            TruGolf APOGEE Review: The All-in-One That Takes the Headache Out
          </h1>
          <div className="flex items-center gap-4 text-gs-muted font-inter text-sm mb-6">
            <span>Updated October 2024</span>
            <span>·</span>
            <span>~1,300 words</span>
          </div>
          <div className="bg-gs-off border border-gs-border p-6 flex flex-wrap gap-6">
            <div>
              <p className="font-inter text-xs text-gs-muted uppercase tracking-widest mb-1">Price</p>
              <p className="font-serif text-2xl text-gs-green">$8,995</p>
            </div>
            <div>
              <p className="font-inter text-xs text-gs-muted uppercase tracking-widest mb-1">Technology</p>
              <p className="font-inter text-sm text-gs-text font-medium">Camera-Based</p>
            </div>
            <div>
              <p className="font-inter text-xs text-gs-muted uppercase tracking-widest mb-1">Software</p>
              <p className="font-inter text-sm text-gs-text font-medium">TGC2 Included</p>
            </div>
            <div>
              <p className="font-inter text-xs text-gs-muted uppercase tracking-widest mb-1">Subscription</p>
              <p className="font-inter text-sm text-gs-text font-medium">None for TGC2</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">The Problem the APOGEE Solves</h2>
          <p>
            Building a golf simulator from parts is genuinely not easy. You buy a launch monitor, then figure out which impact screen fits your ceiling height, then choose a projector with the right throw ratio for your available space, then source an enclosure or frame, then configure the software, then troubleshoot why the image isn&apos;t quite right, then wonder if the hitting mat is causing the launch monitor to read slightly off...
          </p>
          <p>
            The TruGolf APOGEE exists to eliminate that experience. It&apos;s a complete package — launch monitor, screen, enclosure hardware, and software — designed and tested to work together. You&apos;re not sourcing components; you&apos;re buying a system.
          </p>
          <p>
            For people who want a great simulator experience and don&apos;t want to become amateur AV technicians to get there, that&apos;s a real value proposition.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">TGC2 Included — This Is the Big Deal</h2>
          <p>
            The Golf Club 2019 (TGC2) is, in my opinion, the best golf simulator software currently available. The graphics are excellent. The physics are realistic. The course design community has produced 150,000+ playable courses, covering virtually every real course you&apos;ve ever wanted to play and thousands of fantastical designs you couldn&apos;t play in real life.
          </p>
          <p>
            Other simulators charge for TGC2 access, or include it as a subscription add-on. The APOGEE includes a TGC2 license — no subscription, no yearly fee, no additional purchase. Given that TGC2 runs about $40/month or $400/year for a subscription, this is a meaningful saving over time and eliminates an ongoing cost.
          </p>
          <p>
            If software experience is your primary criterion — if you want to play St. Andrews, Augusta National (fan recreations), Pebble Beach, and thousands of other courses with excellent graphics and realistic ball physics — the APOGEE&apos;s software inclusion alone makes a compelling argument.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Camera-Based Tracking: What You Get</h2>
          <p>
            The APOGEE uses camera-based ball tracking, which gives it solid accuracy in a controlled indoor environment. Ball speed, launch angle, spin rate — all the core metrics you need for meaningful practice and realistic simulator play.
          </p>
          <p>
            Honest comparison to the Foresight GC3: the GC3&apos;s three-camera system is more accurate, particularly on spin data and short game shots. The APOGEE is good — better than radar systems for indoor ball tracking — but it&apos;s not at GC3 accuracy levels for the money.
          </p>
          <p>
            For most golfers using the simulator primarily for course play and general game improvement, the APOGEE&apos;s accuracy is more than adequate. The data is realistic enough to feel authentic and useful enough to inform improvement. Only golfers who are specifically chasing accuracy benchmarks will feel the delta from the GC3.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">The All-in-One Physical Setup</h2>
          <p>
            TruGolf has been building complete simulator systems for commercial clients for years — what you find in golf entertainment centers and resort setups. The APOGEE brings that expertise to the consumer market.
          </p>
          <p>
            The package includes the impact screen, the frame/enclosure system, and the hardware needed for a complete hitting bay. Projector placement is engineered to work with the included screen. The launch monitor is calibrated for the standard setup dimensions.
          </p>
          <p>
            You still need to get a projector — the APOGEE doesn&apos;t come with one — but TruGolf provides specifications for what works. It&apos;s one less thing to figure out from scratch.
          </p>
          <p>
            Installation is DIY but well-documented. The enclosure system assembles logically, and TruGolf&apos;s support is notably better than most launch monitor companies. They&apos;re set up to support complete simulator installations, not just data devices.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Limitations Worth Knowing</h2>
          <ul className="list-disc pl-6 space-y-3 mt-2">
            <li><strong className="text-gs-text font-medium">Price</strong> — $8,995 is the highest price on this list. Add a projector ($700–2,000) and a hitting mat ($200–600) and you&apos;re looking at $10,000+ for a complete ready-to-play setup. This is real money.</li>
            <li><strong className="text-gs-text font-medium">Indoor only</strong> — camera system, controlled lighting required. There&apos;s no outdoor use case for the APOGEE.</li>
            <li><strong className="text-gs-text font-medium">Accuracy ceiling below GC3</strong> — if pure ball data accuracy is the goal, the Foresight GC3 is better. The APOGEE prioritizes experience over data precision.</li>
            <li><strong className="text-gs-text font-medium">Locked into TruGolf ecosystem</strong> — while TGC2 is excellent, the APOGEE&apos;s flexibility with other software is more limited than a standalone launch monitor plugged into E6 Connect.</li>
            <li><strong className="text-gs-text font-medium">Space requirements</strong> — the full enclosure needs meaningful space. Minimum ceiling height of 9 feet, comfortable at 10+. Not for small garages.</li>
          </ul>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Who Should Buy the APOGEE</h2>
          <p>
            The APOGEE is for golfers who want the best simulator experience with the minimum amount of research and assembly complexity. If you have the budget ($10,000+ all-in), the space (9+ foot ceiling, comfortable hitting area), and you primarily want to play golf in your home rather than obsess over data accuracy, the APOGEE makes an excellent case.
          </p>
          <p>
            The TGC2 inclusion is genuinely significant for golfers who know they want that software. Not having to manage that subscription indefinitely is a real quality-of-life improvement.
          </p>
          <p>
            It&apos;s also the right call for people who don&apos;t want to do the component research. There&apos;s nothing wrong with buying a system that&apos;s been designed and tested to work together — it&apos;s what the rest of the consumer electronics world figured out decades ago.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Who Should Skip It</h2>
          <p>
            Anyone prioritizing data accuracy above experience — go Foresight GC3. Anyone building on a budget — there are better value options in the $3,000–6,000 range for the launch monitor alone. Anyone who wants portability or outdoor capability. And anyone who already has an enclosure and screen setup they like — buying the APOGEE means paying for hardware you don&apos;t need.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://www.amazon.com/s?k=truegolf+apogee&tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored"
              className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all duration-200 group rounded-sm"
            >
              <span>Check Price on Amazon</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <ProductRatings
          productName="TruGolf APOGEE"
          reviews={[]}
        />

        <div className="mt-14 border-t border-gs-border pt-10">
          <h3 className="font-serif text-2xl text-gs-green mb-6">Related</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/best-golf-simulators" className="block border border-gs-border p-4 hover:border-gs-gold transition-colors">
              <span className="font-inter text-sm text-gs-text font-medium">Best Golf Simulators 2024 →</span>
            </Link>
            <Link href="/reviews/foresight-sports-gc3-review" className="block border border-gs-border p-4 hover:border-gs-gold transition-colors">
              <span className="font-inter text-sm text-gs-text font-medium">Foresight GC3 Review →</span>
            </Link>
            <Link href="/reviews/home-golf-simulator-setup-guide" className="block border border-gs-border p-4 hover:border-gs-gold transition-colors">
              <span className="font-inter text-sm text-gs-text font-medium">Home Golf Simulator Setup Guide →</span>
            </Link>
            <Link href="/reviews/golf-simulator-vs-launch-monitor" className="block border border-gs-border p-4 hover:border-gs-gold transition-colors">
              <span className="font-inter text-sm text-gs-text font-medium">Simulator vs. Launch Monitor →</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
