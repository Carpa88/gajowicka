import type { Metadata } from 'next';
import { Geist, Geist_Mono, Raleway, Aboreto } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const aboreto = Aboreto({
  variable: '--font-aboreto',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Wiadomości Gajowickie',
  description:
    'Aktualne wiadomości z Gajowic: wydarzenia lokalne, ogłoszenia, harmonogram zajęć i program kulturalny Centrum Kultury.',
  metadataBase: new URL('https://twoja-domena.pl'),
  openGraph: {
    title: 'Wiadomości Gajowickie',
    description:
      'Najważniejsze wiadomości i wydarzenia z Gajowic. Bądź na bieżąco z życiem lokalnej społeczności.',
    url: 'https://twoja-domena.pl',
    siteName: 'Wiadomości Gajowickie',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${aboreto.variable}`}
      >
        <header className="header">
          <h1>Wiadomości Gajowickie</h1>
        </header>
        {children}
        <footer>
          <div className="footer-content">
            <h6>© 2025 Wiadomości Gajowickie. All rights reserved.</h6>
          </div>
        </footer>
      </body>
    </html>
  );
}
