const ITEMS = [
  {
    img: '/ingredients/mini-kraig-soldier-trench.jpeg',
    name: 'Mini Kraig: Trench Campaign',
    sku: 'MK-01',
    price: '$29',
    blurb:
      'Soldier chic in a coat that means business and possibly war crimes of fashion. From the “Blue Mini Kraig at Kraigtanamo Bay” cinematic universe. Poseable attitude, non-poseable morals, suspiciously kissable resin.',
    featured: false,
  },
  {
    img: '/ingredients/shoulder-figurine-wassagoinon.jpeg',
    name: 'Shoulder Wassagoinon',
    sku: 'MK-02',
    price: '$24',
    blurb:
      'Perches on your conscience (and your collar bone) and asks the eternal question like a slutty parrot. Limited run after the Sculpteo upload that nearly melted the servers (and our patience). Whispers optional. Judgment included.',
    featured: false,
  },
  {
    img: '/ingredients/snazzy-law-vinyl.jpeg',
    name: 'SNAZZY Law Vinyl',
    sku: 'MK-03',
    price: '$39',
    blurb:
      'When Mini Kraig lawyered up and somehow got hotter. Soft vinyl, hard opinions, softer objections. Pairs with “Mini Kraig painting his kraigasterpiece” for the full gallery wall of tiny self-obsession. Featured SKU of Series 1.',
    featured: true,
  },
]

export default function MiniKraigCatalog() {
  return (
    <section id="minis" className="spread minis">
      <div className="spread-inner">
        <div className="dept-rule">
          <p className="kicker">Collectibles · STL History · Shelf Gods</p>
          <span className="dept-label">Catalog</span>
        </div>
        <h2 className="h-display minis-title">Mini-Kraig Catalog</h2>
        <p className="byline">
          Series 1 · Print Bay Provenance · <em>As filed by Mini Kraig (painted)</em>
        </p>
        <p className="minis-dek">
          Once upon a print farm: STL files, a Sculpteo upload, and a man who filmed{' '}
          <em>Mini Kraig painting his kraigasterpiece</em>, <em>Happy baby kraig</em>, and the
          unforgettable <em>Kraig as a chicken</em> (cluckable, regrettable, iconic). Now the
          miniatures have unionized, unionized horny, and demanded better lighting.
        </p>

        <p className="series-banner">
          <span className="series-chip">SERIES 1</span>
          Limited shelf gods · STL-native · Vinyl &amp; resin · Not sold in stores that ask questions
        </p>

        <div className="grid-3 minis-grid">
          {ITEMS.map((item) => (
            <article key={item.sku} className={`mini-card${item.featured ? ' featured' : ''}`}>
              {item.featured && <p className="featured-ribbon">FEATURED SKU</p>}
              <div className="img-frame mini-img">
                <span className="price-sticker">{item.price}</span>
                <img src={item.img} alt={item.name} />
                <p className="caption-bar">{item.sku} · SERIES 1</p>
              </div>
              <p className="mini-sku">
                <span className="series-chip">SERIES 1</span>
                {item.sku}
              </p>
              <h3 className="h-serif">{item.name}</h3>
              <p>{item.blurb}</p>
              <p className="stl-callout">STL ORIGIN · SCULPTEO BAPTIZED</p>
              <p className="mini-price">Est. value: one knowing wink · MSRP {item.price}</p>
            </article>
          ))}
        </div>

        <aside className="mini-history">
          <h4 className="h-display">Field Notes from the Print Bay</h4>
          <p>
            Provenance matters, darlings. Early Mini Kraigs were born in STL, baptized on Sculpteo,
            and documented in home videos that somehow make tiny resin look like prestige TV and a
            softcore biopic. If your unit arrived without a catchphrase, shout{' '}
            <strong>Wassagoinon?</strong> at it until it complies — or until the neighbors call
            SNAZZY Law. Do not bother the architect. Happy Baby Kraig remains the emotional support
            SKU. Kraig-as-a-chicken remains undefeated. SNAZZY Law vinyl retains counsel even off
            the shelf, and especially after midnight.
          </p>
        </aside>
        <p className="jump-line">Continued in Centerfolds → Soft Vinyl Counsel</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>12–15 · MINI-KRAIG · SERIES 1</span>
        </p>
      </div>
      <style>{`
        .minis { background: #f0ebe3; }
        .minis-title { font-size: clamp(2.8rem, 8vw, 5.5rem); color: var(--navy); }
        .minis-dek { max-width: 46rem; margin: 0 0 1rem; font-size: 1.05rem; }
        .series-banner {
          font-family: var(--typewriter); font-size: 0.85rem;
          background: #fff; border: 2px solid var(--ink);
          padding: 0.55rem 0.85rem; margin-bottom: 1.25rem;
          display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem;
        }
        .mini-card {
          background: white; border: 2px solid var(--ink); padding: 0.75rem 0.75rem 1rem;
          display: flex; flex-direction: column; gap: 0.35rem;
          box-shadow: 4px 4px 0 #1e2a4a33;
          position: relative;
        }
        .mini-card.featured {
          border-color: var(--gold);
          border-width: 3px;
          box-shadow: 6px 6px 0 #d4a01766;
          background: linear-gradient(180deg, #fffef5 0%, #fff 40%);
        }
        .featured-ribbon {
          font-family: var(--display); letter-spacing: 0.16em; font-size: 0.72rem;
          background: var(--gold); color: var(--ink); text-align: center;
          margin: -0.75rem -0.75rem 0.5rem; padding: 0.3rem;
        }
        .mini-img {
          aspect-ratio: 1; border-width: 2px; box-shadow: none;
          display: flex; flex-direction: column; position: relative;
        }
        .mini-img img { flex: 1; min-height: 0; }
        .mini-sku {
          font-family: var(--display); letter-spacing: 0.12em;
          color: var(--hot); font-size: 0.85rem;
          display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;
        }
        .mini-card h3 { font-size: 1.25rem; }
        .mini-card > p { font-size: 0.92rem; color: var(--smoke); }
        .mini-price {
          font-family: var(--typewriter); color: var(--ink) !important;
          margin-top: 0.35rem; font-size: 0.85rem !important;
        }
        .mini-history {
          margin-top: 1.5rem; background: var(--navy); color: var(--cream);
          padding: 1.1rem 1.35rem; border-left: 6px solid var(--gold);
        }
        .mini-history h4 { color: var(--gold); font-size: 1.35rem; margin-bottom: 0.4rem; }
        @media (max-width: 800px) {
          .minis-grid { gap: 1.25rem; }
        }
      `}</style>
    </section>
  )
}
