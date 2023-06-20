import React, { Suspense } from 'react'
import { ProjectCard,Section } from '@/components'
import { cornerDownLeftIcon } from '../../../public'
import Link from 'next/link'
import Image from 'next/image'

async function Projects() {
  interface Repositorie {
    name: string;
    href: string;
    description: string;
    date: string;
  }

  const data:any =  await fetch("https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/packagePreview.json",{
    cache:"no-store"
  })

  const repos:Repositorie[] = await data.json()

  return (
    <Suspense fallback="testoing">
      <div className="  flex flex-col items-center justify-center w-full">
        <div className="text-zinc-900 text-sm flex w-full flex-col justify-center items-center">
          <header className="lg:px-0 px-5 flex flex-col justify-center items-center  w-full h-96 bg-gradient-to-t to-zinc-400 to-100% via-zinc-300 via-40% from-transparent">
            <div  className="mt-20 flex max-w-128 w-11/12">
              <Link className='rounded-full border-2 mr-3 p-1 border-zinc-800 flex justify-between' href={'/'}>
                <Image className='w-7' width={28} height={28}  src={cornerDownLeftIcon} alt={'Return Icon'}></Image>
              </Link>
              <h2 className="w-full flex items-center  text-lg lg:text-2xl">PROJECTS</h2>   
            </div>
          </header>
          <Section>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
                {repos.map((item:Repositorie, index:number)=>
                  <ProjectCard key={index} repo={item}></ProjectCard>
                )}
            </div>
          </Section>
        </div>
      </div> 
    </Suspense>

  )
}

export default Projects