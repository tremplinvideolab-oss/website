
'use client';
import { Clapperboard } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

export function SiteFooter() {
  const { dict } = useI18n();
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center space-x-2">
          <Clapperboard className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            <span className="font-bold font-headline">VideoVerse</span> &copy; {new Date().getFullYear()}
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          {dict.siteFooter.builtWithPassion}
        </p>
      </div>
    </footer>
  );
}
