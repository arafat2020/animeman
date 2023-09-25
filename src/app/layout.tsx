import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider, UserButton } from '@clerk/nextjs'
import LoderProgressProvider from '../providers/LoderProgressProvider'
const inter = Open_Sans({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Dimansion of Anime',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode

}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen`}>
        <ClerkProvider>
          <LoderProgressProvider>
            {children}
          </LoderProgressProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
