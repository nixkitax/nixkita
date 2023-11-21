import type { Metadata } from 'next'
import Header from '../components/layout/Header'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const space = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nixkita',
  description: 'Nixkita\'s blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${space.className} flex flex-col justify-between font-sans`}>
     
          <Header/>
            {children}

        </body>
    </html>
  )
}
