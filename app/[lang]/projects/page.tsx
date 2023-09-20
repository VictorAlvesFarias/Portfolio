import React, { Suspense } from 'react'
import { cornerDownLeftIcon } from '../../../public'
import Image from 'next/image'
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import Anch from '@/components/Anch';
import Dictionaries from '../../../dictionaries/projects.json'
import useServerInter from '@/utils/hooks/useServerInter';
import Gradientline from '@/components/Gradientline';

async function Projects() {
  interface Repositorie {
    projects:[{
      name: string;
      href: string;
      description: string;
      date: string;
    }]
  }

  const data:any =  await fetch("https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/packagePreview.json",{
    cache:"no-store"
  })

  const repos:Repositorie = await data.json()

  const language: "pt-br" | "en-us"  = useServerInter()

  const texts:any = Dictionaries[language]
  
  return (
    <Suspense fallback="testoing">
      <div className="  flex flex-col items-center justify-center w-full">
        <div className="text-zinc-900 text-sm flex w-full flex-col justify-center items-center">
          <header className="lg:px-0 px-5 flex flex-col justify-center items-center  w-full h-96 bg-gradient-to-t to-zinc-400 to-100% via-zinc-300 via-40% from-transparent">
            <div  className="mt-20 flex max-w-128 w-11/12">
              <Anch className='rounded-full border-2 mr-3 p-1 border-zinc-800 flex justify-between' href={'/'}>
                <Image className='w-7' width={28} height={28}  src={cornerDownLeftIcon} alt={'Return Icon'}></Image>
              </Anch>
              <div>
                <h2 className="w-full flex items-center  text-lg lg:text-2xl">{texts.jobs.title}</h2>     
                <Gradientline/>            
              </div>  
            </div>
          </header>
          <Section>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
                {repos.projects.map((item, index)=>
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