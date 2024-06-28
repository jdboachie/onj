import React from 'react'
import Link from 'next/link'

function Animations() {
  return (
    <main
    className="md:px-24 px-12 py-24 max-w-5xl mx-auto grid grid-rows-3 grid-cols-3 md:grid-cols-6 gap-1 justify-content-start h-screen"
  >
    <div className="">
      <Link
        href={'/'}
        className={`relative hover:text-neutral-950 dark:hover:text-white`}
      >
        &larr; back
      </Link>
    </div>
    <div className="grid col-span-6">
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
  </main>
  )
}

export default Animations