export default function FakeAds() {
  return (
    <section id="ads" className="spread ads">
      <div className="spread-inner">
        <div className="dept-rule">
          <p className="kicker">Marketplace · Satire · No Real Digits</p>
          <span className="dept-label">Classifieds</span>
        </div>
        <h2 className="h-display ads-title">Ads &amp; Classifieds</h2>
        <p className="byline">
          Tabloid rates · ALL CAPS optional · <em>Call 1-800-555-FAKE only</em>
        </p>

        <div className="ads-grid">
          <article className="ad big ad-border">
            <p className="ad-brand">KRUGULA AFTER DARK</p>
            <h3>TRUCKSTOP CONCIERGE (FICTIONAL)</h3>
            <p>
              Chiffon consultations. Rate negotiations with the universe. Face included; second act
              sold separately. Ask for Krugula — if she says BLAM, the appointment is over and your
              dignity is a tip. Write care of KQ Magazine, Box NEVER-REAL.
            </p>
            <p className="ad-phone">CALL 1-800-555-0142</p>
            <p className="ad-fine">Not a real service. Not a real box. Very real vibe. Very sticky stool.</p>
          </article>

          <article className="ad ad-border">
            <h3>SCULPTEO SURVIVORS CLUB</h3>
            <p>
              Did your Mini Kraig arrive slightly warpy and emotionally available? Ours too. Trade
              war stories, paint tips, and which SKU looks hottest from the left. Reference code:
              KRAIGASTERPIECE.
            </p>
            <p className="ad-phone">1-800-555-0199</p>
          </article>

          <article className="ad ad-border">
            <h3>WANTED: MESH HATS</h3>
            <p>
              For artistic research into “Deh time to make Dah money.” Condition: lived-in, diesel-
              kissed, preferably worn by someone who once whispered Wassagoinon? Payment: one
              shoulder figurine stare and a free insult.
            </p>
            <p className="ad-phone">1-555-019-MESH</p>
          </article>

          <article className="ad ad-border">
            <h3>SNAZZY LAW</h3>
            <p>
              Vinyl counsel for tiny clients and giant egos. Specializing in catchphrase disputes,
              cheer uniform IP, and “was that consent or was that BLAM?” Retainer: a wink. Office:
              imaginary. Verdicts: camp.
            </p>
            <p className="ad-phone">1-800-555-LAWW</p>
          </article>

          <article className="ad ad-border">
            <h3>PERSONALS</h3>
            <p>
              SWM seeks humidity, neon, and someone who answers <em>Wassagoinon?</em> correctly on
              the first try — preferably while undoing a zipper. Must tolerate Daily AI Architecture
              Stuff emails and house-dress laundry. No architects who bother. Call boys who tip in
              catchphrases encouraged.
            </p>
            <p className="ad-phone">BOX 555-WQ</p>
          </article>

          <article className="ad ad-border">
            <h3>LOST &amp; FOUND</h3>
            <p>
              LOST: second act of The Homosexual Kraigonicles. LAST SEEN: leaving the bar after
              BLAM, trailing pink chiffon and bad decisions. REWARD: R. Smellsburg’s respect and
              J. Whassagoinon’s unfinished business.
            </p>
            <p className="ad-phone">1-800-555-BLAM</p>
          </article>

          <article className="ad ad-border">
            <h3>KRAIGTANAMO BAY TIMESHARES</h3>
            <p>
              Own a week in the Blue Mini Kraig cinematic universe. Includes trench coat, soft
              interrogation lighting, and a complimentary “Happy Baby Kraig” bath bomb. No escapes.
              Escapes are for cowards.
            </p>
            <p className="ad-phone">1-800-555-0187</p>
          </article>

          <article className="ad ad-border">
            <h3>FOR SALE: ONE FACE (USED)</h3>
            <p>
              Gently worn pink chiffon face. Slightly sticky from neon. Comes with mumu instructions
              and a note reading From Kraig (don’t bother me). Buyer must pick up at the truck stop
              after midnight. No lowballs — I know what I’ve got.
            </p>
            <p className="ad-phone">1-800-555-0169</p>
          </article>
        </div>
        <p className="jump-line">Ask Krugula answers next → Page 20</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>18–19 · CLASSIFIEDS</span>
        </p>
      </div>
      <style>{`
        .ads { background: #ebe4d8; }
        .ads-title { font-size: clamp(2.8rem, 8vw, 5rem); }
        .ads-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        .ad {
          padding: 1rem 1.05rem 0.95rem;
          font-size: 0.9rem;
        }
        .ad.big {
          grid-column: span 2;
          background: var(--ink) !important;
          color: var(--cream);
          border-color: var(--ink);
        }
        .ad.big::before { border-color: rgba(255,248,238,0.35); }
        .ad-brand {
          font-family: var(--display); letter-spacing: 0.22em;
          color: var(--hot); font-size: 0.8rem;
          border-bottom: 1.5px dotted currentColor; padding-bottom: 0.3rem; margin-bottom: 0.35rem;
        }
        .ad h3 {
          font-family: var(--display);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 1.15rem;
          margin: 0.25rem 0 0.45rem;
          line-height: 1.1;
        }
        .ad p { line-height: 1.45; }
        .ad-fine {
          font-family: var(--typewriter); font-size: 0.72rem;
          opacity: 0.7; margin-top: 0.45rem;
        }
        .ad .ad-phone { margin-top: 0.55rem; }
        .ad.big .ad-phone { color: var(--gold); }
        @media (max-width: 800px) {
          .ads-grid { grid-template-columns: 1fr; }
          .ad.big { grid-column: span 1; }
        }
      `}</style>
    </section>
  )
}
