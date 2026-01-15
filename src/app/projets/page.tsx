
'use client';
import { useI18n } from "@/hooks/use-i18n";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/definitions";
import { getProjects } from "@/lib/data";

export default function ProjetsPage() {
  const { dict } = useI18n();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
        setIsLoading(true);
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
        setIsLoading(false);
    }
    fetchProjects();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="font-headline text-4xl font-bold tracking-tight">{dict.projetsPage.title}</h1>
          <p className="text-muted-foreground mt-2 max-w-4xl">
            {dict.projetsPage.description}
          </p>
        </div>
      </div>
      
      <div className="w-full whitesection py-16">
        <div className="container mx-auto px-4">
            <div className="text-gray-800">
                <p className="leading-relaxed max-w-4xl">
                    Tremplin Video Lab plannifie la création de ses vidéos comme faisant partie de différents projets.
                    <br /><br />
                    Ainsi, bien que chaque vidéo dispose de son propre scénario, elle fait partie d'un projet global composé de plusieurs vidéos.
                    <br /><br />
                    Nous ne nous contentons pas de réutiliser des personnages, mais de leur donner une histoire.
                    <br /><br />
                    Tortue, Kangourou, Hibou, Ours, Guépard, Loutre... elles ont toutes leur propre caractère et leur propre destin !
                </p>
            </div>
        </div>
      </div>

      <div className="w-full bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
              <div className="flex justify-center items-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
          ) : (
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
                      <CardDescription className="pt-2 h-16">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex items-end">
                          <Button variant="outline" asChild>
                              <Link href={project.link}>
                                  {dict.projetsPage.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                          </Button>
                      </CardContent>
                  </Card>
                  ))}
              </div>
          )}
        </div>
      </div>
    </>
  );
}
