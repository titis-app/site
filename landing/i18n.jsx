// i18n — language context + dictionaries for the Titis landing.
// Languages: es (Spanish, default), en (English), ca (Catalan).

const TITIS_LANGS = [
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ca', label: 'Català',  short: 'CA' },
];

const TITIS_DICT = {
  // ── Nav
  nav: {
    records:   { es: 'Registros',  en: 'Records',    ca: 'Registres' },
    family:    { es: 'Familia',    en: 'Family',     ca: 'Família' },
    features:  { es: 'Funciones',  en: 'Features',   ca: 'Funcions' },
    faq:       { es: 'FAQ',        en: 'FAQ',        ca: 'FAQ' },
    download:  { es: 'Descargar',  en: 'Download',   ca: 'Descarrega' },
    menuOpen:  { es: 'Abrir menú', en: 'Open menu',  ca: 'Obre el menú' },
    menuClose: { es: 'Cerrar menú',en: 'Close menu', ca: 'Tanca el menú' },
    langLabel: { es: 'Idioma',     en: 'Language',   ca: 'Idioma' },
  },

  // ── Hero
  hero: {
    badge: {
      es: 'Nuevo · para iPhone y Android',
      en: 'New · for iPhone and Android',
      ca: 'Nou · per a iPhone i Android',
    },
    h1a: { es: 'Cada biberón,',  en: 'Every bottle,',  ca: 'Cada biberó,' },
    h1b: { es: 'cada siesta,',   en: 'every nap,',     ca: 'cada migdiada,' },
    h1c: { es: 'cada sonrisa',   en: 'every smile',    ca: 'cada somriure' },
    h1d: { es: 'en un solo sitio.', en: 'all in one place.', ca: 'en un sol lloc.' },
    ledeSuffix: {
      es: ' es el baby log tracker pensado para familias primerizas. Registrad tomas, sueños, pañales y peso — tú, tu pareja y los abuelos, todos sincronizados en tiempo real.',
      en: ' is the baby log tracker made for first-time families. Log feeds, sleep, diapers and weight — you, your partner and the grandparents, all in sync in real time.',
      ca: ' és el baby log tracker pensat per a famílies primerenques. Registreu preses, son, bolquers i pes — tu, la teva parella i els avis, tots sincronitzats en temps real.',
    },
    ratingBlurbSuffix: {
      es: 'Miles de familias ya registran con ',
      en: 'Thousands of families already log with ',
      ca: 'Milers de famílies ja registren amb ',
    },
    alts: {
      login: {
        es: 'Pantalla de registro en titis',
        en: 'titis sign-up screen',
        ca: 'Pantalla de registre a titis',
      },
      feed: {
        es: 'Feed diario de titis con tomas, siestas y pañales',
        en: 'titis daily feed with feeds, naps and diapers',
        ca: 'Feed diari de titis amb preses, migdiades i bolquers',
      },
    },
  },

  // ── Download button
  download: {
    forIOS:  { es: 'Descargar para', en: 'Download for', ca: 'Descarrega per a' },
    forAndroid: { es: 'Disponible en', en: 'Available on', ca: 'Disponible a' },
  },

  // ── Record types (5 cards)
  records: {
    kicker: { es: 'Los cinco registros', en: 'The five records', ca: 'Els cinc registres' },
    title: {
      es: 'Todo el día a día de tu bebé, sin abrir diez apps.',
      en: "Your baby's whole day, without opening ten apps.",
      ca: 'Tot el dia a dia del teu nadó, sense obrir deu apps.',
    },
    sub: {
      es: 'Titis cubre los cinco grandes registros del día a día. Un toque para anotarlos, un vistazo para entenderlos.',
      en: 'Titis covers the five core daily records. One tap to log them, one glance to understand them.',
      ca: 'Titis cobreix els cinc grans registres del dia a dia. Un toc per anotar-los, una ullada per entendre-los.',
    },
    items: [
      {
        title: { es: 'Alimentación', en: 'Feeding', ca: 'Alimentació' },
        body: {
          es: 'Lactancia materna con pecho izquierdo, derecho o ambos. Biberón con cantidad exacta. Duración de cada toma.',
          en: 'Breastfeeding with left, right or both sides. Bottle with exact amount. Duration of each feed.',
          ca: 'Lactància materna amb pit esquerre, dret o tots dos. Biberó amb quantitat exacta. Durada de cada presa.',
        },
      },
      {
        title: { es: 'Sueño', en: 'Sleep', ca: 'Son' },
        body: {
          es: 'Inicio y fin de cada siesta o sueño nocturno. Live Activity en iOS: cronómetro en la Dynamic Island y pantalla de bloqueo.',
          en: 'Start and end of every nap or night sleep. iOS Live Activity: timer in the Dynamic Island and on the lock screen.',
          ca: "Inici i fi de cada migdiada o son nocturn. Live Activity a iOS: cronòmetre a la Dynamic Island i a la pantalla de bloqueig.",
        },
      },
      {
        title: { es: 'Pañales', en: 'Diapers', ca: 'Bolquers' },
        body: {
          es: 'Pipí, caca o ambos en un toque. Consulta tendencias diarias y semanales con gráficos claros.',
          en: 'Pee, poop or both in one tap. Check daily and weekly trends with clear charts.',
          ca: 'Pipí, caca o tots dos amb un toc. Consulta tendències diàries i setmanals amb gràfics clars.',
        },
      },
      {
        title: { es: 'Peso', en: 'Weight', ca: 'Pes' },
        body: {
          es: 'Seguimiento con gráficos de evolución. Perfecto para las visitas al pediatra y comparativas con percentiles.',
          en: 'Track with growth charts. Perfect for paediatrician visits and percentile comparisons.',
          ca: 'Seguiment amb gràfics d’evolució. Perfecte per a les visites al pediatre i comparatives amb percentils.',
        },
      },
      {
        title: { es: 'Notas', en: 'Notes', ca: 'Notes' },
        body: {
          es: 'Cualquier momento con texto libre y emoji personalizado. Primera sonrisa, primera palabra, dudas para la cita…',
          en: 'Any moment as free text with a custom emoji. First smile, first word, questions for the appointment…',
          ca: 'Qualsevol moment amb text lliure i emoji personalitzat. Primer somriure, primera paraula, dubtes per a la visita…',
        },
      },
    ],
  },

  // ── Family
  family: {
    kicker: { es: 'Familia compartida', en: 'Shared family', ca: 'Família compartida' },
    title: {
      es: 'Criar a un bebé es cosa de equipo.',
      en: 'Raising a baby is a team effort.',
      ca: 'Criar un nadó és feina d’equip.',
    },
    body: {
      es: 'Invita a tu pareja, a los abuelos o a la persona que cuida al bebé. Todos ven la información al instante, sin mensajes cruzados ni "¿le tocaba biberón?".',
      en: 'Invite your partner, the grandparents, or whoever takes care of the baby. Everyone sees the info instantly — no crossed messages, no "was it bottle time?".',
      ca: "Convida la teva parella, els avis o la persona que cuida el nadó. Tothom veu la informació a l’instant, sense missatges creuats ni «li tocava biberó?».",
    },
    items: [
      [
        { es: 'Grupos familiares',  en: 'Family groups',          ca: 'Grups familiars' },
        { es: 'Invita por código o email.', en: 'Invite by code or email.', ca: 'Convida per codi o email.' },
      ],
      [
        { es: 'Roles personalizables', en: 'Custom roles', ca: 'Rols personalitzables' },
        { es: 'Admin, miembro o invitado.', en: 'Admin, member or guest.', ca: 'Admin, membre o convidat.' },
      ],
      [
        { es: 'Sincronización en tiempo real', en: 'Real-time sync', ca: 'Sincronització en temps real' },
        { es: 'Entre todos los dispositivos.', en: 'Across every device.', ca: 'Entre tots els dispositius.' },
      ],
      [
        { es: 'Un grupo, varios bebés', en: 'One group, several babies', ca: 'Un grup, diversos nadons' },
        { es: 'Perfecto para gemelos o hermanos.', en: 'Great for twins or siblings.', ca: 'Perfecte per a bessons o germans.' },
      ],
    ],
    members: [
      { n: 'Marta',   role: { es: 'Mamá · Admin',   en: 'Mum · Admin',    ca: 'Mare · Admin' } },
      { n: 'Javi',    role: { es: 'Papá · Admin',   en: 'Dad · Admin',    ca: 'Pare · Admin' } },
      { n: 'Abuela',  role: { es: 'Miembro',        en: 'Member',         ca: 'Membre' } },
      { n: 'Canguro', role: { es: 'Invitada',       en: 'Guest',          ca: 'Convidada' } },
      { n: 'Abuelo',  role: { es: 'Miembro',        en: 'Member',         ca: 'Membre' } },
    ],
    babyName: { es: 'Lucía · 4 meses', en: 'Lucía · 4 months', ca: 'Lucía · 4 mesos' },
    // Display the 4 non-admin members' first-letter correctly in ES/EN/CA
    // (these strings are NOT shown — just the n initial)
  },

  // ── Smart features (3 cards)
  smart: {
    kicker: { es: 'Funciones inteligentes', en: 'Smart features', ca: 'Funcions intel·ligents' },
    title:  { es: 'Se adapta al teléfono, no al revés.', en: 'It adapts to your phone, not the other way around.', ca: "S'adapta al telèfon, no al revés." },
    la: {
      kicker: { es: 'Live Activity · iOS', en: 'Live Activity · iOS', ca: 'Live Activity · iOS' },
      title: {
        es: 'Sabes cuánto lleva dormido sin abrir la app.',
        en: "See how long they've been asleep without opening the app.",
        ca: 'Saps quant fa que dorm sense obrir l’app.',
      },
      body: {
        es: 'El contador de sueño aparece en la Dynamic Island y en la pantalla de bloqueo. Un vistazo y listo.',
        en: 'The sleep timer shows in the Dynamic Island and on the lock screen. One glance and done.',
        ca: 'El comptador de son apareix a la Dynamic Island i a la pantalla de bloqueig. Una ullada i prou.',
      },
      lockLabel: { es: 'PANTALLA DE BLOQUEO', en: 'LOCK SCREEN', ca: 'PANTALLA DE BLOQUEIG' },
      sleeping:  { es: 'Lucía está durmiendo', en: 'Lucía is sleeping', ca: 'La Lucía està dormint' },
      stop:      { es: 'Parar', en: 'Stop', ca: 'Atura' },
    },
    widget: {
      kicker: { es: 'Widget iPhone', en: 'iPhone widget', ca: 'Widget iPhone' },
      title: {
        es: 'La info de tus bebés en la pantalla de inicio.',
        en: "Your babies' info right on the home screen.",
        ca: 'La info dels teus nadons a la pantalla d’inici.',
      },
      lastFeed: { es: 'ÚLTIMA TOMA', en: 'LAST FEED', ca: 'ÚLTIMA PRESA' },
      sleep:    { es: 'SUEÑO', en: 'SLEEP', ca: 'SON' },
      active:   { es: 'Activo', en: 'Active', ca: 'Actiu' },
      diaper:   { es: 'PAÑAL', en: 'DIAPER', ca: 'BOLQUER' },
      weight:   { es: 'PESO', en: 'WEIGHT', ca: 'PES' },
    },
    notif: {
      kicker: { es: 'Notificaciones', en: 'Notifications', ca: 'Notificacions' },
      title: { es: 'Avisos de la familia, no spam.', en: 'Family alerts, not spam.', ca: 'Avisos de la família, no spam.' },
      body:  { es: 'Solo lo importante, solo cuando pasa.', en: 'Only what matters, only when it happens.', ca: 'Només el que importa, només quan passa.' },
      n1t:   { es: 'Javi registró un biberón', en: 'Javi logged a bottle', ca: 'El Javi ha registrat un biberó' },
      n1s:   { es: '120 ml · hace 5 min', en: '120 ml · 5 min ago', ca: '120 ml · fa 5 min' },
      n2t:   { es: 'Abuela inició una siesta', en: 'Grandma started a nap', ca: "L'àvia ha iniciat una migdiada" },
      n2s:   { es: 'hace 1 min', en: '1 min ago', ca: 'fa 1 min' },
    },
  },

  // ── White noise
  noise: {
    kicker: {
      es: 'Bonus — ruido blanco integrado',
      en: 'Bonus — built-in white noise',
      ca: 'Bonus — soroll blanc integrat',
    },
    title: {
      es: 'Seis sonidos para dormir al bebé.',
      en: 'Six sounds to lull the baby to sleep.',
      ca: 'Sis sons per dormir el nadó.',
    },
    body: {
      es: 'Con temporizador de 15, 30 o 60 minutos. Reproducción en segundo plano. Sin salir de la app ni instalar otra.',
      en: 'With a 15, 30 or 60-minute timer. Plays in the background. No leaving the app, no second install.',
      ca: 'Amb temporitzador de 15, 30 o 60 minuts. Reproducció en segon pla. Sense sortir de l’app ni instal·lar-ne cap altra.',
    },
    sounds: [
      { es: 'Ruido blanco',   en: 'White noise',   ca: 'Soroll blanc' },
      { es: 'Ruido rosa',     en: 'Pink noise',    ca: 'Soroll rosa' },
      { es: 'Secadora',       en: 'Dryer',         ca: 'Assecadora' },
      { es: 'Calefactor',     en: 'Heater',        ca: 'Calefactor' },
      { es: 'Olas del mar',   en: 'Ocean waves',   ca: 'Onades del mar' },
      { es: 'Lluvia',         en: 'Rain',          ca: 'Pluja' },
    ],
  },

  // ── FAQ
  faq: {
    kicker: { es: 'Preguntas frecuentes', en: 'FAQ', ca: 'Preguntes freqüents' },
    title: {
      es: 'Lo que nos preguntan las familias.',
      en: 'What families ask us.',
      ca: 'El que ens pregunten les famílies.',
    },
    items: [
      [
        { es: '¿Titis es gratis?', en: 'Is titis free?', ca: 'Titis és gratis?' },
        {
          es: 'Puedes empezar a registrar gratis. Las funciones premium (familia completa, estadísticas avanzadas, galería sin límite) están disponibles con una suscripción familiar.',
          en: 'You can start logging for free. Premium features (full family, advanced stats, unlimited gallery) come with a family subscription.',
          ca: 'Pots començar a registrar gratis. Les funcions premium (família completa, estadístiques avançades, galeria sense límit) estan disponibles amb una subscripció familiar.',
        },
      ],
      [
        { es: '¿Mis datos están seguros?', en: 'Is my data safe?', ca: 'Les meves dades estan segures?' },
        {
          es: 'Sí. Todo se sincroniza cifrado en la nube y solo tú y las personas que invites a tu grupo familiar tenéis acceso. Puedes exportar o borrar tus datos cuando quieras.',
          en: 'Yes. Everything syncs encrypted to the cloud, and only you and the people you invite to your family group have access. You can export or delete your data whenever you want.',
          ca: 'Sí. Tot se sincronitza xifrat al núvol i només tu i les persones que convides al teu grup familiar hi teniu accés. Pots exportar o esborrar les teves dades quan vulguis.',
        },
      ],
      [
        { es: '¿Funciona para gemelos o varios hijos?', en: 'Does it work for twins or multiple kids?', ca: 'Funciona per a bessons o diversos fills?' },
        {
          es: 'Perfectamente. Un solo grupo familiar puede tener varios bebés; cada registro se asocia al bebé correspondiente y las estadísticas se pueden ver por separado o combinadas.',
          en: "Perfectly. A single family group can have several babies; each log is tied to the right baby, and stats can be viewed separately or combined.",
          ca: 'Perfectament. Un sol grup familiar pot tenir diversos nadons; cada registre s’associa al nadó corresponent i les estadístiques es poden veure per separat o combinades.',
        },
      ],
      [
        { es: '¿Puedo invitar a los abuelos si no saben mucho de apps?', en: 'Can I invite the grandparents if they’re not great with apps?', ca: 'Puc convidar els avis si no en saben gaire, d’apps?' },
        {
          es: 'Sí. Les envías un código o un enlace, y ven el feed con el diseño simplificado. Pueden registrar desde el primer minuto.',
          en: 'Yes. You send them a code or a link, and they see the feed in simplified mode. They can log from minute one.',
          ca: 'Sí. Els envies un codi o un enllaç i veuen el feed amb el disseny simplificat. Poden registrar des del primer minut.',
        },
      ],
      [
        { es: '¿En qué idiomas está disponible?', en: 'What languages is it available in?', ca: 'En quins idiomes està disponible?' },
        {
          es: 'En español, inglés y catalán. Titis detecta automáticamente el idioma del sistema.',
          en: 'In Spanish, English and Catalan. Titis detects the system language automatically.',
          ca: 'En castellà, anglès i català. Titis detecta automàticament l’idioma del sistema.',
        },
      ],
      [
        { es: '¿Qué dispositivos soporta?', en: 'Which devices are supported?', ca: 'Quins dispositius suporta?' },
        {
          es: 'iPhone (iOS 16+) con Live Activity y widgets, y Android (8+) con widgets y notificaciones.',
          en: 'iPhone (iOS 16+) with Live Activity and widgets, and Android (8+) with widgets and notifications.',
          ca: 'iPhone (iOS 16+) amb Live Activity i widgets, i Android (8+) amb widgets i notificacions.',
        },
      ],
    ],
  },

  // ── Final CTA
  cta: {
    title: { es: 'Registra. Comparte. Recuerda.', en: 'Log it. Share it. Remember it.', ca: 'Registra. Comparteix. Recorda.' },
    tail:  { es: ', porque cada momento cuenta.', en: ', because every moment counts.', ca: ', perquè cada moment compta.' },
    iosBtn:     { es: 'Descargar para iPhone',  en: 'Download for iPhone',  ca: 'Descarrega per a iPhone' },
    androidBtn: { es: 'Descargar para Android', en: 'Download for Android', ca: 'Descarrega per a Android' },
  },

  // ── Footer
  footer: {
    blurb: {
      es: 'Hecho con cariño para familias primerizas. Cada pantalla, cada función, pensada para hacerte la vida un poco más fácil.',
      en: 'Made with love for first-time families. Every screen, every feature, designed to make your life a little easier.',
      ca: 'Fet amb carinyo per a famílies primerenques. Cada pantalla, cada funció, pensada per fer-te la vida una mica més fàcil.',
    },
    cols: {
      app: {
        title: { es: 'App', en: 'App', ca: 'App' },
        items: [
          { es: 'Descargar iPhone',  en: 'Download iPhone',  ca: 'Descarrega iPhone' },
          { es: 'Descargar Android', en: 'Download Android', ca: 'Descarrega Android' },
          { es: 'Novedades',         en: "What's new",        ca: 'Novetats' },
          { es: 'Roadmap',           en: 'Roadmap',          ca: 'Roadmap' },
        ],
      },
      company: {
        title: { es: 'Empresa', en: 'Company', ca: 'Empresa' },
        items: [
          { es: 'Sobre nosotros', en: 'About us', ca: 'Sobre nosaltres' },
          { es: 'Blog',           en: 'Blog',     ca: 'Blog' },
          { es: 'Prensa',         en: 'Press',    ca: 'Premsa' },
          { es: 'Contacto',       en: 'Contact',  ca: 'Contacte' },
        ],
      },
      legal: {
        title: { es: 'Legal', en: 'Legal', ca: 'Legal' },
        items: [
          { es: 'Privacidad', en: 'Privacy', ca: 'Privadesa' },
          { es: 'Términos',   en: 'Terms',   ca: 'Termes' },
          { es: 'Cookies',    en: 'Cookies', ca: 'Galetes' },
          { es: 'Seguridad',  en: 'Security',ca: 'Seguretat' },
        ],
      },
    },
    copyright: {
      es: '© 2026 · Hecho en Barcelona.',
      en: '© 2026 · Made in Barcelona.',
      ca: '© 2026 · Fet a Barcelona.',
    },
  },
};

// ─── Context + hook ────────────────────────────────────────────────
const LangContext = React.createContext({ lang: 'es', setLang: () => {} });

function LangProvider({ children }) {
  const [lang, setLangState] = React.useState(() => {
    try {
      const saved = localStorage.getItem('titis_lang');
      if (saved && ['es','en','ca'].includes(saved)) return saved;
      const nav = (navigator.language || 'es').slice(0,2).toLowerCase();
      if (['es','en','ca'].includes(nav)) return nav;
    } catch (e) {}
    return 'es';
  });
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem('titis_lang', l); } catch (e) {}
    try { document.documentElement.lang = l; } catch (e) {}
  };
  React.useEffect(() => { try { document.documentElement.lang = lang; } catch (e) {} }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

function useLang() { return React.useContext(LangContext); }

// Resolve a value that is either a string or { es, en, ca } to the current lang.
function pick(val, lang) {
  if (val == null) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object') return val[lang] ?? val.es ?? '';
  return String(val);
}

Object.assign(window, { TITIS_LANGS, TITIS_DICT, LangProvider, LangContext, useLang, pick });
