// Shared UI primitives for the Titis landing.
// Palette and typography are locked to the app's visual system.

const TITIS = {
  coral:  '#f2805c',
  yellow: '#f5c24a',
  green:  '#7fbf7a',
  blue:   '#5aa0e6',
  lilac:  '#b98be0',
  cream:  '#fff6ea',
  creamDeep: '#fff1e0',
  ink:    '#3a2e22',
  inkSoft:'rgba(58,46,34,0.68)',
  inkMute:'rgba(58,46,34,0.5)',
  line:   'rgba(58,46,34,0.12)',
};

const RAINBOW = [TITIS.coral, TITIS.yellow, TITIS.green, TITIS.blue, TITIS.lilac];

// ─── Wordmark ────────────────────────────────────────────────────────
function Wordmark({ size = 28, color = TITIS.coral, inline = true, rainbow = false }) {
  const letters = ['t','i','t','i','s'];
  if (inline) {
    return (
      <span className="logo" style={{
        fontSize: size, letterSpacing: -size*0.02, lineHeight: 1,
        display: 'inline-block', whiteSpace: 'nowrap',
      }}>
        {letters.map((l, i) => (
          <span key={i} style={{ color: rainbow ? RAINBOW[i] : color }}>{l}</span>
        ))}
      </span>
    );
  }
  return (
    <span className="logo" style={{
      fontSize: size, lineHeight: 0.86, letterSpacing: -size*0.02,
      display: 'inline-flex', flexDirection: 'column',
    }}>
      <span style={{ display: 'flex' }}>
        {[0,1,2].map(i => <span key={i} style={{ color: rainbow ? RAINBOW[i] : color }}>{letters[i]}</span>)}
      </span>
      <span style={{ display: 'flex' }}>
        {[3,4].map(i => <span key={i} style={{ color: rainbow ? RAINBOW[i] : color }}>{letters[i]}</span>)}
      </span>
    </span>
  );
}

// App icon (rainbow stacked wordmark on cream square) — pure HTML version
function AppIcon({ size = 72, radius }) {
  const r = radius ?? size * 0.22;
  return (
    <div style={{
      width: size, height: size, borderRadius: r, background: TITIS.creamDeep,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 6px 20px rgba(58,46,34,0.14), inset 0 -3px 0 rgba(0,0,0,0.04)',
      flexShrink: 0,
    }}>
      <Wordmark size={size*0.58} inline={false} rainbow />
    </div>
  );
}

// ─── Buttons ────────────────────────────────────────────────────────
function DownloadButton({ platform, href = '#', style = {} }) {
  const { lang } = useLang();
  const isIOS = platform === 'ios';
  return (
    <a href={href} style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      padding: '14px 22px', borderRadius: 999,
      background: isIOS ? TITIS.ink : TITIS.cream,
      color: isIOS ? TITIS.cream : TITIS.ink,
      border: isIOS ? 'none' : `1.5px solid ${TITIS.ink}`,
      textDecoration: 'none', fontWeight: 600, fontSize: 15,
      letterSpacing: 0.1,
      transition: 'transform .15s ease',
      ...style,
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <span style={{ fontSize: 18 }}>{isIOS ? '' : '▸'}</span>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
        <span style={{ fontSize: 11, fontWeight: 500, opacity: 0.7 }}>
          {pick(isIOS ? TITIS_DICT.download.forIOS : TITIS_DICT.download.forAndroid, lang)}
        </span>
        <span style={{ fontSize: 16, fontWeight: 700 }}>
          {isIOS ? 'iPhone' : 'Android'}
        </span>
      </span>
    </a>
  );
}

// iOS glyph (Apple logo without the Apple brand — a generic cloud/nav
// glyph to avoid trademarked marks)
function IOSGlyph({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill={color} opacity="0.12" />
      <path d="M8 13.5c1 1.5 2.3 2 4 2s3-0.5 4-2" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="9" cy="10" r="1" fill={color} />
      <circle cx="15" cy="10" r="1" fill={color} />
    </svg>
  );
}

// ─── Scroll animations ──────────────────────────────────────────────
// Centralised so the whole landing gets a coherent motion feel.
// Both helpers no-op under `prefers-reduced-motion: reduce`.

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Parallax wrapper — translates the element on Y proportional to its
// distance from the viewport centre. speed ~0.1 is subtle, ~0.4 is strong.
function Parallax({ speed = 0.2, style = {}, children, as: Tag = 'div', ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const centerOffset = (rect.top + rect.height / 2) - vh / 2;
      el.style.transform = `translate3d(0, ${(-centerOffset * speed).toFixed(2)}px, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);
  return (
    <Tag ref={ref} style={{ willChange: 'transform', ...style }} {...rest}>
      {children}
    </Tag>
  );
}

// Reveal — fades + lifts an element into place the first time it
// enters the viewport. `delay` in ms lets us stagger sibling cards.
function Reveal({ children, delay = 0, y = 28, duration = 800, as: Tag = 'div', style = {}, ...rest }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) { setVisible(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} style={{
      transform: visible ? 'translate3d(0,0,0)' : `translate3d(0, ${y}px, 0)`,
      opacity: visible ? 1 : 0,
      transition: `transform ${duration}ms cubic-bezier(.2,.7,.2,1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
      willChange: 'transform, opacity',
      ...style,
    }} {...rest}>
      {children}
    </Tag>
  );
}

Object.assign(window, { TITIS, RAINBOW, Wordmark, AppIcon, DownloadButton, IOSGlyph, Parallax, Reveal });
