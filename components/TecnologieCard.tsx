import React from 'react'
import Image from 'next/image'

interface TecnologieCardProps {
  name: string
}

function TecnologieCard(props:TecnologieCardProps) {
  return (
    <div className="bg-zinc-300 overflow-hidden flex-col relative flex-1 h-48 flex items-center transition-all saturate-0 hover:saturate-100 hover:bg-zinc-800  justify-center ">
      <Image alt='' className='w-12' width={60} height={60} src={`https://raw.githubusercontent.com/VictorAlvesFarias/Portfolio/database/projects/${props.name.split(" ").join("-").toLocaleLowerCase()}.svg`}></Image>
      <div className='absolute items-end justify-center pb-5 bottom-0 flex-1 flex w-full h-full  hover:opacity-100 opacity-0 transition-all' >
          <div className='font-semibold text-white'>
            {props.name}
          </div>
      </div>
    </div>
  )
}

export default TecnologieCard