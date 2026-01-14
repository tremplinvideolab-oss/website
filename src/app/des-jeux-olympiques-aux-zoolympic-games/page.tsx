
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/hooks/use-i18n";

export default function ZoolympicGamesPage() {
  const { dict } = useI18n();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Zoolympic Games : Des JO de Paris 2024 à Milan 2026</h1>
        <p className="text-muted-foreground mt-4">Le contenu de cette page est en cours de création.</p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Bientôt disponible</CardTitle>
        </CardHeader>
        <CardContent>
            <p>Revenez bientôt pour découvrir les compétitions palpitantes des Zoolympic Games !</p>
        </CardContent>
      </Card>
    </div>
  );
}
