import { githubIcon } from '../../../public/public-modules'
import Image from 'next/image'
import './globals.css'
import Navbar from '@/containers/navbar'
import Footer from '@/containers/footer'
import ExpansiveBackground from '../../components/expansive-background'
export const metadata = {
  title: 'Victor Alves',
  description: 'Portifólio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className='dark'>
      <body className='min-h-screen bg-white dark:bg-zinc-900 scroll-smooth dark:text-zinc-50 '>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )

}
