
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useRef, useState } from 'react';
import { subscribeToNewsletter } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

const formSchema = z.object({
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide.' }),
});

export function NewsletterForm() {
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { locale } = useI18n();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const recaptchaToken = await recaptchaRef.current?.executeAsync();

    if (!recaptchaToken) {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'La vérification reCAPTCHA a échoué. Veuillez réessayer.',
      });
      setIsSubmitting(false);
      return;
    }

    const result = await subscribeToNewsletter(values.email, recaptchaToken);

    if (result.success) {
      toast({
        title: 'Inscription réussie !',
        description: 'Merci de vous être abonné à notre newsletter.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: result.message,
      });
    }
    
    recaptchaRef.current?.reset();
    setIsSubmitting(false);
  }
  
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Lf6ukwsAAAAAM40u2RvF1fv3bo8iEFpy9gG9z2Y';

  if (!siteKey) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set. Newsletter form will not be displayed.");
      }
      return null;
  }

  return (
    <div>
        <h3 className="font-headline text-lg font-bold mb-2">Abonnez-vous à notre newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">
            Recevez les dernières nouvelles et mises à jour directement dans votre boîte de réception.
        </p>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem className="flex-grow">
                        <FormControl>
                            <Input placeholder="Votre adresse email" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    S'abonner
                </Button>
            </form>
        </Form>
        <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={siteKey}
            hl={locale}
        />
        <p className="text-xs text-muted-foreground mt-2">
            Ce site est protégé par reCAPTCHA et les <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">règles de confidentialité</a> et les <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">conditions d'utilisation</a> de Google s'appliquent.
        </p>
    </div>
  );
}
