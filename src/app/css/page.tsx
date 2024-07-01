import React from 'react'
import Link from 'next/link'

function Animations() {
  return (
    <>
    <div className="items-end grid">
      <Link
        href={'/'}
        className={`w-fit hover:text-neutral-950 dark:hover:text-white`}
      >
        &larr; back
      </Link>
    </div>
    <div className="grid">
      <h1
        className={`grid items-center text-4xl sm:text-5xl`}
      >
        CSS
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        Trying out different combinations of CSS properties to see what I can learn and create.
      </p>
    </div>
    <div className="">
      <Link
        href={'/css/lab'}
        className="hover:text-neutral-950 dark:hover:text-white hover:underline underline-offset-4 transition-all duration-300 ease-in"
      >/lab</Link>
    </div>
  </>
  )
}

export default Animations