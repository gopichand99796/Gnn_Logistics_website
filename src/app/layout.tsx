import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import GlobalJourneyLayer from '@/components/GlobalJourneyLayer/GlobalJourneyLayer';
import Header from '@/components/Header/Header';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata: Metadata = {
  title: 'GNN Logistics',
  description: 'A premium logistics journey experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Header />
        <GlobalJourneyLayer />
        {children}
      </body>
    </html>
  );
}
