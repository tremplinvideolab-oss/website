
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/hooks/use-i18n";

export default function ZoolympicWorldPage() {
  const { dict } = useI18n();

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-headline text-4xl font-bold tracking-tight">Zoolympic World : Des vidéos des personnages des Zoolympic Games dans des contextes variés</h1>
        </div>
      </div>
      
      <div className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <p className="text-lg mb-6 text-gray-800">
                    Zoolympic World : Découvrez nos animaux athlètes dans des contextes non-sportifs !
                </p>
                <p className="text-lg mb-6 text-gray-800">
                    Nos animaux sont athlétiques, mais ont aussi une vie en dehors et des activités qui peuvent dépasser le monde du sport.
                </p>
                <p className="text-lg mb-6 text-gray-800">
                    C'est pourquoi, avant le début des Jeux Olympique de Milan-Cortina 2026, nous avons choisi de débuter, en plus des Zoolympic Games, une série de vidéo mettant en scène nos animaux dans leur quotidien.
                </p>
                <p className="text-lg mb-6 text-gray-800">
                    Galettes, bataille amicale à l'épée, ballade dans la forêt... Les passes-temps de nos Zoolympics pourront vous surprendre, et leur lieu d'habitation également !
                </p>
            </div>
        </div>
      </div>
    </>
  );
}
