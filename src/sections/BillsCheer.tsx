export default function BillsCheer() {
  return (
    <section id="sports" className="spread sports">
      <div className="spread-inner">
        <div className="dept-rule sports-dept">
          <p className="kicker">Sports Desk · By FF · Sideline Sass &amp; Flight School</p>
          <span className="dept-label">Sports</span>
        </div>
        <h2 className="h-display sports-title">KQ Sports Spectacular</h2>
        <p className="byline sports-by">
          Double feature · Highmark to tarmac · <em>Reporting by FF</em>
        </p>
        <p className="sports-dek">
          Two beats, zero dignity. Pom-poms at Highmark. Cardboard wings at Top Gay Fighter Weapons School.
        </p>

        <div className="grid-2 sports-grid">
          <div className="img-frame sports-img">
            <img
              src="/ingredients/bills-cheerleader.jpeg"
              alt="Kraig as Bills cheerleader — crop top, pom-poms, yellow muffs"
            />
            <p className="caption-bar">Fig. A — Unofficial Bills mascot. Official midriff emergency.</p>
          </div>
          <div className="sports-copy">
            <span className="badge">GAME DAY PROFILE</span>
            <h3 className="h-serif">Bills Cheer: Fourth-and-Sassy</h3>
            <p>
              Forget the playbook. This is the other kind of yardage: eye contact from the fifty,
              a wink that says <em>Wassagoinon?</em>, and a uniform that commits harder than
              fourth-and-long. The crop top is a statement. The statement is <strong>yes</strong>.
            </p>
            <p>
              Sources (us) confirm he practiced in house dresses before graduating to cheer
              couture — because if you can sashay a truck stop in chiffon, you can handle Highmark.
              The smile is athletic. The pose is prosecutable in three states. The energy is pure
              Kraig: affectionate chaos with better calves and worse judgment.
            </p>
            <ul className="sports-stats">
              <li><strong>Vertical leap:</strong> emotional</li>
              <li><strong>Spirit fingers:</strong> weaponized</li>
              <li><strong>Timeout strategy:</strong> touch-ups + truckstop flashbacks</li>
              <li><strong>Post-game:</strong> Daily AI Architecture Stuff, then bed</li>
              <li><strong>Fantasy value:</strong> undraftable, unforgettable</li>
            </ul>
            <blockquote className="pull-quote">
              “He didn’t join the squad. The squad joined him.”
            </blockquote>
          </div>
        </div>

        <div className="grid-2 sports-grid sports-grid-b">
          <div className="sports-copy">
            <span className="badge hot">FLIGHT SCHOOL EXCLUSIVE</span>
            <h3 className="h-serif">Top Gay: Need for Speed… Limits</h3>
            <p>
              Welcome to Top Gay Fighter Weapons School, where the Tomcat is parked correctly and
              the trainee is not. Lt. Dan Yankee arrives on a three-wheel mobility scooter with
              cardboard wings, duct tape, a wooden propeller, and a Pride flag that reads like a
              threat assessment.
            </p>
            <p>
              Pre-flight checklist recovered from the tarmac: Cardboard (CHECK). Wheels (ROCKY).
              Pride (CHECK). Brakes (???). Jet fuel (AND CHEESE). The rear wheel departed mid-taxi
              in a cloud of dust and metaphor. Ground crew chased with megaphones and upside-down
              STOP signs. Classic Kraig: all throttle, no landing gear.
            </p>
            <ul className="sports-stats">
              <li><strong>Aircraft:</strong> scooter + hope</li>
              <li><strong>Call sign:</strong> Danger Zone (and parts)</li>
              <li><strong>Maverick energy:</strong> reverse</li>
              <li><strong>G-force:</strong> gravity wins</li>
              <li><strong>Afterburner:</strong> house dress under the flight suit (rumored)</li>
            </ul>
            <blockquote className="pull-quote">
              “He didn’t break the sound barrier. He broke the scooter.”
            </blockquote>
          </div>
          <div className="img-frame sports-img">
            <img
              src="/ingredients/top-gay-scooter-poster.jpeg"
              alt="TOP GAY parody poster — scooter with cardboard wings"
            />
            <p className="caption-bar">Fig. B — Official recruitment poster. Do not enlist.</p>
          </div>
        </div>

        <p className="jump-line sports-jump">Fake Ads &amp; Classifieds → Page 18</p>
        <p className="page-num">
          <span className="folio-mark">KQ</span>
          <span>16–17 · SPORTS · FF</span>
        </p>
      </div>
      <style>{`
        .sports {
          background: linear-gradient(135deg, #00338d 0%, #1e2a4a 45%, #c60c30 100%);
          color: #fff;
        }
        .sports .kicker { color: #ffc72c; }
        .sports-dept { border-bottom-color: #ffc72c88; }
        .sports .dept-label { background: #ffc72c; color: #001a44; }
        .sports-title { font-size: clamp(2.8rem, 8vw, 5.5rem); color: #ffc72c; text-shadow: 3px 3px 0 #001a44; }
        .sports-by { color: #ffc72ccc; }
        .sports-by em { color: #ffc72c; }
        .sports-dek { margin-bottom: 1.25rem; opacity: 0.9; max-width: 40rem; }
        .sports-grid { gap: 1.5rem; margin-bottom: 2rem; align-items: start; }
        .sports-grid-b { margin-top: 0.5rem; padding-top: 1.5rem; border-top: 1px dashed #ffc72c55; }
        .sports-img {
          aspect-ratio: 3/4; max-height: 58vh; border-color: #ffc72c;
          box-shadow: 8px 8px 0 #c60c3088;
          display: flex; flex-direction: column;
        }
        .sports-img img { flex: 1; min-height: 0; }
        .sports-img .caption-bar { background: #001a44; border-top-color: #ffc72c; color: #ffc72c; }
        .sports-copy h3 { font-size: 1.7rem; margin: 0.7rem 0 1rem; }
        .sports-copy p { margin-bottom: 0.9rem; font-size: 1.05rem; }
        .sports-stats {
          list-style: none; display: grid; gap: 0.4rem; margin: 1rem 0;
          font-family: var(--typewriter); font-size: 0.92rem;
          background: #00000044; padding: 1rem; border: 1px solid #ffc72c55;
        }
        .sports .pull-quote { color: #ffe08a; border-color: #ffc72c; }
        .sports .page-num { color: #ffffff77; border-top-color: #ffffff33; }
        .sports .badge { background: #c60c30; }
        .sports .badge.hot { background: #ff2d6a; }
        .sports-jump { color: #ffc72caa; border-top-color: #ffc72c44; }
        @media (max-width: 800px) {
          .sports-grid-b .sports-copy { order: 2; }
          .sports-grid-b .sports-img { order: 1; }
          .sports-img { max-height: 42vh; }
        }
      `}</style>
    </section>
  )
}
