import { componentSelector } from '@/utils/helpers/component-selector'
import React from 'react'

interface ILine {
}

const lineVariations = {
  "default": () => (
    <div className='w-full h-[3px] bg-gradient-to-r from-rose-400 to-fuchsia-700'></div>
  )
}

const Line = componentSelector<keyof typeof lineVariations, ILine>(lineVariations)

export default Line
