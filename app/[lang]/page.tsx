import Image from 'next/image'
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import TecnologieCard from '@/components/TecnologieCard';
import Section from '@/components/Section';
import { 
  profileImg, 
  githubPictureIcon, 
  linkedinPictureIcon, 
  nextJsIcon, 
  talwindIcon, 
  typescriptIcon
} from "../../public/index"
import useServerInter from '../../utils/hooks/useServerInter';
import Anch from '@/components/Anch';
import Navbar from '@/components/Navbar'
import Dictionaries from '../../dictionaries/home.json'
import { Languages } from '../../i18n.config';
import Gradientline from '@/components/Gradientline';
import { GetProfileDatas } from '@/services/api';
import { useEffect } from 'react';
import LanguagesMetrics from '@/containers/LanguagesMetrics';
 
export default async function Home() {

  const repos:any =  await GetProfileDatas()

  const language: Languages =  useServerInter()

  const texts =  Dictionaries[language]

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-zinc-900 text-sm flex w-full flex-col justify-center items-center">
        <header className=" text-black dark:text-white lg:px-0 px-5 flex justify-center items-center w-full h-screen bg-gradient-to-t to-zinc-400 to-100% via-zinc-200 via-40% from-transparent dark:to-black dark:via-zinc-800 ">
          <div className=" flex-row flex justify-center max-w-128 w-11/12">
            <div className=" flex flex-col justify-center items-center">
              <h2 className="w-full sm:min-w-min flex justify-start sm:justify-center text-lg lg:text-2xl ">
                <div>{texts.header.title[0]}</div>
                <div className=' font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-600 ml-2 '>{texts.header.title[1]}</div>
              </h2>
              <h1 className="w-full sm:w-auto font-semibold text-4xl lg:text-5xl">{texts.header.title[2]}</h1>
              <h1 className="w-full sm:w-min text-4xl font-semibold lg:text-5xl ">{texts.header.title[3]}</h1>
              <div className='w-full sm:w-auto gap-3 mt-6 flex items-end'>
                <a href="https://github.com/VictorAlvesFarias" target='_blank'>
                  <Image className='saturate-50 transition-all hover:saturate-150 rounded-lg w-10' alt='Github Picture' width={40} height={40} src={githubPictureIcon}></Image>
                </a>
                <a href="https://www.linkedin.com/in/victor-alves-farias-023570243/" target="_blank" >
                  <Image width={40} height={40}  className='saturate-50 transition-all hover:saturate-150 rounded-lg w-10' alt='' src={linkedinPictureIcon}></Image>
                </a>
              </div>  
            </div> 
          </div>
        </header>
        <Section>
          <div className="flex xs:flex-row xs:items-stretch items-center xs:gap-6 flex-col justify-between text-2xl pb-6 ">
            <Image
              className='xs:w-40 xs:h-auto xs:mb-0 mb-12 w-40 object-cover rounded-xs'
              src={profileImg}
              width={250}
              height={500}
              alt="Victor Image"
              style={{objectFit:"cover"}}
            />
            <div className="flex flex-col gap-12">
              <h2 className='text-lg md:text-start text-center lg:text-2xl w-full dark:text-white'>
                {texts.aboutMe.title}
              </h2> 
              <p className="text-lg dark:text-white">
                {texts.aboutMe.paragraph[0]}
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="items-start w-full justify-center gap-y-1 flex flex-col">
            <div className=" pb-12 text-lg lg:text-2xl dark:text-white">
              <h1 >{texts.technologies.title}</h1> 
              <Gradientline/>             
            </div>
            <div className=" flex gap-1 w-full ">
              <TecnologieCard data={repos.technologies[1]} ></TecnologieCard>
              <TecnologieCard data={repos.technologies[0]}></TecnologieCard>
            </div>            
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-1 w-full">
              {repos.technologies.slice(2, 6).map((item:any,index:any)=>
                <TecnologieCard key={index} data={item}></TecnologieCard>
              )}
            </div>  
            <Anch href='/technologies' className='font-semibold max-w-128 pt-6 w-full dark:text-white' >{texts.technologies.seeMore}</Anch>     
          </div>
        </Section>
        <LanguagesMetrics/>
        <Section>
          <div className=" items-start justify-center flex flex-col">
            <div className="text-lg lg:text-2xl pb-12 dark:text-white">
              <h1 >{texts.latestProjects.title}</h1> 
              <Gradientline/>             
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
              {repos.projects.slice(0, 6).reverse().map((item:any,index:any)=>
                <ProjectCard key={index} data={item}></ProjectCard>
              )} 
            </div>   
            <Anch href='/projects' className='font-semibold max-w-128 pt-6 w-full dark:text-white' >{texts.latestProjects.seeMore}</Anch>     
          </div>
        </Section>
        <Section> 
          <div className='flex items-center py-3 flex-col'>
            <p className='font-bold mb-6 text-zinc-600  text-base dark:text-white' >{texts.siteInfo.title}</p>
            <div className='w-full flex justify-around saturate-50'>
              <Image className='w-10' width={25} height={25}  src={talwindIcon} alt={'Tailwind Icon'}></Image>
              <Image className='w-10' width={25} height={25} src={nextJsIcon} alt={'Next Icon'}></Image>
              <Image className='w-8' width={25} height={25} src={typescriptIcon} alt={'Ts Icon'}></Image>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )

}
