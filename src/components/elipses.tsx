import React from 'react'

function Elipses({ className, children }: any) {
    return (
        <p className={"overflow-hidden text-ellipsis whitespace-nowrap " + className}>{children}</p>
    )
}

export default Elipses