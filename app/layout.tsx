import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '@/context/AuthProvider'
import { Analytics } from "@vercel/analytics/next"
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Guess My College',
  description: 'Find your College Through Pastcutoffs',
  keywords: 'college, cutoffs, past cutoffs, rank wise, college finder, guess my college, mht-cet, engineering colleges, college recommendations, college admission, college search, college finder app, college prediction',
  generator: 'Next.js',
  applicationName: 'Guess my College',
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
        url: 'https://www.guessmycollege.in/sampleimg.png',
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
      <Analytics/>
      <AuthProvider>
      <body>{children}</body>
      <footer><Footer/></footer>
      </AuthProvider>
    </html>
  )
}


