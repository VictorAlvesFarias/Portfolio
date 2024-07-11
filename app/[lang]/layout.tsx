import { githubIcon } from '../../public'
import Image from 'next/image'
import './globals.css'
import Navbar from '@/components/Navbar'
export const metadata = {
  title: 'Victor Alves',
  description: 'Portifólio',
}

export default function RootLayout({children}:{children: React.ReactNode}) {

  return (
      <html className='dark'>
        <body className='min-h-screen bg-white dark:bg-zinc-900 scroll-smooth'>
          <Navbar></Navbar>
          {children}
          <footer className= 'h-64 bg-gradient-to-t flex justify-center items-center border-t-2 border-zinc-300 dark:border-zinc-800 w-full'>
            <a className='flex items-center justify-center' target='_blank' href="https://github.com/VictorAlvesFarias?tab=repositories">
            <p className='font-semibold pr-3 dark:text-white'>DEVELOPED BY VICTOR</p>
            <Image
              src={githubIcon}
              width={30}
              height={30}
              alt="Picture of the author"
              style={{objectFit:"cover"}}
            />
            </a>
          </footer>
        </body>
      </html>
  )

}
