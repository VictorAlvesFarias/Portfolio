"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Anch(
    {   
        className,
        href,
        children
    }: any) {
        
    const path = usePathname()         
    let newPath = path.split("/")[1] + href

    return (
        <Link className={className} href={newPath}>{children}</Link>
    )
}

export default Anch