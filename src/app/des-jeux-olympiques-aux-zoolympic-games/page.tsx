
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/hooks/use-i18n";
import { ListChecks } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

export default function ZoolympicGamesPage() {
  const { dict } = useI18n();

  const features = [
    "La tortue est sympathique et vaillante !",
    "L'ours est plein de roublardise ...",
    "Le lapin et le renard ont des pouvoirs de métamorphoses étranges et surprenants !",
    "Notre mouffette arbitre, est juste, et fait preuve de compassion.",
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight">Zoolympic Games : Des Jeux Olympiques de Paris 2024 aux JO 2026 de Milan Cortina !</h1>
        </div>
      </div>
      
      <div className="w-full bg-white py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="flex justify-center items-center mb-6">
        <Image 
            src="/images/logo-projects/logo_zoolympic_games.png" 
            alt="Zoolympic Games Logo"
            width={512}
            height={512}
        />
    </div>
    <div className="max-w-4xl mx-auto">
      <p className="text-lg mb-6 text-gray-800">
        Zoolympic Games réinvente l’esprit des Jeux Olympiques à travers un univers peuplé d’animaux.
      </p>

      <p className="text-lg mb-8 text-gray-800">
        L’histoire s’ouvre sur une course reliant les Jeux Olympiques de Paris 2024 aux Jeux Olympiques de Milan-Cortina 2026, point de départ de notre narration et de nos premiers personnages.
      </p>

      <Card className="bg-muted/40 border-0 text-gray-800">
        <CardHeader>
          <CardTitle>
            Au fil de cette course, nos premiers personnages révèlent leur personnalité et leurs aptitudes :
          </CardTitle>
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

      <p className="text-lg mt-8 text-gray-800">
        Zoolympic Games, c’est aussi un univers plus large qui a conduit à la création du projet{" "}
        <Link
          href="/des-jeux-olympiques-au-zoolympic-world"
          className="text-primary hover:underline font-bold"
        >
          Zoolympic World
        </Link>
        .
      </p>
    </div>
  </div>
</div>

    </>
  );
}
