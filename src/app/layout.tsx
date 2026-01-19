
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from '@/components/ui/toaster';
import { I18nProvider } from '@/components/i18n-provider';
import { GoogleAnalytics } from '@/components/google-analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://tremplin-video-lab.com/'),
  title: 'Tremplin Video Lab : Des scénarios d\'animation orignaux !',
  description: 'Un site de partage de video modernes utilisant les dernièrs outils disponibles.',
  icons: {
    icon: '/logo-blanc.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://tremplin-video-lab.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div dangerouslySetInnerHTML={{ __html: `<!-- Build Version: ${process.env.NEXT_PUBLIC_BUILD_ID} -->` }} />
        <I18nProvider>
          <GoogleAnalytics />
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}
