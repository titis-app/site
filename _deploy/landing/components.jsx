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

Object.assign(window, { TITIS, RAINBOW, Wordmark, AppIcon, DownloadButton, IOSGlyph });
