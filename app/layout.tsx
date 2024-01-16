import './css/globals.css'
import './css/fonts.css'
import type { Metadata } from 'next'

export const metadata = {
  title: "kojiado - Your digital alchemist crafting potions for success!",
  description: "Hey there! I'm Adnan Brkić, Your digital alchemist crafting potions for success!",
  metadataBase: new URL('https://kojiado.com'),
  openGraph: {
    images: 'http://data.kojiado.com/kojiado-og-image.png',
    title: "kojiado - Your digital alchemist crafting potions for success!",
    description: "Hey there! I'm Adnan Brkić, Your digital alchemist crafting potions for success!",
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
