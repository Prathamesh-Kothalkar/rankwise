import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rank Wise App',
  description: 'Find your College Through Pastcutoffs',
  keywords: 'college, cutoffs, past cutoffs, rank wise, college finder',
  generator: 'Next.js',
  applicationName: 'Rank Wise App',
  authors: [
    {
      name: 'Prathamesh Kothalkar',
      url: 'https://prathamesh-kothalkar.vercel.app',
    },
  ],
  creator: 'Prathamesh Kothalkar',
  publisher: 'Prathamesh Kothalkar',
  colorScheme: 'dark',
  themeColor: '#000000',
  openGraph: {
    title: 'Rank Wise App',
    description: 'Find your College Through Pastcutoffs',
    url: 'https://rankwise.vercel.app',
    siteName: 'Rank Wise App',
    images: [
      {
        url: 'https://rankwise.vercel.app/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
