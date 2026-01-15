
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/hooks/use-i18n";
import Link from "next/link";

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
            <div className="text-gray-800 space-y-6">
              <p className="leading-relaxed">
                Zoolympic World : découvrez nos animaux athlètes dans des contextes extra-sportifs.
              </p>
              <p className="leading-relaxed">
                Au-delà de la compétition, nos personnages ont une vie, des habitudes et des centres d’intérêt qui dépassent le seul cadre du sport.
              </p>
              <p className="leading-relaxed">
                C’est pourquoi, en amont des Jeux Olympiques de Milan-Cortina 2026, nous lançons — en complément de <Link href="/des-jeux-olympiques-aux-zoolympic-games" className="text-primary hover:underline font-bold">Zoolympic Games</Link> — une série de vidéos qui met en scène nos animaux dans leur quotidien.
              </p>
              <p className="leading-relaxed">
                Galettes, duels amicaux à l’épée, balades en forêt… leurs passe-temps pourraient vous surprendre, tout comme les lieux où ils évoluent.
              </p>
            </div>
        </div>
      </div>
    </>
  );
}
