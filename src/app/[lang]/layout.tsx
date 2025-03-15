import './globals.css'
import Navbar from '@/containers/navbar'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Victor Alves',
  description: 'Portifólio',
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='dark'>
      <body className={'min-h-screen bg-white dark:bg-zinc-900 scroll-smooth dark:text-zinc-50 ' + poppins.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )

}
