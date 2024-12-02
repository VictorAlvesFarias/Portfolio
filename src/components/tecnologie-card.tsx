import React from 'react'
import Image from 'next/image'

function TecnologieCard({data}:any) {
  return (
    <div className="group/tc group-hover:first-line: bg-zinc-100 shadow-sm dark:bg-zinc-800  overflow-hidden  flex-col relative flex-1 h-48 flex items-center transition-all justify-center ">
      <Image alt='' className='w-12 ' width={60} height={60} src={data.src}></Image>
      <div className='absolute items-end justify-center pb-5 bottom-0 flex-1 flex w-full h-full transition-all' >
          <div className='font-semibold md:text-1xl'>
            {data.name}
          </div>
      </div>
    </div>
  )
}

export default TecnologieCard