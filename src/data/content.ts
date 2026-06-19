// ===== MKN Portal Content - Language Router =====

import { en } from './content.en';
import { bm } from './content.bm';

export type Language = 'en' | 'bm';
export type Content = typeof en;

export function getContent(lang: Language): Content {
  return lang === 'bm' ? bm : en;
}
