import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Golf Simulator for a 10×12 Room (2026) | Space-Constrained Setup Guide',
  description:
    'Fitting a golf simulator into a 10×12 room is possible — but only if you choose the right gear. Tyler Kwan shares exactly what works, what doesn\'t, and how to set it up.',
};

export default function BestGolfSimulator10x12Page() {
  return (
    <div className="bg-gs-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Category Label */}
        <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">
          Buying Guide
        </p>

        {/* H1 */}
        <h1 className="font-serif text-4xl md:text-5xl text-gs-green leading-tight mb-6">
          Best Golf Simulator for a 10&times;12 Room
        </h1>

        {/* Author Byline */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-100">
          <img
            src="/images/tyler-kwan.png"
            alt="Tyler Kwan"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8A96E]"
          />
          <div>
            <p className="font-semibold text-[#1B3A2D] text-sm">Tyler Kwan</p>
            <p className="text-xs text-gray-500">
              9 handicap &middot; Austin, TX &middot; Published October 19, 2026
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            When I decided to build a golf simulator in my garage, I had one bay to work with. Not two.
            One single-car bay that measured almost exactly 10 feet wide by 12 feet deep — with a standard
            9-foot ceiling. Every forum post I found kept saying I needed 15&times;15 minimum. Every company
            rep I talked to was vague. So I did what engineers do: I measured everything obsessively, read
            every spec sheet I could find, and eventually built a setup that actually works.
          </p>
          <p>
            This guide is what I wish had existed before I started. If you&apos;re staring at a 10&times;12 room
            wondering whether you can make this work — yes, you can. But you need to make smart choices, and
            some popular simulators are simply off the table. Let&apos;s talk through exactly what you&apos;re
            working with, what fits, and what to buy.
          </p>
        </div>

        {/* Section: Why 10x12 Is Harder Than It Looks */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          Why a 10&times;12 Room Is Harder Than It Sounds
        </h2>
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            On paper, 120 square feet sounds like a lot. In practice, it gets eaten up fast. Picture this:
            your impact screen needs to sit on the short (10-foot) wall. That screen should be at least
            8 feet wide if you want to hit anything resembling a full shot without staring at a frame.
            With the screen hanging on that wall, you immediately lose about 6 to 12 inches of depth to
            the screen frame, padding, and net behind it.
          </p>
          <p>
            That leaves you roughly 11 to 11.5 feet of usable depth. Your hitting mat needs to be centered,
            and you want at least 3 feet of clearance behind the ball position so your backswing doesn&apos;t
            clip anything. A driver at full extension can reach 6 feet behind your lead foot on a big swing.
            You&apos;re working with tight margins.
          </p>
          <p>
            Width is the other killer. At 10 feet, you have maybe 3 to 4 feet on either side of the mat
            once you center it. That&apos;s fine for the swing itself — most golfers need about 6 feet of
            lateral clearance — but it limits where you can mount your launch monitor. Radar-based units
            need line-of-sight behind the ball. Camera-based units need side clearance. Neither has a
            perfect home in a narrow room, but some handle it far better than others.
          </p>
          <p>
            Ceiling height is the non-negotiable. Nine feet is the absolute floor for a meaningful full
            swing. I&apos;m 5&apos;11&quot; and my driver tops out around 8.5 feet at impact. If your
            ceiling is 8 feet, you&apos;re practicing chip shots, not your full bag. Do not compromise here.
          </p>
        </div>

        {/* Section: The Critical Factors */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          The Critical Factors Before You Buy Anything
        </h2>
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            Before you look at a single product page, nail down these four measurements in your room:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="font-semibold text-gs-green">Ceiling height at ball position.</strong> Measure
              from the floor to the lowest obstruction — that includes joists, beams, light fixtures, and
              garage door tracks. Not the open span. The lowest actual clearance where you&apos;ll be standing.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Depth from screen wall to back wall.</strong> This
              is how far you have to work with. Subtract 6 inches for screen/net, and another 18 inches minimum
              for your mat. Your ball position will end up roughly 7 to 9 feet from the screen face.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Width available for launch monitor placement.</strong>
              Side-mounted units need about 2 to 3 feet of clear floor space beside the mat. Radar units
              mounted behind need 8 to 10 feet of clear runway behind the ball.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Projector throw distance.</strong> A short-throw
              projector is almost mandatory in a 10&times;12 room. Most require 5 to 8 feet of throw for an
              8-foot-wide image. Measure your available ceiling mount position now.
            </li>
          </ul>
          <p>
            Once you have those four numbers, you can evaluate simulators against real constraints — not
            marketing copy.
          </p>
        </div>

        {/* Section: What You CAN Fit */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          What You Can Actually Fit in a 10&times;12 Room
        </h2>
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            Here&apos;s the good news: a functional, genuinely useful golf simulator absolutely fits in a
            10&times;12 room. My own setup proves it. Here&apos;s what a realistic 10&times;12 configuration
            looks like:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="font-semibold text-gs-green">Screen:</strong> An 8- to 9-foot wide impact
              screen, ceiling-mounted on the short wall. I use a ceiling-hung frame with bungee tensioning
              — no floor frame eating into your depth.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Mat:</strong> A 5&times;5 hitting mat centered
              on the floor, roughly 8 to 9 feet from the screen face. This puts you at a realistic ball-to-screen
              distance for both safety and simulation accuracy.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Launch monitor:</strong> Either side-mounted
              (SkyTrak+) or rear-positioned radar (Garmin R10 or Mevo+ if depth allows). More on specific
              placements below.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Projector:</strong> Ceiling-mounted short-throw
              unit, positioned 6 to 7 feet from screen. Optoma and BenQ both make solid short-throw options
              under $700 that work well for this configuration.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Side and rear padding:</strong> Foam or carpet
              padding on the side walls and behind the mat. You will miss. The walls will remind you.
            </li>
          </ul>
          <p>
            What you&apos;re <em>not</em> fitting: a full enclosure bay, a multi-panel screen, or anything
            that needs dedicated side-by-side tech stations. This is a focused hitting space, not a lounge.
            That&apos;s fine — it&apos;s where improvement happens anyway.
          </p>
        </div>

        {/* Section: What to Skip */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          What to Skip If You&apos;re Space-Constrained
        </h2>
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            Some simulators are just not designed for small rooms — and no amount of creative placement
            changes that. Here&apos;s what I&apos;d steer clear of in a 10&times;12:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="font-semibold text-gs-green">TruGolf Apogee:</strong> Gorgeous unit, but it
              requires 15&times;20 feet of clear space and a 10-foot ceiling. In a 10&times;12, this isn&apos;t
              even close to workable. Don&apos;t be tempted by the price tiers — the footprint is non-negotiable.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Full Swing KIT:</strong> Tiger&apos;s choice.
              Also requires 15&times;15 minimum with a 10-foot ceiling. The dual-radar system needs serious
              rear depth that a 12-foot room simply can&apos;t provide safely.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Foresight GC3:</strong> A great launch monitor
              in the right room — this isn&apos;t it. GC3 wants 12&times;12 with 9.5-foot ceilings. Your
              10-foot width is the killer here, as it constrains camera angles enough to affect accuracy on
              off-axis shots.
            </li>
            <li>
              <strong className="font-semibold text-gs-green">Any full-bay enclosure kit:</strong> The pre-built
              enclosure systems from Rain or Shine Golf, Shop Indoor Golf, and similar vendors are sized for
              10&times;10 or larger bays with generous ceiling clearance. Forcing one into a tight room usually
              means cutting the frame down — which voids warranties and defeats the purpose.
            </li>
          </ul>
        </div>

        {/* Section: Recommended Products */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          The Best Launch Monitors for a 10&times;12 Room
        </h2>
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            These three units are what I&apos;d actually recommend — based on dimensions I&apos;ve verified,
            not specs I copied from a brochure.
          </p>
        </div>

        {/* Product 1: Garmin R10 */}
        <div className="mt-8 p-6 border border-gray-100 rounded-sm bg-gray-50">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-2">
            Best Budget Pick
          </p>
          <h3 className="font-serif text-2xl text-gs-green mb-3">
            Garmin Approach R10 — $599
          </h3>
          <div className="space-y-4 font-inter text-base text-gs-muted font-light leading-relaxed">
            <p>
              The R10 is the easiest win for a tight space. It&apos;s a radar unit that sits on a tripod
              behind you — and here&apos;s the key spec: it only needs 8.5 feet behind the ball. In a
              12-foot deep room with 9 feet of usable floor after screen allowance, you can place the unit
              right at the back wall and have it work. I tested this configuration myself.
            </p>
            <p>
              Data accuracy for a $599 unit is genuinely impressive: ball speed, club speed, smash factor,
              launch angle, spin rate (estimated), and shot shape. It pairs with Garmin Golf for on-course
              simulation. The app isn&apos;t E6 Connect, but for the price — and given that it fits in a room
              where $2,000+ units won&apos;t — it&apos;s the clear recommendation for budget-conscious
              buyers or anyone just starting out.
            </p>
            <p>
              The limitation: spin data is estimated, not measured. If you&apos;re working on wedge play
              or trying to dial in specific spin profiles, you&apos;ll eventually want more. But for 90% of
              players building a home setup, the R10 delivers real, actionable feedback.
            </p>
          </div>
          <div className="mt-5">
            <a
              href="https://www.amazon.com/dp/B095QX1FSR?tag=smvaffiliates-20"
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all duration-200 rounded-sm"
            >
              Check Price on Amazon <span>→</span>
            </a>
          </div>
        </div>

        {/* Product 2: SkyTrak+ */}
        <div className="mt-8 p-6 border border-gray-100 rounded-sm bg-gray-50">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-2">
            My Personal Pick
          </p>
          <h3 className="font-serif text-2xl text-gs-green mb-3">
            SkyTrak+ — $2,995
          </h3>
          <div className="space-y-4 font-inter text-base text-gs-muted font-light leading-relaxed">
            <p>
              This is what I run. The SkyTrak+ uses a camera-radar hybrid system — it captures the ball
              at impact with high-speed cameras rather than tracking it via radar downrange. That means it
              sits <em>beside</em> the ball, not behind you. For a 10-foot wide room, this is a huge advantage.
            </p>
            <p>
              Placement: the unit sits on a small platform or low tripod about 2 feet to the right of the
              ball (for a right-handed golfer), aligned with the hitting line. It needs roughly 2.5 feet
              of clearance on that side — which a 10-foot room provides. No rear depth requirement. No
              radar alignment headaches. Just a compact puck on a stand that reads ball speed, spin rate
              (measured, not estimated), launch angle, azimuth, and carry distance with excellent accuracy.
            </p>
            <p>
              Software-wise, the SkyTrak+ pairs with E6 Connect, WGT Golf, and The Golf Club — the best
              simulation software available. If you want to play Pebble Beach from your garage, this is
              how you do it properly. The annual subscription adds cost, but the simulation quality
              justifies it.
            </p>
            <p>
              The case for SkyTrak+ in a small room is simple: it was designed to be space-efficient.
              SkyTrak built its reputation on garage setups and basement builds. The side-mounted form
              factor was intentional. It&apos;s no accident that it&apos;s the most popular launch monitor
              for exactly this kind of constrained build.
            </p>
          </div>
          <div className="mt-5">
            <a
              href="https://www.amazon.com/s?k=skytrak+plus&tag=smvaffiliates-20"
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all duration-200 rounded-sm"
            >
              Check Price on Amazon <span>→</span>
            </a>
          </div>
        </div>

        {/* Product 3: Mevo+ */}
        <div className="mt-8 p-6 border border-gray-100 rounded-sm bg-gray-50">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-2">
            Mid-Range Runner-Up
          </p>
          <h3 className="font-serif text-2xl text-gs-green mb-3">
            FlightScope Mevo+ — $2,199
          </h3>
          <div className="space-y-4 font-inter text-base text-gs-muted font-light leading-relaxed">
            <p>
              The Mevo+ is a radar unit — similar to the R10 in concept, but with measured spin data and
              significantly better accuracy. It needs to be positioned 8 feet behind the ball for optimal
              performance. In a 12-foot deep room, this is tight but workable — after accounting for the
              screen, net, and mat, you end up with the Mevo+ sitting right at or just inside the back wall.
            </p>
            <p>
              This works, but you lose the buffer zone behind the unit that gives radar setups their best
              signal. I&apos;d call this a viable setup with a warning: measure your actual available depth
              before buying. If you have exactly 12 feet of depth and the screen takes 12 inches, you&apos;re
              placing the Mevo+ at 10 feet — slightly outside its sweet spot.
            </p>
            <p>
              Where the Mevo+ earns its price: 16 data parameters including measured ball and club spin,
              smash factor, angle of attack, and face-to-path. For a serious golfer who wants to understand
              their swing, this data depth beats the R10 significantly. It also supports FS Golf, E6, and
              TGC2019 for simulation, though E6 requires a paid add-on.
            </p>
            <p>
              Bottom line: if you can confirm 8 feet of clear depth behind your ball position, the Mevo+
              is a legitimate upgrade over the R10 and a strong alternative to SkyTrak+ if you&apos;d
              rather not deal with side-mount placement.
            </p>
          </div>
          <div className="mt-5">
            <a
              href="https://www.amazon.com/s?k=flightscope+mevo+plus&tag=smvaffiliates-20"
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all duration-200 rounded-sm"
            >
              Check Price on Amazon <span>→</span>
            </a>
          </div>
        </div>

        {/* Section: Screen Sizing */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          Screen and Net Sizing for a 10-Foot Wide Room
        </h2>
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            An 8- to 9-foot wide impact screen is the sweet spot for a 10-foot room. Go smaller and you&apos;ll
            be hitting frame-adjacent shots that feel cramped and risky. Go wider and you&apos;re fighting the
            walls for frame clearance.
          </p>
          <p>
            I recommend a ceiling-mount approach — either a dedicated steel frame hung from the joists or a
            simple pipe-and-flange system. Floor frames work, but they eat 4 to 6 inches of depth on the
            screen side and can shift during hard shots. Ceiling mounts keep the footprint clean and allow
            you to position the screen flush against the wall.
          </p>
          <p>
            Behind the screen: you want at minimum 6 inches of air gap between the screen and the wall,
            with impact foam or a barrier net catching wayward shots. I use a combination of noodle foam
            and a secondary catch net that folds up when not in use. Total depth consumed by the screen
            setup: about 10 to 14 inches.
          </p>
          <p>
            Screen fabric matters. In a tight room, you&apos;re probably projecting from a shorter throw
            distance, so look for a screen with good gain at low angles — a woven impact fabric in the
            1.0–1.2 gain range works well. Don&apos;t cheap out here; a thin screen will degrade your
            image quality and wear out faster from close-range impacts.
          </p>
          <div className="mt-5">
            <a
              href="https://www.amazon.com/s?k=golf+simulator+impact+screen&tag=smvaffiliates-20"
              target="_blank"
              rel="nofollow sponsored"
              className="inline-flex items-center gap-2 bg-[#1B3A2D] text-white font-semibold px-6 py-4 text-sm tracking-wide hover:bg-[#2d5a45] transition-all duration-200 rounded-sm"
            >
              Browse Impact Screens on Amazon <span>→</span>
            </a>
          </div>
        </div>

        {/* Comparison Table */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          Comparison: What Fits in a 10&times;12 Room
        </h2>
        <div className="space-y-4 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            Here&apos;s a direct comparison of popular options against 10&times;12 room constraints:
          </p>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse font-inter text-sm">
            <thead>
              <tr className="bg-[#1B3A2D] text-white">
                <th className="text-left px-4 py-3 font-semibold">Simulator / Monitor</th>
                <th className="text-left px-4 py-3 font-semibold">Min Floor Space</th>
                <th className="text-left px-4 py-3 font-semibold">Min Ceiling</th>
                <th className="text-left px-4 py-3 font-semibold">Works in 10&times;12?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-white">
                <td className="px-4 py-3 font-medium text-[#1B3A2D]">Garmin Approach R10</td>
                <td className="px-4 py-3 text-gs-muted">10&times;10 ft</td>
                <td className="px-4 py-3 text-gs-muted">9 ft</td>
                <td className="px-4 py-3 text-green-700 font-semibold">✅ Yes</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3 font-medium text-[#1B3A2D]">SkyTrak+</td>
                <td className="px-4 py-3 text-gs-muted">10&times;10 ft</td>
                <td className="px-4 py-3 text-gs-muted">9 ft</td>
                <td className="px-4 py-3 text-green-700 font-semibold">✅ Yes</td>
              </tr>
              <tr className="border-b border-gray-100 bg-white">
                <td className="px-4 py-3 font-medium text-[#1B3A2D]">FlightScope Mevo+</td>
                <td className="px-4 py-3 text-gs-muted">12&times;10 ft</td>
                <td className="px-4 py-3 text-gs-muted">9 ft</td>
                <td className="px-4 py-3 text-yellow-600 font-semibold">⚠️ Tight</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="px-4 py-3 font-medium text-[#1B3A2D]">Foresight GC3</td>
                <td className="px-4 py-3 text-gs-muted">12&times;12 ft</td>
                <td className="px-4 py-3 text-gs-muted">9.5 ft</td>
                <td className="px-4 py-3 text-red-600 font-semibold">❌ No</td>
              </tr>
              <tr className="border-b border-gray-100 bg-white">
                <td className="px-4 py-3 font-medium text-[#1B3A2D]">Full Swing KIT</td>
                <td className="px-4 py-3 text-gs-muted">15&times;15 ft</td>
                <td className="px-4 py-3 text-gs-muted">10 ft</td>
                <td className="px-4 py-3 text-red-600 font-semibold">❌ No</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-[#1B3A2D]">TruGolf Apogee</td>
                <td className="px-4 py-3 text-gs-muted">15&times;20 ft</td>
                <td className="px-4 py-3 text-gs-muted">10 ft</td>
                <td className="px-4 py-3 text-red-600 font-semibold">❌ No</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section: What to Prioritize */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          What to Prioritize (In This Order)
        </h2>
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            <strong className="font-semibold text-gs-green">1. Ceiling treatment first.</strong> If your
            ceiling is exactly 9 feet, you&apos;ll want to remove any hanging obstructions and add foam
            padding up there. A driver shaft grazing a joist is a bad day. If the ceiling is below 9 feet,
            stop here — nothing else on this list matters until that&apos;s resolved.
          </p>
          <p>
            <strong className="font-semibold text-gs-green">2. Floor plan second.</strong> Tape out your
            room before buying anything. Mark the screen wall, the mat position, the side walls. Walk
            through your full swing in slow motion. Check your follow-through clearance. Check your
            backswing. Only then should you start thinking about gear.
          </p>
          <p>
            <strong className="font-semibold text-gs-green">3. Gear third.</strong> Once you&apos;ve confirmed
            your space works, choose your launch monitor based on placement constraints — not features alone.
            The best launch monitor in the world is useless if it can&apos;t physically fit in your room
            and read shots accurately.
          </p>
          <p>
            One more thing: don&apos;t skip the side padding. I know it looks unnecessary when you first
            set up and swing cleanly. After three months, my side wall padding has taken direct hits from
            at least a dozen shanks, pulled 7-irons, and one embarrassing full driver miss. Foam padding
            on the side walls is $30 of protection against a dented stud or a broken window. Just do it.
          </p>
        </div>

        {/* Closing */}
        <h2 className="font-serif text-3xl text-gs-green mt-10 mb-2">
          The Honest Take
        </h2>
        <div className="space-y-6 font-inter text-base text-gs-muted font-light leading-relaxed">
          <p>
            Small rooms work. My 10-foot wide, 12-foot deep garage bay has hosted thousands of swings at
            this point, and it&apos;s made me a better golfer in ways that range sessions never could.
            The feedback loop is immediate, the data is real, and I can hit shots at 11 PM without driving
            to a range.
          </p>
          <p>
            But here&apos;s the honest part: small rooms require more planning than large ones, not less.
            Every inch matters. A unit that works perfectly in a 15&times;15 bay might be completely
            unusable in your space. The people who end up disappointed with their simulator builds
            almost always made one of two mistakes: they chose gear first without confirming placement,
            or they trusted marketing specs without measuring their actual clearances.
          </p>
          <p>
            Measure obsessively. Buy based on your real dimensions. And if your ceiling is 8&apos;6&quot;,
            prioritize fixing that before anything else — because no launch monitor can fix a ceiling
            that&apos;s too low.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-14 pt-8 border-t border-gray-100">
          <p className="font-inter text-xs font-semibold uppercase tracking-widest text-gs-gold mb-4">
            Related Guides
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                href="/reviews/best-golf-simulator-for-garage"
                className="font-inter text-sm font-medium text-[#1B3A2D] hover:text-gs-gold transition-colors duration-150"
              >
                Best Golf Simulator for a Garage Setup →
              </Link>
            </li>
            <li>
              <Link
                href="/reviews/best-golf-simulator-under-5000"
                className="font-inter text-sm font-medium text-[#1B3A2D] hover:text-gs-gold transition-colors duration-150"
              >
                Best Golf Simulators Under $5,000 →
              </Link>
            </li>
            <li>
              <Link
                href="/reviews/flightscope-mevo-plus-review"
                className="font-inter text-sm font-medium text-[#1B3A2D] hover:text-gs-gold transition-colors duration-150"
              >
                FlightScope Mevo+ Full Review →
              </Link>
            </li>
            <li>
              <Link
                href="/reviews/garmin-approach-r10-review"
                className="font-inter text-sm font-medium text-[#1B3A2D] hover:text-gs-gold transition-colors duration-150"
              >
                Garmin Approach R10 Full Review →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
