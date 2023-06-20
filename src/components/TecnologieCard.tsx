import React from 'react'
import Image from 'next/image'
import '../app/globals.css'

interface TecnologieCardProps {
  icon: string;
}

function TecnologieCard(props:TecnologieCardProps) {
  return (
    <div className="bg-zinc-300 flex-1 h-48 flex items-center transition-all saturate-0 hover:saturate-100 hover:bg-zinc-800  justify-center ">
      <Image alt='' className='w-12' width={60} height={60} src={props.icon}></Image>
    </div>
  )
}

export default TecnologieCard