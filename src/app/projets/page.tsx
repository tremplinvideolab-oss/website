'use client';
import { useI18n } from "@/hooks/use-i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProjetsPage() {
  const { dict } = useI18n();

  const projects = [
    {
        id: 'zoolympic-games',
        title: "Zoolympic Games",
        description: dict.projetsPage.zoolympicGamesDescription,
        imageSrc: "/zoolympic_games.webp",
        imageHint: "cartoon animals race"
    },
    {
        id: 'zoolympic-world',
        title: "Zoolympic World",
        description: dict.projetsPage.zoolympicWorldDescription,
        imageSrc: "/zoolympic_world.webp",
        imageHint: "cartoon tree face"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight mb-8">{dict.projetsPage.title}</h1>
        <p className="text-muted-foreground mt-2">{dict.projetsPage.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden">
            <div className="relative">
                <Image 
                    src={project.imageSrc}
                    alt={`Image for ${project.title}`}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover"
                    data-ai-hint={project.imageHint}
                />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="pt-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-end">
                <Button variant="outline" asChild>
                    <Link href="#">
                        {dict.projetsPage.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
