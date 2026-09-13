export default function TruckstopDiaries() {
  return (
    <section id="truckstop" className="spread truck">
      <div className="spread-inner">
        <div className="dept-rule">
          <p className="kicker">Feature · Fiction-ish · Nonfiction-adjacent</p>
          <span className="dept-label">Feature</span>
        </div>
        <h2 className="h-display truck-title">Truckstop Diaries</h2>
        <h3 className="h-serif truck-sub">The Homosexual Kraigonicles</h3>
        <p className="byline">As told by Krugula · Annotated by Kraig · <em>BLAM. optional</em></p>

        <div className="grid-2 truck-grid">
          <article className="truck-story">
            <p className="dropcap">
              Late one afternoon in a sweltering summer, Kraig decided to become Krugula and go to
              the truck stop — not for gas, not for beef jerky, but for the ancient and honorable
              craft of being a call boy in a house dress. The mission statement was short, sticky,
              and economically sound:{' '}
              <em>“Deh time to make Dah money.”</em>
            </p>
            <p>
              As she slipped into her face — yes, the face comes on like a second shift, pink chiffon
              cheekbones catching neon like a tip jar — and into a pink chiffon mumu that whispered
              filthy secrets to the humid air, Krugula sashayed into the bar like the last good idea
              at closing time. Someone muttered <em>Wassagoinon?</em> and she answered with a hip
              check that registered on the Richter scale.
            </p>
            <p>
              The neon buzzed. Someone’s CB radio coughed a prayer. A man in a mesh hat looked up
              like he’d just remembered a sin he’d paid for twice. Krugula arranged herself on a
              stool that had seen things, ordered something pink and sticky, hiked the mumu just
              enough to negotiate rates with the universe, and waited for destiny — or diesel —
              to buy her a drink.
            </p>
            <p>
              Rates were discussed. Eyes wandered. The chiffon did overtime. A long-haul romantic
              asked if the face was included. Krugula smiled the way accountants smile at loopholes.
            </p>
            <p className="blam">And then — BLAM.</p>
            <p>
              Fin.
            </p>
            <p className="annot">
              <strong>Editor’s note:</strong> The original manuscript ends there. Literary scholars
              (us) agree the abruptness is the point. Life at the truck stop is a short story with
              no second act — just chiffon, heat, horny economics, and the sudden punctuation of
              fate. Extended cuts may appear if Krugula ever bothers to write them between clients.
              Do not email. Sign-off applies. From Kraig (don’t bother me).
            </p>
          </article>

          <aside className="truck-side">
            <blockquote className="blurb-card">
              <p>“I couldn’t put it down!”</p>
              <cite>— R. Smellsburg, <em>National Post</em></cite>
            </blockquote>
            <blockquote className="blurb-card alt">
              <p>“I personally wanted to do him wrong!”</p>
              <cite>— J. Whassagoinon, <em>Dehveloping Ideas</em></cite>
            </blockquote>
            <div className="glossary">
              <h4 className="h-display">Krugula Glossary</h4>
              <dl>
                <dt>Deh / Dah</dt>
                <dd>Dialect of intention. Money-adjacent. Horny-adjacent. Same vibe.</dd>
                <dt>Face pink chiffon mumu</dt>
                <dd>Business casual for call-boy couture. Soft fabric, hard rates.</dd>
                <dt>Wassagoinon?</dt>
                <dd>Greeting, threat, thesis statement, and occasionally a safe word.</dd>
                <dt>BLAM.</dt>
                <dd>Plot. Climax. Also: ending. Do not ask for Act Two.</dd>
                <dt>Mesh hat romantic</dt>
                <dd>Patron of the arts. Pays in cash and poor decisions.</dd>
              </dl>
            </div>
          </aside>
        </div>
        <p className="jump-line">House-Dress Haute Cave Couture → Page 08</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>04–07 · TRUCKSTOP DIARIES</span>
        </p>
      </div>
      <style>{`
        .truck {
          background:
            linear-gradient(180deg, #f3e6d4 0%, #e8d5bc 100%);
        }
        .truck-title { font-size: clamp(3rem, 9vw, 6rem); color: var(--truck); }
        .truck-sub { font-size: clamp(1.4rem, 3vw, 2.1rem); margin: 0.2rem 0 0.15rem; }
        .truck-story p { margin-bottom: 1rem; font-size: 1.08rem; }
        .blam {
          font-family: var(--display) !important;
          font-size: 3rem !important;
          letter-spacing: 0.08em;
          color: var(--hot);
          text-align: center;
          margin: 1.5rem 0 !important;
        }
        .annot {
          font-size: 0.92rem !important;
          background: #fff8; padding: 1rem; border-left: 4px solid var(--navy);
        }
        .blurb-card {
          background: var(--ink); color: var(--cream); padding: 1.25rem;
          margin-bottom: 1rem; box-shadow: 5px 5px 0 var(--hot);
        }
        .blurb-card.alt { box-shadow: 5px 5px 0 var(--gold); }
        .blurb-card p { font-family: var(--serif); font-style: italic; font-size: 1.35rem; margin-bottom: 0.6rem; }
        .blurb-card cite { font-family: var(--typewriter); font-size: 0.85rem; font-style: normal; opacity: 0.85; }
        .glossary {
          background: white; border: 2px solid var(--ink); padding: 1.1rem 1.25rem;
        }
        .glossary h4 { font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--truck); }
        .glossary dt { font-family: var(--display); letter-spacing: 0.06em; color: var(--hot); margin-top: 0.55rem; }
        .glossary dd { font-size: 0.92rem; color: var(--smoke); }
      `}</style>
    </section>
  )
}
