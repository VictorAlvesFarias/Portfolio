import React from 'react'
import Image from 'next/image'

interface TecnologieCardProps {
  name: string
}

function TecnologieCard(props:TecnologieCardProps) {
  return (
    <div className="group/tc group-hover:first-line: bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-800 overflow-hidden  flex-col relative flex-1 h-48 flex items-center transition-all justify-center ">
      <Image alt='' className='w-12 group-hover/tc:saturate-100 saturate-0' width={60} height={60} src={`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/projects/${props.name.split(" ").join("-").toLocaleLowerCase()}.svg`}></Image>
      <div className='absolute items-end justify-center pb-5 bottom-0 flex-1 flex w-full h-full  hover:opacity-100 opacity-0 transition-all' >
          <div className='font-semibold text-white text-xs md:text-1xl'>
            {props.name}
          </div>
      </div>
    </div>
  )
}

export default TecnologieCard