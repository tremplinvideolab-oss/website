
'use client';
import { useI18n } from '@/hooks/use-i18n';
import { Logo } from './logo';
import { NewsletterForm } from './newsletter-form';

export function SiteFooter() {
  const { dict } = useI18n();
  return (
    <footer className="border-t bg-muted/20">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center space-x-2 mb-4">
              <Logo size={32} />
              <p className="text-lg font-bold font-headline">
                Tremplin Video Lab
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Création de vidéos d'animation originales, alliant outils classiques et IA générative.
            </p>
          </div>
          <div className="md:col-span-8 lg:col-span-6 lg:col-start-7">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tremplin Video Lab. Tous droits réservés.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            {dict.siteFooter.builtWithPassion}
          </p>
        </div>
      </div>
    </footer>
  );
}
