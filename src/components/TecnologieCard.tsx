import React from 'react'
import Image from 'next/image'

interface TecnologieCardProps {
  icon: string;
}

function TecnologieCard(props:TecnologieCardProps) {
  return (
    <div className="bg-zinc-300 overflow-hidden flex-col relative flex-1 h-48 flex items-center transition-all saturate-0 hover:saturate-100 hover:bg-zinc-800  justify-center ">
      <Image alt='' className='w-12' width={60} height={60} src={props.icon}></Image>
      <div className='absolute items-end justify-center pb-5 bottom-0 flex-1 flex w-full h-full  hover:opacity-100 opacity-0 transition-all' >
          <div className='font-semibold text-white'>
            {props.name}
          </div>
      </div>
    </div>
  )
}

export default TecnologieCard