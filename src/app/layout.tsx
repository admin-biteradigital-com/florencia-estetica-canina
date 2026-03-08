import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Florencia | Estética Canina & Auxiliar Veterinaria',
  description: 'Portafolio profesional de Florencia Papasso, Auxiliar Veterinaria y especialista en Estética Canina. Cortes con amor, diversión y cuidado para tus perritos.',
  keywords: 'estética canina, peluquería canina, auxiliar veterinaria, cortes de pelo para perros, Florencia, Lomas de Solymar, Canelones',
  authors: [{ name: 'Florencia Papasso' }],
  openGraph: {
    title: 'Florencia | Estética Canina & Auxiliar Veterinaria',
    description: 'Portafolio profesional y servicios de estética canina con mucho amor y cuidado. Más de 9 años de experiencia.',
    url: 'https://florencia-estetica-canina.pages.dev',
    siteName: 'Florencia Estética Canina',
    locale: 'es_UY',
    type: 'website',
    images: [{
      url: 'https://florencia-estetica-canina.pages.dev/hero.png',
      width: 1024,
      height: 1024,
      alt: 'Florencia Estética Canina - Logo con Beagle',
    }],
  },
  icons: {
    icon: '/hero.png',
    apple: '/hero.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
