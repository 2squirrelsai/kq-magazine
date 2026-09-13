export default function Centerfolds() {
  return (
    <section id="centerfolds" className="spread centers">
      <div className="spread-inner">
        <div className="dept-rule centers-dept">
          <p className="kicker">Visual Culture · Pin-ups · No Staples Required</p>
          <span className="dept-label">Pin-ups</span>
        </div>
        <h2 className="h-display centers-title">Centerfold Spreads</h2>
        <p className="byline centers-by">
          Locker-room wall art · <em>Hang these in your mind</em>
        </p>
        <p className="centers-dek">
          Tear-out energy for a browser that can’t tear. Hang these in your mind’s locker room —
          or on the sticky side of a truckstop stall. We won’t judge. Krugula might.
        </p>

        <div className="center-stack">
          <figure className="center-fig">
            <div className="img-frame center-img wide">
              <img
                src="/ingredients/top-gay-scooter-poster.jpeg"
                alt="Top Gay scooter poster parody starring Kraig"
              />
              <p className="caption-bar">POSTER PARODY · Top Gay Scooter · Mobility meets visibility</p>
            </div>
            <figcaption>
              <span className="badge">POSTER PARODY</span>
              <strong> Top Gay Scooter </strong>
              — Mobility meets visibility. Helmet hair optional; main-character posture required;
              thirst mandatory. Hang above the CB radio where the mesh-hat romantics can worship.
              Caption suggestion: <em>Deh time to make Dah commute — and Dah money.</em>
            </figcaption>
          </figure>

          <div className="grid-2 center-pair">
            <figure className="center-fig">
              <div className="img-frame center-img">
                <img
                  src="/ingredients/shoulder-figurine-wassagoinon.jpeg"
                  alt="Shoulder figurine — Wassagoinon"
                />
                <p className="caption-bar">Shoulder Angel (Unlicensed)</p>
              </div>
              <figcaption>
                <strong>Shoulder Angel (Unlicensed)</strong> — Whispers only one word and it’s a
                question. Sometimes it’s a proposition. Always it’s <em>Wassagoinon?</em>
              </figcaption>
            </figure>
            <figure className="center-fig">
              <div className="img-frame center-img">
                <img
                  src="/ingredients/snazzy-law-vinyl.jpeg"
                  alt="SNAZZY Law vinyl figure"
                />
                <p className="caption-bar">Counsel in Soft Vinyl · Featured SKU</p>
              </div>
              <figcaption>
                <strong>Counsel in Soft Vinyl</strong> — Objects when the outfit isn’t snazzy
                enough. Sustains when the outfit is criminal. Soft enough to squeeze. Hard enough
                to win.
              </figcaption>
            </figure>
          </div>
        </div>
        <p className="jump-line centers-jump">TV Guide &amp; Colophon → The End (BLAM.)</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>22–23 · CENTERFOLDS</span>
        </p>
      </div>
      <style>{`
        .centers { background: #120e18; color: var(--cream); }
        .centers .kicker { color: var(--gold); }
        .centers-dept { border-bottom-color: #d4a01766; }
        .centers .dept-label { background: var(--gold); color: #120e18; }
        .centers-title { font-size: clamp(2.6rem, 7vw, 5rem); color: #fff; }
        .centers-by { color: #d4a017aa; }
        .centers-by em { color: var(--gold); }
        .centers-dek { margin: 0 0 1.25rem; opacity: 0.85; max-width: 40rem; }
        .center-stack { display: flex; flex-direction: column; gap: 1.5rem; }
        .center-img {
          box-shadow: 8px 8px 0 #d4a01755; border-color: var(--gold);
          display: flex; flex-direction: column;
        }
        .center-img img { flex: 1; min-height: 0; }
        .center-img .caption-bar { background: #1a1520; border-top-color: var(--gold); color: #ffe08a; }
        .center-img.wide { aspect-ratio: 16/10; max-height: 48vh; }
        .center-img:not(.wide) { aspect-ratio: 1; }
        .center-fig figcaption {
          margin-top: 0.65rem; font-size: 0.95rem; color: #d8cfc4;
        }
        .centers .page-num { color: #ffffff55; border-top-color: #ffffff22; }
        .centers-jump { color: #d4a01788; border-top-color: #d4a01744; }
        @media (max-width: 800px) {
          .center-img.wide { max-height: 36vh; }
        }
      `}</style>
    </section>
  )
}
