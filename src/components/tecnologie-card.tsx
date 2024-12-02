import React from 'react'
import Image from 'next/image'

function TecnologieCard({ data }: any) {
  return (
    <div className="group/tc group-hover:first-line:bg-zinc-100 shadow-sm bg-zinc-100 dark:bg-zinc-800  overflow-hidden  flex-col relative flex-1 h-48 flex items-center transition-all justify-center ">
      <div className='flex flex-col items-center gap-3'>
        <Image alt='' width={60} height={60} src={data.src}></Image>
        <div className='font-semibold md:text-1xl'>
          {data.name}
        </div>
      </div>
    </div>
  )
}

export default TecnologieCard