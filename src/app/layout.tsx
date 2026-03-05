import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Florencia | Estética Canina & Auxiliar Veterinaria',
  description: 'Portafolio profesional de Florencia Papasso, Auxiliar Veterinaria y especialista en Estética Canina. Cortes con amor, diversión y cuidado para tus perritos.',
  keywords: 'estética canina, peluquería canina, auxiliar veterinaria, cortes de pelo para perros, Florencia',
  authors: [{ name: 'Florencia' }],
  openGraph: {
    title: 'Florencia | Estética Canina & Auxiliar Veterinaria',
    description: 'Portafolio profesional y servicios de estética canina con mucho amor y cuidado.',
    url: 'https://florencia-estetica-canina.pages.dev',
    siteName: 'Florencia Estética Canina',
    locale: 'es_UY',
    type: 'website',
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
