// More section blocks — smart features, white noise, FAQ, footer, nav.
// All copy is looked up through TITIS_DICT via pick(..., lang).

// ─── Smart features (Live Activity, widget, notifications) ──────────
function SmartFeatures() {
  const { lang } = useLang();
  const S = TITIS_DICT.smart;
  return (
    <section id="funciones" className="rs-section rs-section-padY" style={{ padding: '80px 48px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div className="rs-smallcaps" style={{ fontSize: 13, fontWeight: 600, color: TITIS.lilac, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>{pick(S.kicker, lang)}</div>
        <h2 className="rs-h2" style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5, color: TITIS.ink, margin: 0, maxWidth: 760, marginInline: 'auto' }}>
          {pick(S.title, lang)}
        </h2>
      </div>

      <div className="rs-grid-3-smart" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 18 }}>
        {/* Live Activity card */}
        <div style={{
          background: TITIS.ink, borderRadius: 24, padding: 32,
          color: TITIS.cream, display: 'flex', flexDirection: 'column', gap: 20,
          minHeight: 380,
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: TITIS.yellow, textTransform: 'uppercase', letterSpacing: 1 }}>{pick(S.la.kicker, lang)}</div>
          <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.5 }}>
            {pick(S.la.title, lang)}
          </div>
          <div style={{ fontSize: 14.5, color: 'rgba(255,246,234,0.7)', lineHeight: 1.55 }}>
            {pick(S.la.body, lang)}
          </div>

          {/* Mock lock screen */}
          <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.06)', borderRadius: 18, padding: 18, backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: 10, color: 'rgba(255,246,234,0.5)', fontWeight: 500, marginBottom: 6 }}>{pick(S.la.lockLabel, lang)}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg, ${TITIS.lilac}, ${TITIS.blue})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🌙</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,246,234,0.65)' }}>{pick(S.la.sleeping, lang)}</div>
                <div style={{ fontSize: 22, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>1:23:47</div>
              </div>
              <div style={{ fontSize: 11, padding: '5px 10px', borderRadius: 99, background: TITIS.coral, color: '#fff', fontWeight: 600 }}>{pick(S.la.stop, lang)}</div>
            </div>
          </div>
        </div>

        {/* Widget card */}
        <div style={{
          background: `linear-gradient(180deg, ${TITIS.blue} 0%, ${TITIS.lilac} 100%)`,
          borderRadius: 24, padding: 28, color: '#fff', minHeight: 380,
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.85 }}>{pick(S.widget.kicker, lang)}</div>
          <div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.5 }}>{pick(S.widget.title, lang)}</div>

          {/* Mock widget */}
          <div style={{
            marginTop: 'auto', background: TITIS.cream, borderRadius: 22, padding: 16,
            color: TITIS.ink, aspectRatio: '1 / 1',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700 }}>Lucía</div>
              <Wordmark size={12} color={TITIS.coral}/>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, flex: 1 }}>
              <div style={{ background: `${TITIS.coral}22`, borderRadius: 10, padding: 8 }}>
                <div style={{ fontSize: 9, color: TITIS.inkMute, fontWeight: 600 }}>{pick(S.widget.lastFeed, lang)}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>2h 10m</div>
              </div>
              <div style={{ background: `${TITIS.lilac}2e`, borderRadius: 10, padding: 8 }}>
                <div style={{ fontSize: 9, color: TITIS.inkMute, fontWeight: 600 }}>{pick(S.widget.sleep, lang)}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>{pick(S.widget.active, lang)}</div>
              </div>
              <div style={{ background: `${TITIS.yellow}3c`, borderRadius: 10, padding: 8 }}>
                <div style={{ fontSize: 9, color: TITIS.inkMute, fontWeight: 600 }}>{pick(S.widget.diaper, lang)}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>1h 40m</div>
              </div>
              <div style={{ background: `${TITIS.green}2e`, borderRadius: 10, padding: 8 }}>
                <div style={{ fontSize: 9, color: TITIS.inkMute, fontWeight: 600 }}>{pick(S.widget.weight, lang)}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}>6,9 kg</div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications card */}
        <div style={{
          background: TITIS.cream, borderRadius: 24, padding: 28,
          border: `1px solid ${TITIS.line}`, minHeight: 380,
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: TITIS.coral, textTransform: 'uppercase', letterSpacing: 1 }}>{pick(S.notif.kicker, lang)}</div>
          <div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.5, color: TITIS.ink }}>{pick(S.notif.title, lang)}</div>
          <div style={{ fontSize: 14, color: TITIS.inkSoft, lineHeight: 1.55 }}>{pick(S.notif.body, lang)}</div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { icon: '🍼', title: pick(S.notif.n1t, lang), sub: pick(S.notif.n1s, lang), c: TITIS.coral },
              { icon: '🌙', title: pick(S.notif.n2t, lang), sub: pick(S.notif.n2s, lang), c: TITIS.lilac },
            ].map((n, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 14, padding: 12,
                display: 'flex', gap: 10, alignItems: 'center',
                border: `1px solid ${TITIS.line}`,
              }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: `${n.c}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{n.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: TITIS.ink }}>{n.title}</div>
                  <div style={{ fontSize: 11, color: TITIS.inkMute, marginTop: 1 }}>{n.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── White noise section ────────────────────────────────────────────
function WhiteNoise() {
  const { lang } = useLang();
  const N = TITIS_DICT.noise;
  const tints = [TITIS.creamDeep, `${TITIS.coral}2e`, `${TITIS.yellow}33`, `${TITIS.coral}1a`, `${TITIS.blue}2e`, `${TITIS.lilac}2e`];
  const ics = ['◉', '◉', '◐', '◑', '∿', '∷'];
  const sounds = N.sounds.map((s, i) => ({ name: pick(s, lang), c: tints[i], ic: ics[i] }));
  return (
    <section className="rs-section" style={{ padding: '40px 48px', maxWidth: 1280, margin: '0 auto' }}>
      <div className="rs-grid-2 rs-card-pad" style={{
        background: TITIS.ink, borderRadius: 36, padding: '64px 56px',
        color: TITIS.cream,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
      }}>
        <div>
          <div className="rs-smallcaps" style={{ fontSize: 13, fontWeight: 600, color: TITIS.yellow, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>{pick(N.kicker, lang)}</div>
          <h2 className="rs-h2-sm" style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.4, margin: 0 }}>
            {pick(N.title, lang)}
          </h2>
          <p style={{ fontSize: 16.5, color: 'rgba(255,246,234,0.7)', lineHeight: 1.6, marginTop: 20, marginBottom: 0 }}>
            {pick(N.body, lang)}
          </p>
        </div>

        <div className="rs-sounds-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {sounds.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.06)',
              border: `1px solid rgba(255,246,234,0.1)`,
              borderRadius: 16, padding: 16,
              display: 'flex', flexDirection: 'column', gap: 10,
              aspectRatio: '1/1',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: s.c,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, color: TITIS.ink,
              }}>{s.ic}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, marginTop: 'auto' }}>{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────
function FAQ() {
  const { lang } = useLang();
  const F = TITIS_DICT.faq;
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="rs-section rs-section-padY" style={{ padding: '80px 48px', maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div className="rs-smallcaps" style={{ fontSize: 13, fontWeight: 600, color: TITIS.coral, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>{pick(F.kicker, lang)}</div>
        <h2 className="rs-h2-sm" style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.4, color: TITIS.ink, margin: 0 }}>{pick(F.title, lang)}</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {F.items.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{
              background: '#fff', borderRadius: 18,
              border: `1px solid ${TITIS.line}`, overflow: 'hidden',
            }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                width: '100%', padding: '20px 24px', border: 'none', background: 'transparent',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
              }}>
                <span style={{ fontSize: 16.5, fontWeight: 600, color: TITIS.ink }}>{pick(q, lang)}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: 99,
                  background: isOpen ? TITIS.ink : TITIS.creamDeep,
                  color: isOpen ? TITIS.cream : TITIS.ink,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, fontWeight: 400,
                  transition: 'all .2s',
                }}>{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div style={{ padding: '0 24px 22px', fontSize: 15, color: TITIS.inkSoft, lineHeight: 1.6 }}>{pick(a, lang)}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Final CTA + footer ─────────────────────────────────────────────
function FinalCTA() {
  const { lang } = useLang();
  const C = TITIS_DICT.cta;
  return (
    <section className="rs-section" style={{ padding: '40px 48px 0', maxWidth: 1280, margin: '0 auto' }}>
      <div className="rs-cta-pad" style={{
        background: `linear-gradient(135deg, ${TITIS.coral} 0%, ${TITIS.yellow} 33%, ${TITIS.green} 66%, ${TITIS.blue} 100%)`,
        borderRadius: 36, padding: '80px 48px',
        textAlign: 'center', color: '#fff',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'radial-gradient(circle at 20% 30%, #fff 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, #fff 0 1.5px, transparent 2px)', backgroundSize: '60px 60px, 80px 80px' }}/>
        <div style={{ position: 'relative' }}>
          <h2 className="rs-h2-lg" style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2, margin: '0 0 16px', maxWidth: 800, marginInline: 'auto' }}>
            {pick(C.title, lang)}
          </h2>
          <p style={{ fontSize: 18, opacity: 0.9, lineHeight: 1.5, margin: 0, maxWidth: 540, marginInline: 'auto' }}>
            <Wordmark size={18} color="#fff"/>{pick(C.tail, lang)}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '14px 28px', borderRadius: 99, background: TITIS.ink, color: TITIS.cream, textDecoration: 'none', fontWeight: 700, fontSize: 15.5 }}>{pick(C.iosBtn, lang)}</a>
            <a href="#" style={{ padding: '14px 28px', borderRadius: 99, background: '#fff', color: TITIS.ink, textDecoration: 'none', fontWeight: 700, fontSize: 15.5 }}>{pick(C.androidBtn, lang)}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { lang, setLang } = useLang();
  const F = TITIS_DICT.footer;
  const cols = [F.cols.app, F.cols.company, F.cols.legal];
  return (
    <footer className="rs-section" style={{ padding: '56px 48px 40px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        flexWrap: 'wrap', gap: 40, paddingBottom: 32,
        borderBottom: `1px solid ${TITIS.line}`,
      }}>
        <div style={{ maxWidth: 320 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            {window.TITIS_TWEAKS?.showAppIcon && <AppIcon size={44}/>}
            <Wordmark size={window.TITIS_TWEAKS?.footerLogoSize ?? 28} rainbow/>
          </div>
          <p style={{ fontSize: 13.5, color: TITIS.inkSoft, lineHeight: 1.55, margin: 0 }}>
            {pick(F.blurb, lang)}
          </p>
        </div>
        <div className="rs-footer-links" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 56 }}>
          {cols.map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 12, fontWeight: 700, color: TITIS.ink, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>{pick(col.title, lang)}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map((it, j) => <li key={j}><a href="#" style={{ fontSize: 14, color: TITIS.inkSoft, textDecoration: 'none' }}>{pick(it, lang)}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, fontSize: 12.5, color: TITIS.inkMute, flexWrap: 'wrap', gap: 14 }}>
        <div>{pick(F.copyright, lang)}</div>
        {/* Language selector in footer — segmented pills */}
        <div role="radiogroup" aria-label={pick(TITIS_DICT.nav.langLabel, lang)} style={{
          display: 'inline-flex', gap: 4, padding: 4, background: '#fff',
          border: `1px solid ${TITIS.line}`, borderRadius: 99,
        }}>
          {TITIS_LANGS.map(L => {
            const active = L.code === lang;
            return (
              <button
                key={L.code} role="radio" aria-checked={active}
                onClick={() => setLang(L.code)}
                style={{
                  padding: '5px 12px', borderRadius: 99, border: 'none',
                  background: active ? TITIS.ink : 'transparent',
                  color: active ? TITIS.cream : TITIS.inkSoft,
                  fontSize: 11.5, fontWeight: 700, letterSpacing: 0.4,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}>
                {L.short}
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

// ─── Language selector dropdown for the nav ─────────────────────────
function LangSelector({ compact = false }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const current = TITIS_LANGS.find(l => l.code === lang) || TITIS_LANGS[0];

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox" aria-expanded={open}
        aria-label={pick(TITIS_DICT.nav.langLabel, lang)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: compact ? '8px 12px' : '9px 14px',
          borderRadius: 99, background: '#fff',
          border: `1px solid ${TITIS.line}`,
          color: TITIS.ink, fontFamily: 'inherit',
          fontSize: 13, fontWeight: 700, letterSpacing: 0.4,
          cursor: 'pointer',
        }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M3 12h18"/>
          <path d="M12 3c2.5 2.8 3.9 6 3.9 9s-1.4 6.2-3.9 9c-2.5-2.8-3.9-6-3.9-9s1.4-6.2 3.9-9z"/>
        </svg>
        <span>{current.short}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
          <path d="M3 5l3 3 3-3"/>
        </svg>
      </button>
      {open && (
        <div role="listbox" style={{
          position: 'absolute', top: 'calc(100% + 8px)', right: 0,
          background: '#fff', borderRadius: 14,
          border: `1px solid ${TITIS.line}`,
          boxShadow: '0 12px 32px rgba(58,46,34,0.15)',
          overflow: 'hidden', minWidth: 160, zIndex: 60,
        }}>
          {TITIS_LANGS.map(L => {
            const active = L.code === lang;
            return (
              <button
                key={L.code} role="option" aria-selected={active}
                onClick={() => { setLang(L.code); setOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                  width: '100%', padding: '12px 16px', border: 'none',
                  background: active ? TITIS.creamDeep : '#fff',
                  color: TITIS.ink, cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: 14, fontWeight: active ? 700 : 500, textAlign: 'left',
                }}>
                <span>{L.label}</span>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: 0.4,
                  padding: '2px 7px', borderRadius: 99,
                  background: active ? TITIS.ink : TITIS.creamDeep,
                  color: active ? TITIS.cream : TITIS.inkMute,
                }}>{L.short}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Sticky nav ─────────────────────────────────────────────────────
function Nav() {
  const { lang } = useLang();
  const N = TITIS_DICT.nav;
  const [open, setOpen] = React.useState(false);
  const links = [
    [pick(N.records, lang),  'registros'],
    [pick(N.family, lang),   'familia'],
    [pick(N.features, lang), 'funciones'],
    [pick(N.faq, lang),      'faq'],
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,246,234,0.85)', backdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${TITIS.line}`,
    }}>
      <div className="rs-nav-padX" style={{
        maxWidth: 1280, margin: '0 auto', padding: '16px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {window.TITIS_TWEAKS?.showAppIcon && <AppIcon size={36}/>}
          <Wordmark size={window.TITIS_TWEAKS?.navLogoSize ?? 22} rainbow/>
        </div>
        <div className="rs-nav-links" style={{ gap: 28 }}>
          {links.map(([l, id]) => (
            <a key={id} href={`#${id}`} style={{ fontSize: 14, color: TITIS.ink, textDecoration: 'none', fontWeight: 500 }}>{l}</a>
          ))}
        </div>
        <div className="rs-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="rs-nav-lang"><LangSelector/></div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rs-nav-menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label={pick(open ? N.menuClose : N.menuOpen, lang)}
          style={{
            width: 40, height: 40, borderRadius: 12,
            background: open ? TITIS.ink : '#fff',
            color: open ? TITIS.cream : TITIS.ink,
            border: `1px solid ${TITIS.line}`,
            alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', padding: 0,
          }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (<><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></>)
                  : (<><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="13" x2="20" y2="13"/><line x1="4" y1="19" x2="20" y2="19"/></>)}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div style={{
          padding: '8px 20px 20px',
          background: 'rgba(255,246,234,0.98)',
          borderTop: `1px solid ${TITIS.line}`,
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          {links.map(([l, id]) => (
            <a
              key={id} href={`#${id}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '14px 6px',
                fontSize: 18, fontWeight: 600, color: TITIS.ink,
                textDecoration: 'none',
                borderBottom: `1px solid ${TITIS.line}`,
              }}>{l}</a>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14, padding: '4px 2px' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: TITIS.inkSoft, textTransform: 'uppercase', letterSpacing: 0.6 }}>
              {pick(N.langLabel, lang)}
            </span>
            <LangSelector compact/>
          </div>
          <a href="#"
            style={{
              display: 'block', textAlign: 'center',
              marginTop: 14, padding: '14px 20px',
              borderRadius: 99, background: TITIS.ink, color: TITIS.cream,
              textDecoration: 'none', fontWeight: 700, fontSize: 15,
            }}>{pick(N.download, lang)}</a>
        </div>
      )}
    </nav>
  );
}

Object.assign(window, { SmartFeatures, WhiteNoise, FAQ, FinalCTA, Footer, Nav, LangSelector });
