import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '@/context/AuthProvider'
import { Analytics } from "@vercel/analytics/next"
import Footer from '@/components/Footer'
import ContactButton from '@/components/ContactButton'

export const metadata: Metadata = {
  title: 'Guess My College | MHT-CET College Predictor & Cutoff Tool',
  description: 'Use AI powered Guess My College to discover top Maharashtra engineering colleges based on your MHT-CET score. Simple, Easy and Free.',
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
    title: 'Guess My College | Find the Best Colleges for Your MHT-CET Rank',
    description: 'Instantly find engineering colleges in Maharashtra matching your MHT-CET score. Built for aspirants. Backed by real data.',
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
  alternates: {
    canonical: 'https://www.guessmycollege.in',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2991036805731287" crossorigin="anonymous"></script>
        <script defer data-domain="guessmycollege.in" src="https://plausible.io/js/script.js"></script>
        {/* <script type='text/javascript' src='//pl27070925.profitableratecpm.com/62/08/d9/6208d9d2b2ead70c886b98171c7d98b1.js'></script> */}
        {/* <script type='text/javascript' src='//pl27070923.profitableratecpm.com/e2/38/a4/e238a4c4ba34dfeb572a088579232d26.js'></script> */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Guess My College",
            "url": "https://www.guessmycollege.in",
            "description": "Find the best engineering colleges in Maharashtra based on your MHT-CET score.",
            "applicationCategory": "College Finder",
            "operatingSystem": "All",
            "creator": {
              "@type": "Person",
              "name": "Prathamesh Kothalkar",
              "url": "https://prathamesh-kothalkar.vercel.app"
            }
          })
        }} />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false"></script>
        <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false"></script>
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script>
          window.ezstandalone = window.ezstandalone || { };
          ezstandalone.cmd = ezstandalone.cmd || [];
        </script>

      </head>
      <Analytics />
      <AuthProvider>
        <body>{children}</body>
        <footer className='mb-10'><Footer /></footer>
        <ContactButton/>
      </AuthProvider>
    </html>
  )
}


