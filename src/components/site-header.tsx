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
      viewBox="0 0 448 512"
      fill="currentColor"
      {...props}
    >
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
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
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                  <Logo />
                  <span className="ml-2 font-bold font-headline">Tremplin Video Lab</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 overflow-y-auto">
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
              
              <div className="my-6 w-full h-[1px] bg-border" />
              
              <div className="mb-6">
                <NewsletterForm />
              </div>

              <div className="my-6 w-full h-[1px] bg-border" />

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
