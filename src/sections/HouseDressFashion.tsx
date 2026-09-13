export default function HouseDressFashion() {
  return (
    <section id="fashion" className="spread fashion">
      <div className="spread-inner">
        <div className="dept-rule fashion-dept">
          <p className="kicker">Fashion · Cave Couture</p>
          <span className="dept-label">Style</span>
        </div>
        <h2 className="h-display fashion-title">House-Dress Haute</h2>
        <p className="byline fashion-by">
          Look book · Grotto edition · <em>Styled by Krugula</em>
        </p>
        <p className="fashion-dek">
          When the lighting is geological and the silhouette is suburban grandma meets midnight
          siren — that’s not a costume. That’s the uniform of a call boy who clocks in with chiffon
          and clocks out with BLAM.
        </p>

        <div className="grid-2 fashion-grid">
          <div className="img-frame fashion-img">
            <img
              src="/ingredients/pink-house-dress-cave.jpeg"
              alt="Pink house dress in a cave — peak Krugula"
            />
            <p className="caption-bar">LOOK 01 · Cave Mumu · Shot on location (legally a liminal grotto)</p>
          </div>
          <div className="fashion-copy">
            <span className="badge">LOOK 01 · CAVE MUMU</span>
            <h3 className="h-serif">The Pink House Dress Doctrine</h3>
            <div className="columns-2 fashion-cols">
              <p>
                Stylists will tell you “statement piece.” Krugula will tell you “business attire —
                and the business is you.” This blush house dress — soft enough to nap in, loud
                enough to get a CB handle, slutty enough to close a rate card — is the spiritual
                successor to the face-pink chiffon mumu from the Homosexual Kraigonicles.
              </p>
              <p>
                Shot on location in what we are legally calling a “liminal grotto,” the look pairs
                truckstop call-boy energy with homemaker softness: equal parts casserole and carnal.
                Heels optional. Attitude mandatory. Panties: a rumor. If someone asks{' '}
                <em>Wassagoinon?</em>, you answer with a sashay that renegotiates the lease.
              </p>
              <p>
                Care instructions: machine wash cold with your dignity; tumble dry on sass; iron
                only if you’re trying to impress a long-haul romantic; never dry-clean the sins out
                — that’s the whole point.
              </p>
              <p>
                Available nowhere. Inspired by everything Kraig already owns and refuses to lend.
                Knockoffs will be mocked in the next issue’s classifieds and possibly sued by SNAZZY
                Law (vinyl).
              </p>
            </div>
            <blockquote className="pull-quote">
              “If the cave didn’t exist, the dress would invent one — then charge admission by the
              hour.”
            </blockquote>
          </div>
        </div>
        <p className="jump-line fashion-jump">Mini-Kraig Catalog → Series 1 opens page 12</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>08–11 · FASHION</span>
        </p>
      </div>
      <style>{`
        .fashion { background: #1a1020; color: var(--cream); }
        .fashion .kicker { color: var(--blush); }
        .fashion-dept { border-bottom-color: #ff8fb066; }
        .fashion .dept-label { background: #ff8fb0; color: #1a1020; }
        .fashion-title { font-size: clamp(3rem, 9vw, 6rem); color: #ff8fb0; }
        .fashion-by { color: #ffc0d0aa; }
        .fashion-by em { color: #ff8fb0; }
        .fashion-dek { max-width: 40rem; margin: 0 0 1.5rem; opacity: 0.9; font-size: 1.1rem; }
        .fashion-img {
          aspect-ratio: 3/4; max-height: 68vh; border-color: #ff8fb0;
          box-shadow: 8px 8px 0 #ff2d6a66;
          display: flex; flex-direction: column;
        }
        .fashion-img img { flex: 1; min-height: 0; }
        .fashion-img .caption-bar { background: #2a1520; border-top-color: #ff8fb0; color: #ffc0d0; }
        .fashion-copy h3 { font-size: 1.8rem; margin: 0.75rem 0 1rem; }
        .fashion-cols { color: #f0e4dc; }
        .fashion-cols p { break-inside: avoid; }
        .fashion .pull-quote { color: #ffc0d0; border-color: #ff8fb0; }
        .fashion .page-num { color: #ffffff66; border-top-color: #ffffff22; }
        .fashion-jump { color: #ff8fb088; border-top-color: #ff8fb044; }
        @media (max-width: 800px) {
          .fashion-img { max-height: 42vh; }
        }
      `}</style>
    </section>
  )
}
