"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Locale({   
    className,
    href,
    children}: any) {
 
  const path = usePathname()         
  let newPath = path.split("/")
  newPath[1] = href
  
  return (
    <span className={className+" cursor-pointer"} onClick={() =>window.location.pathname = newPath.join("/")}>{children}</span>
  )
}

export default Locale