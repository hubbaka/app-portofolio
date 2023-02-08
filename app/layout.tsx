'use client';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';

import 'styles/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
