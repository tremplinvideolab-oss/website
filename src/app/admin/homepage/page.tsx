'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import PageHeader from '../components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { getHomepageContent, updateHomepageContent } from '@/lib/data';

const formSchema = z.object({
  headline: z.string().min(10, 'Headline must be at least 10 characters.'),
  subheadline: z.string().min(20, 'Subheadline must be at least 20 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function AdminHomepagePage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [defaultValues, setDefaultValues] = useState<FormValues>({
    headline: '',
    subheadline: '',
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: async () => {
        const content = await getHomepageContent();
        setDefaultValues(content);
        return content;
    }
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    try {
      await updateHomepageContent(values);
      toast({
        title: 'Success!',
        description: 'Homepage content has been updated.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update homepage content.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <PageHeader title="Edit Homepage Content" />
      <Card>
        <CardHeader>
          <CardTitle>Homepage Text</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="headline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Headline</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the main headline" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the main title on the homepage.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subheadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subheadline</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter a catchy subheadline"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This text appears below the main headline.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Changes
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
