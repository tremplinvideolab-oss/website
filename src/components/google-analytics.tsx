'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'GTM-MNMCKZ8W';

export function GoogleAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const consentValue = localStorage.getItem('google_analytics_consent');
    if (consentValue) {
      try {
        const { consent: hasConsented } = JSON.parse(consentValue);
        setConsent(hasConsented === true);
      } catch (e) {
        // Handle old format (simple 'true'/'false' string) for backward compatibility
        const hasConsented = consentValue === 'true';
        setConsent(hasConsented);
      }
    }
  }, []);

  // Return null if tracking ID is not set or consent is not given
  if (!GA_TRACKING_ID || !consent) {
    if (process.env.NODE_ENV !== 'production' && !GA_TRACKING_ID) {
        console.warn("Google Analytics is disabled because NEXT_PUBLIC_GA_ID is not set.");
    }
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
}
