const EPISODES = [
  {
    ep: 'S1E01',
    title: 'Pancake Jurisdiction',
    syn: 'Kraig wakes in a bedroom that lost a war with laundry and won a war with shame. Mom’s pancakes appear like a side quest he absolutely fails upward. He accepts. Character development: delayed. Horny subplot: implied by the house dress on the floor.',
  },
  {
    ep: 'S1E02',
    title: 'The Interview That Interviewed Back',
    syn: 'Job interview fails in three acts: handshake, honesty, house-dress anecdote that somehow becomes a rate card. Recruiter says Wassagoinon? Kraig says Fin. Cold open: mesh hat in the parking lot. Cut to: BLAM.',
  },
  {
    ep: 'S1E03',
    title: 'Man-Child vs. The Vacuum',
    syn: 'Domestic machine wins. Kraig retreats to Mini Kraig painting his kraigasterpiece in residual chiffon. Cold open: chicken costume flashback that HR will never unsee. Guest star: Happy Baby Kraig, emotional support resin.',
  },
  {
    ep: 'S1E04',
    title: 'Architecture o’Clock',
    syn: 'Inbox floods with Daily AI Architecture Stuff. Signature fires automatically: From Kraig (don’t bother me). Cut to truckstop cold open, pink chiffon, sticky stool. To be continued (maybe). Tag: Deh time to make Dah money.',
  },
]

export default function BackMatter() {
  return (
    <section id="back" className="spread back">
      <div className="spread-inner">
        <div className="dept-rule">
          <p className="kicker">Back Page · TV Guide Satire · Colophon</p>
          <span className="dept-label">Back</span>
        </div>
        <h2 className="h-display back-title">Adventures of Kraig the Man-Child</h2>
        <p className="byline">KQ Network listings · <em>Tonight’s lineup</em></p>
        <p className="back-dek">
          Tonight’s lineup on <strong>KQ Network</strong> — a sitcom that thinks it’s a prestige
          drama, dresses like a truckstop memoir, and ends every act with BLAM.
        </p>

        <div className="tv-listings">
          {EPISODES.map((e) => (
            <article key={e.ep} className="ep">
              <span className="ep-num">{e.ep}</span>
              <div>
                <h3 className="h-serif">{e.title}</h3>
                <p>{e.syn}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid-2 colophon-grid">
          <div className="img-frame final-img">
            <img
              src="/ingredients/mini-kraig-soldier-trench.jpeg"
              alt="Mini Kraig trench — closing shot"
            />
            <p className="caption-bar">Closing shot · Mini Kraig, Trench Campaign · Series 1</p>
          </div>
          <div className="colophon">
            <h3 className="h-display">Colophon</h3>
            <p>
              <strong>KQ Magazine (Kraig Quarterly)</strong> is an affectionate NSFW roast printed
              in pixels and sealed with a wink. All phone numbers, P.O. boxes, and law firms herein
              are fake (1-800-555 energy only). Catchphrases are real enough. Lore adapted from the
              Homosexual Kraigonicles, Mini Kraig histories, Kraigtanamo Bay production notes, and
              emails signed with love and a boundary.
            </p>
            <p className="closing">
              Thanks for flipping. Now go forth — sashay, cheer, print a tiny self, negotiate rates
              with the universe, and if anyone asks:
            </p>
            <p className="big-catch">WASSAGOINON?</p>
            <p className="signoff">From Kraig (don’t bother me)</p>
          </div>
        </div>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>24 · THE END (BLAM.)</span>
        </p>
      </div>
      <style>{`
        .back { background: var(--cream); }
        .back-title { font-size: clamp(2.2rem, 6vw, 4rem); color: var(--navy); }
        .back-dek { margin: 0 0 1.25rem; max-width: 42rem; }
        .tv-listings { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.75rem; }
        .ep {
          display: grid; grid-template-columns: 4.5rem 1fr; gap: 0.85rem;
          background: white; border: 2px solid var(--ink); padding: 0.75rem 1rem;
        }
        .ep-num { font-family: var(--display); color: var(--hot); font-size: 1.1rem; }
        .ep h3 { font-size: 1.15rem; margin-bottom: 0.25rem; }
        .ep p { font-size: 0.92rem; color: var(--smoke); }
        .final-img {
          aspect-ratio: 1; max-height: 320px;
          display: flex; flex-direction: column;
        }
        .final-img img { flex: 1; min-height: 0; }
        .colophon h3 { font-size: 1.8rem; color: var(--truck); margin-bottom: 0.6rem; }
        .colophon p { margin-bottom: 0.75rem; font-size: 0.98rem; }
        .closing { font-style: italic; }
        .big-catch {
          font-family: var(--display) !important;
          font-size: clamp(2.5rem, 8vw, 4.5rem) !important;
          color: var(--hot); letter-spacing: 0.06em; line-height: 1;
        }
        .signoff { font-family: var(--typewriter); color: var(--navy); }
        @media (max-width: 800px) {
          .final-img { max-height: 260px; }
        }
      `}</style>
    </section>
  )
}
