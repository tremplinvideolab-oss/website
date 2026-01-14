
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/hooks/use-i18n";

export default function ZoolympicWorldPage() {
  const { dict } = useI18n();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Zoolympic World : Des vidéos des personnages des Zoolympic Games dans des contextes variés</h1>
      </div>
      
      <div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p className="text-muted-foreground">ici l' intro</p>
        </div>
        
        <div className="mt-8">
            <h2 className="text-2xl font-bold">Contenu</h2>
            <p>ici le contenu</p>
        </div>
      </div>
    </div>
  );
}
