import ExpansiveBackground from '@/components/expansive-background';
import Footer from '@/components/footer';
import Gradientline from '@/components/gradient-line';
import Section from '@/components/section';
import TecnologieCard from '@/components/tecnologie-card';
import TecnologieCardMin from '@/components/tecnologie-card-min';
import LanguagesMetrics from '@/containers/languages-metrics';
import { GetProfileDatas } from '@/services/profile-service';
import Image from 'next/image';
import { githubPictureIcon, linkedinPictureIcon, profileImg } from "../../../public/public-modules";
import Dictionaries from '../../dictionaries/home.json';
import useServerInter from '../../utils/hooks/use-server-inter';
import FadeInSroller from '@/components/fade-in-scroller';

export default async function Home() {
  const repos = await GetProfileDatas();
  const language = useServerInter();
  const texts = Dictionaries[language];

  return (
    <div className="text-black dark:text-white flex flex-col items-center justify-center w-full">
      <header className="z-[19] fixed top-0 left-0 lg:px-0 px-5 flex justify-center items-center w-full h-screen bg-gradient-to-t to-zinc-400 to-100% via-zinc-200 via-40% from-transparent dark:to-black dark:via-zinc-800">
        <div className="flex flex-col justify-center items-center max-w-128 w-11/12">
          <h2 className="text-lg lg:text-2xl flex justify-center w-full">
            <span>{texts.header.title[0]}</span>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-600 ml-2">{texts.header.title[1]}</span>
          </h2>
          <h1 className="text-4xl lg:text-5xl font-semibold">{texts.header.title[2]}</h1>
          <h1 className="text-4xl lg:text-5xl font-semibold">{texts.header.title[3]}</h1>
        </div>
      </header>
      <div className="w-full h-[100vh]" />
      <ExpansiveBackground screenMultiplier={1.8} className=' bg-gradient-to-r z-20 from-rose-200 to-violet-400 dark:from-rose-400 dark:to-violet-600 rounded' />
      <div className="flex w-full flex-col justify-center items-center z-[21]">
        <Section>
          <FadeInSroller duration={700}>
            <div className="flex xs:flex-row xs:items-stretch items-center xs:gap-6 flex-col justify-between text-2xl pb-6 ">
              <Image
                className='xs:w-40 xs:h-auto xs:mb-0 mb-12 w-40 object-cover rounded-xs'
                src={profileImg}
                width={250}
                height={500}
                alt="Victor Image"
                style={{ objectFit: "cover" }}
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
          </FadeInSroller>
        </Section>
        <Section>
          <div className="items-start w-full justify-center gap-y-1 flex flex-col">
            <div className="pb-12 text-lg lg:text-2xl dark:text-white">
              <h1 >{texts.technologies.title}</h1>
              {/* <Gradientline /> */}
            </div>
            <div className=" flex gap-1 w-full ">
              <TecnologieCard data={repos.technologies[0]} />
              <TecnologieCard data={repos.technologies[1]} />
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-1 w-full">
              {repos.technologies.slice(2, - ((repos.technologies.length - 2) % 4)).map((item: any, index: any) =>
                <TecnologieCardMin key={index} data={item} />
              )}
            </div>
          </div>
        </Section>
        <Section>
          <div className='flex flex-col'>
            <div className=" pb-12 w-fit text-lg lg:text-2xl dark:text-white">
              <h1 >{texts.analytics.title}</h1>
              {/* <Gradientline /> */}
            </div>
            <div className='flex flex-col p-6 items-center justify-center dark:text-white  gap-6 md:flex-row bg-zinc-100  dark:bg-zinc-800 shadow-sm  rounded-sm'>
              <div className=" md:w-1/2 items-start w-full  gap-y-1 flex flex-col">
                <p className='w-full font-semibold'>
                  {texts.analytics.paragraph}
                </p>
              </div>
              <LanguagesMetrics />
            </div>
          </div>
        </Section>
      </div>
      <footer className="flex w-full flex-col justify-center items-center z-[21] bg-white dark:bg-zinc-900">
        <Section>
          <div className="items-start w-full justify-center gap-y-1 flex flex-col">
            <div className="pb-12 text-lg lg:text-2xl dark:text-white">
              <h1>{texts.links.title}</h1>
              {/* <Gradientline /> */}
            </div>
            <div className="flex gap-6 w-full flex-wrap">
              <a
                className="flex dark:text-white hover:bg-opacity-20 transition-all flex-1 items-center justify-center rounded border p-12 gap-3 border-purple-500 cursor-pointer bg-purple-700 bg-opacity-10"
                href="https://github.com/VictorAlvesFarias"
                target="_blank"
              >
                <Image className="saturate-50 transition-all hover:saturate-150 rounded-lg w-10" alt="Github Picture" width={40} height={40} src={githubPictureIcon} />
                <p>{texts.links.github}</p>
              </a>
              <a
                className="flex dark:text-white flex-1 items-center justify-center rounded border p-12 gap-3 border-blue-500 cursor-pointer hover:bg-opacity-20 transition-all bg-blue-700 bg-opacity-10"
                href="https://www.linkedin.com/in/victor-alves-farias-023570243/"
                target="_blank"
              >
                <Image className="saturate-50 transition-all hover:saturate-150 rounded-lg w-10" alt="LinkedIn" width={40} height={40} src={linkedinPictureIcon} />
                <p>{texts.links.linkedin}</p>
              </a>
            </div>
          </div>
        </Section>
        <Footer />
      </footer>
    </div>
  );
}
