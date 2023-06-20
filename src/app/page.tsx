
import Image from 'next/image'
import Link from 'next/link';
import { ProjectCard,TecnologieCard, Section } from '@/components';
import {profileImg, githubPictureIcon, linkedinPictureIcon, nextJsIcon, reactJsIcon, nodeJsIcon, talwindIcon, jsIcon, typescriptIcon} from "../../public/index"
 
export default async function Home() {
  interface Repositorie {
    name: string;
    href: string;
    description: string;
    date: string;
  }

  const data:any =  await fetch("https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/packagePreview.json",{
    cache:"no-store"
  }) 

  const repos:Repositorie[] =  await data.json()
  
  return (
    <div  className="  flex flex-col items-center justify-center w-full">
      <div className="text-zinc-900 text-sm flex w-full flex-col justify-center items-center">
        <header className="lg:px-0 px-5 flex justify-center items-center  w-full h-screen bg-gradient-to-t to-zinc-400 to-100% via-zinc-200 via-40% from-transparent">
          <div className=" flex-row flex justify-center max-w-128 w-11/12">
            <div className="lg:w-5/12 flex flex-col justify-center items-center">
              <h2 className="w-full sm:min-w-min flex justify-start sm:justify-center text-lg lg:text-2xl ">
                <div>HI, MY NAME IS </div>
                <div className=' font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-600 ml-2'>VICTOR</div>
              </h2>
              <h1 className="w-full sm:w-auto font-semibold text-4xl lg:text-5xl">I AM A FRONTEND </h1>
              <h1 className="w-full sm:w-min text-4xl font-semibold lg:text-5xl ">DEVELOPER</h1>
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
              <h2 className='text-lg md:text-start text-center lg:text-2xl w-full '>ABOUT ME</h2> 
              <p className="text-lg ">
                I am passionate about software development and architecture. I am extremely attentive to be able to write clean and efficient code. I believe in the importance of reviewing code, as well as sharing and discussing different solutions with my team. My main goal is to learn, teach, and collaborate together to build amazing projects that provide an exceptional experience to people, working with what I love.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="items-center w-full justify-center gap-y-1 flex flex-col">
              <h1 className=" pb-12 w-full text-lg lg:text-2xl">MAIN TECHNOLOGIES</h1>
              <div className=" flex gap-1 w-full ">
                <TecnologieCard icon={nextJsIcon}></TecnologieCard>
                <TecnologieCard icon={reactJsIcon}></TecnologieCard>
              </div>
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-1 w-full">
                <TecnologieCard icon={nodeJsIcon}></TecnologieCard>
                <TecnologieCard icon={talwindIcon}></TecnologieCard>
                <TecnologieCard icon={jsIcon}></TecnologieCard>
                <TecnologieCard icon={typescriptIcon}></TecnologieCard>
              </div>  
          </div>
        </Section>
        <Section>
          <div className=" items-center justify-center flex flex-col">
            <h1 className="text-lg w-full lg:text-2xl pb-12 ">LATEST PROJECTS</h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
                {repos.map((item:Repositorie,index:number)=>
                  <ProjectCard key={index} repo={item}></ProjectCard>
                )}
            </div>   
            <Link href='/projects' className='font-semibold max-w-128 pt-6 w-full' >Ver todos projetos...</Link>     
          </div>
        </Section>
        <Section> 
          <div className='flex items-center py-3 flex-col'>
            <p className='font-bold mb-6 text-zinc-600  text-base ' >This site was made using:</p>
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
