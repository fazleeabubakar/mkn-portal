import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { getContent, Language, Content } from '../data/content';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('mkn-lang');
      if (saved === 'en' || saved === 'bm') return saved;
    } catch {
      // localStorage not available
    }
    return 'bm';
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem('mkn-lang', l);
    } catch {
      // localStorage not available
    }
  }, []);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: getContent(lang),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
