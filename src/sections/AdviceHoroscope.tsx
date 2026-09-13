const SIGNS = [
  { sign: 'Aries', line: 'Charge the bar like Krugula. Tip in catchphrases. Leave with someone’s dignity.' },
  { sign: 'Taurus', line: 'Invest in chiffon. Short the second act. Long the sticky stool.' },
  { sign: 'Gemini', line: 'You contain Kraig and Krugula. Schedule both. Do not let them share a zipper.' },
  { sign: 'Cancer', line: 'Home is a cave with good pink lighting and bad decisions drying on the line.' },
  { sign: 'Leo', line: 'Main-character energy approved. Soften the roar with a mumu and a filthy wink.' },
  { sign: 'Virgo', line: 'Organize your STL files. Label the chicken costume. Alphabetize your sins.' },
  { sign: 'Libra', line: 'Balance truckstop glam with Daily AI Architecture Stuff. Tip the scale toward glam.' },
  { sign: 'Scorpio', line: 'Someone wants to do you wrong. Say hi to J. Whassagoinon. Bring lube and receipts.' },
  { sign: 'Sagittarius', line: 'Travel: one truck stop further than last quarter. Pack the face. Leave the shame.' },
  { sign: 'Capricorn', line: 'Climb the corporate ladder in cheer shoes. Weirdly effective. HR is watching (and into it).' },
  { sign: 'Aquarius', line: 'Invent a new alias. Trademark the sashay. Monetize the hip check.' },
  { sign: 'Pisces', line: 'Dream in BLAM. Wake in house dress. Hydrate. Then sin again.' },
]

export default function AdviceHoroscope() {
  return (
    <section id="advice" className="spread advice">
      <div className="spread-inner">
        <div className="dept-rule">
          <p className="kicker">Counsel · Cosmic · Unlicensed</p>
          <span className="dept-label">Advice</span>
        </div>
        <div className="grid-2 advice-top">
          <div>
            <h2 className="h-display advice-title">Ask Krugula</h2>
            <p className="byline">Letters we invented · <em>Answers we stand by</em></p>
            <div className="qna">
              <p className="q">
                <strong>Q:</strong> I tried writing my memoir and it ended on page one with an
                explosion sound. Am I okay?
              </p>
              <p className="a">
                <strong>A:</strong> You’re literary, baby. R. Smellsburg couldn’t put you down; that
                man has standards and a suspicious name. Leave the second act lost — scarcity is
                sexy, and so is an abrupt climax. If readers complain, refer them to J. Whassagoinon
                at <em>Dehveloping Ideas</em>. He’ll do them wrong for free.
              </p>
              <p className="q">
                <strong>Q:</strong> My coworkers keep emailing about system diagrams.
              </p>
              <p className="a">
                <strong>A:</strong> Reply once: <em>From Kraig (don’t bother me)</em>. Then go
                paint a Mini Kraig kraigasterpiece in the nude if the lighting’s good. Architecture
                can wait; chiffon cannot. Neither can your thighs.
              </p>
              <p className="q">
                <strong>Q:</strong> Is “Kraig Ashley The Transvestite” a brand or a warning label?
              </p>
              <p className="a">
                <strong>A:</strong> Yes. Wear it on the spine of the magazine, on the back of the
                cheer top, and on the sticky note you leave on a stranger’s pillow. Wassagoinon?
              </p>
              <p className="q">
                <strong>Q:</strong> A mesh-hat romantic offered cash, beef jerky, and “forever.” Do
                I take the deal?
              </p>
              <p className="a">
                <strong>A:</strong> Take the cash. Eat the jerky. Translate “forever” as “until
                BLAM.” Anything longer requires SNAZZY Law vinyl counsel and a house dress with
                pockets for the exit money. Deh time to make Dah money — not Dah mortgage.
              </p>
            </div>
          </div>
          <div className="stars-panel">
            <h2 className="h-display stars-title">Star Signs</h2>
            <p className="stars-dek">As interpreted by a man-child with excellent taste.</p>
            <ul className="stars">
              {SIGNS.map((s) => (
                <li key={s.sign}>
                  <strong>{s.sign}</strong> — {s.line}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="jump-line">Centerfold Spreads → Tear-out energy, page 22</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>20–21 · ADVICE</span>
        </p>
      </div>
      <style>{`
        .advice { background: #fff5f8; }
        .advice-title, .stars-title { font-size: clamp(2.4rem, 6vw, 4rem); color: var(--hot); }
        .stars-title { color: var(--navy); }
        .stars-dek { font-family: var(--typewriter); margin-bottom: 0.85rem; color: var(--smoke); }
        .stars-panel {
          background: #fff; border: 2px solid var(--ink);
          padding: 1rem 1.15rem; box-shadow: 4px 4px 0 #ff2d6a33;
        }
        .qna .q {
          margin-top: 1rem; font-size: 1.02rem;
          border-top: 1.5px dotted #1a121033; padding-top: 0.75rem;
        }
        .qna .q:first-child { border-top: none; padding-top: 0; margin-top: 0.35rem; }
        .qna .a { margin: 0.35rem 0 0.75rem; color: var(--smoke); }
        .stars { list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.9rem; }
        .stars li {
          border-bottom: 1px dotted #1a121022; padding-bottom: 0.35rem;
        }
        .stars strong { font-family: var(--display); letter-spacing: 0.06em; color: var(--hot); }
      `}</style>
    </section>
  )
}
