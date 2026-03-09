
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mentions Légales - Tremplin Video Lab',
    description: 'Mentions légales du site Tremplin Video Lab.',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
      canonical: '/mentions-legales',
    },
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight mb-8">Mentions Légales</h1>
        
        <div className="space-y-6 text-muted-foreground">
            <section>
                <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">1. Éditeur du site</h2>
                <p>Le site Tremplin Video Lab est édité par le collectif Tremplin Video Lab.</p>
                <address className="not-italic">
                <strong>Contact :</strong> contact@tremplin-video-lab.com
                </address>
            </section>
            
            <section>
                <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">2. Hébergement</h2>
                <p>
                Le site est hébergé par la société OVH SAS.<br />
                <strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix - France
                </p>
            </section>
            
            <section>
                <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">3. Propriété intellectuelle</h2>
                <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
            </section>

            <section>
                <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">4. Données personnelles</h2>
                <p>
                    Les informations recueillies font l’objet d’un traitement informatique destiné à la gestion des abonnements à notre newsletter et à l'analyse de l'audience via Google Analytics (sous réserve de votre consentement). Pour plus de détails, veuillez consulter notre <Link href="/politique-de-confidentialite" className="text-primary underline">Politique de confidentialité</Link>.
                </p>
            </section>
            
            <section>
                <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">5. Cookies</h2>
                <p>
                    Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Vous pouvez gérer vos préférences en matière de cookies à tout moment via le lien "Gérer les cookies" dans le pied de page.
                </p>
            </section>
        </div>
    </div>
  );
}
