import React from 'react'
import Image from 'next/image'
import Paragraph from '../components/paragraph'

function TecnologieCardMin({ data }: any) {
  return (
    <div className='w-full items-center rounded shadow-sm bg-zinc-100 dark:bg-zinc-800  p-6 flex gap-3'>
      <Image width={30} height={30} src={data.img} alt={'Language icon'} />
      <Paragraph className='md:text-1xl text-center'>{data.name}</Paragraph>
    </div>
  )
}

export default TecnologieCardMin