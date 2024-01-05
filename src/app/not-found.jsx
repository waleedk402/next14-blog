import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link href="/">Go back to homepage</Link>
    </div>
  )
}

export default NotFound