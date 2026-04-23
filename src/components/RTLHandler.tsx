'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function RTLHandler() {
  const { lang } = useLanguage();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.classList.add('rtl');
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.classList.remove('rtl');
      }
    }
  }, [lang]);

  return null;
}
