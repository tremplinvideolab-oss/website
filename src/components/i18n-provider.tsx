
'use client';

import { createContext, useState, ReactNode } from 'react';
import { dictionaries, Locale } from '@/lib/dictionaries';

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: typeof dictionaries.en;
};

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children, initialLocale = 'fr' }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const dict = dictionaries[locale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, dict }}>
      {children}
    </I18nContext.Provider>
  );
}
