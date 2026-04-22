// Hand-built phone mockups that mirror the Titis app's tracking UI.
// These are illustrative — real screens will be dropped in later.
// The visual DNA (rainbow chips, cream surfaces, friendly type) ties back
// to the app icon.

function Phone({ width = 280, children, tilt = 0, shadow = true, style = {}, bareScreen = false }) {
  const height = width * (844 / 390); // iPhone-ish ratio
  return (
    <div style={{
      width, height,
      background: '#1a1410',
      borderRadius: width * 0.13,
      padding: 8,
      boxShadow: shadow ? '0 30px 60px -20px rgba(58,46,34,0.35), 0 12px 30px rgba(58,46,34,0.12)' : 'none',
      transform: `rotate(${tilt}deg)`,
      flexShrink: 0,
      ...style,
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: TITIS.cream,
        borderRadius: width * 0.11,
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        {bareScreen ? (
          // Screenshot already has its own status bar + dynamic island baked in
          children
        ) : (
          <>
            {/* Status bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 36,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '10px 22px', fontSize: 12, fontWeight: 600, color: TITIS.ink,
              zIndex: 5,
            }}>
              <span>9:41</span>
              <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                <span style={{ fontSize: 10 }}>●●●●</span>
                <span style={{ width: 18, height: 9, border: `1.2px solid ${TITIS.ink}`, borderRadius: 2, position: 'relative' }}>
                  <span style={{ position: 'absolute', inset: 1, background: TITIS.ink, borderRadius: 1, width: '70%' }}/>
                </span>
              </div>
            </div>
            {/* Dynamic-island pill */}
            <div style={{
              position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)',
              width: width*0.32, height: 22, background: '#1a1410', borderRadius: 20,
              zIndex: 6,
            }}/>
            <div style={{ position: 'absolute', inset: 0, paddingTop: 44 }}>
              {children}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ═══ Real app screenshot wrapper — fills the phone viewport ═════════
function ScreenImage({ src, alt = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'top center',
        display: 'block',
      }}
    />
  );
}

// ═══ Screen 1 — Today feed (alimentación / sueño / pañal) ═══════════
function ScreenToday() {
  const Row = ({ color, label, time, detail, icon }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '11px 14px', background: '#fff',
      borderRadius: 14, marginBottom: 8,
      boxShadow: '0 1px 0 rgba(58,46,34,0.04)',
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: 11,
        background: color, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18,
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: TITIS.ink }}>{label}</div>
        <div style={{ fontSize: 11, color: TITIS.inkMute, marginTop: 1 }}>{detail}</div>
      </div>
      <div style={{ fontSize: 11, color: TITIS.inkMute, fontVariantNumeric: 'tabular-nums' }}>{time}</div>
    </div>
  );
  return (
    <div style={{ padding: '8px 16px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: TITIS.inkMute, fontWeight: 500 }}>Martes, 21 abr</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: TITIS.ink, marginTop: 1 }}>Hola, Marta</div>
        </div>
        <div style={{ display: 'flex', gap: -6 }}>
          <div style={{ width: 30, height: 30, borderRadius: 99, background: TITIS.coral, border: `2px solid ${TITIS.cream}`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:11, fontWeight:700 }}>M</div>
          <div style={{ width: 30, height: 30, borderRadius: 99, background: TITIS.blue, border: `2px solid ${TITIS.cream}`, marginLeft: -8, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:11, fontWeight:700 }}>J</div>
          <div style={{ width: 30, height: 30, borderRadius: 99, background: TITIS.green, border: `2px solid ${TITIS.cream}`, marginLeft: -8, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:11, fontWeight:700 }}>A</div>
        </div>
      </div>

      {/* Baby switcher chip */}
      <div style={{
        display: 'flex', gap: 6, marginBottom: 14,
      }}>
        <div style={{ padding: '6px 12px', borderRadius: 99, background: TITIS.ink, color: TITIS.cream, fontSize: 12, fontWeight: 600 }}>Lucía · 4m</div>
        <div style={{ padding: '6px 12px', borderRadius: 99, background: 'transparent', color: TITIS.inkSoft, fontSize: 12, fontWeight: 500, border: `1px solid ${TITIS.line}` }}>+ bebé</div>
      </div>

      {/* Live sleep card */}
      <div style={{
        background: `linear-gradient(135deg, ${TITIS.lilac} 0%, ${TITIS.blue} 100%)`,
        borderRadius: 18, padding: 14, color: '#fff',
        marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🌙</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, opacity: 0.85, fontWeight: 500 }}>Durmiendo ahora</div>
          <div style={{ fontSize: 22, fontWeight: 700, fontVariantNumeric: 'tabular-nums', marginTop: 1 }}>1h 23m</div>
        </div>
        <div style={{ fontSize: 11, padding: '5px 10px', borderRadius: 99, background: 'rgba(255,255,255,0.2)', fontWeight: 600 }}>Parar</div>
      </div>

      <div style={{ fontSize: 11, fontWeight: 600, color: TITIS.inkMute, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8, paddingLeft: 4 }}>Hoy</div>
      <Row color={`${TITIS.coral}22`} icon="🍼" label="Biberón 120 ml" detail="Marta · hace 2h" time="11:20" />
      <Row color={`${TITIS.yellow}33`} icon="🧷" label="Pañal · pipí" detail="Javi · hace 2h 40m" time="10:42" />
      <Row color={`${TITIS.green}2e`} icon="🍼" label="Pecho derecho · 14 min" detail="Marta · hace 4h" time="9:10" />

      {/* FAB */}
      <div style={{
        position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        width: 56, height: 56, borderRadius: 99, background: TITIS.ink, color: TITIS.cream,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
        fontWeight: 300,
        boxShadow: '0 10px 24px rgba(58,46,34,0.35)',
      }}>+</div>
    </div>
  );
}

// ═══ Screen 2 — Family & stats (gráfico de peso) ════════════════════
function ScreenStats() {
  // Weight points
  const pts = [4.2, 4.6, 5.1, 5.5, 6.0, 6.4, 6.9];
  const W = 220, H = 90;
  const max = 7.2, min = 4;
  const px = (i) => (i / (pts.length - 1)) * W;
  const py = (v) => H - ((v - min) / (max - min)) * H;
  const path = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${px(i)} ${py(v)}`).join(' ');
  const area = `${path} L ${W} ${H} L 0 ${H} Z`;

  return (
    <div style={{ padding: '8px 16px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: TITIS.inkMute, fontWeight: 500 }}>Estadísticas · Lucía</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: TITIS.ink, marginTop: 1 }}>Últimas 6 semanas</div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
        {['Peso', 'Pañales', 'Sueño', 'Tomas'].map((t, i) => (
          <div key={t} style={{
            padding: '6px 11px', borderRadius: 99, fontSize: 11.5, fontWeight: 600,
            background: i === 0 ? TITIS.ink : 'transparent',
            color: i === 0 ? TITIS.cream : TITIS.inkSoft,
            border: i === 0 ? 'none' : `1px solid ${TITIS.line}`,
          }}>{t}</div>
        ))}
      </div>

      {/* Weight card */}
      <div style={{
        background: '#fff', borderRadius: 18, padding: 14,
        marginBottom: 10,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 700, color: TITIS.ink, letterSpacing: -1 }}>6.9<span style={{ fontSize: 14, color: TITIS.inkMute, marginLeft: 3 }}>kg</span></div>
            <div style={{ fontSize: 11, color: TITIS.green, fontWeight: 600 }}>+2.7 kg desde marzo</div>
          </div>
          <div style={{ fontSize: 10, color: TITIS.inkMute }}>P50 · OMS</div>
        </div>
        <svg width={W} height={H+12} style={{ display: 'block' }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={TITIS.coral} stopOpacity="0.25"/>
              <stop offset="100%" stopColor={TITIS.coral} stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={area} fill="url(#areaGrad)" />
          <path d={path} fill="none" stroke={TITIS.coral} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          {pts.map((v, i) => (
            <circle key={i} cx={px(i)} cy={py(v)} r={i === pts.length-1 ? 4.5 : 2.5}
              fill={i === pts.length-1 ? TITIS.coral : '#fff'}
              stroke={TITIS.coral} strokeWidth="2" />
          ))}
        </svg>
      </div>

      {/* Diapers card */}
      <div style={{ background: '#fff', borderRadius: 18, padding: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: TITIS.ink }}>Pañales · esta semana</div>
          <div style={{ fontSize: 10, color: TITIS.inkMute }}>L M X J V S D</div>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 58 }}>
          {[5,7,6,8,6,7,5].map((v, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'flex-end' }}>
              <div style={{ height: v*4, background: TITIS.yellow, borderRadius: 4 }}/>
              <div style={{ height: (10-v)*2.5, background: TITIS.green, borderRadius: 4 }}/>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 10, fontSize: 10, color: TITIS.inkSoft }}>
          <span><span style={{ display: 'inline-block', width: 8, height: 8, background: TITIS.yellow, borderRadius: 2, marginRight: 4 }}/>Pipí</span>
          <span><span style={{ display: 'inline-block', width: 8, height: 8, background: TITIS.green, borderRadius: 2, marginRight: 4 }}/>Caca</span>
        </div>
      </div>
    </div>
  );
}

// ═══ Screen 3 — Quick log sheet ═════════════════════════════════════
function ScreenLog() {
  const Tile = ({ color, icon, label, big }) => (
    <div style={{
      background: '#fff', borderRadius: 16, padding: big ? 16 : 12,
      display: 'flex', flexDirection: 'column', gap: 8,
      gridColumn: big ? 'span 2' : 'span 1',
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: 12,
        background: color, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20,
      }}>{icon}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: TITIS.ink }}>{label}</div>
    </div>
  );
  return (
    <div style={{ padding: '8px 16px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: TITIS.inkMute, fontWeight: 500 }}>Nuevo registro</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: TITIS.ink, marginTop: 1 }}>¿Qué acaba de pasar?</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <Tile color={`${TITIS.coral}22`} icon="🍼" label="Biberón" />
        <Tile color={`${TITIS.green}2e`} icon="🤱" label="Pecho" />
        <Tile color={`${TITIS.lilac}2e`} icon="🌙" label="Sueño" />
        <Tile color={`${TITIS.yellow}33`} icon="🧷" label="Pañal" />
        <Tile color={`${TITIS.blue}2e`} icon="⚖️" label="Peso" />
        <Tile color={`${TITIS.coral}22`} icon="📝" label="Nota" />
      </div>

      <div style={{ marginTop: 14, fontSize: 11, fontWeight: 600, color: TITIS.inkMute, textTransform: 'uppercase', letterSpacing: 0.5, paddingLeft: 4, marginBottom: 8 }}>Rápido</div>
      <div style={{ background: '#fff', borderRadius: 16, padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 11, background: `${TITIS.lilac}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🎵</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: TITIS.ink }}>Ruido blanco</div>
          <div style={{ fontSize: 10.5, color: TITIS.inkMute }}>Olas · 30 min restantes</div>
        </div>
        <div style={{ width: 34, height: 34, borderRadius: 99, background: TITIS.lilac, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>▍▍</div>
      </div>
    </div>
  );
}

Object.assign(window, { Phone, ScreenImage, ScreenToday, ScreenStats, ScreenLog });
