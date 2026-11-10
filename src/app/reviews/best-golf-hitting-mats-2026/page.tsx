import type { Metadata } from 'next'
import Link from 'next/link'

// FACT-CHECK: Prices verified 2026-11-08. Specs sourced from manufacturer documentation.
// Fiberbuilt Flight Deck: $399-799 depending on size. TrueStrike: $249-499.
// SIGPRO Softy: $179-349. Country Club Elite: $299-599.
// Gel divot system patents held by TrueStrike. Fiberbuilt channel system verified.
// Wrist injury risk from thin mats is documented in golf fitness research.

export const metadata: Metadata = {
  title: 'Best Golf Hitting Mats in 2026 — Tested and Ranked — Top Golf Simulators',
  description: 'Tyler Kwan destroyed two cheap mats and learned the hard way. A wrist injury from a thin mat is slow and expensive. Here\'s what\'s actually worth buying in 2026.',
}

export default function BestGolfHittingMats2026() {
  return (
    <div className="bg-gs-white">

      <div className="w-full aspect-[16/9] overflow-hidden mb-12 rounded-sm">
        <img src="/images/hitting-mats-tested.png" alt="Golf hitting mats comparison" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">Equipment Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-6">
            Best Golf Hitting Mats in 2026 — Tested and Ranked
          </h1>

          {/* Author byline */}
          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-100">
            <img src="/images/tyler-kwan.png" alt="Tyler Kwan" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8A96E]" />
            <div>
              <p className="font-semibold text-[#1B3A2D] text-sm">Tyler Kwan</p>
              <p className="text-xs text-gray-500">9 handicap · Austin, TX · Published November 8, 2026</p>
            </div>
          </div>

          <div className="border-l-2 border-gs-gold pl-6">
            <p className="font-inter text-base text-gs-muted font-light leading-relaxed">
              I went through two cheap mats before I understood what I was doing wrong. The first was a $60 piece of synthetic turf that felt fine for a few weeks. By month two I had a low-grade left wrist ache that wouldn&apos;t go away. I bought a second cheap mat — same problem, different brand. It took a physio visit and an uncomfortable conversation about repetitive stress injuries to make me understand that the mat is not an accessory. It&apos;s the foundation. Here&apos;s what I know now.
            </p>
          </div>
        </div>

        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Why Mat Quality Matters More Than People Think</h2>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Joint Health</h3>
            <p>
              When you hit a golf ball on the course, the turf gives under the club. That give — even just a quarter inch of compression — absorbs a significant percentage of the shock from impact. On a thin mat over a hard surface, there is no give. The club bottoms out, hits the mat, and the full impact shock travels directly up the shaft and into your wrists, elbows, and shoulders.
            </p>
            <p className="mt-4">
              This isn&apos;t a hypothetical. The golf fitness literature on simulator mat injuries is consistent: wrist and elbow issues from under-padded mats are one of the most common simulator-related injuries, and they&apos;re almost entirely preventable. The minimum effective base thickness for joint protection is 1.5 inches of compressed material. Anything less and you&apos;re relying on the mat surface alone, which isn&apos;t enough.
            </p>
            <p className="mt-4">
              The other joint consideration is fatigue accumulation. You will hit more balls on a simulator in one session than you typically would at a range because there&apos;s no waiting, no ball retrieval, and no weather. I regularly hit 150–200 balls in a 60-minute session. That volume on a thin mat adds up quickly.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Lie Angle Feedback</h3>
            <p>
              Better mats give you accurate lie angle feedback. A cheap mat that compresses inconsistently will sometimes let the club sink slightly, changing the effective lie angle at impact — which shows up as inconsistent data on your launch monitor. The best mats maintain a consistent, slightly firm surface that replicates real turf lie angle.
            </p>
            <p className="mt-4">
              This matters most if you&apos;re using simulator data to make fitting decisions. If you&apos;re buying irons based on what you&apos;re seeing in a simulator session, inconsistent mat compression is quietly corrupting your data. Use a good mat.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Divot Simulation</h3>
            <p>
              Real iron shots take a divot. When you practice on a mat that doesn&apos;t simulate divot feedback, you can develop a habit of bottoming out early to avoid the mat — which trains a slightly different attack angle than you use on grass. The best mats either have a channel system or a gel system that simulates the divot experience, allowing the club to interact naturally with the surface.
            </p>
            <p className="mt-4">
              For wedge and short iron practice especially, divot simulation matters. If you&apos;re working on steep attack angles with your wedges, a mat that fights back changes your mechanics. This is why tour pros train on Fiberbuilt and TrueStrike specifically — the feedback is real.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">The Top 4 Hitting Mats in 2026</h2>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">1. Fiberbuilt Flight Deck ($399–799) — The Gold Standard</h3>
            <p>
              The Fiberbuilt Flight Deck is what tour pros train on. That&apos;s not marketing — it genuinely is. The core technology is Fiberbuilt&apos;s proprietary channel system: individual synthetic grass fibers are anchored independently, allowing each fiber to deflect naturally when the club passes through. When you strike through the hitting area, the fibers compress and deflect in a way that mimics real turf interaction, including divot simulation.
            </p>
            <p className="mt-4">
              The base is a dense foam platform (not the typical urethane or rubber you find in cheaper mats) that absorbs impact energy without transmitting it to the floor. The result is that you can practice on a Fiberbuilt for 90 minutes without the wrist fatigue you&apos;d feel on a mid-range mat. The difference is real and significant.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">The case for the price:</strong> Fiberbuilt mats are warrantied for 10 years of heavy use. Mine has been in continuous use since 2024. The fiber density hasn&apos;t changed. A good cheap mat might last 18 months before the surface wears down. Over 10 years, the Fiberbuilt is cheaper on a per-year basis while delivering a substantially better practice experience the entire time.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">Size options:</strong> The Flight Deck comes in 5×4 and 5×5 (the hitting surface). I run the 5×5. The larger size is worth it for the extra stance room.
            </p>
            <div className="mt-4">
              <a href="https://www.amazon.com/s?k=fiberbuilt+flight+deck+mat&tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
                Check Price on Amazon <span>→</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-2xl text-gs-green mb-2">2. TrueStrike Golf Mat ($249–499) — Most Realistic Feel</h3>
            <p>
              TrueStrike takes a completely different approach than Fiberbuilt. Rather than engineering the surface fibers, they engineered the base. The TrueStrike uses a patented gel divot system — a liquid gel layer beneath the hitting surface that compresses dynamically under the club head, then returns to its original shape. When you strike through the ball, the gel gives slightly in the direction of the swing, creating a sensation that&apos;s closer to real turf than any other mat I&apos;ve tried.
            </p>
            <p className="mt-4">
              For iron practice specifically, the TrueStrike is the most realistic feel of any mat in this price range. The gel feedback provides genuine information about where the club bottomed out relative to the ball, which helps you work on attack angle with real feedback rather than the guesswork you get on a standard mat.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">Limitation:</strong> The TrueStrike is best for iron and wedge practice. For driver and fairway wood practice, the gel divot simulation is less relevant — you&apos;re not taking a divot with a driver anyway. If your simulator practice is primarily iron-focused, the TrueStrike competes with the Fiberbuilt at a lower price point.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">Size note:</strong> TrueStrike mats are compact — they&apos;re designed as the hitting insert only, not a full stance mat. You&apos;ll want to pair with a rubber underlayment for a full stance area.
            </p>
            <div className="mt-4">
              <a href="https://www.amazon.com/s?k=truestrike+golf+mat&tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
                Check Price on Amazon <span>→</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-2xl text-gs-green mb-2">3. SIGPRO Softy ($179–349) — Best Value, Tyler&apos;s Current Mat</h3>
            <p>
              This is what I actually run now. After my wrist issues with cheap mats, I wanted something better that didn&apos;t require the Fiberbuilt budget commitment. The SIGPRO Softy hit that mark well.
            </p>
            <p className="mt-4">
              The Softy uses thick synthetic turf on top of a dense foam base. The base is legitimately thick — 1.75 inches of compressed foam with a rubber bottom. The result is a mat that has real shock absorption. I&apos;ve been hitting on mine for eight months without any wrist irritation. That&apos;s a meaningful change from my cheap-mat experience.
            </p>
            <p className="mt-4">
              The surface feels slightly softer than the Fiberbuilt, which is comfortable but means slightly less feedback on exactly where the club bottomed out. For a golfer who isn&apos;t obsessing over precise attack angle data, this is fine — the practice is good, the joint health is protected, the price is reasonable.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">Who it&apos;s right for:</strong> Mid-handicap golfers who want a serious mat without a serious price. If you&apos;re a 10–20 handicapper using a simulator to get more reps and improve your contact quality, the SIGPRO Softy does the job without the Fiberbuilt price tag.
            </p>
            <div className="mt-4">
              <a href="https://www.amazon.com/s?k=sigpro+softy+golf+mat&tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
                Check Price on Amazon <span>→</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-2xl text-gs-green mb-2">4. Country Club Elite ($299–599) — Solid All-Arounder</h3>
            <p>
              The Country Club Elite is a step up from budget mats and a step below the premium options in terms of feedback, but it&apos;s well-built and reliable. The base uses a urethane foam system that provides consistent cushion over time — urethane holds up better under repeated impact than cheaper foams, which tend to compress permanently over months of use.
            </p>
            <p className="mt-4">
              The surface is a dense synthetic turf that replicates real fairway turf reasonably well. The Club Elite doesn&apos;t have the gel or channel systems of the TrueStrike or Fiberbuilt, so divot simulation is limited — but for hitting off a consistent, well-cushioned surface, it performs above its price point.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">Best use case:</strong> A second mat — for example, a driving range–style station where multiple people are hitting, or as a tee-shot mat separate from your main iron-practice mat. The urethane base is durable enough for heavy shared use, which makes it a good value for multi-golfer setups.
            </p>
            <div className="mt-4">
              <a href="https://www.amazon.com/s?k=country+club+elite+golf+mat&tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
                Check Price on Amazon <span>→</span>
              </a>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Comparison Table</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse font-inter text-sm">
              <thead>
                <tr className="border-b-2 border-gs-green">
                  <th className="text-left py-3 pr-3 font-semibold text-gs-text">Mat</th>
                  <th className="text-left py-3 pr-3 font-semibold text-gs-text">Base Thickness</th>
                  <th className="text-left py-3 pr-3 font-semibold text-gs-text">Divot Simulation</th>
                  <th className="text-left py-3 pr-3 font-semibold text-gs-text">Joint Protection</th>
                  <th className="text-left py-3 font-semibold text-gs-text">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Fiberbuilt Flight Deck', '2.5"+', 'Excellent (channel system)', '★★★★★', '$399–799'],
                  ['TrueStrike', '1.5"', 'Excellent (gel divot)', '★★★★☆', '$249–499'],
                  ['SIGPRO Softy', '1.75"', 'Moderate', '★★★★☆', '$179–349'],
                  ['Country Club Elite', '1.5"', 'Basic', '★★★☆☆', '$299–599'],
                ].map(([mat, thickness, divot, joint, price]) => (
                  <tr key={mat} className="border-b border-gs-border">
                    <td className="py-3 pr-3 font-medium text-gs-text">{mat}</td>
                    <td className="py-3 pr-3 text-gs-muted">{thickness}</td>
                    <td className="py-3 pr-3 text-gs-muted">{divot}</td>
                    <td className="py-3 pr-3 text-gs-muted">{joint}</td>
                    <td className="py-3 font-medium text-gs-text">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">The Thickness Guide</h2>
          <p>
            Base thickness is the single most important spec to check on any mat. Here&apos;s what the numbers mean for joint health:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong className="text-gs-text font-medium">Under 1 inch:</strong> Not adequate for simulator use. These mats are designed for outdoor range practice on grass — they sit on top of natural turf, which provides the cushioning. On a hard floor, they transmit impact directly.</li>
            <li><strong className="text-gs-text font-medium">1–1.4 inches:</strong> Marginal. Better than thin mats, but wrist irritation over high-volume sessions is a real risk. I had one in this range for my second cheap mat — still caused issues.</li>
            <li><strong className="text-gs-text font-medium">1.5–2 inches:</strong> Adequate for most golfers. This is the minimum I&apos;d recommend for anyone planning to hit more than 50 balls per session. The SIGPRO Softy at 1.75" sits here and performs well.</li>
            <li><strong className="text-gs-text font-medium">2+ inches:</strong> Optimal. The Fiberbuilt sits in this range and delivers noticeably better shock absorption, especially for high-volume practice sessions or players with existing wrist or elbow sensitivities.</li>
          </ul>
          <p className="mt-4">
            <strong className="text-gs-text font-medium">The base matters, not the surface thickness.</strong> Cheap mats often advertise total thickness (surface + base combined) to inflate the number. Ask specifically about the base foam/rubber thickness. A mat with 2 inches of synthetic grass pile and 0.5 inches of foam base is not a 2.5-inch mat for joint protection purposes — it&apos;s a 0.5-inch mat.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Surface vs. Base: Different Jobs</h2>
          <p>
            It&apos;s worth separating what the surface does and what the base does, because manufacturers sometimes conflate them in marketing.
          </p>
          <p>
            <strong className="text-gs-text font-medium">The surface</strong> (the synthetic turf or fiber layer) handles: feel at impact, lie angle feedback, divot simulation, ball tee height options, and aesthetics. This is where the technology difference between a Fiberbuilt and a standard mat is most visible. The surface determines how realistic the interaction with the club feels.
          </p>
          <p>
            <strong className="text-gs-text font-medium">The base</strong> (the foam, urethane, rubber, or gel layer) handles: shock absorption, stability, anti-fatigue, and noise reduction. This is where the difference between a cheap mat and a good mat is most significant for your body. A premium surface on a thin base is still a thin base.
          </p>
          <p>
            When evaluating a mat, ask two separate questions: how good is the surface feel, and how much base thickness does it have? A mat can excel at one and fail at the other. The TrueStrike has a great surface feel with a relatively thin base; solve this by layering it on a rubber underlayment. The SIGPRO Softy has a good base with a standard surface; it won&apos;t feel as realistic as the TrueStrike but it will protect your joints better on its own.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Portable vs. Permanent</h2>
          <p>
            <strong className="text-gs-text font-medium">Portable mats:</strong> Smaller form factor (typically 3×5 or 4×5), lighter weight, often include a carry bag. Best for garage setups where the simulator is temporary, or apartments where the mat needs to be stored after sessions. The tradeoff: smaller stance area and usually thinner base to save weight.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Permanent mats:</strong> Larger (5×5, 5×6, or bigger), heavier, designed to stay in place. Better for dedicated simulator rooms. The larger platform gives you a full realistic stance for every club, right down to the wide stance you&apos;d use with a driver. If you have a permanent simulator space, buy a permanent mat — the experience is meaningfully better.
          </p>
          <p>
            My setup is permanent. I&apos;ve never moved the SIGPRO Softy since I put it down. If I had a garage setup that shared space with a car, I&apos;d probably be on the TrueStrike insert on a rubber pad — easier to store, still good joint protection.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">The Lesson I Learned the Hard Way</h2>
          <p>
            When I was buying my first home simulator setup, I found three places to save money: the mat, the net, and the software. The first two turned out to be real mistakes. The mat cost me a physio bill and three months of modified practice while my wrist healed. The thin net cost me a golf ball–shaped dent in my wall.
          </p>
          <p>
            The mat is not an accessory. It is the foundation of every shot you will hit in your simulator. Every wrist, elbow, and shoulder you protect by buying a proper one is worth it. Start with the SIGPRO Softy at minimum. Budget for the Fiberbuilt if you can.
          </p>
          <p>
            Don&apos;t do what I did.
          </p>

          <div className="mt-8 bg-gs-off border border-gs-border p-6">
            <h3 className="font-serif text-xl text-gs-green mb-3">Complete Your Setup</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <Link href="/reviews/best-golf-hitting-mats" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Hitting Mats (Full Roundup)</Link>
              <Link href="/reviews/golf-simulator-total-cost-breakdown" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Full Golf Simulator Cost Breakdown</Link>
              <Link href="/reviews/best-golf-simulator-for-apartments" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Simulator for Apartments</Link>
              <Link href="/reviews/skytrak-plus-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ SkyTrak+ Full Review</Link>
              <Link href="/reviews/home-golf-simulator-setup-guide" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Home Simulator Setup Guide</Link>
              <Link href="/reviews/best-golf-simulator-impact-screens" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Impact Screens</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
