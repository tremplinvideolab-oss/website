'use client';

import Link from 'next/link';
import { Menu, Youtube, Facebook, Instagram } from 'lucide-react';
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
import { LanguageSwitcher } from './language-switcher';
import { Logo } from './logo';
import React from 'react';

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
              className="mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-8 w-8" />
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
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
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

              <div className="flex flex-col space-y-4">
                <Link href="https://www.youtube.com/@TremplinVideoLab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary font-bold" onClick={closeMobileMenu}>
                    <Youtube className="h-6 w-6" />
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
              </div>

            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="flex items-center space-x-2 md:hidden"
        >
          <Logo />
          <span className="font-bold font-headline">Tremplin Video Lab</span>
        </Link>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/login">{dict.siteHeader.adminLogin}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
