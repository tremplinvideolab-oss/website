'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('google_analytics_consent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleDecision = (consent: boolean) => {
    localStorage.setItem('google_analytics_consent', String(consent));
    setShowBanner(false);
    if (consent) {
      // Reload the page to apply the consent change and start tracking
      window.location.reload();
    }
  };

  if (!showBanner) {
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
