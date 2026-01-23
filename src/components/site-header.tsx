'use client';

import Link from 'next/link';
import { Menu, Youtube, Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useI18n } from '@/hooks/use-i18n';
import { Logo } from './logo';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { NewsletterForm } from './newsletter-form';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.5.04-4.87-1.1-6.73-3.04-1.25-1.3-2.07-2.82-2.31-4.5-1.51.02-3.02.01-4.53.01v-4.13c1.44.02 2.88.02 4.32.02.16-1.18.49-2.32 1.02-3.39.6-1.17 1.41-2.22 2.4-3.11 1.08-1 2.33-1.74 3.73-2.27.02-2.56-.01-5.12.01-7.68z" />
    </svg>
  );

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
        <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
    </svg>
);

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dict } = useI18n();

  const mainNavLinks = [
    { href: '/', label: dict.siteHeader.home },
    { href: '/videos', label: dict.siteHeader.videos },
    { href: '/projets', label: dict.siteHeader.projets },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-14 flex items-center space-x-2">
            <Logo />
            <span className="hidden font-bold sm:inline-block font-headline">
              Tremplin Video Lab
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-extrabold">
            <div className="h-6 w-[2px] bg-muted-foreground" />
            {mainNavLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-primary tracking-wider',
                    pathname === link.href
                      ? 'text-muted-foreground underline underline-offset-8'
                      : 'text-foreground'
                  )}
                >
                  {link.label}
                </Link>
                {index < mainNavLinks.length - 1 && (
                  <div className="h-6 w-[2px] bg-muted-foreground" />
                )}
              </React.Fragment>
            ))}
            <div className="h-6 w-[2px] bg-muted-foreground" />
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 h-16 w-16 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden [&_svg]:h-12 [&_svg]:w-12"
            >
              <Menu />
              <span className="sr-only">{dict.siteHeader.toggleMenu}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                  <Logo />
                  <span className="ml-2 font-bold font-headline">Tremplin Video Lab</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-y-auto">
              <div className="flex flex-col space-y-3">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      'transition-colors hover:text-primary font-extrabold tracking-wider',
                      pathname === link.href ? 'text-muted-foreground underline underline-offset-8' : 'text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <div className="my-6 w-11/12 h-[1px] bg-border" />
              
              <div className="pr-6 mb-6">
                <NewsletterForm />
              </div>

              <div className="my-6 w-11/12 h-[1px] bg-border" />

              <div className="flex flex-col space-y-4">
                <Link href="https://www.youtube.com/@TremplinVideoLab?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary font-bold" onClick={closeMobileMenu}>
                    <Youtube className="h-6 w-6 text-red-600" />
                    <span>Youtube</span>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61586480589051" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary font-bold" onClick={closeMobileMenu}>
                    <Facebook className="h-6 w-6" />
                    <span>Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/tremplinvideolab/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary font-bold" onClick={closeMobileMenu}>
                    <Instagram className="h-6 w-6" />
                    <span>Instagram</span>
                </Link>
                <Link href="https://www.tiktok.com/@tremplinvideolab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary font-bold" onClick={closeMobileMenu}>
                    <TikTokIcon className="h-6 w-6" />
                    <span>TikTok</span>
                </Link>
                <Link href="https://x.com/TremplinVideo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary font-bold" onClick={closeMobileMenu}>
                    <XIcon className="h-6 w-6" />
                    <span>Compte X</span>
                </Link>
              </div>

            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="flex items-center space-x-2 md:hidden"
        >
          <Logo size={48} />
          <span className="font-bold font-headline">Tremplin Video Lab</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
            <div className="hidden md:block">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">
                            <Mail className="h-4 w-4 mr-2" />
                            Newsletter
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-96">
                        <NewsletterForm />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
      </div>
    </header>
  );
}
