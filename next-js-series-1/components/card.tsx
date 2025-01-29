import React from 'react'

interface props {
  children: React.ReactNode
}

const Card = ({children}:props) => {
  return (
    
<div className="w-full rounded-lg border shadow-sm overflow-hidden bg-white border-stone-200 shadow-stone-950/5 max-w-xs h-52">
 {children}
</div>

  )
}

export default Card