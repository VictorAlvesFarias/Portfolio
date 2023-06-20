import { githubIcon } from '../../public'
import Image from 'next/image'
import './globals.css'

export const metadata = {
  title: 'Victor Alves',
  description: 'Portifólio',
}

export default function RootLayout({children}:{children: React.ReactNode}) {

  return (
    <html>
      <body className={'min-h-screen bg-white scroll-smooth'}>
        {children}
        <footer className= 'h-64 bg-gradient-to-t flex justify-center items-center border-t-2 border-zinc-300 w-full'>
        <a className='flex items-center justify-center' target='_blank' href="https://github.com/VictorAlvesFarias?tab=repositories">
          <p className='font-semibold pr-3'>DEVELOPED BY VICTOR</p>
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
