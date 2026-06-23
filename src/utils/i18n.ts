import es from "../i18n/es.json";
import en from "../i18n/en.json";

export type Lang = 'es' | 'en';
export type Messages = typeof es | typeof en;

function normalizePath(path: string): string {
  if (!path) {
    return '/';
  }

  let normalized = path.trim();
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }
  if (normalized !== '/' && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }
  return normalized || '/';
}

export function getLangFromPath(path: string): Lang {
  const normalized = normalizePath(path);
  return normalized === '/en' || normalized.startsWith('/en/') ? 'en' : 'es';
}

export function getPathWithLang(path: string, targetLang: Lang): string {
  const normalized = normalizePath(path);

  if (targetLang === 'en') {
    if (normalized === '/') {
      return '/en';
    }
    if (normalized === '/en' || normalized.startsWith('/en/')) {
      return normalized;
    }
    return '/en' + normalized;
  }

  if (targetLang === 'es') {
    if (normalized === '/en') {
      return '/';
    }
    if (normalized.startsWith('/en/')) {
      return normalized.replace(/^\/en/, '') || '/';
    }
    return normalized;
  }

  return normalized;
}

export function getMessages(lang: string): Messages {
  return lang === "en" ? (en as any) : (es as any);
}

export function t(messages: Messages, path: string): string {
  const parts = path.split('.');
  let cur: any = messages;
  for (const p of parts) {
    if (!cur) return '';
    cur = cur[p];
  }
  return typeof cur === 'string' ? cur : '';
}
