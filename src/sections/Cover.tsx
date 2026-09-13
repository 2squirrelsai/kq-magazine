export default function Cover() {
  return (
    <section id="cover" className="spread cover">
      <div className="spread-inner cover-inner">
        <header className="cover-top">
          <p className="kicker">Vol. 69 · Issue 1 · Summer Swelter Edition</p>
          <p className="cover-price">$6.9 U.S. / FREE at the truck stop if you wink</p>
        </header>

        <div className="cover-mast">
          <div className="nsfw-seal" aria-label="NSFW seal">
            <span>NSFW</span>
            <small>ROFLMAO</small>
          </div>
          <h1 className="h-display cover-title">
            KQ
            <span className="cover-sub">Magazine</span>
          </h1>
          <p className="cover-tagline h-serif">Kraig Quarterly</p>
          <p className="cover-aka">a.k.a. Kraig Ashley The Transvestite Presents</p>
        </div>

        <div className="cover-hero">
          <div className="img-frame cover-img">
            <img
              src="/ingredients/pink-house-dress-cave.jpeg"
              alt="Kraig in pink house dress, cavernous vibes"
            />
            <p className="caption-bar">COVER · Cave Couture Exclusive · Pink House Dress Doctrine</p>
          </div>
          <div className="cover-lines">
            <p className="cover-line hot">“DEH TIME TO MAKE DAH MONEY”</p>
            <p className="cover-line">Krugula Goes Truckstop (Again)</p>
            <p className="cover-line">Mini-Kraig Collectibles Inside!</p>
            <p className="cover-line">Bills Cheer + Top Gay Flight School</p>
            <p className="cover-line whisper">Plus: Daily AI Architecture Stuff (don’t bother him) · Homosexual Kraigonicles · BLAM.</p>
            <div className="barcode" aria-hidden="true">
              <div className="bars">
                {Array.from({ length: 28 }, (_, i) => (
                  <span
                    key={i}
                    style={{
                      width: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
                      opacity: 0.95,
                    }}
                  />
                ))}
              </div>
              <p className="barcode-num">0 69069 42069 1</p>
            </div>
          </div>
        </div>

        <footer className="cover-foot">
          <span>NSFW · ROFLMAO · AFFECTIONATE ROAST</span>
          <span>WASSAGOINON?</span>
        </footer>
      </div>
      <style>{`
        .cover {
          background:
            radial-gradient(ellipse at 20% 10%, #ff6b9a55, transparent 50%),
            radial-gradient(ellipse at 90% 80%, #d4a01733, transparent 45%),
            linear-gradient(165deg, #2a1520 0%, #1a1210 40%, #0d1a2a 100%);
          color: var(--cream);
        }
        .cover-inner { justify-content: space-between; gap: 0.75rem; }
        .cover-top {
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;
          opacity: 0.95; font-size: 0.85rem;
          border-bottom: 2px solid #ff2d6a66; padding-bottom: 0.55rem;
        }
        .cover-price { font-family: var(--typewriter); }
        .cover-mast { position: relative; padding-right: 5.5rem; }
        .cover-title {
          font-size: clamp(7rem, 26vw, 16rem);
          color: #fff;
          text-shadow:
            0 0 50px #ff2d6aaa,
            5px 5px 0 #ff2d6a,
            -2px -2px 0 #d4a01755;
          display: flex; flex-direction: column; align-items: flex-start;
          line-height: 0.85;
        }
        .cover-sub {
          font-size: 0.26em; letter-spacing: 0.42em; color: var(--gold);
          text-shadow: 2px 2px 0 #0008; margin-top: -0.08em;
        }
        .cover-tagline {
          font-size: clamp(1.6rem, 4.5vw, 2.75rem); color: var(--blush);
          margin-top: -0.15rem;
          text-shadow: 1px 1px 0 #0006;
        }
        .cover-aka {
          font-family: var(--typewriter); font-size: 0.95rem;
          opacity: 0.8; margin-bottom: 0.75rem;
        }
        .nsfw-seal {
          position: absolute; top: 0.2rem; right: 0;
          width: 5rem; height: 5rem;
          border-radius: 50%;
          border: 3px solid var(--hot);
          background: radial-gradient(circle at 40% 35%, #ff6b9a, #c01040 70%);
          color: #fff;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          font-family: var(--display); letter-spacing: 0.08em;
          box-shadow: 3px 3px 0 #0008, inset 0 0 0 2px #ffc0d088;
          transform: rotate(12deg);
          z-index: 4;
        }
        .nsfw-seal span { font-size: 1.35rem; line-height: 1; }
        .nsfw-seal small { font-size: 0.55rem; letter-spacing: 0.18em; opacity: 0.9; }
        .cover-hero {
          display: grid; grid-template-columns: 1.15fr 1fr; gap: 1.5rem; align-items: center;
        }
        .cover-img { max-height: 46vh; aspect-ratio: 3/4; display: flex; flex-direction: column; }
        .cover-img img { flex: 1; min-height: 0; object-position: center top; }
        .cover-lines { display: flex; flex-direction: column; gap: 0.55rem; }
        .cover-line {
          font-family: var(--display);
          font-size: clamp(1.15rem, 2.6vw, 1.9rem);
          letter-spacing: 0.06em;
          border-bottom: 2px solid #ff2d6a55;
          padding-bottom: 0.3rem;
        }
        .cover-line.hot { color: var(--hot); font-size: clamp(1.35rem, 3vw, 2.2rem); }
        .cover-line.whisper {
          font-family: var(--body); font-size: 0.92rem; letter-spacing: 0;
          text-transform: none; opacity: 0.8; border: none;
        }
        .barcode {
          margin-top: 0.85rem; align-self: flex-end;
          background: #fff; color: #111; padding: 0.4rem 0.55rem 0.3rem;
          border: 2px solid #111; width: fit-content;
          box-shadow: 3px 3px 0 #ff2d6a88;
        }
        .bars { display: flex; align-items: stretch; height: 2.2rem; gap: 1px; }
        .bars span { display: block; background: #111; height: 100%; }
        .barcode-num {
          font-family: var(--typewriter); font-size: 0.62rem;
          letter-spacing: 0.08em; text-align: center; margin-top: 0.15rem; color: #111;
        }
        .cover-foot {
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;
          font-family: var(--display); letter-spacing: 0.2em; font-size: 0.85rem;
          border-top: 2px solid #ffffff44; padding-top: 0.75rem; margin-top: 0.35rem;
        }
        @media (max-width: 800px) {
          .cover-hero { grid-template-columns: 1fr; }
          .cover-img { max-height: 34vh; }
          .cover-mast { padding-right: 4.5rem; }
          .nsfw-seal { width: 4.2rem; height: 4.2rem; }
          .nsfw-seal span { font-size: 1.1rem; }
          .cover-title { font-size: clamp(5.5rem, 28vw, 10rem); }
        }
      `}</style>
    </section>
  )
}
