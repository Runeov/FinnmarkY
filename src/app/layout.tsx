import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GAT Brukerveiledning | Finnmarkssykehuset',
  description: 'Søkbar brukerveiledning for MinGat og GatGo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
