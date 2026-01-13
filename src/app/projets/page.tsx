'use client';
import { useI18n } from "@/hooks/use-i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjetsPage() {
  const { dict } = useI18n();

  const projects = [
    {
        id: 'zoolympic-games',
        title: "Zoolympic Games",
        description: dict.projetsPage.zoolympicGamesDescription,
    },
    {
        id: 'zoolympic-world',
        title: "Zoolympic World",
        description: dict.projetsPage.zoolympicWorldDescription,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight">{dict.projetsPage.title}</h1>
        <p className="text-muted-foreground mt-2">{dict.projetsPage.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
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
