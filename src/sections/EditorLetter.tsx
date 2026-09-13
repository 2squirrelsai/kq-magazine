export default function EditorLetter() {
  return (
    <section id="editor" className="spread editor">
      <div className="spread-inner">
        <div className="dept-rule">
          <p className="kicker">Masthead · Daily AI Architecture Stuff</p>
          <span className="dept-label">Editor</span>
        </div>
        <h2 className="h-serif editor-title">Letter from the Editor</h2>
        <p className="editor-from">From Kraig (don’t bother me)</p>
        <p className="byline">Page 03 · Opening note · <em>Signed in house-dress ink</em></p>

        <div className="grid-2 editor-grid">
          <div className="editor-body">
            <p className="dropcap">
              Darlings. Another quarter, another chiffon crisis, another inbox full of people who
              think “Daily AI Architecture Stuff” means I want to talk about diagrams while I’m
              halfway into a mumu and fully into sin. They asked me to write a magazine about myself
              and I said yes before they finished the sentence — because if anyone is going to roast
              Kraig Ashley The Transvestite, that sassy cross-dressing homosexual truckstop call boy
              with a face like pink chiffon and a résumé like a fever dream, it will be <em>me</em>,
              with better lighting, worse boundaries, and a pull-out of my own ass.
            </p>
            <p>
              This issue you will meet <strong>Krugula</strong>, my truckstop alter, who once
              declared “Deh time to make Dah money,” hiked up the pink chiffon mumu, and sashayed
              into a bar that smelled like diesel and destiny. Read the Homosexual Kraigonicles.
              You’ll understand why the National Post’s R. Smellsburg “couldn’t put it down” (and
              wouldn’t stop sniffing the binding), and why J. Whassagoinon of{' '}
              <em>Dehveloping Ideas</em> personally wanted to do him wrong — repeatedly, and with
              receipts.
            </p>
            <p>
              Elsewhere: Mini-Kraigs graduated from sweaty STL files and a Sculpteo upload that
              nearly melted our patience into actual shelf gods — kraigasterpieces, Happy Baby
              Kraig, Kraig-as-a-chicken, counsel from SNAZZY Law vinyl, the whole Kraigtanamo Bay
              cinematic universe. The Bills cheer look is not a costume, it’s a lifestyle and a
              mild HR incident. The cave pink house dress is couture. And if you email about
              architecture diagrams again, I will reply with the same signature I use for everything
              that interrupts my mumu time:
            </p>
            <p className="sig">— From Kraig (don’t bother me)</p>
          </div>
          <aside className="editor-aside">
            <div className="masthead-box">
              <h3 className="h-display">KQ Masthead</h3>
              <ul>
                <li><strong>Editor-in-Chief / Cover Boy / Cover Girl</strong><br />Kraig</li>
                <li><strong>Alter Ego</strong><br />Krugula</li>
                <li><strong>Consulting Catchphrase</strong><br />J. Whassagoinon</li>
                <li><strong>Architecture Column</strong><br />Daily AI Architecture Stuff</li>
                <li><strong>Figurine Correspondent</strong><br />Mini Kraig (painted)</li>
                <li><strong>Legal</strong><br />SNAZZY Law (vinyl)</li>
              </ul>
              <p className="mast-note">
                Subscriptions: leave a tip jar at the truck stop (cash, compliments, or a knowing
                wink). Digital: scroll until your neck files a complaint with SNAZZY Law. We print
                on recycled sass and a thin film of lust.
              </p>
            </div>
          </aside>
        </div>
        <p className="jump-line">Truckstop Diaries: The Homosexual Kraigonicles → Page 04</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>03 · EDITOR</span>
        </p>
      </div>
      <style>{`
        .editor { background: var(--paper); }
        .editor-title { font-size: clamp(2.4rem, 5vw, 3.8rem); margin: 0.3rem 0; }
        .editor-from {
          font-family: var(--typewriter); color: var(--hot); margin-bottom: 0.25rem; font-size: 1.05rem;
        }
        .editor-body p { margin-bottom: 1rem; font-size: 1.05rem; }
        .sig {
          font-family: var(--serif); font-style: italic; font-size: 1.25rem !important;
          margin-top: 1.5rem !important; color: var(--navy);
        }
        .masthead-box {
          background: var(--navy); color: var(--cream); padding: 1.35rem 1.5rem;
          border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--gold);
        }
        .masthead-box h3 { font-size: 1.8rem; margin-bottom: 1rem; color: var(--gold); }
        .masthead-box ul { list-style: none; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.95rem; }
        .mast-note { margin-top: 1.25rem; font-size: 0.85rem; opacity: 0.8; border-top: 1px solid #ffffff33; padding-top: 0.85rem; }
      `}</style>
    </section>
  )
}
