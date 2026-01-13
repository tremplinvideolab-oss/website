'use client';

import PageHeader from '../components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function AdminProjetsPage() {
  return (
    <>
      <PageHeader title="Projets">
        <Button disabled>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nouveau Projet
        </Button>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle>Gestion des projets</CardTitle>
          <CardDescription>
            Cette fonctionnalité est en cours de développement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Ici, vous pourrez bientôt ajouter, modifier et supprimer les projets de votre site.</p>
        </CardContent>
      </Card>
    </>
  );
}
