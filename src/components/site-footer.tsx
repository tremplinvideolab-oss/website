'use client';
import { useI18n } from '@/hooks/use-i18n';
import { Logo } from './logo';

export function SiteFooter() {
  const { dict } = useI18n();
  return (
    <footer className="border-t bg-muted/20">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center space-x-2">
          <Logo size={32} />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            <span className="font-bold font-headline">Tremplin Video Lab</span> © 2026
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">{dict.siteFooter.builtWithPassion}</p>
      </div>
    </footer>
  );
}
