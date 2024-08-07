import React from 'react'

function Return({className,onClick}:any) {
  return (
<svg className={className} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="grey" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>
  )
}

export default Return