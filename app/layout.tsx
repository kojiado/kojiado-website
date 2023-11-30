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
    keywords: [
      'Freelance UI/UX Designer',
      'Front-end Developer for Hire',
      'Web Design Freelancer',
      'UI/UX Design Services',
      'Custom Web Development',
      'Responsive Website Design',
      'Freelance Web Developer',
      'Mobile-Friendly Design',
      'HTML5/CSS3 Freelancer',
      'JavaScript Development',
      'Interactive Web Design',
      'Freelance Web App Developer',
      'User-Centric Design',
      'Creative Website Solutions',
      'Freelance HTML/CSS Specialist',
      'Custom UI Design',
      'Freelance Front-end Engineer',
      'Affordable Web Design',
      'Hire UI/UX Specialist',
      'Remote Web Development',
      'Freelance Coding Services',
      'Pixel-Perfect Design',
      'Freelance Prototyping',
      'SEO-Friendly Web Development',
      'User-Focused Front-end Design'
    ],
    creator: 'Adnan Brkić',
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
