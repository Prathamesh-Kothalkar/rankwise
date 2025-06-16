import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '@/context/AuthProvider'

export const metadata: Metadata = {
  title: 'Guess My College',
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
    title: 'Guess My College',
    description: 'Find your College Through Pastcutoffs',
    url: 'https://www.guessmycollege.in/',
    siteName: 'Guess My College',
    images: [
      {
        url: 'https://www.guessmycollege.in/og.png',
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
      <AuthProvider>
      <body>{children}</body>
      </AuthProvider>
    </html>
  )
}


