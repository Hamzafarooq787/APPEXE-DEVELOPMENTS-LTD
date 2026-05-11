// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sandowndevelopments.co.uk'),
  title: 'SANDOWN DEVELOPMENTS LTD | Construction Excellence',
  description:
    'Sandown Developments Ltd delivers high-quality residential and commercial construction services across the United Kingdom with precision, safety, and reliability.',
  openGraph: {
    title: 'SANDOWN DEVELOPMENTS LTD | Construction Excellence',
    description:
      'Sandown Developments Ltd delivers high-quality residential and commercial construction services across the United Kingdom with precision, safety, and reliability.',
    url: 'https://sandowndevelopments.co.uk',
    siteName: 'Sandown Developments Ltd',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sandown Developments Ltd — Building Spaces. Creating Futures.',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SANDOWN DEVELOPMENTS LTD | Construction Excellence',
    description:
      'Sandown Developments Ltd delivers high-quality residential and commercial construction services across the United Kingdom with precision, safety, and reliability.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Material Symbols font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}