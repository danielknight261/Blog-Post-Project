import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href='/'>
        <button className="text-lg font-medium">Creative Minds</button>
      </Link>
      <ul className="flex items-center gap-10">
        <Link href={"/auth/login"} className="py-2 px-4 text-sm bg-cyan-500 text-white font-medium rounded-lg">
          <>Join Now</>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav