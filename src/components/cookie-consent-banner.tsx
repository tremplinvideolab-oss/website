'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

export function CookieConsentBanner() {
  const { isBannerOpen, showBanner, hideBanner } = useCookieConsent();

  useEffect(() => {
    const consentValue = localStorage.getItem('google_analytics_consent');
    if (!consentValue) {
      showBanner();
    }
  }, [showBanner]);

  useEffect(() => {
    if (isBannerOpen) {
      document.body.classList.add('cookie-banner-open');
    } else {
      document.body.classList.remove('cookie-banner-open');
    }
    return () => {
      document.body.classList.remove('cookie-banner-open');
    };
  }, [isBannerOpen]);

  const handleDecision = (consent: boolean) => {
    const consentData = {
      consent: consent,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('google_analytics_consent', JSON.stringify(consentData));
    hideBanner();
    if (consent) {
      // Reload the page to apply the consent change and start tracking
      window.location.reload();
    }
  };

  if (!isBannerOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-card border-t border-border shadow-lg print:hidden">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
        <p className="text-sm text-card-foreground text-center sm:text-left">
          Nous utilisons des cookies pour analyser le trafic et améliorer votre expérience.
        </p>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button size="sm" onClick={() => handleDecision(true)}>✔ Accepter</Button>
          <Button size="sm" variant="secondary" onClick={() => handleDecision(false)}>✔ Refuser</Button>
          <Button size="sm" variant="outline" disabled>✔ Personnaliser</Button>
          <Button size="sm" variant="link" onClick={() => handleDecision(false)}>Continuer sans accepter</Button>
        </div>
      </div>
    </div>
  );
}
