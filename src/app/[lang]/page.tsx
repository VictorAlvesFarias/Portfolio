import Content from '@/components/content';
import Image from 'next/image';
import {
  angularIcon,
  csharpIcon,
  dotnetIcon,
  githubPictureIcon,
  javascriptIcon,
  linkedinPictureIcon,
  profileImg,
  mongodbIcon,
  nextIcon,
  nodeIcon,
  rabbitmqIcon,
  reactNativeIcon,
  redisIcon,
  sqlServerIcon,
  typescriptIcon,
  baraoIcon,
  openPromotaIcon
} from "../../../public/public-modules";
import useServerInter from '../../utils/hooks/use-server-inter';
import LanguagesMetrics from '@/containers/languages-metrics';
import TecnologieCardMin from '@/containers/tecnologie-card-min';
import TecnologieCard from '@/containers/tecnologie-card';
import ExperienceCard from '@/containers/experience-card';
import Paragraph from '@/components/paragraph';

export default async function Home() {
  const texts: any = await useServerInter("home");

  const technologies = [
    { name: ".NET", img: dotnetIcon },
    { name: "React and React Native", img: reactNativeIcon },
    { name: "SQL Server", img: sqlServerIcon },
    { name: "Redis", img: redisIcon },
    { name: "RabbitMQ", img: rabbitmqIcon },
    { name: "MongoDB", img: mongodbIcon },
    { name: "Type Script", img: typescriptIcon },
    { name: "Node", img: nodeIcon },
    { name: "Angular", img: angularIcon },
    { name: "Next", img: nextIcon },
    { name: "Java Script", img: javascriptIcon },
    { name: "C Sharp", img: csharpIcon }
  ];
  const tags = [
    "Scrum",
    "Kanbam",
    "XP",
    "SOLID",
    "Clean Architecture",
    "DDD",
    "TDD",
    "CI/CD",
    "UX/UI",
    "Pub/Sub",
    "Repository Parttern",
    "Backend",
    "Frontend",
    "MVC",
    "MVM",
    "Mobile",
  ];

  function getIcon(name: string) {
    if (name == "baraoIcon") {
      return baraoIcon
    }

    if (name == "openPromotaIcon") {
      return openPromotaIcon
    }
  }

  return (
    <div className="text-zinc-900 dark:text-white flex flex-col items-center justify-center w-full">
      <header className="lg:px-0 px-5 flex justify-center items-center w-full min-h-screen bg-gradient-to-t to-zinc-400 to-100% via-zinc-200 via-40% from-transparent dark:to-black dark:via-zinc-800">
        <div className="md:grid py-28 xs:grid-cols-3 flex flex-col items-center max-w-128  gap-9 flex-wrap w-11/12 ">
          <Image src={profileImg} alt={''} className='w-64 h-64 bg-zinc-700 rounded-xl object-cover'></Image>
          <div className='flex flex-col flex-1 gap-6 md:col-span-2 col-span-1 '>
            <h1 className="text-4xl lg:text-7xl flex justify-start text-transparent  w-full bg-clip-text bg-gradient-to-r from-rose-400 to-violet-600">
              {texts.header.title[0]}
            </h1>
            <h2>{texts.header.paragraph[0]}</h2>
          </div>
        </div>
      </header>
      <Content id='about-me'>
        <h1 className="text-2xl lg:text-4xl flex justify-start w-full">
          {texts?.aboutMe.title}
        </h1>
        <div className="md:grid xs:grid-cols-3 gap-6 flex flex-col">
          <p className="md:col-span-2 col-span-1 text-lg dark:text-white">
            {texts?.aboutMe.paragraph[0]}
          </p>
          <div className="flex flex-wrap gap-3 xs:w-full">
            {tags.map((e, index) => (
              <span key={index} className="p-1 px-3 h-fit w-fit text-sm rounded-full bg-gradient-to-tl to-zinc-400 to-100% via-zinc-200 via-40% from-transparent dark:to-zinc dark:via-zinc-800">
                {e}
              </span>
            ))}
          </div>
        </div>
      </Content>
      <Content id='technologies'>
        <h1 className="text-2xl lg:text-4xl flex justify-start w-full">
          {texts?.technologies.title}
        </h1>
        <div className="items-start w-full justify-center gap-y-1 flex flex-col">
          <div className=" flex gap-1 w-full ">
            <TecnologieCard data={technologies[0]} />
            <TecnologieCard data={technologies[1]} />
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-1 w-full">
            {technologies.slice(2, - ((technologies.length - 2) % 4)).map((item: any, index: any) =>
              <TecnologieCardMin key={index} data={item} />
            )}
          </div>
        </div>
      </Content>
      <Content id='experiences' variation='gradient'>
        <h1 className="text-2xl lg:text-4xl flex justify-start w-full">
          Experiences
        </h1>
        <div className="items-start w-full justify-center gap-6 flex flex-col">
          {texts.experiences.map((experience: any, index: any) => (
            <ExperienceCard
              key={index}
              company={experience.company}
              location={experience.location}
              img={getIcon(experience.img)}
              roles={experience.roles}
            />
          ))}
        </div>
      </Content>
      <Content id='analytics'>
        <h1 className="text-2xl lg:text-4xl flex justify-start w-full">
          {texts?.analytics.title}
        </h1>
        <div className='flex flex-col'>
          <div className='flex flex-col p-6 items-center justify-center dark:text-white  gap-6 md:flex-row bg-zinc-100  dark:bg-zinc-800 shadow-sm  rounded-md
          '>
            <div className=" md:w-1/2 items-start w-full  gap-y-1 flex flex-col">
              <p className='w-full '>
                {texts?.analytics.paragraph}
              </p>
            </div>
            <LanguagesMetrics />
          </div>
        </div>
      </Content>
      <Content id='links'>
        <h1 className="text-2xl lg:text-4xl flex justify-start w-full">
          {texts?.links.title}
        </h1>
        <div className="items-start w-full justify-center gap-y-1 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <a
              className="flex dark:text-white hover:bg-opacity-20 transition-all flex-1 items-center justify-center rounded-md border p-12 gap-3 border-purple-500 cursor-pointer bg-purple-700 bg-opacity-10"
              href="https://github.com/VictorAlvesFarias"
              target="_blank"
            >
              <Image className="saturate-50 transition-all hover:saturate-150 rounded-md w-10" alt="Github Picture" width={40} height={40} src={githubPictureIcon} />
              <p>{texts?.links.github}</p>
            </a>
            <a
              className="flex dark:text-white flex-1 items-center justify-center rounded-md border p-12 gap-3 border-blue-500 cursor-pointer hover:bg-opacity-20 transition-all bg-blue-700 bg-opacity-10"
              href="https://www.linkedin.com/in/victor-alves-farias-023570243/"
              target="_blank"
            >
              <Image className="saturate-50 transition-all hover:saturate-150 rounded-md w-10" alt="LinkedIn" width={40} height={40} src={linkedinPictureIcon} />
              <p>{texts?.links.linkedin}</p>
            </a>
          </div>
        </div>
      </Content>
      <footer className="flex w-full flex-col justify-center items-center z-[21] bg-white dark:bg-zinc-900">
        <Content id='footer'>
          <div className='flex flex-col gap-8'>
            <hr className="border-zinc-300 dark:border-zinc-800 w-full" />
            <div className=' text-lg lg:text-2xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-violet-600 ml-2 '>{texts?.footer.title}</div>
            <hr className="border-zinc-300 dark:border-zinc-800 w-full" />
            <div className='flex gap-3 w-full'>
              <div className='flex flex-col  gap-3 w-full'>
                <Paragraph className=''>
                  victoralves.contact@glafyros.com
                </Paragraph>
              </div>
            </div>
            <hr className="border-zinc-300 dark:border-zinc-800 w-full" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm ">© 2024. All Rights Reserved.</span>
            </div>
          </div>
        </Content>
      </footer >
    </div >
  );
}
