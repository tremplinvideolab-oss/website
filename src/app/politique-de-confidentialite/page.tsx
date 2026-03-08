
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Politique de confidentialité - Tremplin Video Lab',
    description: 'Politique de confidentialité du site Tremplin Video Lab.',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
      canonical: '/politique-de-confidentialite',
    },
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <h1 className="font-headline text-4xl font-bold tracking-tight mb-8">Politique de confidentialité</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>Dernière mise à jour : 08/03/2026</p>
        
        <section>
          <p>Cette politique de confidentialité décrit nos politiques et procédures sur la collecte, l'utilisation et la divulgation de vos informations lorsque vous utilisez le Service et vous informe de vos droits à la vie privée et de la manière dont la loi vous protège.</p>
        </section>

        <section>
          <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">1. Collecte et utilisation des données personnelles</h2>
          <p>Les types de données personnelles que nous pouvons collecter incluent, mais ne sont pas limités à :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Adresse e-mail :</strong> Lorsque vous vous abonnez à notre newsletter.</li>
            <li><strong>Données d'utilisation :</strong> Collectées automatiquement lors de l'utilisation du site via Google Analytics (si vous y consentez). Cela peut inclure des informations telles que l'adresse IP de votre appareil, le type de navigateur, les pages de notre site que vous visitez, l'heure et la date de votre visite, le temps passé sur ces pages, et d'autres données de diagnostic.</li>
          </ul>
        </section>
        
        <section>
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">2. Utilisation de vos données personnelles</h2>
            <p>Nous pouvons utiliser les données personnelles aux fins suivantes :</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Pour fournir et maintenir notre service :</strong> y compris pour surveiller l'utilisation de notre service.</li>
                <li><strong>Pour vous contacter :</strong> Pour vous envoyer notre newsletter si vous vous y êtes abonné.</li>
                <li><strong>Pour l'analyse de données :</strong> Pour identifier les tendances d'utilisation, et pour évaluer et améliorer notre service.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">3. Cookies</h2>
            <p>Nous utilisons des cookies pour suivre l'activité sur notre service, sous réserve de votre consentement. Les cookies sont des fichiers contenant une petite quantité de données qui peuvent inclure un identifiant unique anonyme.</p>
            <p>Vous pouvez gérer votre consentement aux cookies à tout moment via le lien "Gérer les cookies" situé dans le pied de page de notre site.</p>
        </section>

        <section>
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">4. Vos droits</h2>
            <p>Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition de vos données personnelles. Vous pouvez exercer ce droit en nous contactant à l'adresse e-mail suivante : <Link href="mailto:contact@tremplin-video-lab.com" className="text-primary underline">contact@tremplin-video-lab.com</Link>.</p>
        </section>

        <section>
            <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">5. Modifications de cette politique de confidentialité</h2>
            <p>Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous notifierons de tout changement en publiant la nouvelle politique de confidentialité sur cette page.</p>
        </section>
      </div>
    </div>
  );
}
