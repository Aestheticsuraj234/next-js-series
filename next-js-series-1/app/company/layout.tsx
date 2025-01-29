import Card from '@/components/card'
import React from 'react'

interface props {
  children: React.ReactNode,
    team: React.ReactNode,
    notification: React.ReactNode,
    metrics: React.ReactNode

}

const CompanyLayout = ({children , team ,notification  , metrics}:props) => {
  return (
     <div className='h-screen mx-4 my-4 '>
        {children}
      <div className='flex flex-row justify-center items-center border w-full h-full p-4 rounded-md gap-2'>
        {/* l.h.s */}
        <div className='border-2 rounded-md border-green-500 p-4 w-[50%] flex flex-col justify-start items-center gap-4'>
            {/*  */}
            <Card>
             {team}
            </Card>
            <Card>
              {metrics}
            </Card>
        </div>
        {/* r.h.s */}
        <div className='border-2 rounded-md border-red-500 p-4 w-[50%]'>
        <Card>
          {notification}
        </Card>
        </div>
      </div>
    </div>
  )
}

export default CompanyLayout