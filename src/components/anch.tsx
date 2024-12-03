"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Anch(
    {
        className,
        href,
        children,
        onClick
    }: any) {

    const path = usePathname()
    let newPath = path.split("/")[1] + href

    return (
        <Link onClick={onClick} className={className} href={newPath}>{children}</Link>
    )
}

export default Anch