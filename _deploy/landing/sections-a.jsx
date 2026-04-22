// Section blocks for the Titis landing page. All copy pulled from TITIS_DICT.

// ─── Feature row icon tile ───────────────────────────────────────────
function FeatureCard({ color, emoji, title, body }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 22, padding: 26,
      border: `1px solid ${TITIS.line}`,
      display: 'flex', flexDirection: 'column', gap: 14,
      height: '100%',
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 16,
        background: color, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 26,
      }}>{emoji}</div>
      <div style={{ fontSize: 19, fontWeight: 700, color: TITIS.ink, letterSpacing: -0.3 }}>{title}</div>
      <div style={{ fontSize: 14.5, color: TITIS.inkSoft, lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}

// ─── Section 1: Hero ─────────────────────────────────────────────────
function Hero() {
  const { lang } = useLang();
  const H = TITIS_DICT.hero;
  return (
    <section className="rs-section rs-hero-section" style={{ padding: '80px 48px 40px', maxWidth: 1280, margin: '0 auto' }}>
      <div className="rs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 99, background: '#fff', border: `1px solid ${TITIS.line}`, fontSize: 12.5, fontWeight: 600, color: TITIS.inkSoft, marginBottom: 22 }}>
            <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: 99, background: TITIS.green }}/>
            {pick(H.badge, lang)}
          </div>
          <h1 className="rs-h1" style={{
            fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2.5,
            color: TITIS.ink, margin: 0,
          }}>
            {pick(H.h1a, lang)}<br/>
            {pick(H.h1b, lang)}<br/>
            {pick(H.h1c, lang)}<br/>
            <span style={{ color: TITIS.coral }}>{pick(H.h1d, lang)}</span>
          </h1>
          <p className="rs-lede" style={{
            fontSize: 19, color: TITIS.inkSoft, lineHeight: 1.55,
            marginTop: 28, marginBottom: 36, maxWidth: 520,
            textWrap: 'pretty', overflowWrap: 'break-word', hyphens: 'auto',
          }}>
            <Wordmark size={19} rainbow/>{pick(H.ledeSuffix, lang)}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <DownloadButton platform="ios"/>
            <DownloadButton platform="android"/>
          </div>
          <div style={{ marginTop: 30, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex' }}>
              {[TITIS.coral, TITIS.yellow, TITIS.green, TITIS.blue].map((c, i) => (
                <div key={i} style={{ width: 34, height: 34, borderRadius: 99, background: c, border: `2.5px solid ${TITIS.cream}`, marginLeft: i === 0 ? 0 : -10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>{'MJAL'[i]}</div>
              ))}
            </div>
            <div style={{ fontSize: 13.5, color: TITIS.inkSoft, lineHeight: 1.3 }}>
              <div style={{ fontWeight: 600, color: TITIS.ink }}>★★★★★</div>
              <div>{pick(H.ratingBlurbSuffix, lang)}<Wordmark size={13.5} color={TITIS.coral}/></div>
            </div>
          </div>
        </div>

        {/* Right — stack of 2 phones */}
        <div className="rs-hero-phones rs-hero-ph" style={{ position: 'relative', height: 640, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Soft background blobs */}
          <div style={{ position: 'absolute', top: 40, left: 30, width: 200, height: 200, borderRadius: 99, background: `${TITIS.yellow}55`, filter: 'blur(50px)' }}/>
          <div style={{ position: 'absolute', bottom: 40, right: 30, width: 240, height: 240, borderRadius: 99, background: `${TITIS.lilac}44`, filter: 'blur(60px)' }}/>

          <div className="rs-hero-phone-a" style={{ position: 'absolute', left: 10, top: 30, zIndex: 1 }}>
            <Phone width={250} tilt={-6} bareScreen><ScreenImage src="assets/hero-login.png" alt={pick(H.alts.login, lang)}/></Phone>
          </div>
          <div className="rs-hero-phone-b" style={{ position: 'absolute', right: 10, bottom: 10, zIndex: 2 }}>
            <Phone width={270} tilt={5} bareScreen><ScreenImage src="assets/hero-feed.png" alt={pick(H.alts.feed, lang)}/></Phone>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Five record types ───────────────────────────────────
function RecordTypes() {
  const { lang } = useLang();
  const R = TITIS_DICT.records;
  const palette = [
    { color: `${TITIS.coral}22`, emoji: '🍼' },
    { color: `${TITIS.lilac}2e`, emoji: '🌙' },
    { color: `${TITIS.yellow}3c`, emoji: '🧷' },
    { color: `${TITIS.blue}2e`,  emoji: '⚖️' },
    { color: `${TITIS.green}2e`, emoji: '📝' },
  ];
  const items = R.items.map((it, i) => ({
    color: palette[i].color,
    emoji: palette[i].emoji,
    title: pick(it.title, lang),
    body:  pick(it.body, lang),
  }));
  return (
    <section id="registros" className="rs-section rs-section-padY" style={{ padding: '80px 48px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <div className="rs-smallcaps" style={{ fontSize: 13, fontWeight: 600, color: TITIS.coral, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>{pick(R.kicker, lang)}</div>
          <h2 className="rs-h2" style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5, color: TITIS.ink, margin: 0, maxWidth: 640 }}>
            {pick(R.title, lang)}
          </h2>
        </div>
        <p style={{ fontSize: 15.5, color: TITIS.inkSoft, lineHeight: 1.55, maxWidth: 340, margin: 0 }}>
          {pick(R.sub, lang)}
        </p>
      </div>
      <div className="rs-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {items.slice(0, 3).map((it, i) => <FeatureCard key={i} {...it}/>)}
      </div>
      <div className="rs-grid-2-even" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginTop: 18 }}>
        {items.slice(3).map((it, i) => <FeatureCard key={i} {...it}/>)}
      </div>
    </section>
  );
}

// ─── Section 3: Family sharing ──────────────────────────────────────
function FamilySection() {
  const { lang } = useLang();
  const F = TITIS_DICT.family;
  return (
    <section id="familia" className="rs-section" style={{ padding: '40px 48px', maxWidth: 1280, margin: '0 auto' }}>
      <div className="rs-grid-2 rs-card-pad" style={{
        background: `linear-gradient(160deg, #fff 0%, ${TITIS.creamDeep} 100%)`,
        borderRadius: 36, padding: '64px 56px',
        border: `1px solid ${TITIS.line}`,
        display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <div className="rs-smallcaps" style={{ fontSize: 13, fontWeight: 600, color: TITIS.blue, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>{pick(F.kicker, lang)}</div>
          <h2 className="rs-h2-sm" style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.4, color: TITIS.ink, margin: 0 }}>
            {pick(F.title, lang)}
          </h2>
          <p style={{ fontSize: 16.5, color: TITIS.inkSoft, lineHeight: 1.6, marginTop: 20, marginBottom: 28 }}>
            {pick(F.body, lang)}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {F.items.map(([t, d], i) => (
              <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 22, height: 22, borderRadius: 99, background: TITIS.green, color: '#fff', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>✓</div>
                <div style={{ fontSize: 15, color: TITIS.ink, lineHeight: 1.5 }}>
                  <strong style={{ fontWeight: 700 }}>{pick(t, lang)}.</strong> <span style={{ color: TITIS.inkSoft }}>{pick(d, lang)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Family diagram */}
        <FamilyDiagram/>
      </div>
    </section>
  );
}

function FamilyDiagram() {
  const { lang } = useLang();
  const F = TITIS_DICT.family;
  const positions = [
    { x: 50, y: 10, c: TITIS.coral },
    { x: 85, y: 35, c: TITIS.blue },
    { x: 80, y: 78, c: TITIS.green },
    { x: 20, y: 78, c: TITIS.lilac },
    { x: 15, y: 35, c: TITIS.yellow },
  ];
  const members = F.members.map((m, i) => ({ ...positions[i], n: m.n, role: pick(m.role, lang) }));
  return (
    <div className="rs-family-diagram" style={{ position: 'relative', height: 440, width: '100%' }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {members.map((m, i) => (
          <line key={i} x1="50" y1="50" x2={m.x} y2={m.y}
            stroke={TITIS.line} strokeWidth="0.4" strokeDasharray="1 1"/>
        ))}
      </svg>
      {/* Center = baby avatar */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        width: 120, height: 120, borderRadius: 99,
        background: `linear-gradient(135deg, ${TITIS.coral}, ${TITIS.yellow})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 52, color: '#fff', fontWeight: 700,
        boxShadow: '0 20px 40px rgba(242,128,92,0.35)',
        zIndex: 2,
      }}>👶</div>
      <div style={{
        position: 'absolute', left: '50%', top: 'calc(50% + 72px)', transform: 'translateX(-50%)',
        padding: '4px 12px', borderRadius: 99, background: TITIS.ink, color: TITIS.cream,
        fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap', zIndex: 2,
      }}>{pick(F.babyName, lang)}</div>

      {members.map((m, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${m.x}%`, top: `${m.y}%`, transform: 'translate(-50%, -50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: 99, background: m.c, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, fontWeight: 700, border: `3px solid ${TITIS.cream}`,
            boxShadow: '0 8px 20px rgba(58,46,34,0.15)',
          }}>{m.n[0]}</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: TITIS.ink }}>{m.n}</div>
            <div className="rs-family-role" style={{ fontSize: 10.5, color: TITIS.inkMute }}>{m.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Hero, RecordTypes, FamilySection });
