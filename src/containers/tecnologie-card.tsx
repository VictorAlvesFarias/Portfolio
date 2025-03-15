import React from 'react'
import Image from 'next/image'
import Paragraph from '../components/paragraph'

function TecnologieCard({ data }: any) {
  return (
    <div className="rounded-md group/tc group-hover:first-line:bg-zinc-100 w-full shadow-sm bg-zinc-100 dark:bg-zinc-800  overflow-hidden  flex-col relative flex-1 h-48 flex items-center transition-all justify-center ">
      <div className='flex flex-col gap-3 w-full'>
        <div className='w-full flex items-center justify-center'>
          <Image alt='' width={60} height={60} src={data.img}></Image>
        </div>
        <Paragraph className='md:text-1xl text-center px-6'>
          {data.name}
        </Paragraph>
      </div>
    </div>
  )
}

export default TecnologieCard