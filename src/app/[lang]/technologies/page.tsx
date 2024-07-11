import React, { Suspense } from 'react'
import Section from '@/components/section';
import Dictionaries from '../../../dictionaries/technologies.json'
import useServerInter from '@/utils/hooks/use-server-inter';
import { GetProfileDatas } from '@/services/profile-service';
import Anch from '@/components/anch';
import Return from '@/components/return';
import Gradientline from '@/components/gradient-line';
import TecnologieCard from '@/components/tecnologie-card';

async function Technologies() {  
  const repos:any =  await GetProfileDatas()
  const language: "pt-br" | "en-us"  = useServerInter()
  const texts:any = Dictionaries[language]
  
  return (
    <Suspense fallback="testoing">
      <div className="  flex flex-col items-center justify-center w-full">
        <div className="text-zinc-900 text-sm flex w-full flex-col justify-center items-center">
          <header className=" text-black dark:text-white lg:px-0 px-5 flex justify-center items-center w-full h-[70vh] bg-gradient-to-t to-zinc-400 to-100% via-zinc-200 via-40% from-transparent dark:to-black dark:via-zinc-800 ">
            <div  className="mt-20 flex max-w-128 w-11/12">
              <Anch className='rounded-full border-2 mr-3 p-1 dark:border-white border-zinc-800 flex justify-between' href={'/'}>
              <Return className='w-7 h-fit dark:stroke-white stroke-zinc-800'></Return>
              </Anch>
              <div>
                <h2 className="w-full flex items-center  text-lg lg:text-2xl">{texts.technologies.title}</h2>  
                <Gradientline/>
              </div> 
            </div>
          </header>
          <Section>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
                {repos.technologies.map((item:any,index:any)=>
                  <TecnologieCard key={index} data={item}></TecnologieCard>
                )}
            </div>
          </Section>
        </div>
      </div> 
    </Suspense>
  )
}

export default Technologies 