import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-grotesk' })
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Nikita Rimal - UI/UX Designer',
  description: 'Innovative UI/UX designer crafting beautiful digital experiences',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '/nikita-logo.png',
    apple: '/nikita-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
