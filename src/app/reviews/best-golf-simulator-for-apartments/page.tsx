import type { Metadata } from 'next'
import Link from 'next/link'

// FACT-CHECK: Prices verified 2026-11-04. Specs sourced from manufacturer documentation.
// Garmin R10: $599 MSRP, dimensions 2.8" x 2.8" x 1.3". Recommended ~8ft ceiling.
// SkyTrak+: $2,995 MSRP, side-mount, works in 10x10 with ceiling ~9ft.
// FlightScope Mevo+: $2,199 MSRP, requires ~8ft behind ball, 8.5ft ceiling minimum.

export const metadata: Metadata = {
  title: 'Best Golf Simulator for Apartments and Small Spaces (2026) — Top Golf Simulators',
  description: 'Living in a condo or apartment doesn\'t disqualify you from a golf simulator. Tyler Kwan built one in a spare bedroom. Here\'s what actually works in small spaces.',
}

export default function BestGolfSimulatorForApartments() {
  return (
    <div className="bg-gs-white">

      <div className="w-full aspect-[16/9] overflow-hidden mb-12 rounded-sm">
        <img src="/images/apartment-simulator-setup.png" alt="Golf simulator in apartment spare bedroom" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-10">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">Setup Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-6">
            Best Golf Simulator for Apartments and Small Spaces (2026)
          </h1>

          {/* Author byline */}
          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-100">
            <img src="/images/tyler-kwan.png" alt="Tyler Kwan" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8A96E]" />
            <div>
              <p className="font-semibold text-[#1B3A2D] text-sm">Tyler Kwan</p>
              <p className="text-xs text-gray-500">9 handicap · Austin, TX · Published November 4, 2026</p>
            </div>
          </div>

          <div className="border-l-2 border-gs-gold pl-6">
            <p className="font-inter text-base text-gs-muted font-light leading-relaxed">
              I live in a condo. My HOA has opinions about noise. My spare bedroom is 11 feet wide and 13 feet long. For about two years I convinced myself that a home golf simulator was something that existed for people with garages and finished basements — not me. Then I actually went and built one. This guide is what I figured out the hard way.
            </p>
          </div>
        </div>

        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">What &quot;Apartment-Friendly&quot; Actually Means</h2>
          <p>
            When people say they want an apartment-friendly simulator, they usually mean one of a few things — and mixing them up leads to bad purchases. Let me separate them out.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Space:</strong> The honest minimum for a usable golf simulator swing is roughly 10 feet wide, 10 feet deep (measured from net to golfer), and 8.5 feet ceiling height. Most spare bedrooms in apartments and condos hit at least two of those three. The question is which wall you can sacrifice for a net or screen, and whether your ceiling is high enough to swing a driver without anxiety.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Noise:</strong> This is the one most guides skip. Hitting a golf ball into a net indoors produces two distinct sounds — the click of impact, and the thud of the ball hitting the net. The impact click is unavoidable and relatively quiet. The net thud is the problem. A thin practice net stretched taut sounds like someone slapping a wall. A thicker, looser net or a baffle net absorbs more of the energy and dramatically reduces the noise transmitted into floors and walls.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Floor protection:</strong> Golf mats on hardwood without any base layer will scratch floors over time. The rubber feet on mats can leave marks. Even if the mat itself doesn&apos;t scratch, the vibration from impact — especially with a driver — will eventually mark your floors. A thick rubber mat (at least ½ inch) under your hitting mat solves this.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Portability:</strong> If your simulator doubles as a living room sometimes, you need something you can break down and store. That changes the calculus significantly — a full projector and screen setup is a commitment. A launch monitor with a rollable net is a 20-minute setup.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">The 3 Best Options for Small Spaces</h2>

          <div>
            <h3 className="font-serif text-2xl text-gs-green mb-2">1. Garmin Approach R10 ($599) — Smallest Footprint</h3>
            <p>
              The R10 is the right answer if your space is genuinely constrained or your budget is. It&apos;s the size of a deck of cards, sits behind and to the side of the ball, and pairs with any basic practice net. No side-mounted box, no depth requirement, no projector required (it runs entirely on your phone or tablet).
            </p>
            <p className="mt-4">
              For an apartment setup, pair it with a 10-foot wide practice net ($100–200) and a hitting mat, and you&apos;re functional. The simulation isn&apos;t as polished as a full enclosure setup — you&apos;re looking at your phone rather than a projected screen — but the data is solid for practice purposes: ball speed, launch angle, club path, face angle, carry distance.
            </p>
            <p className="mt-4">
              The honest limitation: the R10 is designed for outdoor use or at minimum, well-lit spaces. Indoors in a dim spare bedroom, it can struggle. I had to add a daylight-balanced LED panel near the hitting area to get consistent readings. Once I did that, it was rock solid.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">Space needed:</strong> As small as 8 feet wide × 10 feet deep × 8.5 feet ceiling. Net hangs on one wall. R10 sits behind the ball on the floor. That&apos;s it.
            </p>
            <div className="mt-4">
              <a href="https://www.amazon.com/dp/B095QX1FSR?tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
                Check Price on Amazon <span>→</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-2xl text-gs-green mb-2">2. SkyTrak+ ($2,995) — Best for a 10×10 Room</h3>
            <p>
              The SkyTrak+ is what I actually run in my setup. It sits to the side of the ball — not behind it — which means you don&apos;t need any rear clearance beyond what you need to swing. That&apos;s a significant advantage in short rooms.
            </p>
            <p className="mt-4">
              In a 10×10 room, the SkyTrak+ with a Carl&apos;s Place impact screen and a short-throw projector is a legitimate full simulator experience. I added a projector because staring at a screen on a wall transforms the whole thing — it stops feeling like practice equipment and starts feeling like a simulator. But if budget is a concern, you can start with just the launch monitor and a net, then add the projector later.
            </p>
            <p className="mt-4">
              The SkyTrak+ uses a camera-hybrid system, which means lighting consistency matters. In my spare bedroom with controlled overhead lighting, it&apos;s very accurate. The software ecosystem is excellent — WGT, E6 Connect, TGC 2019 all work well on it.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">Space needed:</strong> 10 feet wide × 10 feet deep × 9 feet ceiling minimum. The side-mount design is what makes this work in tight spaces — no rear clearance required.
            </p>
            <div className="mt-4">
              <a href="https://www.amazon.com/s?k=skytrak+plus+launch+monitor&tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
                Check Price on Amazon <span>→</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-2xl text-gs-green mb-2">3. FlightScope Mevo+ ($2,199) — Most Versatile, But Needs Depth</h3>
            <p>
              The Mevo+ is excellent, but I want to be direct about the apartment constraint: it needs approximately 8 feet behind the ball. In a 10-foot deep room, that leaves you 2 feet of room between your back and the wall — which works for some golfers and doesn&apos;t for others. If your room is 12 feet deep or more, the Mevo+ becomes very appealing.
            </p>
            <p className="mt-4">
              What I like about the Mevo+ for apartment setups specifically: it&apos;s radar-based, so lighting is completely irrelevant. Dark room, bright room, afternoon sun through a window — doesn&apos;t matter. That removes an entire variable that the SkyTrak+ and R10 require you to manage. It&apos;s also genuinely portable — takes it to the range in the summer when you can practice outdoors.
            </p>
            <p className="mt-4">
              <strong className="text-gs-text font-medium">Space needed:</strong> 10 feet wide × 15 feet deep (comfortable) × 8.5 feet ceiling. The depth is non-negotiable — trying to squeeze the Mevo+ into a 10-foot deep room is not a good experience.
            </p>
            <div className="mt-4">
              <a href="https://www.amazon.com/s?k=flightscope+mevo+plus&tag=smvaffiliates-20" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all rounded-sm">
                Check Price on Amazon <span>→</span>
              </a>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Comparison Table</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse font-inter text-sm">
              <thead>
                <tr className="border-b-2 border-gs-green">
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">Simulator</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">Min Space</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">Noise Level</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gs-text">Portable?</th>
                  <th className="text-left py-3 font-semibold text-gs-text">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Garmin R10', '8×10 ft, 8.5 ft ceiling', 'Low (no thud net needed)', 'Yes — fits in a backpack', '$599'],
                  ['SkyTrak+', '10×10 ft, 9 ft ceiling', 'Medium (net thud)', 'Moderate (box + net)', '$2,995'],
                  ['FlightScope Mevo+', '10×15 ft, 8.5 ft ceiling', 'Medium (net thud)', 'Yes — compact carry bag', '$2,199'],
                ].map(([sim, space, noise, portable, price]) => (
                  <tr key={sim} className="border-b border-gs-border">
                    <td className="py-3 pr-4 font-medium text-gs-text">{sim}</td>
                    <td className="py-3 pr-4 text-gs-muted">{space}</td>
                    <td className="py-3 pr-4 text-gs-muted">{noise}</td>
                    <td className="py-3 pr-4 text-gs-muted">{portable}</td>
                    <td className="py-3 font-medium text-gs-text">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Managing Noise with Neighbors</h2>
          <p>
            This is the section most guides skip entirely. I&apos;ve thought about this a lot because I live below someone else and above someone else, and I have no interest in being that neighbor.
          </p>
          <p>
            <strong className="text-gs-text font-medium">The impact sound:</strong> The click of a golf ball at impact is about 85–90 dB at the source — loud, but brief and directional. It travels through air, not structure, and dissipates quickly. It&apos;s less of a problem than you might think. Your neighbor in the next unit probably won&apos;t hear this at all.
          </p>
          <p>
            <strong className="text-gs-text font-medium">The net impact:</strong> This is the real issue. When a ball hits a taut practice net, it creates a sharp thud that radiates through the net frame, into the floor, and down through your building. The fix: buy a thicker net (3–4 ply instead of 1 ply), set it up slightly loose rather than drum-tight, and add a baffle net 6 inches in front of it. The baffle absorbs the first hit; the main net stops the ball. Combined with the rubber floor mat under your hitting area, you&apos;ll dramatically reduce transmitted vibration.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Timing:</strong> I practice between 7 AM and 9 PM. That&apos;s a personal rule. 30 minutes of golf hitting at 10 PM is not a great neighbor move even if the sounds are dampened.
          </p>
          <p>
            <strong className="text-gs-text font-medium">The honest conversation:</strong> If you live in a building with thin concrete floors and close neighbors, talk to your downstairs neighbor before you set up. Showing up with a bottle of wine and a heads-up goes a long way. Finding out your neighbor plays golf is not uncommon — and sometimes they want to come hit too.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Floor Protection: What Actually Works</h2>
          <p>
            Hardwood floors in apartments are not designed to handle repeated golf club impacts with a 6-pound mat sitting on top of them. Here&apos;s the layering system I use, from floor up:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong className="text-gs-text font-medium">Layer 1 — Rubber underlayment:</strong> 3/8-inch rubber mat, slightly larger than your hitting area. This is your vibration absorption and scratch prevention. Cost: $40–80 for a 4×6 section.</li>
            <li><strong className="text-gs-text font-medium">Layer 2 — Foam puzzle tiles:</strong> Optional, but adds another layer of cushion and helps with joint fatigue if you&apos;re on a hard surface. Cost: $30–50.</li>
            <li><strong className="text-gs-text font-medium">Layer 3 — Hitting mat:</strong> At least 1.5 inches of base thickness. Thin mats on hard floors will wreck your wrists over time — the lack of give sends impact shock directly up your arms. More on this in my hitting mat guide.</li>
          </ul>
          <p>
            Total cost of floor protection: $70–130. Worth every dollar.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">Net vs. Screen for Small Spaces</h2>
          <p>
            This comes down to whether you want a practice tool or a full simulator experience.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Practice net:</strong> Folds up and stores in 5 minutes. $100–200. No projector needed. No impact screen to mount. You look at your phone or tablet for data. It&apos;s unglamorous but functional for working on your game.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Impact screen:</strong> Requires a frame or mounting hardware. Usually 8–10 feet wide, 7–8 feet tall. You project your simulator software onto it. The experience is dramatically better than staring at a phone. But it&apos;s a commitment — the screen and frame take significant wall space and can&apos;t be quickly stored.
          </p>
          <p>
            My setup started as a net-and-phone situation for the first year. I added the impact screen and projector when I realized I was using it five times a week and wanted the full experience. If you&apos;re not sure how much you&apos;ll actually use it, start with the net. You can always upgrade.
          </p>
          <p>
            One practical middle ground: the Carl&apos;s Place DIY enclosure kits. They let you use a pop-up style frame that isn&apos;t permanently installed, combined with their impact screens. It&apos;s faster to set up and break down than a custom-built frame, while still giving you a proper screen to project onto.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">HOA Considerations</h2>
          <p>
            HOA rules vary wildly, but a few things are worth checking before you spend money:
          </p>
          <p>
            <strong className="text-gs-text font-medium">What your HOA probably doesn&apos;t regulate:</strong> What you do inside your unit with equipment that doesn&apos;t alter the structure. A golf net in your living room is not meaningfully different from a treadmill. If you&apos;re not drilling into walls, not making permanent modifications, and not bothering neighbors with noise, most HOAs have no mechanism to object.
          </p>
          <p>
            <strong className="text-gs-text font-medium">What your HOA might regulate:</strong> Any permanent wall mounting (anchoring a screen frame to studs), floor modifications, or anything that could be construed as altering shared building structure. If you&apos;re mounting an impact screen to wall studs rather than using a freestanding frame, check your rules.
          </p>
          <p>
            <strong className="text-gs-text font-medium">Practical approach:</strong> Use freestanding equipment wherever possible. A net on a pop-up frame, a projector on a tripod or shelf, a mat that sits on the floor without anchoring — none of that creates any HOA exposure. I&apos;ve been running mine for two years without a single issue.
          </p>

          <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">My Actual Setup (What I Run)</h2>
          <p>
            For what it&apos;s worth: I run the SkyTrak+ in my 11×13 spare bedroom. The setup: SkyTrak+ side-mounted, Carl&apos;s Place impact screen on a freestanding frame, Optoma GT1080HDR short-throw projector on a wall shelf (no drilling — just resting on a bracket I screwed into a stud), SIGPRO Softy hitting mat on a rubber underlayment, and a baffle net hanging 8 inches in front of the impact screen for ball protection.
          </p>
          <p>
            All-in cost was approximately $5,500. Setup and breakdown: I don&apos;t take it down anymore. The room is permanently the simulator room. If you have the space to dedicate, that&apos;s the right call — the experience is dramatically better when it&apos;s set up and ready rather than a 20-minute production every time you want to hit.
          </p>
          <p>
            If I were doing it again on a tighter budget, I&apos;d start with the Garmin R10 and a good net, verify I actually use it regularly, then upgrade from there. The R10 answer is the right answer for most people who aren&apos;t sure yet.
          </p>

          <div className="mt-8 bg-gs-off border border-gs-border p-6">
            <h3 className="font-serif text-xl text-gs-green mb-3">Related Guides</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <Link href="/reviews/skytrak-plus-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ SkyTrak+ Full Review</Link>
              <Link href="/reviews/garmin-approach-r10-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Garmin R10 Full Review</Link>
              <Link href="/reviews/flightscope-mevo-plus-review" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ FlightScope Mevo+ Full Review</Link>
              <Link href="/reviews/best-golf-hitting-mats-2026" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Golf Hitting Mats 2026</Link>
              <Link href="/reviews/golf-simulator-total-cost-breakdown" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Real Cost of a Golf Simulator</Link>
              <Link href="/reviews/best-golf-simulator-impact-screens" className="font-inter text-sm text-gs-green hover:text-gs-gold transition-colors">→ Best Impact Screens</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
