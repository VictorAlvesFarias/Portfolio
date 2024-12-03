import React from 'react'
import Image from 'next/image'
import Elipses from './elipses'

function TecnologieCardMin({ data }: any) {
  return (
    <div className='w-full items-center font-semibold rounded shadow-sm bg-zinc-100 dark:bg-zinc-800  p-6 flex gap-3'>
      <Image width={30} height={30} src={data.src} alt={'Language icon'} />
      <Elipses className='font-semibold md:text-1xl text-center'>{data.name}</Elipses>
    </div>
  )
}

export default TecnologieCardMin