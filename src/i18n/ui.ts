// Central i18n configuration. Add a new language by appending its code to
// `locales` and its dictionary to `ui` — routing and SEO pick it up automatically.

export const defaultLang = 'en';
export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

// Human-readable language names (for menus/aria if needed later).
export const languages: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
};

export const ui = {
  en: {
    'brand.name': 'Oleg Petrov',
    'brand.role': 'Network Infrastructure & Low-Voltage Systems',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'home.title': 'Oleg Petrov — Network Infrastructure & Low-Voltage Systems',
    'home.description':
      'Hands-on network infrastructure and low-voltage systems — design, build and commissioning across offices, retail and industrial sites.',
    'home.lead':
      'Hands-on network infrastructure and low-voltage systems — design, build and commissioning of structured cabling, racks, networking, CCTV, UPS, industrial automation and product marking.',
    'home.location': 'Melbourne, Australia (planned relocation)',
    'home.work': 'Selected work',
    'home.about': 'About',
    'home.about.body':
      'Extensive hands-on experience designing, building and maintaining network infrastructure for restaurants, offices, retail and industrial facilities — structured cabling, rack assembly, equipment commissioning, CCTV and surveillance, wireless networking, UPS deployment and troubleshooting.',
    'home.contact': 'Contact',
    'home.contact.linkedin': 'LinkedIn — coming soon',
    'home.contact.email': 'Email — coming soon',
    'footer.tagline': 'Network infrastructure · low-voltage · OT/IT',
    'case.role': 'Role',
    'case.scope': 'Scope',
    'case.site': 'Site',
    'case.period': 'Period',
    'case.result': 'Result',
    'switcher.label': 'Language',
  },
  ru: {
    'brand.name': 'Олег Петров',
    'brand.role': 'Сетевая инфраструктура и слаботочные системы',
    'nav.work': 'Работы',
    'nav.about': 'Обо мне',
    'nav.contact': 'Контакты',
    'home.title': 'Олег Петров — сетевая инфраструктура и слаботочные системы',
    'home.description':
      'Практическая сетевая инфраструктура и слаботочные системы — проектирование, монтаж и пусконаладка на офисных, торговых и промышленных объектах.',
    'home.lead':
      'Практическая сетевая инфраструктура и слаботочные системы — проектирование, монтаж и пусконаладка СКС, стоек, сетей, видеонаблюдения, ИБП, промышленной автоматизации и маркировки продукции.',
    'home.location': 'Мельбурн, Австралия (планируется переезд)',
    'home.work': 'Избранные работы',
    'home.about': 'Обо мне',
    'home.about.body':
      'Большой практический опыт проектирования, монтажа и обслуживания сетевой инфраструктуры для ресторанов, офисов, торговых и промышленных объектов — СКС, сборка стоек, пусконаладка оборудования, видеонаблюдение, беспроводные сети, ИБП и поиск неисправностей.',
    'home.contact': 'Контакты',
    'home.contact.linkedin': 'LinkedIn — скоро',
    'home.contact.email': 'Email — скоро',
    'footer.tagline': 'Сетевая инфраструктура · слаботочные системы · OT/IT',
    'case.role': 'Роль',
    'case.scope': 'Объём',
    'case.site': 'Объект',
    'case.period': 'Период',
    'case.result': 'Результат',
    'switcher.label': 'Язык',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Detect the active locale from a URL pathname (default locale has no prefix). */
export function getLangFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/')[1];
  return isLocale(seg) ? seg : defaultLang;
}

/** Returns a translator bound to a locale, falling back to the default language. */
export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/** Strip any locale prefix from a pathname → a logical path that always starts with '/'. */
export function stripLocale(pathname: string): string {
  const [, seg, ...rest] = pathname.split('/');
  if (isLocale(seg) && seg !== defaultLang) {
    const p = '/' + rest.join('/');
    return p === '/' ? '/' : p;
  }
  return pathname || '/';
}

/** Build a localized URL from a logical path (no locale prefix). */
export function localizeUrl(lang: Locale, logicalPath: string): string {
  const clean = logicalPath.startsWith('/') ? logicalPath : '/' + logicalPath;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}
