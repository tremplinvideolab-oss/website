
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/hooks/use-i18n";

export default function ZoolympicWorldPage() {
  const { dict } = useI18n();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Zoolympic World : Des vidéos des personnages des Zoolympic Games dans des contextes variés</h1>
        <p className="text-muted-foreground mt-4">Le contenu de cette page est en cours de création.</p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Bientôt disponible</CardTitle>
        </CardHeader>
        <CardContent>
            <p>Revenez bientôt pour découvrir le monde des Zoolympics !</p>
        </CardContent>
      </Card>
    </div>
  );
}
