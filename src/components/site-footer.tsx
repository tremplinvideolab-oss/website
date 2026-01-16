
'use client';
import { useI18n } from '@/hooks/use-i18n';
import { Logo } from './logo';
import { NewsletterForm } from './newsletter-form';

export function SiteFooter() {
  const { dict } = useI18n();
  return (
    <footer className="border-t bg-muted/20">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row"><div class="flex items-center space-x-2"><Logo size={32} /><p class="text-center text-sm leading-loose text-muted-foreground md:text-left"><span class="font-bold font-headline">Tremplin Video Lab</span> © 2026</p></div><p class="text-center text-sm text-muted-foreground">Construit avec passion.</p></div>
    </footer>
  );
}
