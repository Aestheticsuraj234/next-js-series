import Link from 'next/link'
import React from 'react'

const DefaultNotificationPage = () => {
  return (
    <Link href={"/dashboard/archive"}>Go to Archived</Link>
  )
}

export default DefaultNotificationPage