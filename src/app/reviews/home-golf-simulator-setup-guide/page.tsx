import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Build a Home Golf Simulator: Everything You Need to Know — Golf Sim Lab',
  description: 'The complete guide to building a home golf simulator. Room selection, equipment list, realistic prices, common mistakes, installation tips, and total cost ranges.',
}

export default function HomeGolfSimulatorSetupGuide() {
  return (
    <div className="bg-gs-white">
      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">Setup Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-4">
            How to Build a Home Golf Simulator: Everything You Actually Need to Know
          </h1>
          <div className="flex items-center gap-4 text-gs-muted font-inter text-sm mb-8">
            <span>Updated October 2024</span>
            <span>·</span>
            <span>~2,000 words</span>
          </div>
          <div className="border-l-2 border-gs-gold pl-6">
            <p className="font-inter text-base text-gs-muted font-light leading-relaxed">
              This is the guide I wish existed when I started building my first home simulator. The information is out there, but it&apos;s scattered across forums, YouTube comments, and Reddit threads that each have partial answers but nobody pulling it together. Consider this the complete version — from room selection to first shot.
            </p>
          </div>
        </div>

        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Part 1: Room Selection</h2>
          <p>
            The room you choose determines every other decision. Get this right first.
          </p>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-3">Basement vs. Garage vs. Dedicated Room</h3>
            <p>
              <strong className="text-gs-text font-medium">Basement:</strong> Usually the best option when available. Temperature-controlled, protected from weather, typically dark (good for projector image quality), often has adequate ceiling height in newer construction. Cons: may need permits for structural changes, humidity can be an issue.
            </p>
            <p className="mt-3">
              <strong className="text-gs-text font-medium">Garage:</strong> Excellent space when ceiling height is adequate (see our <Link href="/reviews/best-golf-simulator-for-garage" className="text-gs-green hover:text-gs-gold transition-colors underline">garage simulator guide</Link> for full details). Usually more volume than a basement room, easier to get equipment in. Cons: temperature extremes, lighting control more challenging, sharing with a car creates complications.
            </p>
            <p className="mt-3">
              <strong className="text-gs-text font-medium">Dedicated room:</strong> If you&apos;re converting a spare bedroom or adding a room specifically for a simulator — lucky you. The trade-off is that standard residential ceiling height (8 feet) is marginal for golf. You&apos;d need a room with 9+ foot ceilings or structural modifications.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-3">The Non-Negotiable Measurements</h3>
            <p>
              Before committing to any room, collect these measurements:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong className="text-gs-text font-medium">Ceiling height:</strong> Minimum 9 feet from finished floor. Measure at multiple points — some garages have sloped ceilings near the edges.</li>
              <li><strong className="text-gs-text font-medium">Width:</strong> Minimum 10 feet, comfortable at 12 feet. You need side clearance for the follow-through swing path.</li>
              <li><strong className="text-gs-text font-medium">Depth (total):</strong> Minimum 15 feet for a complete setup (hitting position + space behind + screen + safety margin). Comfortable at 18–20 feet.</li>
              <li><strong className="text-gs-text font-medium">Your personal swing arc:</strong> Stand in the room, swing a driver to full backswing position, measure from floor to highest club head point. Add 18 inches. That&apos;s your true ceiling requirement.</li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Part 2: The Complete Equipment List</h2>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-3">Launch Monitor ($599–$8,995)</h3>
            <p>
              The data brain. Captures ball and club metrics and feeds them to the simulator software. Price range is vast because accuracy range is vast. See our <Link href="/best-golf-simulators" className="text-gs-green hover:text-gs-gold transition-colors underline">full comparison</Link> for detailed recommendations.
            </p>
            <p className="mt-2">
              Quick guidance: Garmin R10 ($599) for entry-level, FlightScope Mevo+ ($2,199) or SkyTrak+ ($2,995) for serious use, Foresight GC3 ($6,999) for professional accuracy.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-3">Impact Screen ($400–$1,500)</h3>
            <p>
              The screen serves two purposes: projection surface and ball stop. It needs to do both well simultaneously — project a crisp image while repeatedly stopping 150+ mph golf balls without tearing.
            </p>
            <p className="mt-3">
              Quality tiers matter here. The cheapest screens ($200–300) are typically polyester or basic fabric that produces a dim, washed-out image and doesn&apos;t last long. Quality woven screens ($450–800) provide sharp, bright projection and durability measured in years. Premium options ($800–1,500) offer exceptional image clarity and impact resistance.
            </p>
            <p className="mt-3">
              Reputable brands: Carl&apos;s Place, Rain or Shine Golf, The Net Return, Homecourse. All have been tested by real builders with real feedback.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-3">Enclosure / Frame ($300–$2,000)</h3>
            <p>
              The enclosure holds the screen, provides side barriers to catch errant shots, and gives the whole setup a contained, professional feel. Ranges from basic PVC pipe frames ($300) to commercial-grade steel enclosures with finished panels ($1,500+).
            </p>
            <p className="mt-3">
              Important: match your enclosure to your screen. If you buy a 10-foot impact screen, you need an enclosure frame that properly mounts a 10-foot screen at the right height.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-3">Projector ($500–$2,000)</h3>
            <p>
              The projector creates the virtual course image. Key specs to evaluate:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong className="text-gs-text font-medium">Throw ratio:</strong> Determines how far back the projector needs to be to fill your screen. Short-throw projectors (0.5:1 to 1.2:1 throw ratio) can sit much closer — critical for rooms where you can&apos;t spare 10+ feet of throw distance.</li>
              <li><strong className="text-gs-text font-medium">Lumens:</strong> Brighter is better. 2,000+ lumens for a dark room. 3,000+ if there&apos;s any ambient light you can&apos;t control. Cheaper projectors are typically 1,000–1,500 lumens — fine in a dark basement, mediocre in a typical garage.</li>
              <li><strong className="text-gs-text font-medium">Resolution:</strong> 1080p is the minimum. 4K overkill for most setups. 1080p at 3,000+ lumens is the practical sweet spot.</li>
              <li><strong className="text-gs-text font-medium">Input lag:</strong> Important for simulator use. High input lag (&gt;50ms) creates a noticeable delay between hitting the shot and seeing it on screen. Look for &lt;20ms input lag.</li>
            </ul>
            <p className="mt-3">
              Solid choices: BenQ TH671ST (short-throw, 3,000 lumens), Optoma GT1090HDR (short-throw, excellent image quality), Epson Home Cinema 880 (long-throw but very bright for the price).
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-3">Hitting Mat ($200–$800)</h3>
            <p>
              You will hit thousands of shots off this mat. It needs to feel realistic, withstand that volume, and not damage your joints from the impact forces of swinging into hard surfaces.
            </p>
            <p className="mt-3">
              Features to look for: replaceable turf inserts (the strip where you actually hit eventually wears out), a separate fairway and rough section, a decent amount of give without being too soft (you want something closer to real turf feel than a door mat), and enough size (at least 4×4 feet; 4×7 is better).
            </p>
            <p className="mt-3">
              Avoid: thin rubber-backed mats that transmit full impact force to your wrists. Avoid: mats that sit too high off the ground and mess with your lie angle, affecting launch monitor readings.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-3">Software ($0–$200/yr)</h3>
            <p>
              Depends entirely on your launch monitor choice:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong className="text-gs-text font-medium">TGC2 (The Golf Club 2019):</strong> Best overall software experience. 150,000+ courses including realistic recreations of famous courses. ~$40/month or ~$400/year. Included free with TruGolf APOGEE.</li>
              <li><strong className="text-gs-text font-medium">E6 Connect:</strong> Most compatible with different launch monitors. 100,000+ course holes. ~$99/year for basic, more for premium tiers. Integrates with SkyTrak+, Mevo+, R10, GC3, and others.</li>
              <li><strong className="text-gs-text font-medium">FSX Live:</strong> Foresight&apos;s platform, works well with GC3. Good data display. ~$150+/year for simulator features.</li>
              <li><strong className="text-gs-text font-medium">Full Swing software:</strong> Included with Full Swing KIT. Polished, no additional subscription.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-3">Lighting ($50–$300)</h3>
            <p>
              For camera-based systems (SkyTrak+, GC3): consistent, overhead, diffused lighting is essential. LED shop light panels (the 4-foot rectangle kind) mounted overhead are cheap and effective. Two 4-foot panels over the hitting area run $80–120 and make a meaningful difference in data consistency.
            </p>
            <p className="mt-3">
              For radar systems (Mevo+, R10, Full Swing KIT): lighting is irrelevant for data. Still important for being able to see the screen — ambient lighting can wash out the projected image. In that case, dimmer switches on overhead lights give you control.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Part 3: Total Cost Ranges</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse font-inter text-sm">
              <thead>
                <tr className="border-b-2 border-gs-green">
                  <th className="text-left py-2 pr-4 font-semibold text-gs-text">Build Tier</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gs-text">Launch Monitor</th>
                  <th className="text-left py-2 font-semibold text-gs-text">Total (Year 1)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Entry', 'Garmin R10', '$1,200–$2,000'],
                  ['Mid-Range', 'FlightScope Mevo+', '$4,000–$5,500'],
                  ['Serious', 'SkyTrak+', '$5,500–$7,500'],
                  ['Premium', 'Foresight GC3', '$11,000–$15,000'],
                  ['Turnkey', 'TruGolf APOGEE', '$10,500–$13,000'],
                ].map(([tier, lm, total]) => (
                  <tr key={tier} className="border-b border-gs-border">
                    <td className="py-2 pr-4 font-medium text-gs-text">{tier}</td>
                    <td className="py-2 pr-4 text-gs-muted">{lm}</td>
                    <td className="py-2 text-gs-muted">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            These are real numbers including all components. If you see a &quot;golf simulator&quot; advertised for $2,000 all-in, you&apos;re looking at either a very compromised setup or a launch monitor being marketed as a complete system.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Part 4: Common Mistakes</h2>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">Low Ceiling Regret</h3>
            <p>
              The most common regret in simulator builds, and the one that can&apos;t be easily fixed. People underestimate their swing arc and set up in a space that clips the ceiling on driver swings. Measure, add a margin, and if it&apos;s borderline — find a different room or plan to hit shorter clubs only. You will be frustrated every time you can&apos;t swing freely.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-2">Wrong Projector Throw Ratio</h3>
            <p>
              Buying a projector without calculating throw distance first leads to either a tiny image (projector is too close) or a projector that needs to be mounted somewhere you can&apos;t reach (too far back). Calculate the math before you buy: (throw ratio) × (screen width) = throw distance. Then verify you can actually mount the projector at that distance in your space.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-2">Skimping on the Mat</h3>
            <p>
              The hitting mat is where you interact with the system for every single shot. Buying the cheapest mat creates a bad hitting experience (physically and data-wise) that makes you hate using the system. A $200 mat that you resent using is worse than spending $450 on something you enjoy hitting off of.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-2">Ignoring Software Until the End</h3>
            <p>
              Some people buy all the hardware, get it installed, then discover the software their launch monitor supports doesn&apos;t run well on their computer, or costs more than expected, or doesn&apos;t have the features they wanted. Research the software ecosystem before buying the launch monitor — they&apos;re linked decisions.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-2xl text-gs-green mb-2">Buying Hardware Before Understanding Space Constraints</h3>
            <p>
              Getting excited and buying the Mevo+ before discovering your garage depth is only 8 feet behind the hitting position. Or buying the SkyTrak+ before discovering the afternoon sun from your garage window creates data problems. Understand your space first; buy hardware second.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Part 5: Maintenance</h2>
          <p>
            <strong className="text-gs-text font-medium">Impact screen:</strong> Will eventually get holes from ball strikes, particularly in the center impact zone. Quality screens last 2–5 years with normal use. Budget for eventual replacement.
          </p>
          <p className="mt-3">
            <strong className="text-gs-text font-medium">Hitting mat:</strong> The turf insert where you actually take divots wears out. Buy a mat with a replaceable insert — when that strip looks like a dirt patch, swap just the insert for $60–100 instead of buying a new mat.
          </p>
          <p className="mt-3">
            <strong className="text-gs-text font-medium">Projector bulb:</strong> Traditional lamp projectors need bulb replacement every 3,000–5,000 hours (roughly $80–150). LED projectors last much longer — a good reason to pay more upfront for an LED model.
          </p>
          <p className="mt-3">
            <strong className="text-gs-text font-medium">Software subscriptions:</strong> Budget annually. $150–200/year is the realistic ongoing cost if you use a full simulator platform.
          </p>

          <div className="mt-10 bg-gs-off border border-gs-border p-6">
            <h3 className="font-serif text-xl text-gs-green mb-3">Continue Reading</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <Link href="/best-golf-simulators" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ The 5 Best Golf Simulators in 2024</Link>
              <Link href="/reviews/best-golf-simulator-for-garage" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Garage Simulator Setup Guide</Link>
              <Link href="/reviews/best-golf-simulator-under-5000" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Complete Setups Under $5,000</Link>
              <Link href="/reviews/golf-simulator-vs-launch-monitor" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Simulator vs. Launch Monitor</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
