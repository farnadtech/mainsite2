import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Farnad Tech — Comprehensive Digital Solutions',
  description:
    'Farnad Tech is your strategic partner in designing, developing, and implementing innovative web and mobile solutions and powerful digital ecosystems to accelerate your business growth.',
  openGraph: {
    title: 'Farnad Tech — Comprehensive Digital Solutions',
    description:
      'Farnad Tech is your strategic partner in designing, developing, and implementing innovative web and mobile solutions and powerful digital ecosystems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farnad Tech — Comprehensive Digital Solutions',
    description:
      'Farnad Tech is your strategic partner in designing, developing, and implementing innovative web and mobile solutions and powerful digital ecosystems.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body
        className="font-sans antialiased text-[#112407] bg-[#f3fced] selection:bg-[#49AD0A]/20 selection:text-[#286304]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
