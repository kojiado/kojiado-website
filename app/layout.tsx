import './css/globals.css'
import './css/clash-grotesk.css'
import './css/satoshi.css'
import type { Metadata } from 'next'

export const metadata = {
  title: "kojiado - UI/UX Designer & Front-End Developer",
  description: "Hey there! I'm Adnan Brkić, Your friendly neighborhood UI/UX Designer and Front-End Developer",
  metadataBase: new URL('https://kojiado.com'),
  openGraph: {
    images: 'http://data.kojiado.com/kojiado-og-image.png',
    title: "kojiado - UI/UX Designer & Front-End Developer",
    description: "Hey there! I'm Adnan Brkić, Your friendly neighborhood UI/UX Designer and Front-End Developer",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
