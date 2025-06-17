import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '@/context/AuthProvider'
import { Analytics } from "@vercel/analytics/next"
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Guess My College',
  description: 'Find your College Through Pastcutoffs',
   icons: {
    icon: '/favicon.png', 
  },
  keywords: 'college, cutoffs, past cutoffs, rank wise, college finder, guess my college, mht-cet, engineering colleges, college recommendations, college admission, college search, college finder app, college prediction, college admission predictor, college admission guide, college admission tips, college admission process, college admission requirements, college admission application, college admission essay, college admission interview, college admission statistics, college admission trends, college admission deadlines, college admission counselor, college admission consultant, college admission advice, college admission tips and tricks, college admission process explained, college admission process step by step, college admission process timeline, college admission process for international students, college admission process for transfer students, college admission process for graduate students, college admission process for undergraduate students, college admission process for high school students, college admission process for community college students, maharashtra engineering colleges, mht-cet college finder, mht-cet college recommendations, mht-cet college admission, mht-cet college search, mht-cet college prediction, mht-cet college admission predictor, mht-cet college admission guide, mht-cet college admission tips, mht-cet college admission process, mht-cet college admission requirements, mht-cet college admission application, mht-cet college admission essay, mht-cet college admission interview, mht-cet college admission statistics, mht-cet college admission trends, mht-cet college admission deadlines, mht-cet college admission counselor, mht-cet college admission consultant, mht-cet college admission advice',
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
        url: 'https://www.guessmycollege.in/favicon.png',
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
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2991036805731287" crossorigin="anonymous"></script>
        <script defer data-domain="guessmycollege.in" src="https://plausible.io/js/script.js"></script>
      </head>
      <Analytics/>
      <AuthProvider>
      <body>{children}</body>
      <footer><Footer/></footer>
      </AuthProvider>
    </html>
  )
}


