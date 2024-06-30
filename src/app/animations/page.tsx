import React from 'react'
import Link from 'next/link'

function Animations() {
  return (
    <>
    <div className="items-end grid">
      <Link
        href={'/'}
        className={`hover:text-neutral-950 dark:hover:text-white`}
      >
        &larr; back
      </Link>
    </div>
    <div className="grid">
      <h1
        className={`text-3xl md:text-5xl tracking-tight`}
      >
        Animations
      </h1>
    </div>
    <div className="">
      <Link
        href={'/animations/basics'}
        className="hover:text-neutral-950 dark:hover:text-white hover:underline underline-offset-4 transition-all duration-300 ease-in"
      >/basics</Link>
    </div>
  </>
  )
}

export default Animations