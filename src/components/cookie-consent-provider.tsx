'use client';

import { createContext, useState, ReactNode, useCallback } from 'react';

type CookieConsentContextType = {
  isBannerOpen: boolean;
  showBanner: () => void;
  hideBanner: () => void;
};

export const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  const showBanner = useCallback(() => setIsBannerOpen(true), []);
  const hideBanner = useCallback(() => setIsBannerOpen(false), []);

  return (
    <CookieConsentContext.Provider value={{ isBannerOpen, showBanner, hideBanner }}>
      {children}
    </CookieConsentContext.Provider>
  );
}
