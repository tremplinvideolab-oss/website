
'use client';

import { useI18n } from '@/hooks/use-i18n';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Globe } from 'lucide-react';

const FranceFlag = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="24" height="16"><path fill="#fff" d="M0 0h3v2H0z"/><path fill="#002654" d="M0 0h1v2H0z"/><path fill="#ce1126" d="M2 0h1v2H2z"/></svg>;
const UKFlag = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="12"><clipPath id="s"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="t"><path d="M30 15h30v15zv15h-30zH0z"/></clipPath><g clip-path="url(#s)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>;


export function LanguageSwitcher() {
  const { setLocale } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale('fr')} className="gap-2">
          <FranceFlag />
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale('en')} className="gap-2">
          <UKFlag />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
