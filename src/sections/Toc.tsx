const ENTRIES = [
  { page: '03', title: 'Letter from the Editor', blurb: 'From Kraig (don’t bother me) — but do read' },
  { page: '04', title: 'Truckstop Diaries: The Homosexual Kraigonicles', blurb: 'Krugula, pink chiffon, rates, BLAM.' },
  { page: '08', title: 'House-Dress Haute Cave', blurb: 'Mumu runway energy, underground & underdressed' },
  { page: '12', title: 'Mini-Kraig Collectibles Catalog', blurb: 'STL to Sculpteo to your thirsty shelf' },
  { page: '16', title: 'Sports: Bills Cheer + Top Gay Flight School', blurb: 'Pom-poms, cardboard wings, FF roast desk' },
  { page: '18', title: 'Fake Ads & Classifieds', blurb: 'Call boys, vinyl, faces for sale, Wassagoinon' },
  { page: '20', title: 'Ask Krugula + Star Signs', blurb: 'Advice you didn’t ask for (and shouldn’t follow)' },
  { page: '22', title: 'Centerfold Spreads', blurb: 'Scooter poster + figurine fever dreams' },
  { page: '24', title: 'TV Guide: Adventures of Kraig the Man-Child', blurb: 'Pancakes. Interviews. Mess. BLAM.' },
]

export default function Toc() {
  return (
    <section id="toc" className="spread toc">
      <div className="spread-inner">
        <div className="dept-rule">
          <p className="kicker">This Issue</p>
          <span className="dept-label">Contents</span>
        </div>
        <h2 className="h-display toc-title">Contents</h2>
        <p className="byline">Vol. 69 · Issue 1 · Summer Swelter · <em>Flip. Laugh. Whisper.</em></p>
        <p className="toc-intro">
          Writer <em>and</em> subject. Roast <em>and</em> roastée. One man, many house dresses,
          infinite truckstop lore, zero second acts. Flip. Laugh. Whisper{' '}
          <strong>Wassagoinon?</strong>
        </p>
        <ol className="toc-list">
          {ENTRIES.map((e) => (
            <li key={e.page}>
              <span className="toc-page">{e.page}</span>
              <div className="toc-dots" aria-hidden="true" />
              <div>
                <strong className="toc-name">{e.title}</strong>
                <span className="toc-blurb">{e.blurb}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="jump-line">Letter from the Editor begins → Page 03</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>TABLE OF CONTENTS</span>
        </p>
      </div>
      <style>{`
        .toc { background: var(--cream); color: var(--ink); }
        .toc-title { font-size: clamp(3.5rem, 10vw, 7rem); margin: 0.1rem 0 0; }
        .toc-intro { max-width: 38rem; margin-bottom: 1.5rem; font-size: 1.1rem; }
        .toc-list { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
        .toc-list li {
          display: grid; grid-template-columns: 3.5rem 1fr auto; gap: 0.65rem; align-items: baseline;
          border-bottom: 1.5px dotted #1a121055; padding-bottom: 0.55rem;
        }
        .toc-list li > div:last-child { grid-column: 2 / -1; }
        .toc-page { font-family: var(--display); font-size: 1.6rem; color: var(--hot); }
        .toc-dots { display: none; }
        .toc-name { font-family: var(--serif); font-size: 1.25rem; display: block; }
        .toc-blurb { font-size: 0.95rem; color: var(--smoke); }
        @media (max-width: 800px) {
          .toc-list li { grid-template-columns: 3rem 1fr; }
        }
      `}</style>
    </section>
  )
}
