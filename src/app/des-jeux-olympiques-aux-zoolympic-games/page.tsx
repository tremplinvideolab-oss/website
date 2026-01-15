
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/hooks/use-i18n";
import { ListChecks } from "lucide-react";

export default function ZoolympicGamesPage() {
  const { dict } = useI18n();

  const features = [
    "La tortue est sympathique et vaillante !",
    "L'ours est plein de roublardise ...",
    "Et le lapin et le renard ont des pouvoirs de métamorphoses étranges !",
    "Notre mouffette arbitre, est juste, et fait preuve de compassion.",
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">Zoolympic Games : Des Jeux Olympiques de Paris 2024 aux JO 2026 de Milan Cortina !</h1>
      </div>
      
      <div className="bg-muted/30 p-8 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            Zoolympic Games c'est les jeux olympiques des animaux !
          </p>
          <p className="text-lg mb-8">
            L'histoire démarre avec une course amenant les personnages des J.O de Paris 2024 aux Jeux Olympiques de Milan-Cortina 2026 !
          </p>

          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Durant cette course, nos premiers personnages dévoilent leur caractère et leur facultés :</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ListChecks className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <p className="text-lg mt-8">
            Mais les Zoolympic Games, c'est aussi tout un monde autour ayant amené à la création du projet Zoolympic World.
          </p>
        </div>
      </div>
    </div>
  );
}
