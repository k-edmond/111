import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { RTLHandler } from '@/components/RTLHandler';

export const metadata: Metadata = {
  title: {
    default: 'ELEGENN GLOBAL CO.,LTD',
    template: '%s | ELEGENN GLOBAL',
  },
  description:
    'Premium skincare solutions combining cutting-edge science with visible results. High-performance PDRN, Peptide, and HA based boosters and ampoules.',
  keywords: [
    'ELEGENN',
    'skincare',
    'PDRN',
    'Peptide',
    'Hyaluronic Acid',
    'beauty',
    'booster',
    'ampoule',
    'Korea',
  ],
  authors: [{ name: 'ELEGENN GLOBAL CO.,LTD' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <RTLHandler />
          <Navigation />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
