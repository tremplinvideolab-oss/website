'use client';
import { useI18n } from '@/hooks/use-i18n';
import { Logo } from './logo';
import Link from 'next/link';
import { Button } from './ui/button';
import { useCookieConsent } from '@/hooks/use-cookie-consent';

export function SiteFooter() {
  const { dict } = useI18n();
  const { showBanner } = useCookieConsent();

  return (
    <footer className="border-t bg-muted/20">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-auto md:py-10">
        <div className="flex items-center space-x-2">
          <Logo size={32} />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            <span className="font-bold font-headline">Tremplin Video Lab</span> © 2026
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-sm text-muted-foreground">
          <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
          <Link href="/politique-de-confidentialite" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
          <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary" onClick={showBanner}>Gérer les cookies</Button>
          <Link href="/plan-du-site" className="hover:text-primary transition-colors">Plan du site</Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">{dict.siteFooter.builtWithPassion}</p>
      </div>
    </footer>
  );
}
