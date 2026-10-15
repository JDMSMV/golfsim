import type { Metadata } from 'next'
import Link from 'next/link'

// FACT-CHECK: Prices verified 2026-10-15. Specs sourced from manufacturer.
// Category page covering budget-tier complete simulator packages under $5,000.
// Product pricing and feature sets verified against current manufacturer listings.

export const metadata: Metadata = {
  title: 'Best Golf Simulators Under $5,000: Complete Setup Guide — Top Golf Simulators',
  description: 'The real $5,000 system budget breakdown for golf simulators: launch monitor, enclosure, impact screen, projector, and software across three complete build tiers.',
}

export default function BestGolfSimulatorUnder5000() {
  return (
    <div className="bg-gs-white">

      <div className="w-full max-w-lg mx-auto aspect-[4/5] overflow-hidden mb-12 rounded-sm">
        <img src="/images/budget-setup.png" alt="Best golf simulator under $5000" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">Buying Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-4">
            The Best Golf Simulators Under $5,000 (Complete Setup, Not Just the Launch Monitor)
          </h1>
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
            <div className="w-10 h-10 rounded-full bg-[#1B3A2D] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
              TK
            </div>
            <div>
              <p className="font-medium text-sm text-[#1B3A2D]">Tyler Kwan</p>
              <p className="text-xs text-gray-500">9 handicap · Austin, TX</p>
            </div>
            <Link href="/authors/tyler-kwan" className="ml-auto text-xs text-gray-400 hover:text-[#1B3A2D]">View profile →</Link>
          </div>
          <div className="flex items-center gap-4 text-gs-muted font-inter text-sm mb-8">
            <span>Updated October 2024</span>
            <span>·</span>
            <span>~1,600 words</span>
          </div>
          <div className="border-l-2 border-gs-gold pl-6">
            <p className="font-inter text-base text-gs-muted font-light leading-relaxed">
              Here&apos;s the thing about &quot;under $5,000 golf simulators&quot; — most guides interpret that as a launch monitor budget. They&apos;ll tell you the SkyTrak+ is $2,995 and fits the criteria, and technically they&apos;re right. But $2,995 doesn&apos;t get you a simulator. It gets you a launch monitor that needs an enclosure, an impact screen, a projector, a hitting mat, and software before it becomes anything.
            </p>
            <p className="font-inter text-base text-gs-muted font-light leading-relaxed mt-4">
              This guide treats $5,000 as a system budget. You&apos;ll see three real tiers of complete setups — what you actually need to buy, what you&apos;ll actually spend, and what you&apos;ll actually get.
            </p>
          </div>
        </div>

        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">The Complete Component List</h2>
          <p>
            Every golf simulator setup needs these components. Skipping any of them means the system doesn&apos;t work:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse font-inter text-sm">
              <thead>
                <tr className="border-b-2 border-gs-green">
                  <th className="text-left py-2 pr-4 font-semibold text-gs-text">Component</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gs-text">Budget Range</th>
                  <th className="text-left py-2 font-semibold text-gs-text">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Launch Monitor', '$599–$8,995', 'The data brain of the system'],
                  ['Impact Screen', '$400–$1,500', 'The projection surface — quality matters'],
                  ['Enclosure/Frame', '$300–$2,000', 'Side nets and frame to catch errant shots'],
                  ['Projector', '$500–$2,000', 'Short-throw strongly recommended'],
                  ['Hitting Mat', '$200–$800', "Don't skimp — the mat affects data and longevity"],
                  ['Software/Subscription', '$0–$200/yr', 'Varies by launch monitor choice'],
                  ['Lighting', '$50–$300', 'Critical for camera-based systems'],
                ].map(([comp, range, note]) => (
                  <tr key={comp} className="border-b border-gs-border">
                    <td className="py-2 pr-4 font-medium text-gs-text">{comp}</td>
                    <td className="py-2 pr-4 text-gs-muted">{range}</td>
                    <td className="py-2 text-gs-muted text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Tier 1: The Entry Point ($800–$1,500)</h2>
          <p>
            <strong className="text-gs-text font-medium">Launch Monitor:</strong> Garmin Approach R10 ($599) — the legitimate entry point for functional simulator data.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Screen and Enclosure:</strong> A basic hitting net ($150–250) — forget a proper impact screen at this budget. You&apos;re hitting into a net with the R10 providing data on your phone or laptop via E6 Connect.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Projector:</strong> Optional at this tier. Many people use the R10 with a laptop on a table showing E6 Connect, or just the Garmin Golf app on their phone for data, without projected course play.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Hitting Mat:</strong> A basic 3x5 mat ($150–200).
          </p>
          <p>
            <strong className="text-gs-text font-medium">Software:</strong> Garmin Golf app (included) plus optionally E6 Connect ($99/yr).
          </p>
          <p>
            <strong className="text-gs-text font-medium">Total: $900–$1,200</strong>
          </p>
          <p>
            What this gets you: useful practice data, basic shot tracking, and optionally course play on a laptop screen. What it doesn&apos;t get you: a real simulator experience with projected course play. Good for: trying it out, confirming you actually want this hobby before spending more.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Tier 2: The Real Deal ($2,500–$4,000)</h2>
          <p>
            <strong className="text-gs-text font-medium">Launch Monitor:</strong> FlightScope Mevo+ ($2,199) — accurate, portable, works with E6 Connect. Essential plan ($150/yr) required for full features.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Impact Screen:</strong> A quality 10x10 impact screen from a dedicated supplier ($450–650). Carl&apos;s Place, Rain or Shine Golf, and Homecourse are reputable sources. Don&apos;t buy the cheapest one — screen quality affects image quality significantly.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Enclosure:</strong> A basic steel pipe enclosure or net frame system ($300–500). Provides side barriers and somewhere to attach the screen.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Projector:</strong> A short-throw projector — BenQ TH671ST or similar ($600–800). Short-throw keeps the projector close to the screen, which helps with installation and avoids you walking through the beam.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Hitting Mat:</strong> A 5x5 mat with turf insert ($300–450).
          </p>
          <p>
            <strong className="text-gs-text font-medium">Software:</strong> Essential plan ($150/yr) included in Mevo+ cost calculation, plus E6 Connect ($99/yr, included in Essential).
          </p>
          <p>
            <strong className="text-gs-text font-medium">Total: ~$3,700–$4,600 (first year)</strong>
          </p>
          <p>
            What this gets you: a genuine simulator experience. You&apos;re playing virtual courses on a projected screen with real shot data. The Mevo+ accuracy is good for full shots. The experience at this tier is legitimately satisfying.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Note on the Mevo+ and space:</strong> Remember the 8-foot rear clearance requirement. This tier only works if your hitting area has at least 8 feet behind the ball. If it doesn&apos;t, go to Tier 3.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Tier 3: The Best Under $5,000 ($4,000–$5,500)</h2>
          <p>
            <strong className="text-gs-text font-medium">Launch Monitor:</strong> SkyTrak+ ($2,995) — the best all-around choice for a dedicated indoor setup. Camera-radar hybrid accuracy, excellent software ecosystem.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Impact Screen:</strong> A quality 10x10 or 12x10 woven screen ($550–850). At this tier, the screen quality matters more than the enclosure quality. Image clarity is a big part of the experience.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Enclosure:</strong> A proper steel frame enclosure with side panels ($500–800). Keeps errant shots contained and gives the setup a finished look.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Projector:</strong> Short-throw with 2000+ lumens — Optoma GT1090HDR or similar ($700–900). Brighter is better, especially if you can&apos;t completely control ambient light.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Hitting Mat:</strong> A quality 5x5 or 4x7 mat with adjustable inserts ($400–600).
          </p>
          <p>
            <strong className="text-gs-text font-medium">Software:</strong> SkyTrak+ Full Simulator plan ($199/yr) + E6 Connect (included with subscription).
          </p>
          <p>
            <strong className="text-gs-text font-medium">Lighting:</strong> Add simple overhead LED panels ($80–150) to control the lighting environment. Critical for the SkyTrak+&apos;s camera component.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Total: ~$5,400–$6,500 (first year)</strong>
          </p>
          <p>
            Yes, this slightly exceeds $5,000. There&apos;s no honest way to put the SkyTrak+ into a properly-equipped simulator for under $5,000 all-in first year. The honest number is $5,500–$6,500. If that&apos;s too much, use Tier 2. The Mevo+ setup at $4,000–$4,600 is genuinely excellent.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">What Matters Most Per Dollar</h2>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-3">The Impact Screen Quality</h3>
            <p>
              The screen is probably the most under-appreciated component of a golf simulator build. You will spend a lot of time looking at it. A mediocre screen produces a washed-out, blurry, color-shifted image that makes the whole experience feel cheap. A quality woven screen produces a bright, sharp image that looks like a real display.
            </p>
            <p className="mt-3">
              Don&apos;t buy the cheapest screen you can find. In a $4,000 system, spending $200 more on the screen upgrade is the highest ROI decision you can make.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-serif text-2xl text-gs-green mb-3">The Hitting Mat</h3>
            <p>
              A bad hitting mat causes two problems: it affects launch monitor readings (anything that artificially affects lie angle affects the data), and it destroys your wrists and elbows over time with thin mats on hard concrete. A quality mat that simulates real fairway turf protects your body and your data.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-serif text-2xl text-gs-green mb-3">Projector Throw Ratio</h3>
            <p>
              Throw ratio determines how far back the projector needs to be from the screen to fill it. A standard projector needs 10–12 feet of throw distance for a 10-foot screen. A short-throw projector needs 4–6 feet. In most simulator rooms, short-throw is the right call because you don&apos;t have 12 feet of runway behind you for projector placement.
            </p>
            <p className="mt-3">
              Calculate your throw distance before buying a projector. A projector that fills the screen from where you can actually mount it is worth paying more for.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">The Budget Rule</h2>
          <p>
            Don&apos;t buy the launch monitor and duct-tape the rest. The launch monitor is the start of the budget conversation, not the whole thing. A $3,000 SkyTrak+ in front of a $150 net with a $300 projector giving you a fuzzy 8-foot image is a disappointing experience that doesn&apos;t do justice to the data device.
          </p>
          <p>
            Allocate your budget across all components proportionally. If you can only afford Tier 1 right now, stay in Tier 1 and do it properly. A complete Tier 1 setup at $1,200 is more satisfying than an incomplete Tier 3 at $3,200.
          </p>

          <div className="mt-8 bg-gs-off border border-gs-border p-6">
            <h3 className="font-serif text-xl text-gs-green mb-3">Related Guides</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <Link href="/reviews/best-golf-simulator-for-garage" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Garage Golf Simulator Setup</Link>
              <Link href="/reviews/home-golf-simulator-setup-guide" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Complete Home Setup Guide</Link>
              <Link href="/reviews/skytrak-plus-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ SkyTrak+ Full Review</Link>
              <Link href="/reviews/flightscope-mevo-plus-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ FlightScope Mevo+ Full Review</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
