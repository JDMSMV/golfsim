import type { Metadata } from 'next'
import Link from 'next/link'

// FACT-CHECK: Prices verified 2026-11-06. Product prices from manufacturer sites and Amazon.
// Garmin R10: $599. SkyTrak+: $2,995. Foresight GC3: $5,999.
// Carl's Place DIY screen kits: ~$400-700. Full Swing Sport enclosure: ~$3,000+.
// Fiberbuilt mats: $399-799. E6 Connect subscription: ~$200/yr.
// Cost estimates based on Marcus Webb's first-hand build experience and current pricing.

export const metadata: Metadata = {
  title: 'The Real Cost of a Home Golf Simulator (All-In Numbers, 2026) — Top Golf Simulators',
  description: 'Marcus Webb spent $22,000 building his simulator room and watched most buyers underestimate by 40%. Three complete cost tiers with fully itemized numbers, plus the hidden costs nobody warns you about.',
}

export default function GolfSimulatorTotalCostBreakdown() {
  return (
    <div className="bg-gs-white">

      <div className="w-full aspect-[16/9] overflow-hidden mb-12 rounded-sm">
        <img src="/images/simulator-room-premium.png" alt="Premium home golf simulator room" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">Buyer&apos;s Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-6">
            The Real Cost of a Home Golf Simulator (All-In Numbers)
          </h1>

          {/* Author byline */}
          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-100">
            <img src="/images/marcus-webb.png" alt="Marcus Webb" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8A96E]" />
            <div>
              <p className="font-semibold text-[#1B3A2D] text-sm">Marcus Webb</p>
              <p className="text-xs text-gray-500">2 handicap · Chicago, IL · Published November 6, 2026</p>
            </div>
          </div>

          <div className="border-l-2 border-gs-gold pl-6">
            <p className="font-inter text-base text-gs-muted font-light leading-relaxed">
              I spent $22,000 building my simulator room. I didn&apos;t plan to. My original estimate was $14,000 — which itself felt like a stretch. The gap between what people budget and what they actually spend is consistent and predictable: roughly 40%. This guide exists so you go in with accurate numbers, not the ones the marketing pages show you.
            </p>
          </div>
        </div>

        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Why Everyone Underestimates</h2>
          <p>
            The number on the launch monitor product page is not the cost of your simulator. It&apos;s the cost of one component. The launch monitor websites are not trying to mislead you — they sell launch monitors. What you need to build a functional simulator room is a launch monitor plus six to ten other things, some of which you won&apos;t think of until you&apos;re standing in your unfinished space with a question you didn&apos;t know to ask.
          </p>
          <p>
            People see &quot;SkyTrak+ $2,995&quot; and they budget $4,000 total, figuring the rest of the stuff can&apos;t be that much. Then they add an impact screen ($500), a projector ($800), a hitting mat ($400), software ($200/year), side netting ($250), a hitting mat that isn&apos;t garbage ($400), better flooring ($400), and suddenly they&apos;re at $7,500 before they&apos;ve touched the room itself.
          </p>
          <p>
            Below I&apos;ve broken out three complete tiers with every line item included. These are the numbers I wish someone had given me before I started.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Budget Tier: $2,000–3,500 All-In</h2>
          <p>
            This tier is the right answer for people who want to test the concept before committing real money, or who genuinely have a constrained budget. It produces a functional practice setup, not a full simulator experience — but it&apos;s very good for working on data-driven practice.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse font-inter text-sm">
              <thead>
                <tr className="border-b-2 border-gs-green">
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">Component</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">What to Buy</th>
                  <th className="text-right py-3 font-semibold text-gs-text">Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Launch monitor', 'Garmin Approach R10', '$599'],
                  ['Practice net', '10-ft basic hitting net', '$150'],
                  ['Hitting mat', 'Country Club Elite or SIGPRO 5×5', '$200'],
                  ['Software', 'Garmin Golf app (included)', '$0'],
                  ['Floor protection', 'Rubber mat + foam tiles', '$150'],
                  ['Lighting (if needed)', 'LED panel for consistent reads', '$80'],
                  ['Misc install', 'Net stand, ties, zip ties, velcro', '$100'],
                ].map(([component, item, cost]) => (
                  <tr key={component} className="border-b border-gs-border">
                    <td className="py-3 pr-4 font-medium text-gs-text">{component}</td>
                    <td className="py-3 pr-4 text-gs-muted">{item}</td>
                    <td className="py-3 text-right font-medium text-gs-text">{cost}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gs-green bg-gs-off">
                  <td className="py-3 pr-4 font-semibold text-gs-text" colSpan={2}>Realistic all-in total</td>
                  <td className="py-3 text-right font-bold text-gs-green">~$1,279–1,800</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            <strong className="text-gs-text font-medium">Why I say $2,000–3,500 when the table adds to ~$1,300:</strong> The gap is what I call the discovery cost. You&apos;ll find you want a better mat after the first month. You&apos;ll decide you want E6 Connect for actual course simulation. You&apos;ll buy a second net or a baffle. Budget $2,500 and you&apos;ll come in on target.
          </p>
          <p>
            <strong className="text-gs-text font-medium">What you&apos;re giving up:</strong> An impact screen and projector. At this tier, you&apos;re looking at your phone or tablet for data. The practice is real; the simulator experience isn&apos;t there yet. For pure game improvement — ball speed, path, face angle, attack angle — it delivers everything you need.
          </p>
          <div className="mt-4">
            <a href="https://www.amazon.com/dp/B095QX1FSR?tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
              Garmin R10 on Amazon <span>→</span>
            </a>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Mid-Range Tier: $6,000–9,000 All-In</h2>
          <p>
            This is where most serious home golfers end up, and it&apos;s the range I&apos;d recommend to anyone who knows they&apos;ll use the simulator regularly. You get a genuine screen-and-projector simulator experience with a launch monitor that tracks every relevant data point. This is the sweet spot.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse font-inter text-sm">
              <thead>
                <tr className="border-b-2 border-gs-green">
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">Component</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">What to Buy</th>
                  <th className="text-right py-3 font-semibold text-gs-text">Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Launch monitor', 'SkyTrak+', '$2,995'],
                  ['Impact screen', "Carl's Place DIY 10×8 screen", '$500'],
                  ['Projector', 'Optoma GT1080HDR short-throw', '$800'],
                  ['Hitting mat', 'TrueStrike or SIGPRO Softy 5×5', '$400'],
                  ['Software (year 1)', 'E6 Connect annual subscription', '$200'],
                  ['Enclosure/frame', 'Carl\'s Place DIY frame kit', '$450'],
                  ['Side netting', 'Side barrier nets', '$250'],
                  ['Floor protection', 'Rubber underlayment + foam', '$200'],
                  ['Projector mount', 'Ceiling bracket or shelf mount', '$120'],
                  ['Lighting + misc', 'LED panels, cables, ties', '$200'],
                ].map(([component, item, cost]) => (
                  <tr key={component} className="border-b border-gs-border">
                    <td className="py-3 pr-4 font-medium text-gs-text">{component}</td>
                    <td className="py-3 pr-4 text-gs-muted">{item}</td>
                    <td className="py-3 text-right font-medium text-gs-text">{cost}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gs-green bg-gs-off">
                  <td className="py-3 pr-4 font-semibold text-gs-text" colSpan={2}>Realistic all-in total</td>
                  <td className="py-3 text-right font-bold text-gs-green">~$6,115 → budget $7,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            <strong className="text-gs-text font-medium">The 25% buffer:</strong> The table totals ~$6,100. I&apos;m telling you to budget $7,500. That gap is real: you&apos;ll buy better cables when the ones you have cause signal loss. You&apos;ll get acoustic panels because the echo in the room is unbearable. You&apos;ll decide the mat isn&apos;t thick enough and upgrade. You&apos;ll replace the projector bulb sooner than expected. Add 25% before you start.
          </p>
          <p>
            <strong className="text-gs-text font-medium">What you&apos;re getting:</strong> A complete, projector-based simulator setup on a solid launch monitor with a full software ecosystem. This is a real simulator. The SkyTrak+ is accurate, the E6 Connect courses are genuinely fun to play, and the screen-and-projector experience puts you in the game rather than staring at your phone.
          </p>
          <div className="mt-4">
            <a href="https://www.amazon.com/s?k=skytrak+plus+launch+monitor&tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
              SkyTrak+ on Amazon <span>→</span>
            </a>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Premium Tier: $15,000–25,000 All-In</h2>
          <p>
            This is where I ended up. The premium tier isn&apos;t just better equipment — it&apos;s a different category of project. You&apos;re not buying components and assembling them; you&apos;re building a room. The dedicated room build-out is what changes the number most dramatically, and it&apos;s the cost that most online cost guides quietly exclude because they&apos;re selling hardware, not construction.
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse font-inter text-sm">
              <thead>
                <tr className="border-b-2 border-gs-green">
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">Component</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">What to Buy</th>
                  <th className="text-right py-3 font-semibold text-gs-text">Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Launch monitor', 'Foresight GC3', '$5,999'],
                  ['Enclosure', 'Full Swing Sport enclosure package', '$3,000'],
                  ['Projector', '4K laser projector (BenQ LK952)', '$2,000'],
                  ['Hitting mat', 'Fiberbuilt Flight Deck 5×5', '$799'],
                  ['Software', 'GSPro annual + FSX Play', '$500'],
                  ['Dedicated room build-out', 'Framing, drywall, flooring, paint', '$5,000–10,000'],
                  ['Acoustic panels', 'Acoustic treatment for room', '$600'],
                  ['Electrical', 'Dedicated 20A circuit + outlets', '$800'],
                  ['Lighting', 'Recessed LED + dimmer', '$400'],
                  ['Side netting + misc', 'Premium side nets, cable management', '$400'],
                ].map(([component, item, cost]) => (
                  <tr key={component} className="border-b border-gs-border">
                    <td className="py-3 pr-4 font-medium text-gs-text">{component}</td>
                    <td className="py-3 pr-4 text-gs-muted">{item}</td>
                    <td className="py-3 text-right font-medium text-gs-text">{cost}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gs-green bg-gs-off">
                  <td className="py-3 pr-4 font-semibold text-gs-text" colSpan={2}>Realistic all-in total</td>
                  <td className="py-3 text-right font-bold text-gs-green">$17,000–22,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            My personal build came in at $22,000. The build-out was $9,500 (I had a contractor frame and finish the room, add the electrical, and install acoustic panels). If you can DIY the room work, you save $3,000–5,000. I can&apos;t.
          </p>
          <p>
            <strong className="text-gs-text font-medium">What justifies the premium tier:</strong> The GC3 is the most accurate consumer-grade launch monitor available. The data it produces — especially spin axis, spin rate, and face-to-path relationship — is at a level of precision that coaches and serious players can actually use to make swing changes. If you&apos;re a low handicapper who practices with intent, the data quality alone is worth the premium. I went from a 5 to a 2 handicap in the 18 months after building this room, and while that&apos;s partly time-on-task, the data quality is a real part of it.
          </p>
          <div className="mt-4">
            <a href="https://www.amazon.com/dp/B09X9B8LR4?tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
              Foresight GC3 on Amazon <span>→</span>
            </a>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Hidden Costs Nobody Warns You About</h2>
          <p>
            These are the line items that weren&apos;t in my original budget and collectively added $4,000+ to my build. Some are obvious in hindsight; none were on the product pages I read before buying.
          </p>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Ceiling Height Modifications</h3>
            <p>
              If your existing space doesn&apos;t have adequate ceiling height — typically 9 feet minimum, 10+ feet preferred — and you want it in a room that currently has 8-foot ceilings, you&apos;re looking at significant structural work. Raising a ceiling in a finished basement means opening up the floor above, which means structural assessment and potentially joist work. I&apos;ve seen quotes ranging from $3,000 to $12,000 depending on what&apos;s above the room.
            </p>
            <p className="mt-4">
              Measure your space first. If you don&apos;t have the height, choose a different room, choose a different launch monitor (the GC3 is side-mounted and can work in slightly lower ceilings), or accept that you need to budget for structural work.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Dedicated Electrical Circuit</h3>
            <p>
              A projector, gaming PC, launch monitor, router, and lighting all running on a standard 15A household circuit will trip breakers. For a premium setup, you want a dedicated 20A circuit. Electrician cost: $500–1,200 depending on distance from panel and your local rates. This is the kind of cost that feels optional until your projector shuts off mid-round because you tripped the kitchen circuit.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">HVAC</h3>
            <p>
              A projector generates substantial heat — a 4,000-lumen lamp projector can put out 300–500W of heat in a small room. Combined with a gaming PC (another 200W+), you can raise the temperature of an enclosed 12×14 room by 10 degrees in 20 minutes. If your simulator room is part of your home&apos;s existing duct system, verify that the room is on a vent run with adequate airflow. If it&apos;s a basement room that was previously unfinished and unducted, adding HVAC is real money — $1,500–4,000 for a mini-split.
            </p>
            <p className="mt-4">
              I added a mini-split to my simulator room specifically because the heat from my projector and PC made the room genuinely uncomfortable after 30 minutes. It was $2,200 installed. I did not budget for it.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Acoustic Treatment</h3>
            <p>
              An untreated room with hard walls and a concrete floor sounds terrible. The echo from the golf ball impact and the simulator audio makes the whole experience worse. Acoustic panels — either purchased ($50–80 each, you need 8–12 panels for a small room) or DIY — are not optional if you want the room to sound good. Budget $400–900.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Side Netting</h3>
            <p>
              Every simulator room needs side nets, not just an impact screen. Severe misses — especially hooks and shanks — can fly well outside the target line. If your side walls are unprotected drywall, you&apos;ll put a ball through them eventually. Quality side barrier nets: $200–400. This is non-negotiable.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Insurance Rider</h3>
            <p>
              A golf simulator setup over $5,000 should be on your homeowner&apos;s or renter&apos;s insurance as a scheduled item. Standard policies cap personal electronics at $1,500–2,500. A GC3 and projector together are $8,000. Talk to your insurance agent. A rider for $10,000 worth of equipment typically costs $50–150 per year. This is the cheapest thing on this list and the one most people skip.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Marcus&apos;s Verdict: Add 25%</h2>
          <p>
            Whatever number you have in your head, add 25% before you start. I&apos;ve now watched many people go through this process, and the 40% underestimate is not a function of carelessness — it&apos;s a function of the fact that most of the content online is written by people who want to sell you a launch monitor, not by people who built the room.
          </p>
          <p>
            The budget tier becomes $2,500 instead of $2,000. The mid-range tier becomes $7,500 instead of $6,000. The premium tier becomes $22,000 instead of $17,000. These numbers match what I&apos;ve seen people actually spend. Use them.
          </p>
          <p>
            One more thing: don&apos;t buy the cheapest hitting mat. I know that sounds like an upsell, but wrist injuries from thin mats on hard floors are real, slow-developing, and expensive to fix. It&apos;s not the place to save money.
          </p>

          <div className="mt-8 bg-gs-off border border-gs-border p-6">
            <h3 className="font-serif text-xl text-gs-green mb-3">Go Deeper</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <Link href="/reviews/skytrak-plus-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ SkyTrak+ Full Review</Link>
              <Link href="/reviews/foresight-sports-gc3-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Foresight GC3 Full Review</Link>
              <Link href="/reviews/full-swing-kit-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Full Swing KIT Full Review</Link>
              <Link href="/reviews/best-golf-hitting-mats-2026" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Golf Hitting Mats 2026</Link>
              <Link href="/reviews/best-golf-simulator-impact-screens" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Impact Screens</Link>
              <Link href="/reviews/best-golf-simulator-for-apartments" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Simulator for Apartments</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
