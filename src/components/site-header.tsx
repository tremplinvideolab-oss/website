
'use client';

import Link from 'next/link';
import { Clapperboard, Menu, Video } from 'lucide-react';
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

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dict } = useI18n();

  const mainNavLinks = [
    { href: '/', label: dict.siteHeader.home },
    { href: '/videos', label: dict.siteHeader.videos },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Clapperboard className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              VideoVerse
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">{dict.siteHeader.toggleMenu}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                  <Clapperboard className="mr-2 h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">VideoVerse</span>
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
                      'transition-colors hover:text-primary',
                      pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/"
          className="flex items-center space-x-2 md:hidden"
        >
          <Clapperboard className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">VideoVerse</span>
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
